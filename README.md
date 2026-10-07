# use-typewriter-animation

Typewriter animations for React 18 and 19: a component, a hook and a framework-agnostic engine.
About 2.7 kB gzipped, no dependencies.

[![npm](https://img.shields.io/npm/v/use-typewriter-animation)](https://www.npmjs.com/package/use-typewriter-animation)
[![bundle size](https://img.shields.io/bundlephobia/minzip/use-typewriter-animation)](https://bundlephobia.com/package/use-typewriter-animation)
[![license](https://img.shields.io/npm/l/use-typewriter-animation)](./LICENSE)

- One render per visible change, through `useSyncExternalStore`. Text is stored as styled runs, so
  plain text is a single DOM text node.
- Emoji, flags and accented letters are typed and deleted as one character.
- Compiles with React Compiler without bailouts. Safe under StrictMode, SSR and Server Components.
- Loops, pauses, colors, highlights, streaming text, pause/resume/skip, reduced motion.

**[Documentation and live examples](https://doguyilmaz.github.io/use-typewriter-animation/)**

## Install

```bash
npm install use-typewriter-animation
```

## Quick start

```tsx
import { Typewriter } from 'use-typewriter-animation';

export function Hero() {
  return (
    <Typewriter
      as='h1'
      sequence={['I build websites', 1500, 'I build apps', 1500, 'I build games', 1500]}
      loop
    />
  );
}
```

Strings are typed with `typeTo`: the current text is deleted back to the part both strings share
(`I build `), then the rest is typed. Numbers are pauses in milliseconds, functions are called when
reached. The sequence is read on mount; give the component a new `key` to start a different one.

## The hook

`useTypewriter` gives you the instance to queue steps on, and the elements to render.

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export function Greeting() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 50 });

  useEffect(() => {
    typewriter
      .type('Hello, World!')
      .pauseFor(1000)
      .deleteWords(1)
      .colorize('#e11d48')
      .type('React!')
      .start();
  }, [typewriter]);

  return (
    <p>
      {elements}
      {cursor}
    </p>
  );
}
```

`typewriter` never changes, and it is reset when the component unmounts, so this effect needs no
cleanup and StrictMode does not type the text twice. Steps queued later are appended to the queue.
To start over when a prop changes, reset in the cleanup:

```tsx
useEffect(() => {
  typewriter.type(text).start();
  return () => {
    typewriter.reset();
  };
}, [typewriter, text]);
```

The component that calls the hook re-renders for every typed character. Keep it small, or use
`<Typewriter>`, which keeps those renders to itself.

## API

### `useTypewriter(options?)`

| Option                 | Type                               | Default   |                                                                   |
| ---------------------- | ---------------------------------- | --------- | ----------------------------------------------------------------- |
| `typeSpeed`            | `number`                           | `30`      | Milliseconds per typed character. `0` is instant.                 |
| `deleteSpeed`          | `number`                           | `30`      | Milliseconds per deleted character.                               |
| `loop`                 | `boolean`                          | `false`   | Replay the queue when it ends.                                    |
| `humanize`             | `number`                           | `0`       | Random variation of each delay, from `0` to `1` (±100%).          |
| `respectReducedMotion` | `boolean`                          | `true`    | With `prefers-reduced-motion`, type and delete instantly. Pauses are kept. |
| `sequence`             | `(string \| number \| () => void)[]` |           | Steps to run on mount, as in `<Typewriter>`.                      |
| `enableCursor`         | `boolean`                          | `true`    |                                                                   |
| `cursorStyle`          | `'bar' \| 'block' \| 'underline'`  | `'bar'`   | Draws `\|`, `▋` or `_`.                                           |
| `cursorChar`           | `string`                           |           | Any other cursor character.                                       |
| `cursorColor`          | `string`                           | text color |                                                                  |
| `cursorBlinkSpeed`     | `number`                           | `1000`    | Duration of one blink, in milliseconds.                           |

Options can change at any time and apply to the running animation, except `sequence`, which is
read on mount.

Returns:

| Key          | Type                 |                                                                |
| ------------ | -------------------- | -------------------------------------------------------------- |
| `typewriter` | `TypewriterInstance` | Queue and control methods, below. Stable across renders.       |
| `state`      | `TypewriterState`    | `{ text, segments, status }`.                                  |
| `elements`   | `ReactNode[]`        | The text: plain strings, `<span>`s for styled runs, `<br>`s.   |
| `cursor`     | `ReactElement \| null` | The cursor, with its stylesheet.                             |

`status` is one of `'idle' | 'typing' | 'deleting' | 'waiting' | 'paused' | 'done'`.

### `<Typewriter>`

Takes every `useTypewriter` option, plus:

| Prop       | Type                                 | Default  |                     |
| ---------- | ------------------------------------ | -------- | ------------------- |
| `sequence` | `(string \| number \| () => void)[]` | required |                     |
| `as`       | element type                         | `'span'` | The element to render. |

Other props (`className`, `id`, `aria-*`, …) go to the element.

### Queue methods

These return the instance, so they chain. Nothing runs until `start()`.

| Method                                         |                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| `type(text, { speed }?)`                       | Types `text`. `\n` becomes a line break.                              |
| `typeTo(text, { speed, deleteSpeed }?)`        | Deletes back to the common prefix with `text`, then types the rest.   |
| `deleteLetters(count, { speed }?)`             | Deletes `count` characters.                                           |
| `deleteWords(count, { speed }?)`               | Deletes `count` words, keeping the space before them.                 |
| `deleteAll({ speed }?)`                        | Deletes everything. Pass `{ speed: 0 }` to clear instantly.           |
| `pauseFor(ms)`                                 | Waits.                                                                |
| `newLine()`                                    | Same as `type('\n')`.                                                 |
| `colorize(color?)`                             | Sets the color of the text typed after it. No argument resets it.     |
| `highlight(start, length, { color, background })` | Styles a range of the current text.                                |
| `highlightWords(count, 'start' \| 'end', style)` | Styles the first or last `count` words.                             |
| `call(fn)`                                     | Calls `fn` when reached.                                              |
| `on('start' \| 'end' \| 'loop', fn)`           | Listens to an event.                                                  |

### Control methods

| Method     |                                                                                       |
| ---------- | ------------------------------------------------------------------------------------- |
| `start()`  | Runs the queue from where it is. Returns a promise that resolves when it ends, stops or resets. Steps added after it ended run on the next `start()`. |
| `pause()`  | Freezes the animation, keeping the remaining delay.                                   |
| `resume()` | Continues after `pause()`.                                                             |
| `skip()`   | Finishes the remaining steps instantly, without pauses, and ends without looping.     |
| `stop()`   | Halts and keeps the text. `start()` continues with the next step.                     |
| `reset()`  | Halts and clears the text, the queue, the color and the event listeners.             |

### `createTypewriter(options?)`

The engine without React. It takes the same speed options and returns the same instance, plus
`getState()`, `subscribe(listener)` and `configure(options)`.

```ts
import { createTypewriter } from 'use-typewriter-animation';

const typewriter = createTypewriter({ typeSpeed: 40 });
const output = document.querySelector('#output')!;
typewriter.subscribe(() => {
  output.textContent = typewriter.getState().text;
});
typewriter.type('Works anywhere.').start();
```

## Recipes

### Streaming text

Steps can be queued while the typewriter runs, which suits text that arrives in chunks:

```tsx
for await (const chunk of stream) {
  typewriter.type(chunk).start();
}
```

`start()` does nothing while the queue is running, and resumes it once it has caught up.

### Pause, resume and skip

```tsx
const { typewriter, state, elements, cursor } = useTypewriter();
const paused = state.status === 'paused';

<button onClick={() => (paused ? typewriter.resume() : typewriter.pause())}>
  {paused ? 'Resume' : 'Pause'}
</button>
<button onClick={() => typewriter.skip()}>Skip</button>
```

### Styling the cursor

The cursor is a `<span class="uta-cursor">`. It blinks with CSS, stays solid while characters are
typed or deleted, and stops blinking when the user prefers reduced motion. Style it like any element:

```css
.uta-cursor {
  margin-left: 2px;
  font-weight: 300;
}
```

React 19 hoists the cursor stylesheet into `<head>` once. React 18 renders it next to each cursor.

## Accessibility

- The cursor is `aria-hidden`.
- With `prefers-reduced-motion: reduce`, text appears at once instead of character by character.
- Screen readers read whatever text is on screen when they reach it. When the animated text matters,
  give it to them in full and hide the animation:

  ```tsx
  <h1>
    <span className='sr-only'>I build websites, apps and games</span>
    <Typewriter aria-hidden sequence={['websites', 1500, 'apps', 1500, 'games', 1500]} loop />
  </h1>
  ```

- An animation that loops for more than five seconds needs a way to pause it
  ([WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)). Use `pause()`.

## SSR, Server Components and React Compiler

- On the server, the text is empty and the cursor is rendered. Typing starts after hydration.
- The package is marked `'use client'`, so you can render `<Typewriter>` from a Server Component.
- The hook and component compile with React Compiler without bailouts. This is checked in CI with
  `react-compiler-marker` and with a test run against the compiled source. The package itself ships
  uncompiled, so it needs no compiler runtime on React 18.
- Render from `state`; do not call `typewriter.getState()` during render.

## Migrating from v3

v4 is a rewrite. The chainable API is the same; the rest got smaller.

- **React 18 or newer** is required.
- **Remove `<style>{keyframes}</style>`.** The cursor brings its own styles. `keyframes`, `styles`,
  `metrics`, `accessibilityProps` and `screenReaderAnnouncement` are no longer returned.
- **State** is `{ text, segments, status }`. `isTyping`, `isPaused`, `isComplete`, `currentText` and
  `visibleText` map to `status` and `text`. A segment is a styled run of text
  (`{ id, text, color, background }`), not a single character.
- **`deleteAll()` animates** with `deleteSpeed`. `deleteAll({ speed: 0 })` clears instantly as before.
- **`stop()` keeps the instance usable**; `reset()` clears it. `pause()`, `resume()` and `skip()` now
  work as documented. `isPaused()` is `state.status === 'paused'`.
- **Removed options:** `enableVirtualization`, `maxVisibleSegments`, `cursorWidth`, the `aria*`,
  `role`, `screenReaderText` and `announceCompletion` options, and the keyboard and focus options.
  The keyboard shortcuts listened on the whole document; wire your own controls to `pause()`,
  `resume()` and `skip()` instead.
- **Removed exports:** `useTypewriterAsync`, `TypewriterSuspense`, `TypewriterErrorBoundary`,
  `useTypewriterServer`, `TypewriterServerComponent`, `useIsomorphicEffect`,
  `useConcurrentTypewriter`, `useTypewriterPerformanceMonitor`, `useSchedulerAwareAnimation`,
  `useReact19Features`, `typewriterStyles` and `typewriterKeyframes`. Use `useTypewriter` everywhere.
  `createTypewriterBase` is now `createTypewriter`.
- The cursor takes the text color by default (it was black), and `cursorBlinkSpeed` is one full
  blink (default 1000 ms).
- `highlightWords` highlights the words as one range, including the spaces between them.

## Development

```bash
bun install
bun run check   # lint, typecheck, tests (plain and compiled with React Compiler), build, size
bun run doctor  # react-doctor
bun run compiler  # react-compiler-marker report
```

CI also runs the tests on React 18. Releases go through the `Publish` workflow.

## License

[MIT](./LICENSE)
