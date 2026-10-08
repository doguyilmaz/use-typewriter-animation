# Changelog

All notable changes to this project are documented here. The project follows
[Semantic Versioning](https://semver.org/).

## 4.0.0 - Unreleased

A rewrite of the library. The chainable API stays; everything around it is smaller and works as
documented. See [Migrating from v3](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/migration).

### Added

- `<Typewriter>` component with a declarative `sequence` (strings, pauses, callbacks) and an `as`
  prop. Re-renders stay inside the component.
- `sequence` option for `useTypewriter`.
- `typeTo(text)`: deletes back to the common prefix, then types the rest.
- `call(fn)`, `off(event, fn)`, `humanize`, per-step `speed` for deletions, `deleteAll({ speed })`,
  `cursorChar`.
- `createTypewriter()` with `subscribe`, `getState` and `configure`, usable without React.
- Unicode-aware typing and deleting: emoji, flags and combining marks are one character.
- Steps can be queued while running; `start()` continues after the queue has ended.
- Speeds faster than a frame write several characters per step instead of scheduling more timers.
- Tests against React 18, React 19 and the source compiled with React Compiler.

### Changed

- Requires React 18 or 19 (`useSyncExternalStore`).
- State is `{ text, segments, status }`; segments are styled runs instead of single characters.
- The cursor ships its own stylesheet (hoisted once by React 19), stays solid while typing, inherits
  the text color and respects `prefers-reduced-motion`. `<style>{keyframes}</style>` is no longer
  needed.
- `deleteAll()` animates with `deleteSpeed`.
- `stop()` halts without destroying the instance; `reset()` clears it. The hook resets the instance
  on unmount, so StrictMode never types twice.
- `highlightWords()` highlights one continuous range.
- `highlight(start, length)` counts characters like `deleteLetters()`, so it never splits an emoji.
- `typeSpeed: 0` and `{ speed: 0 }` are instant; v3 ignored `0`.
- `deleteAll()` keeps the `colorize()` color; v3 reset it.
- The `start` event fires on every `start()` call; v3 fired it when the first `type()` step ran.
- `cursorBlinkSpeed` defaults to 1000 ms (was 500).
- A `loop` whose steps never wait, for example under reduced motion without pauses, ends after one
  pass instead of replaying it continuously.
- Built with tsdown: ESM (`index.js`) and CommonJS (`index.cjs`) with matching type declarations.
  2.8 kB gzipped, down from 5.3 kB.

### Fixed

- `pause()` and `resume()` did not pause; `skip()` left the text half-typed and the promise pending.
- Cursor and text components were recreated on every render, remounting their DOM nodes.
- Every character was a separate state segment and every update copied the whole text.
- Screen readers were sent every character through an `aria-live` region.
- Emoji were split into broken halves while typing.

### Removed

- `useTypewriterAsync`, `TypewriterSuspense`, `TypewriterErrorBoundary`, `useTypewriterServer`,
  `TypewriterServerComponent`, `useIsomorphicEffect`, `useConcurrentTypewriter`,
  `useTypewriterPerformanceMonitor`, `useSchedulerAwareAnimation`, `useReact19Features`,
  `typewriterStyles`, `typewriterKeyframes`, `createTypewriterBase` (now `createTypewriter`).
- Hook results `keyframes`, `styles`, `metrics`, `accessibilityProps`, `screenReaderAnnouncement`.
- Options `enableVirtualization`, `maxVisibleSegments`, `cursorWidth`, `ariaLive`, `ariaLabel`,
  `ariaDescribedBy`, `role`, `screenReaderText`, `announceCompletion`, `reducedMotionFallback`,
  `enableKeyboardControls`, `keyboardShortcuts`, `autoKeyboardHandling`, `manageFocus`,
  `focusOnComplete`.
- `isPaused()`; use `state.status === 'paused'`.
- Types `TypewriterBaseOptions` (now `TypewriterOptions`), `TypewriterBaseType` (now
  `TypewriterInstance`), `TextSegment` (now `TypewriterSegment`), `TypewriterStateUpdater`, and the
  option, return and props types of the removed hooks and components.

## 3.5.2 - 2025-06-16

- Documentation and example styling.

## 3.5.1 - 2025-06-14

- Test fixes and documentation links.

## 3.5.0 - 2025-06-13

- Documentation site with guides and examples.

## 3.4.2 - 2025-06-13

- Fixed animations stopping after the first character under React StrictMode.

## 3.4.1 - 2025-06-13

- Fixed package resolution in Vite and other bundlers.
- Fixed an infinite render loop.

## 3.4.0 - 2025-06-13

- Added accessibility options, keyboard controls and reduced-motion support.

## 3.3.0 - 2025-06-13

- Added concurrent and server rendering helpers.

## 3.2.1 - 2025-06-13

- Fixed deletions conflicting with typing that followed them.

## 3.2.0 - 2025-06-13

- Grouped equally styled characters into one element. Added `enableVirtualization` and `metrics`.

## 3.1.1 - 2025-06-13

- Dependency updates.

## 3.1.0 - 2025-06-13

- React 19 support.

## 3.0.0 - 2025-06-13

- Rewrite with React state instead of DOM manipulation. `useTypewriter` returns `elements` and
  `cursor` instead of a `ref`. Events renamed to `start`, `end` and `loop`.

## 2.x - 2024

- DOM-based implementation: `useTypewriter` returned a `ref` to attach to an element.
