# Basic Usage

Learn the fundamental concepts and methods of `use-typewriter-animation`.

## Hook Structure

The `useTypewriter` hook returns an object with these properties:

```tsx
const { 
  typewriter,           // Control object with methods
  elements,             // JSX elements to render
  cursor,               // Cursor component
  keyframes,            // CSS animations
  accessibilityProps,   // ARIA attributes
  screenReaderAnnouncement // Screen reader content
} = useTypewriter(config);
```

## Core Methods

### Type Text

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function TypeExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('Hello, World!')
      .type(' Welcome to React!')
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

### Pause Animation

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function PauseExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('Loading')
      .pauseFor(1000)
      .type('...')
      .pauseFor(500)
      .type(' Complete!')
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

### Delete Operations

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function DeleteExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('JavaScript Developer')
      .pauseFor(1000)
      .deleteWords(1)  // Delete "Developer"
      .type('React Expert')
      .pauseFor(1000)
      .deleteLetters(5) // Delete "Expert"
      .type('Enthusiast')
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

### New Lines

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function NewLineExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('Line 1')
      .newLine()
      .type('Line 2')
      .newLine()
      .type('Line 3')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

### Text Colors

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function ColorizeExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('Regular text, ')
      .colorize('#ef4444')
      .type('red text, ')
      .colorize('#3b82f6')
      .type('blue text')
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

## Method Chaining

All methods can be chained together:

```tsx
typewriter
  .type('Step 1')
  .pauseFor(1000)
  .newLine()
  .colorize('#3b82f6')
  .type('Step 2')
  .pauseFor(500)
  .deleteLetters(6)
  .type('Complete!')
  .start();
```

## Configuration Options

### Speed Control

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function SpeedExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 120,    // Slower typing
    deleteSpeed: 40,   // Faster deleting
  });

  useEffect(() => {
    typewriter
      .type('Slow typing...')
      .pauseFor(1000)
      .deleteAll()
      .type('Done!')
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

### Cursor Styles

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function CursorExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    cursorStyle: 'block',
    cursorColor: '#ef4444',
  });

  useEffect(() => {
    typewriter.type('Block cursor style').start();
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

Available cursor styles:
- `'bar'` (default) - Vertical line
- `'block'` - Solid block
- `'underline'` - Underscore

## Event Handling

```tsx
typewriter
  .type('Loading...')
  .on('end', () => {
    console.log('Animation completed!');
  })
  .start();
```

## Complete Example

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function CompleteExample() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    deleteSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('Hello! I am a ')
      .colorize('#3b82f6')
      .type('React')
      .colorize('#000000')
      .type(' developer')
      .pauseFor(2000)
      .newLine()
      .type('Welcome to my ')
      .colorize('#ef4444')
      .type('awesome')
      .colorize('#000000')
      .type(' website!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ 
        fontSize: '1.2rem', 
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
        lineHeight: '1.6'
      }}>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

## Next Steps

- [API Reference](../api/use-typewriter) - Complete API documentation
- [Configuration](../api/configuration) - All configuration options
- [Examples](/examples) - More complex examples