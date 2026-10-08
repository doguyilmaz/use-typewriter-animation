---
title: Accessibility
description: What screen readers hear, reduced motion, and pausing long animations.
---

# Accessibility

## What the library does

- The cursor is `aria-hidden`, so it is never read out.
- With `prefers-reduced-motion: reduce`, text appears at once instead of character by character.
  Pauses are kept, so a sequence still changes at the same moments, and a loop keeps looping. Set
  `respectReducedMotion: false` to opt out.
- The cursor does not blink when the user prefers reduced motion. Otherwise it blinks while the
  text is not changing; set `enableCursor: false` if that is a problem.
- Nothing is announced. Typed text is not an `aria-live` region, because a live region would read
  out every character.

## Give screen readers the full text

A screen reader reads the text that is on screen when it gets there, which may be half a word. When
the animated text carries meaning, put the full text in a visually hidden element and hide the
animation:

```tsx
<h1>
  <span className='sr-only'>I build websites, apps and games</span>
  <Typewriter aria-hidden sequence={['websites', 1500, 'apps', 1500, 'games']} />
</h1>
```

`sr-only` is the usual visually-hidden class (Tailwind ships one):

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
```

## Let people pause long animations

Content that moves for more than five seconds needs a way to pause, stop or hide it
([WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)). Looping
animations qualify. `<Typewriter>` has no controls, so use the hook and a button:

```tsx
function Headline() {
  const { typewriter, state, elements, cursor } = useTypewriter({
    sequence: ['websites', 1500, 'apps', 1500, 'games', 1500],
    loop: true,
  });
  const paused = state.status === 'paused';

  return (
    <>
      <h1>
        <span className='sr-only'>I build websites, apps and games</span>
        <span aria-hidden='true'>
          I build {elements}
          {cursor}
        </span>
      </h1>
      <button type='button' onClick={() => (paused ? typewriter.resume() : typewriter.pause())}>
        {paused ? 'Play animation' : 'Pause animation'}
      </button>
    </>
  );
}
```

The [hero example](../showcase/hero.mdx) does the same.
