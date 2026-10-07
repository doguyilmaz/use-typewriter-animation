---
title: Migrating from v3
---

# Migrating from v3

v4 is a rewrite. The chainable API is the same; everything around it is smaller.

## Requirements

React 18 or 19. React 16 and 17 are no longer supported.

## Rendering

Remove `<style>{keyframes}</style>`; the cursor brings its own styles.

```tsx
// v3
const { typewriter, elements, cursor, keyframes } = useTypewriter();
return (
  <>
    <style>{keyframes}</style>
    <div>{elements}{cursor}</div>
  </>
);

// v4
const { typewriter, elements, cursor } = useTypewriter();
return <div>{elements}{cursor}</div>;
```

The hook no longer returns `keyframes`, `styles`, `metrics`, `accessibilityProps` or
`screenReaderAnnouncement`. For a one-off animation, `<Typewriter sequence={…}>` replaces the hook
and the effect.

## State

| v3                          | v4                                   |
| --------------------------- | ------------------------------------ |
| `state.visibleText`         | `state.text`                         |
| `state.currentText`         | `state.text`                         |
| `state.isTyping`            | `state.status` is not `idle` or `done` |
| `state.isPaused`            | `state.status === 'paused'`          |
| `state.isComplete`          | `state.status === 'done'`            |
| `typewriter.isPaused()`     | `state.status === 'paused'`          |
| one segment per character   | one segment per styled run: `{ id, text, color, background }` |

## Behavior

- `deleteAll()` animates with `deleteSpeed`. Use `deleteAll({ speed: 0 })` to clear instantly.
- `stop()` keeps the instance usable: `start()` continues with the next step. `reset()` clears the
  text, queue and listeners.
- `pause()`, `resume()` and `skip()` now do what their names say.
- `highlightWords()` highlights the words as one range, including the spaces between them.
- The cursor takes the text color instead of black. `cursorBlinkSpeed` is the length of one full
  blink (1000 ms by default).

## Removed options

- `enableVirtualization`, `maxVisibleSegments`: text is stored as styled runs, so long text stays
  cheap.
- `cursorWidth`: the cursor is a character; use `cursorChar` or CSS.
- `ariaLive`, `ariaLabel`, `ariaDescribedBy`, `role`, `screenReaderText`, `announceCompletion`,
  `reducedMotionFallback`: see [Accessibility](./accessibility.md).
- `enableKeyboardControls`, `keyboardShortcuts`, `autoKeyboardHandling`, `manageFocus`,
  `focusOnComplete`: the shortcuts listened on the whole document. Call `pause()`, `resume()` and
  `skip()` from your own controls.

## Removed exports

`useTypewriterAsync`, `TypewriterSuspense`, `TypewriterErrorBoundary`, `useTypewriterServer`,
`TypewriterServerComponent`, `useIsomorphicEffect`, `useConcurrentTypewriter`,
`useTypewriterPerformanceMonitor`, `useSchedulerAwareAnimation`, `useReact19Features`,
`typewriterStyles` and `typewriterKeyframes`. Use `useTypewriter` or `<Typewriter>` in their place;
both work with SSR, Server Components and concurrent rendering.

`createTypewriterBase(onChange, options)` is now `createTypewriter(options)` with
`subscribe(listener)`.
