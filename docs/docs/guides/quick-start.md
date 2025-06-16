# Quick Start Guide

Get up and running with `use-typewriter-animation` in minutes. This guide covers installation, basic usage, and your first typewriter animation.

## 📦 Installation

Choose your preferred package manager:

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

## 🚀 Your First Animation

### 1. Basic Setup

Create a simple typewriter animation:

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function HelloWorld() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter.type('Hello, World!').start();
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

### 2. Add Some Style

Customize the appearance:

```tsx
function StyledTypewriter() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('Welcome to ')
      .colorize('#3b82f6')
      .type('React')
      .colorize('')
      .type(' with TypeScript!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontSize: '2rem',
          fontFamily: 'monospace',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

### 3. Interactive Animation

Add delete operations and pauses:

```tsx
function InteractiveTypewriter() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  useEffect(() => {
    typewriter
      .type('I love JavaScript!')
      .pauseFor(1500)
      .deleteLetters(11) // Delete "JavaScript!"
      .type('TypeScript!')
      .pauseFor(1000)
      .deleteLetters(12) // Delete "TypeScript!"
      .type('React! 🚀')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ fontSize: '1.5rem', padding: '1rem' }}>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

## 🎯 Common Patterns

### Loop Animation

Create a continuous loop:

```tsx
function LoopingTypewriter() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    loop: true,
    typeSpeed: 80,
  });

  useEffect(() => {
    typewriter
      .type('Building amazing apps...')
      .pauseFor(2000)
      .deleteAll()
      .type('With React and TypeScript!')
      .pauseFor(2000)
      .deleteAll()
      .start();
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

### Multiple Colors

Use different colors for emphasis:

```tsx
function ColorfulTypewriter() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('Status: ')
      .colorize('#ef4444')
      .type('Error')
      .pauseFor(1000)
      .deleteLetters(5)
      .colorize('#f59e0b')
      .type('Warning')
      .pauseFor(1000)
      .deleteLetters(7)
      .colorize('#10b981')
      .type('Success! ✅')
      .start();
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

### Event Handling

React to animation events:

```tsx
function EventTypewriter() {
  const [status, setStatus] = useState('Ready');
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter
      .on('start', () => setStatus('Typing...'))
      .on('end', () => setStatus('Complete!'))
      .type('This animation has event listeners!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div>
        <div>Status: {status}</div>
        <div>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## ♿ Accessibility First

Always include accessibility features:

```tsx
function AccessibleTypewriter() {
  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      ariaLabel: 'Welcome message typewriter',
      respectReducedMotion: true,
      announceCompletion: true,
    });

  useEffect(() => {
    typewriter
      .type('Welcome to our accessible app!', {
        screenReaderText: 'Welcome to our accessible application!',
        announceCompletion: true,
      })
      .start();
  }, []);

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
}
```

## 🔧 Configuration Options

### Essential Options

```tsx
const { typewriter } = useTypewriter({
  // Speed settings
  typeSpeed: 50, // Typing speed (ms per character)
  deleteSpeed: 30, // Delete speed (ms per character)

  // Cursor settings
  cursorStyle: 'bar', // 'bar' | 'block' | 'underline'
  cursorColor: '#000', // Any CSS color
  enableCursor: true, // Show/hide cursor

  // Accessibility
  respectReducedMotion: true, // Honor user preferences
  ariaLabel: 'Typewriter animation',

  // Performance
  enableVirtualization: false, // For very long text
});
```

### Advanced Options

```tsx
const { typewriter } = useTypewriter({
  // Accessibility
  ariaLive: 'polite',
  role: 'status',
  announceCompletion: true,

  // Keyboard controls
  enableKeyboardControls: true,
  autoKeyboardHandling: true,

  // Performance
  enableVirtualization: true,
  maxVisibleSegments: 100,
});
```

## 🎨 Styling

### CSS-in-JS (Recommended)

```tsx
const containerStyle = {
  fontFamily: 'ui-monospace, monospace',
  fontSize: '1.2rem',
  lineHeight: 1.6,
  padding: '1rem',
  backgroundColor: '#1f2937',
  color: '#f9fafb',
  borderRadius: '8px',
  minHeight: '3rem',
};

return (
  <>
    <style>{keyframes}</style>
    <div style={containerStyle}>
      {elements}
      {cursor}
    </div>
  </>
);
```

### CSS Classes

```css
.typewriter-container {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  min-height: 4rem;
  display: flex;
  align-items: center;
}
```

```tsx
return (
  <>
    <style>{keyframes}</style>
    <div className='typewriter-container'>
      {elements}
      {cursor}
    </div>
  </>
);
```

## 🚨 Common Mistakes

### ❌ Forgetting Keyframes

```tsx
// Wrong - animations won't work
return (
  <div>
    {elements}
    {cursor}
  </div>
);

// Correct - include keyframes
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

### ❌ Missing Dependencies

```tsx
// Wrong - infinite re-renders
useEffect(() => {
  typewriter.type('Hello').start();
}); // No dependency array

// Correct - stable dependencies
useEffect(() => {
  typewriter.type('Hello').start();
}, []); // Empty dependency array
```

### ❌ Not Handling Cleanup

```tsx
// Better - cleanup on unmount
useEffect(() => {
  typewriter.type('Hello').start();

  return () => {
    typewriter.stop(); // Cleanup
  };
}, []);
```

## 📱 Responsive Design

Make your typewriter responsive:

```tsx
function ResponsiveTypewriter() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter.type('Responsive typewriter!').start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontSize: 'clamp(1rem, 4vw, 2rem)', // Responsive font size
          padding: 'clamp(1rem, 4vw, 2rem)',
          maxWidth: '100%',
          wordBreak: 'break-word',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

## 🎯 Next Steps

Now that you have the basics:

1. **Explore Examples** → [Example Gallery](../examples.md)
2. **Learn Accessibility** → [Accessibility Guide](./accessibility.md)
3. **Optimize Performance** → [Performance Guide](./performance.md)
4. **Advanced Features** → [API Reference](../api/use-typewriter.md)
5. **Advanced Configuration** → [Configuration Guide](../api/configuration.md)

## 💡 Tips for Success

- **Start Simple**: Begin with basic typing, then add features
- **Test Accessibility**: Always test with screen readers
- **Consider Performance**: Use virtualization for long text
- **Handle Edge Cases**: Test with reduced motion preferences
- **Use TypeScript**: Take advantage of full type safety

Happy typing! 🎉
