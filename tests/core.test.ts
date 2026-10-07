import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createTypewriter, type TypewriterOptions } from '../src/core';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

const setup = (options: TypewriterOptions = {}) => {
  const tw = createTypewriter({ typeSpeed: 50, deleteSpeed: 20, ...options });
  return { tw, text: () => tw.getState().text, status: () => tw.getState().status };
};

/** Collects every text the store emitted, to assert on intermediate steps. */
const record = (tw: ReturnType<typeof createTypewriter>) => {
  const texts: string[] = [];
  tw.subscribe(() => {
    const { text } = tw.getState();
    if (texts[texts.length - 1] !== text) texts.push(text);
  });
  return texts;
};

const style = (color?: string, background?: string) => ({ color, background });

describe('initial state', () => {
  it('is empty and idle', () => {
    const { tw } = setup();
    expect(tw.getState()).toEqual({ text: '', segments: [], status: 'idle' });
  });

  it('queues steps without running them until start()', () => {
    const { tw, text } = setup();
    tw.type('Hello').pauseFor(100);
    vi.advanceTimersByTime(1000);
    expect(text()).toBe('');
  });

  it('chains every queue method on the same instance', () => {
    const { tw } = setup();
    const chained = tw
      .type('a')
      .typeTo('b')
      .deleteLetters(1)
      .deleteWords(1)
      .deleteAll()
      .pauseFor(1)
      .newLine()
      .colorize('red')
      .highlight(0, 1, {})
      .highlightWords(1, 'end', {})
      .call(() => {})
      .on('end', () => {})
      .reset();
    expect(chained).toBe(tw);
  });
});

describe('type', () => {
  it('types the first character immediately and one character per typeSpeed', () => {
    const { tw, text, status } = setup();
    tw.type('abc').start();
    expect(text()).toBe('a');
    expect(status()).toBe('typing');
    vi.advanceTimersByTime(49);
    expect(text()).toBe('a');
    vi.advanceTimersByTime(1);
    expect(text()).toBe('ab');
    vi.advanceTimersByTime(50);
    expect(text()).toBe('abc');
    expect(status()).toBe('typing');
    vi.advanceTimersByTime(50);
    expect(status()).toBe('done');
  });

  it('resolves start() once the queue finishes', async () => {
    const { tw } = setup();
    const done = vi.fn();
    tw.type('hi').start().then(done);
    await vi.advanceTimersByTimeAsync(99);
    expect(done).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(done).toHaveBeenCalledOnce();
  });

  it('uses the per-step speed', () => {
    const { tw, text } = setup();
    tw.type('ab', { speed: 200 }).start();
    vi.advanceTimersByTime(199);
    expect(text()).toBe('a');
    vi.advanceTimersByTime(1);
    expect(text()).toBe('ab');
  });

  it('types instantly with speed 0', () => {
    const { tw, text, status } = setup({ typeSpeed: 0 });
    tw.type('instant').start();
    expect(text()).toBe('instant');
    expect(status()).toBe('done');
  });

  it('writes several characters per step when the speed is faster than a frame', () => {
    const { tw } = setup({ typeSpeed: 4 });
    const texts = record(tw);
    tw.type('abcdefghij').start();
    expect(texts).toEqual(['abcd']);
    vi.advanceTimersByTime(16);
    expect(texts).toEqual(['abcd', 'abcdefgh']);
    vi.advanceTimersByTime(16);
    expect(texts).toEqual(['abcd', 'abcdefgh', 'abcdefghij']);
  });

  it('never splits emoji, flags or combining marks', () => {
    const { tw } = setup();
    const texts = record(tw);
    tw.type('👩‍👩‍👧🇹🇷e\u0301').start();
    vi.runAllTimers();
    expect(texts).toEqual(['👩‍👩‍👧', '👩‍👩‍👧🇹🇷', '👩‍👩‍👧🇹🇷e\u0301']);
  });

  it('turns line breaks into their own segments', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('one\ntwo').newLine().type('three').start();
    const { text, segments } = tw.getState();
    expect(text).toBe('one\ntwo\nthree');
    expect(segments.map((s) => s.text)).toEqual(['one', '\n', 'two', '\n', 'three']);
  });

  it('keeps appending text typed after the queue finished', () => {
    const { tw, text, status } = setup({ typeSpeed: 0 });
    tw.type('Hello').start();
    expect(status()).toBe('done');
    tw.type(', world').start();
    expect(text()).toBe('Hello, world');
  });

  it('picks up steps queued while running', () => {
    const { tw, text } = setup();
    tw.type('ab').start();
    tw.type('cd');
    vi.runAllTimers();
    expect(text()).toBe('abcd');
  });
});

