# use-typewriter-animation

A modern, performant React hook for creating typewriter animation effects with full TypeScript support, SSR compatibility, and comprehensive accessibility features.

[![npm version](https://badge.fury.io/js/use-typewriter-animation.svg)](https://badge.fury.io/js/use-typewriter-animation)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🎯 **WCAG 2.1 AA Compliant & Accessible**

- **Complete ARIA support** with live regions and semantic roles
- **Keyboard navigation** with customizable shortcuts (Space, Escape, R keys)
- **Reduced motion support** with automatic `prefers-reduced-motion` detection
- **Screen reader optimizations** with progressive announcements
- **High contrast mode support** for visual accessibility

### ⚡ **Modern React Features**

- **React 19 compatible** with concurrent features and transitions
- **Server-side rendering (SSR/RSC)** with hydration-safe state management
- **Suspense integration** for async operations and loading states
- **Advanced error boundaries** with retry functionality

### 🚀 **Performance Optimized**

- **50%+ faster rendering** through state-driven updates vs DOM manipulation
- **Virtualization support** for handling extremely long text sequences
- **Memory-safe** with proper cleanup and no memory leaks
- **Hardware-accelerated CSS** animations with `will-change` optimizations

### 🎨 **Rich Text Effects**

- Customizable typing and deleting speeds
- Text styling with colorization and highlight transitions
- Looping functionality for continuous animations
- Flexible cursor styles (block, underline, bar) with adjustable properties
- Smooth text transitions and effects

## 📦 Installation

```bash
# Using npm
npm install use-typewriter-animation

# Using Yarn
yarn add use-typewriter-animation

# Using Bun
bun add use-typewriter-animation
```

## 🚀 Quick Start

```tsx
import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const MyTypewriterComponent = () => {
  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      // Visual settings
      typeSpeed: 50,
      cursorStyle: 'bar',
      cursorColor: 'currentColor',

      // Accessibility settings
      ariaLabel: 'Welcome message typewriter',
      respectReducedMotion: true,
      enableKeyboardControls: true,
      announceCompletion: true,
    });

  // ✅ Simple and clean - works perfectly with React StrictMode!
  useEffect(() => {
    typewriter
      .on('start', () => console.log('Typing started!'))
      .on('end', () => console.log('Typing finished!'))
      .type('Hello, ')
      .colorize('red')
      .type('this will be red.', { speed: 80 })
      .pauseFor(500)
      .deleteLetters(5)
      .colorize('blue')
      .type(" Now it's blue!")
      .start();
  }, []); // Empty dependency array - works perfectly!

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        style={{
          padding: '1rem',
          border: '2px solid currentColor',
          borderRadius: '8px',
        }}
      >
        <div style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.5rem' }}>
          Controls: Space (pause/resume), Escape (skip), R (reset)
        </div>
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
};
```

## 🎯 Accessibility Features

### ARIA Support

```tsx
const { accessibilityProps, screenReaderAnnouncement } = useTypewriter({
  ariaLive: 'polite',
  ariaLabel: 'Status message typewriter',
  role: 'status',
  announceCompletion: true,
  screenReaderText: 'Complete text for screen readers',
});
```

### Keyboard Navigation

```tsx
const { typewriter } = useTypewriter({
  enableKeyboardControls: true,
  autoKeyboardHandling: true,
  keyboardShortcuts: {
    pause: ['Space', ' '],
    skip: ['Escape', 'Enter'],
    reset: ['KeyR'],
  },
});

// Manual control methods
typewriter.pause(); // Pause animation
typewriter.resume(); // Resume animation
typewriter.skip(); // Skip to end
typewriter.reset(); // Reset to start
const paused = typewriter.isPaused(); // Check state
```

### Reduced Motion Support

```tsx
const { typewriter, state } = useTypewriter({
  respectReducedMotion: true, // Honor user preferences
  reducedMotionFallback: 'instant', // Show text immediately
});

// Access motion state
const isReducedMotion = state.reducedMotion;
```

## 🚀 Advanced Features

### Performance Optimization

```tsx
const { typewriter, metrics } = useTypewriter({
  enableVirtualization: true,
  maxVisibleSegments: 100,
});

console.log(`Segments: ${metrics.totalSegments}, Visible: ${metrics.visibleSegments}`);
```

### React 19 Concurrent Features

```tsx
import { useTypewriterAsync } from 'use-typewriter-animation';

const { typewriter, isPending, deferredState } = useTypewriterAsync({
  enableConcurrentRendering: true,
  useDeferredUpdates: true,
  transitionPriority: 'user-visible',
});
```

### Server-Side Rendering

```tsx
import { useTypewriterServer } from 'use-typewriter-animation';

const { typewriter, isHydrating, isServer } = useTypewriterServer({
  hydrateImmediately: true,
  ssrFallbackText: 'Loading...',
  autoStartAfterHydration: true,
});
```

## 📚 API Reference

### Core Hook: `useTypewriter(options)`

Returns:

```tsx
{
  typewriter: TypewriterBaseType;           // Control methods
  state: TypewriterState;                   // Current state
  elements: JSX.Element[];                  // Rendered text segments
  cursor: JSX.Element | null;               // Cursor element
  styles: typeof typewriterStyles;          // CSS-in-JS styles
  keyframes: string;                        // CSS keyframes
  metrics: PerformanceMetrics;              // Performance data
  accessibilityProps: AriaAttributes;      // ARIA attributes
  screenReaderAnnouncement: JSX.Element;   // Screen reader content
}
```

### Configuration Options

| Option             | Type                              | Description                    | Default   |
| ------------------ | --------------------------------- | ------------------------------ | --------- |
| `typeSpeed`        | number                            | Typing speed in milliseconds   | `30`      |
| `deleteSpeed`      | number                            | Deleting speed in milliseconds | `30`      |
| `loop`             | boolean                           | Whether animation should loop  | `false`   |
| `cursorStyle`      | `'bar' \| 'block' \| 'underline'` | Cursor appearance              | `'bar'`   |
| `cursorColor`      | string                            | Cursor color                   | `'black'` |
| `cursorBlinkSpeed` | number                            | Cursor blink speed in ms       | `500`     |
| `enableCursor`     | boolean                           | Show cursor                    | `true`    |

### Accessibility Options

| Option                   | Type                               | Description                     | Default     |
| ------------------------ | ---------------------------------- | ------------------------------- | ----------- |
| `ariaLive`               | `'polite' \| 'assertive' \| 'off'` | ARIA live region type           | `'polite'`  |
| `ariaLabel`              | string                             | ARIA label for the typewriter   | `undefined` |
| `role`                   | `'status' \| 'log' \| 'alert'`     | ARIA role                       | `'status'`  |
| `respectReducedMotion`   | boolean                            | Honor reduced motion preference | `true`      |
| `enableKeyboardControls` | boolean                            | Enable keyboard navigation      | `false`     |
| `announceCompletion`     | boolean                            | Announce when typing completes  | `false`     |

### Performance Options

| Option                 | Type    | Description                         | Default |
| ---------------------- | ------- | ----------------------------------- | ------- |
| `enableVirtualization` | boolean | Enable virtualization for long text | `false` |
| `maxVisibleSegments`   | number  | Max segments when virtualized       | `100`   |

### Typewriter Control Methods

```tsx
typewriter
  .type(text: string, options?: TypeOptions)     // Type text
  .deleteLetters(count: number)                  // Delete characters
  .deleteWords(count: number)                    // Delete words
  .deleteAll()                                   // Delete everything
  .pauseFor(duration: number)                    // Pause animation
  .colorize(color: string)                       // Change text color
  .highlight(start, length, style)               // Highlight text
  .newLine()                                     // Insert line break
  .start()                                       // Start animation
  .stop()                                        // Stop animation
  .pause()                                       // Pause (keyboard)
  .resume()                                      // Resume (keyboard)
  .skip()                                        // Skip to end (keyboard)
  .reset()                                       // Reset (keyboard)
  .isPaused()                                    // Check if paused
```

### Event Handling

```tsx
typewriter
  .on('start', () => console.log('Animation started'))
  .on('end', () => console.log('Animation completed'))
  .on('loop', () => console.log('Loop iteration'));
```

## 🧪 Testing Accessibility

```tsx
import {
  AccessibilityTestUtils,
  AccessibilityTestHelpers,
  AccessibilityTestScenarios,
} from 'use-typewriter-animation/test/AccessibilityTest';

// Automated accessibility audit
const audit = AccessibilityTestUtils.auditAccessibility(container);
console.log(`Accessibility score: ${audit.percentage}%`);

// Jest/Vitest integration
test('meets accessibility requirements', () => {
  const { container } = render(<TypewriterComponent />);
  AccessibilityTestHelpers.expectAccessibleTypewriter(container);
});

// Use pre-built test scenarios
<AccessibilityTestScenarios.ComprehensiveAccessibilityTest />;
```

## 📊 Bundle Size

- **Core library**: ~6.1KB ESM (tree-shakable)
- **With accessibility features**: ~8.9KB ESM
- **With React 19 features**: ~12.5KB ESM
- **Accessibility testing utilities**: ~4.2KB ESM (optional)

## 🔄 Migration Guide

### From v2.x to v3.0+

**Before (v2.x):**

```tsx
const { ref, typewriter } = useTypewriter();
return <div ref={ref} />;
```

**After (v3.0+):**

```tsx
const { typewriter, elements, cursor, keyframes } = useTypewriter();
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

## 🎯 Browser Support

- **React**: 16.8+ (Hooks support required)
- **TypeScript**: 4.5+ (optional but recommended)
- **Browsers**: Modern browsers (IE11+ with polyfills)
- **Node.js**: 18.0+ for development
- **Assistive Technologies**: NVDA, JAWS, VoiceOver, Dragon, TalkBack

## 📖 Documentation

- [ACCESSIBILITY.md](./ACCESSIBILITY.md) - Comprehensive accessibility guide
- [CHANGELOG.md](./CHANGELOG.md) - Version history and migration guides
- [ROADMAP.md](./ROADMAP.md) - Development roadmap and future plans

## 🧪 Troubleshooting

### Common Issues

**Import/Resolution Errors:**

```bash
# Error: Failed to resolve entry for package "use-typewriter-animation"
# Solution: Update to v3.4.1+ which includes proper build artifacts
npm install use-typewriter-animation@latest
```

**Infinite Re-renders:**

```tsx
// ❌ Don't include typewriter in dependency array
useEffect(() => {
  typewriter.type('Hello').start();
}, [typewriter]); // This causes infinite loops!

// ✅ Use empty dependency array - works perfectly!
useEffect(() => {
  typewriter.type('Hello').start();
}, []); // Works perfectly even in React StrictMode
```

**Bundler Compatibility:**

```json
// For older bundlers, ensure proper module resolution
{
  "resolve": {
    "mainFields": ["module", "main"]
  }
}
```

**TypeScript Errors:**

```tsx
// If you get type errors, ensure you have React types installed
npm install --save-dev @types/react @types/react-dom
```

### Performance Tips

- Use `enableVirtualization: true` for long text sequences (1000+ characters)
- Set `respectReducedMotion: true` for better accessibility
- Use `maxVisibleSegments` to limit DOM nodes for very long animations

## 🛠️ Development

```bash
# Install dependencies
bun install

# Build the project
bun run build

# Run tests
bun run test

# Watch for changes
bun run watch

# Format code
bun run format
```

## 📄 License

MIT © [Dogu Yilmaz](https://github.com/doguyilmaz)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and open issues or submit pull requests on [GitHub](https://github.com/doguyilmaz/use-typewriter-animation).

## 🙏 Acknowledgments

- Built with modern React patterns and accessibility best practices
- Inspired by the need for inclusive, performant typewriter animations
- Community feedback and contributions make this library better
