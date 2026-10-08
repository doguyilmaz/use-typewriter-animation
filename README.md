# use-typewriter-animation

Typewriter animations for React 18 and 19: a component, a hook and the engine behind them.
About 2.8 kB gzipped, no dependencies.

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

## The component

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

A loop that runs longer than five seconds needs a pause control
([WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)). `<Typewriter>` has
none, so use the hook for that, as shown in [Accessibility](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/accessibility).

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

`typewriter` never changes, and the hook resets it when the component unmounts, so StrictMode does
not type the text twice. The reset also removes `on()` listeners: add them in the effect that queues
the steps. To start over when a prop changes, reset in the cleanup:

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

## Documentation

- [Getting started](https://doguyilmaz.github.io/use-typewriter-animation/docs/intro)
- [Examples](https://doguyilmaz.github.io/use-typewriter-animation/docs/basics/sequences) and [showcase](https://doguyilmaz.github.io/use-typewriter-animation/docs/showcase/hero)
- [API reference](https://doguyilmaz.github.io/use-typewriter-animation/docs/api)
- [Accessibility](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/accessibility), [SSR and Next.js](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/ssr),
  [performance](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/performance) and [FAQ](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/faq)
- [Migrating from v3](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/migration)

## Development

```bash
bun install
bun run check   # lint, typecheck, tests (plain and compiled with React Compiler), build, smoke, size
bun run doctor  # react-doctor
bun run compiler  # react-compiler-marker report
```

CI also runs the tests on React 18. Releases go through the `Publish` workflow.

## License

[MIT](./LICENSE)