describe('delete', () => {
  it('deleteLetters removes characters one per deleteSpeed', () => {
    const { tw } = setup({ typeSpeed: 0 });
    const texts = record(tw);
    tw.type('Hello').deleteLetters(3).start();
    expect(tw.getState().status).toBe('deleting');
    vi.advanceTimersByTime(20);
    vi.advanceTimersByTime(20);
    expect(texts).toEqual(['Hello', 'Hell', 'Hel', 'He']);
  });

  it('deleteLetters treats emoji as one character', () => {
    const { tw, text } = setup({ typeSpeed: 0, deleteSpeed: 0 });
    tw.type('ok 👍🏽').deleteLetters(1).start();
    expect(text()).toBe('ok ');
  });

  it('deleteLetters clamps to the text length and ignores non-positive counts', () => {
    const { tw, text } = setup({ typeSpeed: 0, deleteSpeed: 0 });
    tw.type('abc').deleteLetters(0).deleteLetters(-2).start();
    expect(text()).toBe('abc');
    tw.deleteLetters(10).start();
    expect(text()).toBe('');
  });

  it.each([
    ['Hello big world', 1, 'Hello big '],
    ['Hello big world  ', 1, 'Hello big '],
    ['Hello big world', 2, 'Hello '],
    ['Hello big world', 5, ''],
    ['line one\nline two', 2, 'line one\n'],
    ['Hello', 0, 'Hello'],
  ])('deleteWords(%#) on %j', (initial, count, expected) => {
    const { tw, text } = setup({ typeSpeed: 0, deleteSpeed: 0 });
    tw.type(initial).deleteWords(count).start();
    expect(text()).toBe(expected);
  });

  it('deleteAll removes everything with deleteSpeed', () => {
    const { tw } = setup({ typeSpeed: 0 });
    const texts = record(tw);
    tw.type('abc').deleteAll().start();
    vi.runAllTimers();
    expect(texts).toEqual(['abc', 'ab', 'a', '']);
  });

  it('deleteAll with speed 0 clears instantly', () => {
    const { tw, text, status } = setup({ typeSpeed: 0 });
    tw.type('abc').deleteAll({ speed: 0 }).start();
    expect(text()).toBe('');
    expect(status()).toBe('done');
  });

  it('removes styled segments and line breaks from the end', () => {
    const { tw } = setup({ typeSpeed: 0, deleteSpeed: 0 });
    tw.type('a').colorize('red').type('bc').newLine().type('d').deleteLetters(3).start();
    const { text, segments } = tw.getState();
    expect(text).toBe('ab');
    expect(segments.map((s) => [s.text, s.color])).toEqual([
      ['a', undefined],
      ['b', 'red'],
    ]);
  });
});

describe('typeTo', () => {
  it('deletes back to the common prefix, then types the rest', () => {
    const { tw } = setup({ typeSpeed: 0 });
    const texts = record(tw);
    tw.type('I build apps').typeTo('I build art', { speed: 20, deleteSpeed: 20 }).start();
    vi.runAllTimers();
    expect(texts).toEqual([
      'I build apps',
      'I build app',
      'I build ap',
      'I build a',
      'I build ar',
      'I build art',
    ]);
  });

  it('does nothing when the text already matches', () => {
    const { tw } = setup({ typeSpeed: 0 });
    const texts = record(tw);
    tw.type('same').typeTo('same').start();
    expect(texts).toEqual(['same']);
    expect(tw.getState().status).toBe('done');
  });

  it('compares whole characters', () => {
    const { tw } = setup({ typeSpeed: 0, deleteSpeed: 0 });
    const texts = record(tw);
    tw.type('👍🏽').typeTo('👍🏿').start();
    expect(texts).toEqual(['👍🏽', '', '👍🏿']);
  });

  it('can empty the text', () => {
    const { tw, text } = setup({ typeSpeed: 0, deleteSpeed: 0 });
    tw.type('bye').typeTo('').start();
    expect(text()).toBe('');
  });
});

