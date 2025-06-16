# use-typewriter-animation

A modern, performant React hook for creating typewriter animation effects with full TypeScript support, accessibility features, and React 19 compatibility.

[![npm version](https://badge.fury.io/js/use-typewriter-animation.svg)](https://www.npmjs.com/package/use-typewriter-animation)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/use-typewriter-animation.svg)](https://www.npmjs.com/package/use-typewriter-animation)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/use-typewriter-animation?label=gzipped)](https://bundlephobia.com/package/use-typewriter-animation)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-16.8+-61DAFB.svg)](https://reactjs.org/)
[![GitHub Stars](https://img.shields.io/github/stars/doguyilmaz/use-typewriter-animation.svg?style=social)](https://github.com/doguyilmaz/use-typewriter-animation/stargazers)

## ✨ Features

- 🎯 **Modern React**: Built for React 16.8+ with full React 19 support
- 🔧 **TypeScript First**: Complete type safety and IntelliSense
- ♿ **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- 🚀 **Performance**: Optimized with virtualization for large text (~15KB bundle)
- 🎨 **Flexible**: Rich styling and animation control
- 📱 **Responsive**: Mobile-friendly with touch support
- 🔄 **Server-Side**: SSR and RSC compatible
- 🎮 **Interactive**: Keyboard controls and event handling
- 🌐 **Universal**: Works in all modern browsers

## 📦 Installation

```bash
# bun (recommended)
bun add use-typewriter-animation

# npm
npm install use-typewriter-animation

# yarn
yarn add use-typewriter-animation

# pnpm
pnpm add use-typewriter-animation
```

## 🚀 Quick Start

```jsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function App() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter.type('Hello, World!').pauseFor(1000).deleteLetters(6).type('React!').start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

## 🎯 Key Examples

### Basic Animation

```jsx
const { typewriter, elements, cursor, keyframes } = useTypewriter({
  typeSpeed: 50,
  cursorStyle: 'bar',
});

useEffect(() => {
  typewriter
    .type('Welcome to React!')
    .pauseFor(2000)
    .deleteAll()
    .type('Built with TypeScript!')
    .start();
}, []);
```

### Colorful Text

```jsx
useEffect(() => {
  typewriter
    .type('This is ')
    .colorize('#3b82f6')
    .type('blue text')
    .colorize('#ef4444')
    .type(' and red text')
    .start();
}, []);
```

### Accessibility First

```jsx
const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
  useTypewriter({
    respectReducedMotion: true,
    ariaLabel: 'Welcome message',
    announceCompletion: true,
  });

return (
  <>
    <style>{keyframes}</style>
    <div {...accessibilityProps}>
      {elements}
      {cursor}
      {screenReaderAnnouncement}
    </div>
  </>
);
```

## 📚 Documentation

### 🚀 Getting Started

- 📖 [Quick Start Guide](https://doguyilmaz.github.io/use-typewriter-animation/docs/getting-started/quick-start) - Get up and running in minutes
- ⚙️ [Installation & Setup](https://doguyilmaz.github.io/use-typewriter-animation/docs/getting-started/installation) - Detailed installation guide
- 🎯 [Basic Usage](https://doguyilmaz.github.io/use-typewriter-animation/docs/getting-started/basic-usage) - Learn the fundamentals

### 🔧 API Reference

- 🎮 [useTypewriter Hook](https://doguyilmaz.github.io/use-typewriter-animation/docs/api/use-typewriter) - Complete API documentation
- 📝 [Type Definitions](https://doguyilmaz.github.io/use-typewriter-animation/docs/api/types) - TypeScript types and interfaces
- ⚛️ [React 19 Features](https://doguyilmaz.github.io/use-typewriter-animation/docs/api/configuration) - Modern React features

### 🎯 Feature Guides

- ♿ [Accessibility Guide](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/accessibility) - WCAG 2.1 compliance
- ⚡ [Performance Guide](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/performance) - Optimization techniques
- 🔧 [Troubleshooting](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/troubleshooting) - Common issues and solutions

### 📚 Examples

- 🎨 [Example Gallery](https://doguyilmaz.github.io/use-typewriter-animation/docs/examples) - Comprehensive examples
- 💻 [Live Examples](https://doguyilmaz.github.io/use-typewriter-animation/examples) - Interactive examples you can run

## ⚡ Performance

Optimized for production use:

- **Bundle Size**: 5.3KB gzipped (ESM) / 5.6KB gzipped (CJS)
- **Memory Efficient**: Virtualization for large text
- **Smooth Animations**: GPU-accelerated CSS
- **Zero Dependencies**: No external runtime dependencies

### Bundle Analysis

- **ESM Bundle**: 15KB raw → 5.3KB gzipped
- **CJS Bundle**: 16KB raw → 5.6KB gzipped

_Measurements taken with our actual build output. Run `bun run analyze` to verify these numbers yourself._

## ♿ Accessibility

Built with accessibility as a first-class citizen:

- ✅ WCAG 2.1 AA compliant
- ✅ Screen reader support with ARIA live regions
- ✅ Reduced motion support respects user preferences
- ✅ Keyboard navigation with customizable shortcuts
- ✅ Focus management for interactive elements
- ✅ Semantic HTML with proper ARIA attributes

## 🌐 Browser Support

- **Modern Browsers**: Chrome 88+ | Firefox 85+ | Safari 14+ | Edge 88+
- **Mobile**: iOS Safari 14+ | Android Chrome 88+
- **React**: 16.8+ | 17+ | 18+ | 19+ (full compatibility)

## 🔧 Essential Configuration

```jsx
const { typewriter } = useTypewriter({
  // Visual Settings
  typeSpeed: 50, // Typing speed (ms per character)
  deleteSpeed: 30, // Delete speed (ms per character)
  cursorStyle: 'bar', // 'bar' | 'block' | 'underline'
  cursorColor: '#000', // CSS color value

  // Accessibility
  respectReducedMotion: true, // Honor user preferences
  ariaLabel: 'Typewriter', // ARIA label
  announceCompletion: true, // Screen reader announcements

  // Performance
  enableVirtualization: true, // For large text
  maxVisibleSegments: 100, // Virtualization limit

  // Interaction
  enableKeyboardControls: true, // Keyboard shortcuts
  loop: false, // Continuous loop
});
```

## 🎮 Control Methods

```jsx
typewriter
  .type('Hello, World!') // Type text
  .pauseFor(1000) // Pause for duration
  .deleteLetters(5) // Delete characters
  .deleteWords(2) // Delete words
  .deleteAll() // Clear all text
  .colorize('#ff0000') // Change color
  .newLine() // Line break
  .on('end', callback) // Event listener
  .start(); // Start animation
```

## 🧪 Testing

```jsx
// Mock for tests
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn(() => ({ matches: false })),
});

test('typewriter animation', async () => {
  render(<TypewriterComponent />);
  await waitFor(() => {
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
```

## 🚨 Common Issues

### Animation Not Working?

```jsx
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

### Performance Issues?

```jsx
// ✅ Enable virtualization for large text
const { typewriter } = useTypewriter({
  enableVirtualization: true,
  maxVisibleSegments: 100,
});
```

[See full troubleshooting guide →](https://doguyilmaz.github.io/use-typewriter-animation/docs/guides/troubleshooting)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://doguyilmaz.github.io/use-typewriter-animation/docs/contributing/contributing) for details.

- 🐛 [Report Issues](https://github.com/doguyilmaz/use-typewriter-animation/issues)
- 💡 [Request Features](https://github.com/doguyilmaz/use-typewriter-animation/issues/new?template=feature_request.md)
- 📖 [Improve Docs](https://github.com/doguyilmaz/use-typewriter-animation/tree/main/docs)

## 📄 License

MIT © [Dogu Yilmaz](https://github.com/doguyilmaz)

## 🔗 Links

- 📚 [Full Documentation](https://doguyilmaz.github.io/use-typewriter-animation/)
- 🎯 [Examples](https://doguyilmaz.github.io/use-typewriter-animation/examples)
- 🐙 [GitHub](https://github.com/doguyilmaz/use-typewriter-animation)
- 📦 [npm](https://www.npmjs.com/package/use-typewriter-animation)

---

_Made with ❤️ for the React community_
