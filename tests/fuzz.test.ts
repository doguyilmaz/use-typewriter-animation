import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createTypewriter, type TypewriterInstance } from '../src/core';

// Runs random queues against a plain string model and checks the store's invariants after every
// change. The generator is seeded, so a failure always reproduces with the printed seed.

const PIECES = ['a', 'b', 'xy', ' ', '  ', '\n', 'é', 'é', '👍🏽', '👩‍👩‍👧', '🇹🇷', '中文'];

const random = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const segmenter = new Intl.Segmenter();
const graphemes = (text: string) => Array.from(segmenter.segment(text), (part) => part.segment);

const deleteWordsModel = (text: string, count: number) => {
  const tokens = text.match(/\s+|\S+/g) ?? [];
  for (let i = 0; i < count; i++) {
    if (tokens.length && /^\s/.test(tokens[tokens.length - 1] as string)) tokens.pop();
    if (tokens.length) tokens.pop();
  }
  return tokens.join('');
};

type Step = { apply: (tw: TypewriterInstance) => void; model: (text: string) => string };

const randomStep = (next: () => number): Step => {
  const pick = <T>(items: readonly T[]) => items[Math.floor(next() * items.length)] as T;
  const word = () =>
    Array.from({ length: 1 + Math.floor(next() * 4) }, () => pick(PIECES)).join('');
  const count = () => Math.floor(next() * 5);
  const speed = () => pick([undefined, 0, 5, 30]);
  switch (Math.floor(next() * 11)) {
    case 0:
    case 1: {
      const text = word();
      const options = { speed: speed() };
      return { apply: (tw) => tw.type(text, options), model: (t) => t + text };
    }
    case 2: {
      const text = word();
      const options = { speed: speed(), deleteSpeed: speed() };
      return { apply: (tw) => tw.typeTo(text, options), model: () => text };
    }
    case 3: {
      const n = count();
      return {
        apply: (tw) => tw.deleteLetters(n, { speed: speed() }),
        model: (t) => {
          const parts = graphemes(t);
          return parts.slice(0, Math.max(parts.length - n, 0)).join('');
        },
      };
    }
    case 4: {
      const n = count();
      return {
        apply: (tw) => tw.deleteWords(n, { speed: speed() }),
        model: (t) => deleteWordsModel(t, n),
      };
    }
    case 5:
      return { apply: (tw) => tw.deleteAll({ speed: speed() }), model: () => '' };
    case 6:
      return { apply: (tw) => tw.newLine(), model: (t) => `${t}\n` };
    case 7: {
      const color = pick([undefined, 'red', 'blue']);
      return { apply: (tw) => tw.colorize(color), model: (t) => t };
    }
    case 8: {
      const start = count();
      const length = count();
      const style = pick([{ color: 'green' }, { background: 'yellow' }, {}]);
      return { apply: (tw) => tw.highlight(start, length, style), model: (t) => t };
    }
    case 9: {
      const n = count();
      const from = pick(['start', 'end'] as const);
      return {
        apply: (tw) => tw.highlightWords(n, from, { background: 'pink' }),
        model: (t) => t,
      };
    }
    default: {
      const ms = Math.floor(next() * 100);
      return { apply: (tw) => tw.pauseFor(ms), model: (t) => t };
    }
  }
};

const checkInvariants = (tw: TypewriterInstance) => {
  const { text, segments } = tw.getState();
  expect(segments.map((segment) => segment.text).join('')).toBe(text);
  const ids = new Set<number>();
  for (const segment of segments) {
    expect(segment.text).not.toBe('');
    expect(ids.has(segment.id)).toBe(false);
    ids.add(segment.id);
    if (segment.text.includes('\n')) {
      expect(segment).toEqual({
        id: segment.id,
        text: '\n',
        color: undefined,
        background: undefined,
      });
    }
  }
};

const build = (seed: number, options: { typeSpeed: number; deleteSpeed: number }) => {
  const next = random(seed);
  const tw = createTypewriter(options);
  let changes = 0;
  tw.subscribe(() => {
    changes++;
    checkInvariants(tw);
  });
  const steps = Array.from({ length: 5 + Math.floor(next() * 25) }, () => randomStep(next));
  for (const step of steps) step.apply(tw);
  const expected = steps.reduce((text, step) => step.model(text), '');
  return { tw, next, expected, changes: () => changes };
};

const SEEDS = Array.from({ length: 300 }, (_, i) => i + 1);

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('random queues', () => {
  it.each(SEEDS)('seed %i: animated run ends with the model text', (seed) => {
    const { tw, expected } = build(seed, { typeSpeed: 20, deleteSpeed: 10 });
    tw.start();
    vi.runAllTimers();
    expect(tw.getState()).toMatchObject({ text: expected, status: 'done' });
    expect(vi.getTimerCount()).toBe(0);
  });

  it.each(SEEDS)('seed %i: instant run ends with the model text', (seed) => {
    const { tw, expected } = build(seed, { typeSpeed: 0, deleteSpeed: 0 });
    tw.start();
    vi.runAllTimers();
    expect(tw.getState().text).toBe(expected);
  });

  it.each(SEEDS)('seed %i: pause, resume and skip at random times', (seed) => {
    const { tw, next, expected } = build(seed, { typeSpeed: 20, deleteSpeed: 10 });
    tw.start();
    for (let i = 0; i < 20 && tw.getState().status !== 'done'; i++) {
      vi.advanceTimersByTime(Math.floor(next() * 60));
      const roll = next();
      if (roll < 0.3) tw.pause();
      else if (roll < 0.6) tw.resume();
      else if (roll < 0.65) tw.skip();
    }
    tw.resume();
    vi.runAllTimers();
    expect(tw.getState()).toMatchObject({ text: expected, status: 'done' });
    expect(vi.getTimerCount()).toBe(0);
  });

  it.each(SEEDS.slice(0, 100))('seed %i: stop and reset leave no timers', (seed) => {
    const { tw, next } = build(seed, { typeSpeed: 20, deleteSpeed: 10 });
    tw.start();
    vi.advanceTimersByTime(Math.floor(next() * 200));
    tw.stop();
    expect(vi.getTimerCount()).toBe(0);
    checkInvariants(tw);
    tw.start();
    vi.advanceTimersByTime(Math.floor(next() * 200));
    tw.reset();
    expect(vi.getTimerCount()).toBe(0);
    expect(tw.getState()).toEqual({ text: '', segments: [], status: 'idle' });
  });

  it.each(SEEDS.slice(0, 50))('seed %i: looping replays the same final text', (seed) => {
    const { tw, expected } = build(seed, { typeSpeed: 0, deleteSpeed: 0 });
    tw.configure({ loop: true });
    tw.call(() => expect(tw.getState().text).toBe(expected)).deleteAll({ speed: 0 });
    let passes = 0;
    tw.on('loop', () => {
      passes++;
      expect(tw.getState().text).toBe('');
      if (passes === 3) tw.stop();
    });
    tw.start();
    vi.runAllTimers();
    expect(passes).toBe(3);
  });
});