describe('styling', () => {
  it('colorize applies to text typed afterwards and merges equal styles', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('a').colorize('red').type('b').type('c').colorize().type('d').start();
    expect(tw.getState().segments).toEqual([
      { id: 0, text: 'a', ...style() },
      { id: 1, text: 'bc', ...style('red') },
      { id: 2, text: 'd', ...style() },
    ]);
  });

  it('colorize("") resets the color', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.colorize('red').type('a').colorize('').type('b').start();
    expect(tw.getState().segments.map((s) => s.color)).toEqual(['red', undefined]);
  });

  it('highlight splits segments and keeps the original id on the first part', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('Hello world').highlight(2, 3, { background: 'yellow' }).start();
    expect(tw.getState().segments).toEqual([
      { id: 0, text: 'He', ...style() },
      { id: 1, text: 'llo', ...style(undefined, 'yellow') },
      { id: 2, text: ' world', ...style() },
    ]);
  });

  it('highlight spans several segments and skips line breaks', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('ab\ncd').highlight(1, 3, { color: 'blue' }).start();
    expect(tw.getState().segments.map((s) => [s.text, s.color])).toEqual([
      ['a', undefined],
      ['b', 'blue'],
      ['\n', undefined],
      ['c', 'blue'],
      ['d', undefined],
    ]);
  });

  it('highlight keeps existing styles it does not override', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.colorize('red').type('abc').highlight(0, 3, { background: 'black' }).start();
    expect(tw.getState().segments).toEqual([{ id: 0, text: 'abc', ...style('red', 'black') }]);
  });

  it('highlight ignores empty and out-of-range ranges', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('abc').start();
    const before = tw.getState();
    tw.highlight(1, 0, { color: 'red' }).start();
    expect(tw.getState().segments).toEqual(before.segments);
    tw.highlight(10, 2, { color: 'red' }).start();
    expect(tw.getState().segments).toEqual(before.segments);
  });

  it('typing after a highlight starts a new unstyled segment', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('ab').highlight(0, 2, { background: 'yellow' }).type('c').start();
    expect(tw.getState().segments.map((s) => [s.text, s.background])).toEqual([
      ['ab', 'yellow'],
      ['c', undefined],
    ]);
  });

  it.each([
    ['end', 2, 'and more', 'one two '],
    ['start', 2, 'one two', ' and more'],
  ] as const)('highlightWords from %s', (from, count, highlighted, rest) => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('one two and more').highlightWords(count, from, { background: 'yellow' }).start();
    const { segments } = tw.getState();
    expect(segments.find((s) => s.background)?.text).toBe(highlighted);
    expect(segments.filter((s) => !s.background).map((s) => s.text)).toContain(rest);
  });

  it('highlightWords ignores zero counts and empty text', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.highlightWords(1, 'end', { color: 'red' })
      .type('a b')
      .highlightWords(0, 'end', { color: 'red' });
    tw.highlightWords(0, 'start', { color: 'red' }).start();
    expect(tw.getState().segments.every((s) => s.color === undefined)).toBe(true);
  });
});

describe('pauseFor and call', () => {
  it('waits between steps with status "waiting"', () => {
    const { tw, text, status } = setup({ typeSpeed: 0 });
    tw.type('a').pauseFor(500).type('b').start();
    expect(status()).toBe('waiting');
    vi.advanceTimersByTime(499);
    expect(text()).toBe('a');
    vi.advanceTimersByTime(1);
    expect(text()).toBe('ab');
  });

  it('treats negative pauses as zero', () => {
    const { tw, text } = setup({ typeSpeed: 0 });
    tw.pauseFor(-100).type('a').start();
    vi.advanceTimersByTime(0);
    expect(text()).toBe('a');
  });

  it('runs callbacks in queue order', () => {
    const { tw } = setup({ typeSpeed: 0 });
    const seen: string[] = [];
    tw.type('a')
      .call(() => seen.push(tw.getState().text))
      .type('b')
      .call(() => seen.push(tw.getState().text))
      .start();
    expect(seen).toEqual(['a', 'ab']);
  });
});

