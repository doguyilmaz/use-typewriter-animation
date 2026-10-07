---
title: SSR, Server Components and React Compiler
---

# SSR, Server Components and React Compiler

## Server rendering

On the server, the typewriter renders an empty text and the cursor. Typing starts once the page has
hydrated, and hydration never mismatches because the first client render is the same.

## Server Components

The package starts with `'use client'`. You can render `<Typewriter>` directly from a Server
Component, such as a Next.js App Router page:

```tsx title="app/page.tsx"
import { Typewriter } from 'use-typewriter-animation';

export default function Page() {
  return <Typewriter as='h1' sequence={['Rendered on the server', 1000, 'Typed on the client']} />;
}
```

The hook runs only in Client Components, like any hook.

## React Compiler

`useTypewriter` and `<Typewriter>` follow the Rules of React and compile with React Compiler without
bailouts. This is checked on every change in two ways: `react-compiler-marker` reports on the
source, and the whole test suite also runs against the source compiled by `babel-plugin-react-compiler`
with `panicThreshold: 'all_errors'`.

The package ships uncompiled. It needs no `react-compiler-runtime`, so the same build works on
React 18 and 19, with or without the compiler in your app.

Read the state from the hook's `state`. Do not call `typewriter.getState()` during render: the
compiler memoizes on `typewriter`, which never changes, so the value would go stale.

## Performance

- The hook subscribes through `useSyncExternalStore`. A component re-renders once per visible change
  and not in between, including during pauses.
- Text is stored as runs of equally styled characters. Plain text is a single text node; each color
  or highlight adds one `<span>`.
- Each instance has at most one timer. A paused, stopped or unmounted instance has none.
- Speeds faster than about 16 ms per character type several characters per step, so a fast stream
  does not cause more than one render per frame.
- `<Typewriter>` keeps its re-renders to itself. With the hook, call it from a small component.
