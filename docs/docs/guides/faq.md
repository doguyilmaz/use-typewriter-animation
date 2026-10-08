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

Two things are inline: the cursor's `<style>` element and, in server-rendered HTML, the cursor's
`style` attribute. Colors and highlights are set from JavaScript, which `style-src` does not block.
The stylesheet never changes, so allow it by hash: the browser's CSP error shows the `'sha256-…'`
value to add. A blocked attribute only loses a custom `cursorColor` and `cursorBlinkSpeed` on the
server-rendered cursor; allow `'unsafe-inline'` in `style-src-attr` to keep them, or set
`enableCursor: false` and draw your own cursor.

## Which browsers are supported?

Any browser React 18 supports. Characters are split with `Intl.Segmenter` (Chrome 87, Safari 14.1,
Firefox 125). Without it, they fall back to code points, so some emoji and flags are typed in
pieces.

## Can I use it with React Native?

`<Typewriter>` and the hook's `elements` and `cursor` render DOM elements. The hook's `state` does
not: render `state.text` in a `<Text>` and set `enableCursor: false`. Reduced motion is not detected
outside the browser, so set `typeSpeed: 0` yourself when it is on.

## Does it work without React?

`createTypewriter` uses no React APIs: subscribe to it and render however you like. See
[Without React state](../basics/patterns.mdx#without-react-state). The package still lists React as
a peer dependency.
