---
title: FAQ
description: Answers to common questions and problems.
---

# FAQ

## The animation restarts or does not update when my props change

`<Typewriter>` reads `sequence` once, when it mounts. That keeps an inline array from restarting the
animation on every render. To show a different sequence, change the component's `key`. To follow a
changing value, use the hook with `stop()` and `typeTo()`, as in
[Retype when a value changes](../basics/patterns.mdx#retype-when-a-value-changes).

## My steps run twice

They should not: the hook resets the typewriter when the component unmounts, which includes the
extra mount StrictMode does in development. If you queue steps from an effect that re-runs, for
example because it depends on a prop, reset in the cleanup:

```tsx
useEffect(() => {
  typewriter.type(text).start();
  return () => {
    typewriter.reset();
  };
}, [typewriter, text]);
```

## The cursor does not blink

It does not blink while characters are typed or deleted, and never when the operating system asks
for reduced motion. Check the system setting, or the browser's rendering emulation.

## The text appears all at once

The user prefers reduced motion, so typing and deleting are instant and only pauses remain. Pass
`respectReducedMotion: false` to animate anyway.

## My Content Security Policy blocks the styles

The cursor uses an inline `<style>` and an inline `style` attribute, and colored text uses inline
`style` attributes. With a strict `style-src`, allow `'unsafe-inline'` for styles, or set
`enableCursor: false`, render your own cursor with your stylesheet, and avoid `colorize` and
`highlight`.

## Can I use it with React Native?

Not the hook or the component: they render DOM elements.

## Does it work without React?

Yes. `createTypewriter` is a plain engine with `subscribe` and `getState`. See
[Without React state](../basics/patterns.mdx#without-react-state).
