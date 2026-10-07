export type TypewriterStatus = 'idle' | 'typing' | 'deleting' | 'waiting' | 'paused' | 'done';

export type TypewriterEvent = 'start' | 'end' | 'loop';

/** A run of characters that share the same style. A segment whose text is `'\n'` is a line break. */
export interface TypewriterSegment {
  readonly id: number;
  readonly text: string;
  readonly color: string | undefined;
  readonly background: string | undefined;
}

export interface TypewriterState {
  readonly text: string;
  readonly segments: readonly TypewriterSegment[];
  readonly status: TypewriterStatus;
}

export interface TypewriterOptions {
  /** Milliseconds per typed character. @default 30 */
  typeSpeed?: number | undefined;
  /** Milliseconds per deleted character. @default 30 */
  deleteSpeed?: number | undefined;
  /** Replay the queue when it finishes. @default false */
  loop?: boolean | undefined;
  /** Random variation applied to every delay, from 0 (none) to 1 (±100%). @default 0 */
  humanize?: number | undefined;
  /** Type and delete instantly when the user prefers reduced motion. Pauses are kept. @default true */
  respectReducedMotion?: boolean | undefined;
}

export interface SpeedOptions {
  /** Overrides `typeSpeed` (or `deleteSpeed` for deletions) for this step. `0` is instant. */
  speed?: number | undefined;
}

export interface TypeToOptions extends SpeedOptions {
  /** Overrides `deleteSpeed` for the deleting part of this step. */
  deleteSpeed?: number | undefined;
}

export interface HighlightStyle {
  color?: string | undefined;
  background?: string | undefined;
}

export interface TypewriterInstance {
  /** Types `text` after the current text. `'\n'` becomes a line break. */
  type(text: string, options?: SpeedOptions): TypewriterInstance;
  /** Deletes back to the longest common prefix with `text`, then types the rest. */
  typeTo(text: string, options?: TypeToOptions): TypewriterInstance;
  deleteLetters(count: number, options?: SpeedOptions): TypewriterInstance;
  /** Deletes the last `count` words, keeping the whitespace before them. */
  deleteWords(count: number, options?: SpeedOptions): TypewriterInstance;
  deleteAll(options?: SpeedOptions): TypewriterInstance;
  pauseFor(ms: number): TypewriterInstance;
  newLine(): TypewriterInstance;
  /** Sets the color of text typed after this step. Call without a value to reset it. */
  colorize(color?: string): TypewriterInstance;
  /** Styles `length` characters starting at index `start` of the current text. */
  highlight(start: number, length: number, style: HighlightStyle): TypewriterInstance;
  /** Styles the first or last `count` words of the current text as one range. */
  highlightWords(count: number, from: 'start' | 'end', style: HighlightStyle): TypewriterInstance;
  /** Runs `fn` when the queue reaches this step. */
  call(fn: () => void): TypewriterInstance;
  on(event: TypewriterEvent, callback: () => void): TypewriterInstance;
  /** Runs the queue from the current step. Resolves when it ends, or when it is stopped or reset. */
  start(): Promise<void>;
  /** Halts the queue and keeps the text. `start()` continues with the next step. */
  stop(): void;
  /** Halts the queue and clears the text, the queue, the color and all event listeners. */
  reset(): TypewriterInstance;
  pause(): void;
  resume(): void;
  /** Completes the current pass instantly, without pauses, and ends without looping. */
  skip(): void;
  configure(options: TypewriterOptions): void;
  getState(): TypewriterState;
  subscribe(listener: () => void): () => void;
}

/** Returns the delay in ms before the job wants to be called again, or `DONE`. */
type Job = () => number;

const DONE = -1;
/** Steps are never scheduled faster than this; faster speeds write several characters per step. */
const FRAME = 16;

const INITIAL_STATE: TypewriterState = { text: '', segments: [], status: 'idle' };

const segmenter =
  typeof Intl === 'object' && Intl.Segmenter ? /* @__PURE__ */ new Intl.Segmenter() : null;

/** Splits text into user-perceived characters, so emoji and accents are never cut in half. */
const graphemes = (text: string): string[] =>
  segmenter ? Array.from(segmenter.segment(text), (part) => part.segment) : Array.from(text);

const lengthsFromEnd = (parts: string[]): number[] => parts.map((part) => part.length).reverse();

const isSpace = (char: string | undefined) => char !== undefined && /\s/.test(char);

