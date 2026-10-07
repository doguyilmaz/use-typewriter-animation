---
title: API reference
---

# API reference

## `useTypewriter(options?)`

```ts
const { typewriter, state, elements, cursor } = useTypewriter(options);
```

| Option                 | Type                                 | Default    | Description                                                                 |
| ---------------------- | ------------------------------------ | ---------- | --------------------------------------------------------------------------- |
| `typeSpeed`            | `number`                             | `30`       | Milliseconds per typed character. `0` types instantly.                      |
| `deleteSpeed`          | `number`                             | `30`       | Milliseconds per deleted character.                                         |
| `loop`                 | `boolean`                            | `false`    | Replay the queue when it ends.                                              |
| `humanize`             | `number`                             | `0`        | Random variation of every delay, from `0` (none) to `1` (±100%).            |
| `respectReducedMotion` | `boolean`                            | `true`     | With `prefers-reduced-motion: reduce`, type and delete instantly. Pauses are kept. |
| `sequence`             | `(string \| number \| () => void)[]` |            | Steps to run on mount. See [`<Typewriter>`](#typewriter).                   |
| `enableCursor`         | `boolean`                            | `true`     | Render a cursor.                                                            |
| `cursorStyle`          | `'bar' \| 'block' \| 'underline'`    | `'bar'`    | Draws `\|`, `▋` or `_`.                                                     |
| `cursorChar`           | `string`                             |            | Any other cursor character.                                                 |
| `cursorColor`          | `string`                             | text color | Cursor color.                                                               |
| `cursorBlinkSpeed`     | `number`                             | `1000`     | Duration of one blink in milliseconds.                                      |

Options can change at any time and apply to the running animation, except `sequence`, which is read
on mount.

| Returns      | Type                   | Description                                                   |
| ------------ | ---------------------- | ------------------------------------------------------------- |
| `typewriter` | `TypewriterInstance`   | The [methods](#queue-methods) below. Stable across renders.   |
| `state`      | `TypewriterState`      | `{ text, segments, status }`.                                 |
| `elements`   | `ReactNode[]`          | Plain strings, a `<span>` for each styled run, and `<br>`s.   |
| `cursor`     | `ReactElement \| null` | The cursor and its stylesheet.                                |

### State

```ts
interface TypewriterState {
  text: string;
  segments: readonly {
    id: number;
    text: string;
    color: string | undefined;
    background: string | undefined;
  }[];
  status: 'idle' | 'typing' | 'deleting' | 'waiting' | 'paused' | 'done';
}
```

`segments` are runs of text with the same style. A segment whose `text` is `'\n'` is a line break.
Use them to render the text yourself instead of using `elements`.

## `<Typewriter>`

```tsx
<Typewriter as='h1' sequence={['Hello', 1000, 'Hello, World']} typeSpeed={50} />
```

Accepts every `useTypewriter` option and:

| Prop       | Type                                 | Default  | Description                                                                 |
| ---------- | ------------------------------------ | -------- | --------------------------------------------------------------------------- |
| `sequence` | `(string \| number \| () => void)[]` | required | Strings are typed with [`typeTo`](#queue-methods), numbers are pauses in ms, functions are called. |
| `as`       | element type                         | `'span'` | The element to render.                                                      |

Any other prop, such as `className`, `id` or `aria-hidden`, goes to the element.

## Queue methods

Queue methods return the instance, so they chain. Nothing runs until `start()`. Steps added while
the queue runs are appended to it.

| Method                                            | Description                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| `type(text, { speed }?)`                          | Types `text`. `\n` becomes a line break.                            |
| `typeTo(text, { speed, deleteSpeed }?)`           | Deletes back to the common prefix with `text`, then types the rest. |
| `deleteLetters(count, { speed }?)`                | Deletes `count` characters.                                         |
| `deleteWords(count, { speed }?)`                  | Deletes `count` words and keeps the whitespace before them.         |
| `deleteAll({ speed }?)`                           | Deletes all text. `{ speed: 0 }` clears it instantly.               |
| `pauseFor(ms)`                                    | Waits.                                                              |
| `newLine()`                                       | Same as `type('\n')`.                                               |
| `colorize(color?)`                                | Sets the color of the text typed after it. No argument resets it.   |
| `highlight(start, length, { color, background })` | Styles `length` characters from index `start` of the current text.  |
| `highlightWords(count, 'start' \| 'end', style)`  | Styles the first or last `count` words as one range.                |
| `call(fn)`                                        | Calls `fn` when the queue reaches it.                               |
| `on('start' \| 'end' \| 'loop', fn)`              | Adds an event listener.                                             |

A "character" is what a reader sees as one: emoji, flags and letters with accents are typed and
deleted whole.

## Control methods

| Method     | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `start()`  | Runs the queue from the current step. Returns a promise that resolves when the queue ends or is stopped or reset. Calling it while running does nothing. |
| `pause()`  | Freezes the animation and keeps the remaining delay.                                                 |
| `resume()` | Continues after `pause()`.                                                                           |
| `skip()`   | Runs the remaining steps instantly, without pauses, and ends without looping.                       |
| `stop()`   | Halts and keeps the text. `start()` continues with the next step.                                    |
| `reset()`  | Halts and clears the text, the queue, the color and the listeners. Returns the instance.             |

## `createTypewriter(options?)`

The engine, without React. Takes the speed, `loop`, `humanize` and `respectReducedMotion` options
and returns the same instance, plus:

| Method                | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| `getState()`          | The current `TypewriterState`. The object changes only when the state does. |
| `subscribe(listener)` | Calls `listener` after every change. Returns an unsubscribe function.  |
| `configure(options)`  | Merges new options.                                                    |

```ts
import { createTypewriter } from 'use-typewriter-animation';

const typewriter = createTypewriter({ typeSpeed: 40 });
const output = document.querySelector('#output')!;

typewriter.subscribe(() => {
  output.textContent = typewriter.getState().text;
});
typewriter.type('Works anywhere.').start();
```

## The cursor

The cursor is a `<span class="uta-cursor" aria-hidden="true">`. It blinks with CSS, stays solid
while characters are typed or deleted (the `data-blink` attribute is absent then), and does not
blink when the user prefers reduced motion. Style it with CSS:

```css
.uta-cursor {
  margin-left: 2px;
}
```

React 19 hoists the cursor's stylesheet into `<head>` once. React 18 renders it next to each cursor.

## Types

All types are exported: `TypewriterInstance`, `TypewriterOptions`, `TypewriterState`,
`TypewriterSegment`, `TypewriterStatus`, `TypewriterEvent`, `TypewriterSequence`,
`TypewriterProps`, `UseTypewriterOptions`, `UseTypewriterReturn`, `CursorStyle`, `SpeedOptions`,
`TypeToOptions` and `HighlightStyle`.
