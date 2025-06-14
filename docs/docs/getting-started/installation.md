# Installation

Get started with `use-typewriter-animation` in your React project.

## Package Installation

Choose your preferred package manager:

```bash
# npm
npm install use-typewriter-animation

# yarn
yarn add use-typewriter-animation

# pnpm
pnpm add use-typewriter-animation

# bun
bun add use-typewriter-animation
```

## Requirements

- **React**: 16.8+ (Hooks support required)
- **TypeScript**: 4.5+ (optional but recommended)
- **Node.js**: 16.0+ for development

## Bundle Size

- **ESM**: ~5.3KB gzipped
- **CJS**: ~5.6KB gzipped
- **Zero dependencies**

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
- iOS Safari 14+
- Android Chrome 88+

## Verification

Test your installation with this simple component:

```tsx
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function InstallationTest() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter();

  useEffect(() => {
    typewriter.type('Installation successful! 🎉').start();
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

If you see the typewriter animation above, you're all set! 🚀

## Next Steps

- [Quick Start](./quick-start) - Build your first animation
- [Basic Usage](./basic-usage) - Learn the fundamentals
- [Examples](/examples) - See live examples