const prefersReducedMotion = () =>
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export function createTypewriter(options: TypewriterOptions = {}): TypewriterInstance {
  let config = options;
  let state = INITIAL_STATE;
  const listeners = new Set<() => void>();
  let events: Record<TypewriterEvent, (() => void)[]> = { start: [], end: [], loop: [] };
  let queue: (() => Job)[] = [];
  let index = 0;
  let job: Job | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let due = 0;
  let remaining = 0;
  let running = false;
  let paused = false;
  let skipping = false;
  let reducedMotion = false;
  /** Incremented whenever the queue halts, so re-entrant calls can detect that they are stale. */
  let generation = 0;
  let statusBeforePause: TypewriterStatus = 'idle';
  let color: string | undefined;
  let waiters: (() => void)[] = [];
  let nextId = 0;

  const commit = (next: TypewriterState) => {
    state = next;
    for (const listener of listeners) listener();
  };

  const setStatus = (status: TypewriterStatus) => {
    if (state.status !== status) commit({ ...state, status });
  };

  const emit = (event: TypewriterEvent) => {
    for (const callback of events[event]) callback();
  };

  const settle = () => {
    const resolved = waiters;
    waiters = [];
    for (const resolve of resolved) resolve();
  };

  const write = (chunk: string) => {
    const segments = state.segments.slice();
    const lines = chunk.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (i > 0)
        segments.push({ id: nextId++, text: '\n', color: undefined, background: undefined });
      const line = lines[i] as string;
      if (!line) continue;
      const last = segments[segments.length - 1];
      if (last && last.text !== '\n' && last.color === color && last.background === undefined) {
        segments[segments.length - 1] = { ...last, text: last.text + line };
      } else {
        segments.push({ id: nextId++, text: line, color, background: undefined });
      }
    }
    commit({ text: state.text + chunk, segments, status: 'typing' });
  };

  const erase = (units: number) => {
    const segments = state.segments.slice();
    let left = units;
    while (left > 0 && segments.length > 0) {
      const last = segments[segments.length - 1] as TypewriterSegment;
      if (last.text.length <= left) {
        segments.pop();
        left -= last.text.length;
      } else {
        segments[segments.length - 1] = { ...last, text: last.text.slice(0, -left) };
        left = 0;
      }
    }
    commit({ text: state.text.slice(0, state.text.length - units), segments, status: 'deleting' });
  };

  const restyle = (from: number, to: number, style: HighlightStyle) => {
    if (to <= from) return;
    const segments: TypewriterSegment[] = [];
    let position = 0;
    for (const segment of state.segments) {
      const start = position;
      const end = position + segment.text.length;
      position = end;
      if (segment.text === '\n' || end <= from || start >= to) {
        segments.push(segment);
        continue;
      }
      const a = Math.max(from - start, 0);
      const b = Math.min(to - start, segment.text.length);
      if (a > 0) segments.push({ ...segment, text: segment.text.slice(0, a) });
      segments.push({
        id: a > 0 ? nextId++ : segment.id,
        text: segment.text.slice(a, b),
        color: style.color ?? segment.color,
        background: style.background ?? segment.background,
      });
      if (b < segment.text.length)
        segments.push({ ...segment, id: nextId++, text: segment.text.slice(b) });
    }
    commit({ ...state, segments });
  };

  const delay = (ms: number) => {
    const humanize = Math.min(Math.max(config.humanize ?? 0, 0), 1);
    return humanize ? ms * (1 + (Math.random() * 2 - 1) * humanize) : ms;
  };

  /** Shared driver for typing and deleting: `apply(from, to)` performs units `from..to`. */
  const animate = (
    total: number,
    speedOf: () => number,
    apply: (from: number, to: number) => void,
  ): Job => {
    let done = 0;
    return () => {
      if (done >= total) return DONE;
      const speed = speedOf();
      const instant = skipping || reducedMotion || !(speed > 0);
      const step = instant ? total - done : Math.ceil(FRAME / speed);
      const from = done;
      done = Math.min(done + step, total);
      apply(from, done);
      return instant ? DONE : delay(speed * step);
    };
  };

  const typing = (chars: string[], speed: number | undefined): Job =>
    animate(
      chars.length,
      () => speed ?? config.typeSpeed ?? 30,
      (from, to) =>
        write(to - from === 1 ? (chars[from] as string) : chars.slice(from, to).join('')),
    );

  /** `units` holds the length of each character to delete, starting from the end. */
  const deleting = (units: number[], speed: number | undefined): Job =>
    animate(
      units.length,
      () => speed ?? config.deleteSpeed ?? 30,
      (from, to) => {
        let count = 0;
        for (let i = from; i < to; i++) count += units[i] as number;
        erase(count);
      },
    );

  const once = (fn: () => void) => (): Job => {
    let ran = false;
    return () => {
      if (!ran) {
        ran = true;
        fn();
      }
      return DONE;
    };
  };

  const schedule = (ms: number) => {
    due = Date.now() + ms;
    timer = setTimeout(tick, ms);
  };

  const halt = () => {
    clearTimeout(timer);
    timer = undefined;
    generation++;
    running = false;
    paused = false;
    skipping = false;
    job = null;
  };

  const finish = () => {
    halt();
    setStatus('done');
    emit('end');
    settle();
  };

  function tick() {
    timer = undefined;
    const current = generation;
    while (running && !paused) {
      if (!job) {
        if (index >= queue.length) {
          if (config.loop && queue.length > 0 && !skipping) {
            index = 0;
            emit('loop');
            // Yield between passes so a queue of instant steps cannot block the thread.
            if (current === generation && !paused) schedule(0);
            return;
          }
          finish();
          return;
        }
        job = (queue[index++] as () => Job)();
      }
      const wait = job();
      // A step or a listener stopped, reset or skipped the queue while it ran.
      if (current !== generation) return;
      if (wait !== DONE) {
        if (paused) remaining = wait;
        else schedule(wait);
        return;
      }
      job = null;
    }
  }

  const enqueue = (factory: () => Job) => {
    queue.push(factory);
    return typewriter;
  };

  const typewriter: TypewriterInstance = {
    type: (text, { speed } = {}) => enqueue(() => typing(graphemes(text), speed)),

    typeTo: (text, { speed, deleteSpeed } = {}) =>
      enqueue(() => {
        const current = graphemes(state.text);
        const target = graphemes(text);
        let common = 0;
        while (common < current.length && current[common] === target[common]) common++;
        const remove = deleting(lengthsFromEnd(current.slice(common)), deleteSpeed);
        const add = typing(target.slice(common), speed);
        return () => {
          const wait = remove();
          return wait === DONE ? add() : wait;
        };
      }),

    deleteLetters: (count, { speed } = {}) =>
      enqueue(() => {
        const parts = graphemes(state.text);
        return deleting(lengthsFromEnd(count > 0 ? parts.slice(-count) : []), speed);
      }),

    deleteWords: (count, { speed } = {}) =>
      enqueue(() => {
        const { text } = state;
        let cut = text.length;
        for (let i = 0; i < count; i++) {
          while (isSpace(text[cut - 1])) cut--;
          while (cut > 0 && !isSpace(text[cut - 1])) cut--;
        }
        return deleting(lengthsFromEnd(graphemes(text.slice(cut))), speed);
      }),

    deleteAll: ({ speed } = {}) =>
      enqueue(() => deleting(lengthsFromEnd(graphemes(state.text)), speed)),

    pauseFor: (ms) =>
      enqueue(() => {
        let waited = false;
        return () => {
          if (waited || skipping) return DONE;
          waited = true;
          setStatus('waiting');
          return Math.max(ms, 0);
        };
      }),

    newLine: () => typewriter.type('\n'),

    colorize: (value) =>
      enqueue(
        once(() => {
          color = value || undefined;
        }),
      ),

    highlight: (start, length, style) => enqueue(once(() => restyle(start, start + length, style))),

    highlightWords: (count, from, style) =>
      enqueue(
        once(() => {
          const words = Array.from(state.text.matchAll(/\S+/g));
          const picked =
            from === 'start' ? words.slice(0, Math.max(count, 0)) : words.slice(-count);
          const first = picked[0];
          const last = picked[picked.length - 1];
          if (count > 0 && first && last) restyle(first.index, last.index + last[0].length, style);
        }),
      ),

    call: (fn) => enqueue(once(fn)),

    on: (event, callback) => {
      events[event].push(callback);
      return typewriter;
    },

    start: () => {
      const finished = new Promise<void>((resolve) => waiters.push(resolve));
      if (!running) {
        running = true;
        reducedMotion = config.respectReducedMotion !== false && prefersReducedMotion();
        emit('start');
        tick();
      }
      return finished;
    },

    stop: () => {
      const wasRunning = running;
      halt();
      if (wasRunning) setStatus('idle');
      settle();
    },

    reset: () => {
      halt();
      queue = [];
      index = 0;
      color = undefined;
      events = { start: [], end: [], loop: [] };
      if (state !== INITIAL_STATE) commit(INITIAL_STATE);
      settle();
      return typewriter;
    },

    pause: () => {
      if (!running || paused) return;
      paused = true;
      remaining = timer === undefined ? 0 : Math.max(due - Date.now(), 0);
      clearTimeout(timer);
      timer = undefined;
      statusBeforePause = state.status;
      setStatus('paused');
    },

    resume: () => {
      if (!paused) return;
      paused = false;
      schedule(remaining);
      setStatus(statusBeforePause);
    },

    skip: () => {
      if (!running) return;
      clearTimeout(timer);
      timer = undefined;
      paused = false;
      skipping = true;
      try {
        tick();
      } finally {
        skipping = false;
      }
    },

    configure: (next) => {
      config = { ...config, ...next };
    },

    getState: () => state,

    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };

  return typewriter;
}
