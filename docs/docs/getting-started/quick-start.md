# Quick Start

Get up and running with your first typewriter animation in 5 minutes!

## Basic Setup

### 1. Install the Package

```bash
# bun (recommended)
bun add use-typewriter-animation

# or with npm
npm install use-typewriter-animation
```

### 2. Import and Use

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function QuickStart() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter.type('Hello, World!').pauseFor(1000).deleteLetters(9).type('React!').start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

That's it! You have a working typewriter animation.

## Essential Elements

Every typewriter component needs these three parts:

1. **Keyframes**: `<style>{keyframes}</style>` - CSS animations
2. **Elements**: `{elements}` - The typed text
3. **Cursor**: `{cursor}` - The blinking cursor

## Common Patterns

### Auto-start Animation

```tsx
useEffect(() => {
  typewriter.type('Your message here').start(); // Don't forget .start()!
}, []);
```

### Continuous Loop

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function LoopExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    loop: true,
  });

  useEffect(() => {
    typewriter
      .type('Frontend Developer')
      .pauseFor(2000)
      .deleteAll()
      .type('React Enthusiast')
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ fontSize: '1.3rem', fontFamily: 'monospace' }}>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

### Colorful Text

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function ColorExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('This is ')
      .colorize('#3b82f6')
      .type('blue')
      .colorize('#ef4444')
      .type(' and red')
      .colorize('#10b981')
      .type(' text!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ fontSize: '1.2rem', fontFamily: 'monospace' }}>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

## Common Issues

### Animation Not Working?

Make sure you include the keyframes:

```tsx
// ❌ Missing keyframes
return (
  <div>
    {elements}
    {cursor}
  </div>
);

// ✅ Include keyframes
return (
  <>
    <style>{keyframes}</style>
    <div>
      {elements}
      {cursor}
    </div>
  </>
);
```

### Animation Not Starting?

Don't forget to call `.start()`:

```tsx
// ❌ Missing .start()
typewriter.type('Hello');

// ✅ Call .start()
typewriter.type('Hello').start();
```

## Next Steps

- [Basic Usage](./basic-usage) - Learn all the methods
- [API Reference](../api/use-typewriter) - Complete documentation
- [Examples](/examples) - More complex examples
