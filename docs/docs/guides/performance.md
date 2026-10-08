---
title: Performance and React Compiler
description: How rendering works, how to keep it cheap, and React Compiler support.
---

# Performance and React Compiler

## How rendering works

- The hook subscribes to the engine with `useSyncExternalStore`. A component re-renders once per
  visible change and not in between, including while it waits in `pauseFor` or is paused.
- Text is stored as runs of equally styled characters. Plain text is one DOM text node, and styled
  runs are `<span>`s. Long text does not mean many elements.
- Each typewriter has at most one timer. A paused, stopped, finished or unmounted typewriter has
  none.
- Below about 16 ms per character, several characters are written per step, so there is at most
  about one render per frame however fast the speed is.

## Keep re-renders small

The component that calls `useTypewriter` re-renders for every character. Keep it small, or use
`<Typewriter>`, which keeps those renders inside itself:

```tsx
function Page() {
  // Page renders once; only the Typewriter re-renders while it types.
  return (
    <>
      <Typewriter as='h1' sequence={['Hello', 1000, 'Hello, world']} />
      <ExpensiveContent />
    </>
  );
}
```

## React Compiler

`useTypewriter` and `<Typewriter>` follow the Rules of React and compile without bailouts. Every
change is checked in two ways: `react-compiler-marker` reports on the source, and the test suite also
runs against the source compiled by `babel-plugin-react-compiler` with `panicThreshold: 'all_errors'`.
The examples on this site compile without bailouts too.

The package ships uncompiled. It needs no `react-compiler-runtime`, so the same build works on React
18 and 19, with or without the compiler in your app.

Render from the hook's `state`. Do not call `typewriter.getState()` during render: the compiler
memoizes on `typewriter`, which never changes, so the value would go stale.

## Bundle size

The whole package is about 2.8 kB gzipped and has no dependencies. Bundlers that tree-shake ES
modules drop `<Typewriter>` if you only use the hook.
