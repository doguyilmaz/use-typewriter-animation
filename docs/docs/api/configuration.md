# Configuration

Detailed guide to all configuration options available in `use-typewriter-animation`.

## Overview

The `useTypewriter` hook accepts an optional configuration object:

```tsx
const { typewriter, elements, cursor, keyframes } = useTypewriter({
  // Configuration options here
});
```

## Animation Speed

### `typeSpeed`

Controls how fast characters are typed.

- **Type**: `number`
- **Default**: `50`
- **Unit**: Milliseconds per character

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function SpeedDemo() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 120, // Slower typing
  });

  useEffect(() => {
    typewriter.type('Slow and steady typing...').start();
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

### `deleteSpeed`

Controls how fast characters are deleted.

- **Type**: `number`
- **Default**: `30`
- **Unit**: Milliseconds per character

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function DeleteSpeedDemo() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    deleteSpeed: 20, // Fast deletion
  });

  useEffect(() => {
    typewriter
      .type('This text will be deleted quickly')
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

## Cursor Settings

### `cursorStyle`

Changes the appearance of the cursor.

- **Type**: `'bar' | 'block' | 'underline'`
- **Default**: `'bar'`

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function CursorStyleDemo() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    cursorStyle: 'block',
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

### `cursorColor`

Sets the color of the cursor.

- **Type**: `string`
- **Default**: `'#000'`
- **Accepts**: Any valid CSS color value

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function CursorColorDemo() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    cursorStyle: 'bar',
    cursorColor: '#ef4444',
  });

  useEffect(() => {
    typewriter.type('Red cursor color').start();
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

## Behavior Options

### `loop`

Enables continuous looping of the animation.

- **Type**: `boolean`
- **Default**: `false`

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function LoopDemo() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    loop: true,
  });

  useEffect(() => {
    typewriter
      .type('This loops')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
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

## Accessibility Options

### `respectReducedMotion`

Honors the user's preference for reduced motion.

- **Type**: `boolean`
- **Default**: `true`
- **Behavior**: When `true`, disables animations if user has `prefers-reduced-motion: reduce`

```tsx
const { typewriter } = useTypewriter({
  respectReducedMotion: true, // Recommended for accessibility
});
```

### `ariaLabel`

Provides an accessible label for screen readers.

- **Type**: `string`
- **Default**: `undefined`

```tsx
const { typewriter, accessibilityProps } = useTypewriter({
  ariaLabel: 'Welcome message animation',
});

return (
  <div {...accessibilityProps}>
    {/* content */}
  </div>
);
```

### `announceCompletion`

Announces to screen readers when the animation completes.

- **Type**: `boolean`
- **Default**: `false`

```tsx
const { typewriter, screenReaderAnnouncement } = useTypewriter({
  announceCompletion: true,
});

return (
  <div>
    {elements}
    {cursor}
    {screenReaderAnnouncement}
  </div>
);
```

## Interaction Options

### `enableKeyboardControls`

Enables keyboard shortcuts for controlling the animation.

- **Type**: `boolean`
- **Default**: `false`
- **Shortcuts**:
  - `Space`: Play/Pause
  - `Escape`: Stop
  - `R`: Restart

```tsx
const { typewriter } = useTypewriter({
  enableKeyboardControls: true,
});
```

## Performance Options

### `enableVirtualization`

Enables virtualization for better performance with large amounts of text.

- **Type**: `boolean`
- **Default**: `false`
- **Use case**: When typing very long content (1000+ characters)

```tsx
const { typewriter } = useTypewriter({
  enableVirtualization: true,
  maxVisibleSegments: 50,
});
```

### `maxVisibleSegments`

Limits the number of visible text segments when virtualization is enabled.

- **Type**: `number`
- **Default**: `100`
- **Note**: Only applies when `enableVirtualization` is `true`

## Complete Configuration Example

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function CompleteConfigDemo() {
  const { 
    typewriter, 
    elements, 
    cursor, 
    keyframes, 
    accessibilityProps,
    screenReaderAnnouncement 
  } = useTypewriter({
    // Speed settings
    typeSpeed: 80,
    deleteSpeed: 40,
    
    // Cursor settings
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
    
    // Behavior
    loop: false,
    
    // Accessibility
    respectReducedMotion: true,
    ariaLabel: 'Demo typewriter animation',
    announceCompletion: true,
    
    // Interaction
    enableKeyboardControls: false,
    
    // Performance (not needed for this small example)
    enableVirtualization: false,
  });

  useEffect(() => {
    typewriter
      .type('Fully configured ')
      .colorize('#3b82f6')
      .type('typewriter')
      .colorize('#000000')
      .type(' animation!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div 
        {...accessibilityProps}
        style={{ fontSize: '1.2rem', fontFamily: 'monospace' }}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
}
```

## Performance Recommendations

### Small to Medium Text (< 500 characters)
```tsx
const config = {
  typeSpeed: 50,
  enableVirtualization: false,
};
```

### Large Text (500-2000 characters)
```tsx
const config = {
  typeSpeed: 30,
  enableVirtualization: true,
  maxVisibleSegments: 50,
};
```

### Very Large Text (> 2000 characters)
```tsx
const config = {
  typeSpeed: 20,
  enableVirtualization: true,
  maxVisibleSegments: 25,
};
```

## Mobile Optimization

```tsx
const [isMobile, setIsMobile] = React.useState(false);

useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);

const config = {
  typeSpeed: isMobile ? 80 : 50,     // Slower on mobile
  enableKeyboardControls: !isMobile, // Disable on mobile
  respectReducedMotion: true,         // Always respect accessibility
};
```

## Next Steps

- [Hook API](./use-typewriter) - Complete method documentation
- [TypeScript Types](./types) - Type definitions
- [Examples](/examples) - Real-world usage examples