describe('events and loop', () => {
  it('emits start and end', () => {
    const { tw } = setup({ typeSpeed: 0 });
    const events: string[] = [];
    tw.on('start', () => events.push('start'))
      .on('end', () => events.push('end'))
      .type('a')
      .start();
    expect(events).toEqual(['start', 'end']);
  });

  it('loops through the queue and emits loop', () => {
    const { tw, text } = setup({ typeSpeed: 0, loop: true });
    const onLoop = vi.fn();
    const onEnd = vi.fn();
    tw.on('loop', onLoop).on('end', onEnd).type('ab').pauseFor(100).deleteAll({ speed: 0 }).start();
    expect(text()).toBe('ab');
    vi.advanceTimersToNextTimer();
    expect(text()).toBe('');
    expect(onLoop).toHaveBeenCalledTimes(1);
    vi.advanceTimersToNextTimer();
    expect(text()).toBe('ab');
    vi.advanceTimersToNextTimer();
    expect(onLoop).toHaveBeenCalledTimes(2);
    expect(onEnd).not.toHaveBeenCalled();
  });

  it('yields between passes of an instant queue', () => {
    const { tw } = setup({ typeSpeed: 0, loop: true });
    const pass = vi.fn();
    tw.call(pass).start();
    expect(pass).toHaveBeenCalledTimes(1);
    vi.advanceTimersToNextTimer();
    expect(pass).toHaveBeenCalledTimes(2);
    tw.stop();
  });

  it('does not loop an empty queue', () => {
    const { tw, status } = setup({ loop: true });
    tw.start();
    expect(status()).toBe('done');
  });

  it('stops looping when a loop listener stops the queue', () => {
    const { tw, status } = setup({ typeSpeed: 0, loop: true });
    tw.on('loop', () => tw.stop())
      .type('a')
      .start();
    expect(status()).toBe('idle');
    expect(vi.getTimerCount()).toBe(0);
  });

  it('can stop looping through configure()', () => {
    const { tw, status } = setup({ typeSpeed: 0, loop: true });
    tw.type('a').pauseFor(10).start();
    tw.configure({ loop: false });
    vi.advanceTimersByTime(10);
    expect(status()).toBe('done');
  });
});

