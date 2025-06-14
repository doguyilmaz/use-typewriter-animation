# Welcome

A modern, performant React hook for creating typewriter animation effects with full TypeScript support, accessibility features, and React 19 compatibility.

## ✨ Why Choose use-typewriter-animation?

- **🎯 Modern React**: Built for React 16.8+ with full React 19 support
- **🔧 TypeScript First**: Complete type safety and IntelliSense
- **♿ Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **🚀 Performance**: Optimized with virtualization (~5KB bundle)
- **🎨 Flexible**: Rich styling and animation control
- **📱 Responsive**: Mobile-friendly with touch support

## Quick Example

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function Demo() {
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

## What's Next?

- 📖 [Installation Guide](./getting-started/installation) - Set up the library
- 🚀 [Quick Start](./getting-started/quick-start) - Build your first animation
- 🎯 [Examples](./examples/basic/simple-typewriter) - See live examples in action
- 📚 [API Reference](./api/use-typewriter) - Explore all features
- 🤝 [Contributing](./contributing/contributing) - Help improve the library
- 🗺️ [Roadmap](./ROADMAP) - See what's planned