describe('stop, reset, pause, resume, skip', () => {
  it('stop() keeps the text, resolves start() and continues with the next step', async () => {
    const { tw, text, status } = setup();
    const done = vi.fn();
    tw.type('abc').type('d').start().then(done);
    vi.advanceTimersByTime(50);
    tw.stop();
    await Promise.resolve();
    expect(done).toHaveBeenCalled();
    expect(text()).toBe('ab');
    expect(status()).toBe('idle');
    expect(vi.getTimerCount()).toBe(0);
    tw.start();
    expect(text()).toBe('abd');
  });

  it('stop() does nothing when idle', () => {
    const { tw } = setup();
    const listener = vi.fn();
    tw.subscribe(listener);
    tw.stop();
    expect(listener).not.toHaveBeenCalled();
  });

  it('reset() clears text, queue, color and listeners', async () => {
    const { tw, text, status } = setup();
    const onEnd = vi.fn();
    const done = vi.fn();
    tw.on('end', onEnd).colorize('red').type('abc').start().then(done);
    tw.reset();
    await Promise.resolve();
    expect(done).toHaveBeenCalled();
    expect(tw.getState()).toEqual({ text: '', segments: [], status: 'idle' });
    tw.type('x').start();
    vi.runAllTimers();
    expect(text()).toBe('x');
    expect(status()).toBe('done');
    expect(tw.getState().segments[0]?.color).toBeUndefined();
    expect(onEnd).not.toHaveBeenCalled();
  });

  it('reset() does not notify when already pristine', () => {
    const { tw } = setup();
    const listener = vi.fn();
    tw.subscribe(listener);
    tw.reset();
    expect(listener).not.toHaveBeenCalled();
  });

  it('pause() freezes the remaining delay and resume() continues it', () => {
    const { tw, text, status } = setup();
    tw.type('abc').start();
    vi.advanceTimersByTime(30);
    tw.pause();
    expect(status()).toBe('paused');
    vi.advanceTimersByTime(1000);
    expect(text()).toBe('a');
    tw.resume();
    expect(status()).toBe('typing');
    vi.advanceTimersByTime(19);
    expect(text()).toBe('a');
    vi.advanceTimersByTime(1);
    expect(text()).toBe('ab');
  });

  it('pause() and resume() are no-ops when they do not apply', () => {
    const { tw, status } = setup();
    tw.pause();
    expect(status()).toBe('idle');
    tw.resume();
    expect(status()).toBe('idle');
    tw.type('ab').start();
    tw.pause();
    tw.pause();
    tw.resume();
    tw.resume();
    vi.runAllTimers();
    expect(status()).toBe('done');
  });

  it('a step can pause the queue and resume() continues after it', () => {
    const { tw, text, status } = setup({ typeSpeed: 0 });
    tw.type('a')
      .call(() => tw.pause())
      .type('b')
      .start();
    expect(status()).toBe('paused');
    expect(text()).toBe('a');
    tw.resume();
    vi.advanceTimersByTime(0);
    expect(text()).toBe('ab');
  });

  it('a listener can pause in the middle of a step', () => {
    const { tw, text } = setup();
    let paused = false;
    tw.subscribe(() => {
      if (!paused && tw.getState().text === 'a') {
        paused = true;
        tw.pause();
      }
    });
    tw.type('ab').start();
    vi.advanceTimersByTime(500);
    expect(text()).toBe('a');
    tw.resume();
    vi.advanceTimersByTime(50);
    expect(text()).toBe('ab');
  });

  it('skip() completes the pass instantly, runs callbacks and ends without looping', async () => {
    const { tw, text, status } = setup({ loop: true });
    const called = vi.fn();
    const onEnd = vi.fn();
    const done = vi.fn();
    tw.on('end', onEnd).type('Hello').pauseFor(5000).call(called).deleteWords(1).type('World');
    tw.start().then(done);
    tw.skip();
    await Promise.resolve();
    expect(text()).toBe('World');
    expect(status()).toBe('done');
    expect(called).toHaveBeenCalledOnce();
    expect(onEnd).toHaveBeenCalledOnce();
    expect(done).toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('skip() works while paused and is a no-op when idle', () => {
    const { tw, text, status } = setup();
    tw.skip();
    expect(status()).toBe('idle');
    tw.type('abc').start();
    tw.pause();
    tw.skip();
    expect(text()).toBe('abc');
    expect(status()).toBe('done');
  });

  it('a step can skip or stop the queue', () => {
    const skipping = setup();
    skipping.tw
      .type('a')
      .call(() => skipping.tw.skip())
      .type('bc')
      .start();
    vi.advanceTimersByTime(50);
    expect(skipping.text()).toBe('abc');
    expect(skipping.status()).toBe('done');

    const stopping = setup({ typeSpeed: 0 });
    stopping.tw
      .type('a')
      .call(() => stopping.tw.stop())
      .type('b')
      .start();
    expect(stopping.text()).toBe('a');
    expect(stopping.status()).toBe('idle');
  });

  it('a listener can skip in the middle of a step without duplicating text', () => {
    const { tw, text } = setup();
    tw.subscribe(() => {
      if (tw.getState().text === 'a') tw.skip();
    });
    tw.type('abc').start();
    expect(text()).toBe('abc');
    expect(vi.getTimerCount()).toBe(0);
  });

  it('an end listener can queue more text and start again', () => {
    const { tw, text } = setup({ typeSpeed: 0 });
    let restarted = false;
    tw.on('end', () => {
      if (restarted) return;
      restarted = true;
      tw.type(' again').start();
    });
    tw.type('once').start();
    expect(text()).toBe('once again');
  });

  it('start() while running returns a promise for the same run', async () => {
    const { tw } = setup();
    tw.type('ab');
    const first = vi.fn();
    const second = vi.fn();
    tw.start().then(first);
    tw.start().then(second);
    await vi.runAllTimersAsync();
    expect(first).toHaveBeenCalledOnce();
    expect(second).toHaveBeenCalledOnce();
  });

  it('a start listener can stop the run before it begins', () => {
    const { tw, text } = setup();
    tw.on('start', () => tw.stop())
      .type('a')
      .start();
    expect(text()).toBe('');
  });
});

describe('options', () => {
  it('configure() changes speeds of running steps', () => {
    const { tw, text } = setup();
    tw.type('abc').start();
    tw.configure({ typeSpeed: 100 });
    vi.advanceTimersByTime(50);
    expect(text()).toBe('ab');
    vi.advanceTimersByTime(99);
    expect(text()).toBe('ab');
    vi.advanceTimersByTime(1);
    expect(text()).toBe('abc');
  });

  it('defaults to 30ms for typing and deleting', () => {
    const tw = createTypewriter();
    tw.type('ab').deleteLetters(1).start();
    vi.advanceTimersByTime(29);
    expect(tw.getState().text).toBe('a');
    vi.advanceTimersByTime(1);
    expect(tw.getState().text).toBe('ab');
    vi.advanceTimersByTime(30);
    expect(tw.getState().text).toBe('a');
  });

  it.each([
    [0, 25],
    [1, 75],
  ])('humanize varies delays (Math.random = %d)', (random, delay) => {
    vi.spyOn(Math, 'random').mockReturnValue(random);
    const { tw, text } = setup({ humanize: 0.5 });
    tw.type('ab').start();
    vi.advanceTimersByTime(delay - 1);
    expect(text()).toBe('a');
    vi.advanceTimersByTime(1);
    expect(text()).toBe('ab');
  });

  it('clamps humanize to [0, 1]', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const { tw, text } = setup({ humanize: 5 });
    tw.type('ab').start();
    vi.advanceTimersByTime(0);
    expect(text()).toBe('ab');
  });

  describe('reduced motion', () => {
    const prefersReducedMotion = (matches: boolean) =>
      vi.stubGlobal(
        'matchMedia',
        vi.fn((query: string) => ({ matches: matches && query.includes('reduce') })),
      );

    it('types and deletes instantly but keeps pauses', () => {
      prefersReducedMotion(true);
      const { tw, text } = setup();
      tw.type('Hello').pauseFor(100).deleteAll().type('Bye').start();
      expect(text()).toBe('Hello');
      vi.advanceTimersByTime(100);
      expect(text()).toBe('Bye');
    });

    it('can be ignored with respectReducedMotion: false', () => {
      prefersReducedMotion(true);
      const { tw, text } = setup({ respectReducedMotion: false });
      tw.type('Hello').start();
      expect(text()).toBe('H');
    });

    it('animates when the user has no preference', () => {
      prefersReducedMotion(false);
      const { tw, text } = setup();
      tw.type('Hello').start();
      expect(text()).toBe('H');
    });
  });
});

describe('store', () => {
  it('notifies subscribers and stops after unsubscribe', () => {
    const { tw } = setup({ typeSpeed: 0 });
    const listener = vi.fn();
    const unsubscribe = tw.subscribe(listener);
    tw.type('a').start();
    const calls = listener.mock.calls.length;
    expect(calls).toBeGreaterThan(0);
    unsubscribe();
    tw.type('b').start();
    expect(listener).toHaveBeenCalledTimes(calls);
  });

  it('returns the same snapshot until something changes', () => {
    const { tw } = setup();
    tw.type('ab').start();
    const snapshot = tw.getState();
    expect(tw.getState()).toBe(snapshot);
    vi.advanceTimersByTime(50);
    expect(tw.getState()).not.toBe(snapshot);
    expect(snapshot.text).toBe('a');
  });

  it('never mutates previous snapshots', () => {
    const { tw } = setup({ typeSpeed: 0 });
    tw.type('ab').start();
    const before = tw.getState();
    const segment = before.segments[0];
    tw.type('c').highlight(0, 1, { color: 'red' }).deleteLetters(1, { speed: 0 }).start();
    expect(before.segments).toHaveLength(1);
    expect(before.segments[0]).toBe(segment);
    expect(segment).toEqual({ id: 0, text: 'ab', ...style() });
  });
});

describe('without Intl.Segmenter', () => {
  it('falls back to code points', async () => {
    vi.resetModules();
    vi.stubGlobal('Intl', { ...Intl, Segmenter: undefined });
    const { createTypewriter: create } = await import('../src/core');
    const tw = create({ typeSpeed: 50 });
    const texts = record(tw);
    tw.type('a😀').start();
    vi.runAllTimers();
    expect(texts).toEqual(['a', 'a😀']);
  });
});
