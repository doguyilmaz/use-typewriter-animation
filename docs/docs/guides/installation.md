# Installation & Setup

Complete guide for installing and setting up `use-typewriter-animation` in your React project.

## 📦 Package Installation

### Choose Your Package Manager

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

### Version Requirements

- **React**: 16.8+ (Hooks support required)
- **TypeScript**: 4.5+ (optional but recommended)
- **Node.js**: 16.0+ for development

## 🔧 Project Setup

### TypeScript Configuration

If using TypeScript, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
```

### React 17+ JSX Transform

For modern React projects, ensure you're using the new JSX transform:

```tsx
// ✅ Modern - No React import needed
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function MyComponent() {
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

## 🛠️ Bundler Configuration

### Vite

No additional configuration needed. Vite works out of the box:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### Webpack

For custom Webpack setups:

```js
// webpack.config.js
module.exports = {
  resolve: {
    mainFields: ['module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
```

### Next.js

Works seamlessly with Next.js:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // For App Router
  },
};

module.exports = nextConfig;
```

### Create React App

No additional configuration needed:

```bash
npx create-react-app my-app --template typescript
cd my-app
npm install use-typewriter-animation
```

## 🧪 Testing Setup

### Jest Configuration

```js
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

### Setup File

```js
// src/setupTests.js
import '@testing-library/jest-dom';

// Mock matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock performance API
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByName: jest.fn(() => []),
    memory: {
      usedJSHeapSize: 1000000,
      totalJSHeapSize: 2000000,
      jsHeapSizeLimit: 4000000,
    },
  },
});
```

### Vitest Configuration

```js
// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
});
```

## 🌐 Browser Support

### Polyfills for Older Browsers

If you need to support older browsers:

```bash
npm install core-js regenerator-runtime
```

```js
// src/index.js (entry point)
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Feature Detection

```tsx
// utils/featureDetection.js
export const checkBrowserSupport = () => {
  const features = {
    intersectionObserver: 'IntersectionObserver' in window,
    requestAnimationFrame: 'requestAnimationFrame' in window,
    matchMedia: 'matchMedia' in window,
    customProperties: CSS.supports('color', 'var(--test)'),
  };

  const isSupported = Object.values(features).every(Boolean);

  return { isSupported, features };
};

// Component usage
function App() {
  const [browserSupported, setBrowserSupported] = useState(true);

  useEffect(() => {
    const { isSupported } = checkBrowserSupport();
    setBrowserSupported(isSupported);
  }, []);

  if (!browserSupported) {
    return <div>Your browser doesn't support all required features.</div>;
  }

  return <YourTypewriterComponent />;
}
```

## 📱 Mobile Setup

### Viewport Configuration

```html
<!-- public/index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
```

### Touch Optimization

```tsx
// Mobile-optimized component
function MobileTypewriter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: isMobile ? 60 : 40, // Slower on mobile
    enableKeyboardControls: !isMobile,
    respectReducedMotion: true,
  });

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontSize: isMobile ? '1rem' : '1.2rem',
          touchAction: 'manipulation', // Prevent zoom on double-tap
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

## 🔒 Security Considerations

### Content Security Policy (CSP)

If using CSP, allow inline styles for keyframes:

```html
<!-- Allow inline styles for animations -->
<meta http-equiv="Content-Security-Policy" content="style-src 'self' 'unsafe-inline';" />
```

Or use nonce-based CSP:

```tsx
function TypewriterWithNonce({ nonce }) {
  const { keyframes } = useTypewriter();

  return (
    <>
      <style nonce={nonce}>{keyframes}</style>
      {/* ... rest of component */}
    </>
  );
}
```

## 🚀 Performance Optimization

### Bundle Analysis

Check your bundle size:

```bash
# Using webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

# Using Vite
npm install --save-dev rollup-plugin-visualizer
```

### Tree Shaking

Ensure tree shaking is working:

```js
// ✅ Good - Tree-shakeable import
import { useTypewriter } from 'use-typewriter-animation';

// ❌ Bad - Imports entire library
import * as TypewriterLib from 'use-typewriter-animation';
```

### Code Splitting

Split typewriter components:

```tsx
import { lazy, Suspense } from 'react';

const TypewriterComponent = lazy(() => import('./TypewriterComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TypewriterComponent />
    </Suspense>
  );
}
```

## 🔧 Development Tools

### ESLint Configuration

```js
// .eslintrc.js
module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
};
```

### Prettier Configuration

```js
// .prettierrc.js
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
};
```

## 🐛 Troubleshooting Installation

### Common Issues

#### Module Resolution Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Or with yarn
rm -rf node_modules yarn.lock
yarn install
```

#### TypeScript Errors

```bash
# Install React types
npm install --save-dev @types/react @types/react-dom

# Check TypeScript version
npx tsc --version
```

#### Build Errors

```bash
# Check Node.js version
node --version

# Update to latest LTS
nvm install --lts
nvm use --lts
```

### Getting Help

If you encounter issues:

1. Check the [Troubleshooting Guide](./troubleshooting.md)
2. Search [GitHub Issues](https://github.com/doguyilmaz/use-typewriter-animation/issues)
3. Create a [minimal reproduction](https://codesandbox.io)
4. Ask in [GitHub Discussions](https://github.com/doguyilmaz/use-typewriter-animation/discussions)

## ✅ Verification

Test your installation:

```tsx
// Test component
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
      <div>
        {elements}
        {cursor}
      </div>
    </>
  );
}

export default InstallationTest;
```

If you see the typewriter animation, you're all set! 🚀

## 📚 Next Steps

- [Quick Start Guide](./quick-start.md) - Build your first animation
- [API Reference](../api/use-typewriter.md) - Explore all features
- [Examples](../examples.md) - See real-world implementations
- [Accessibility Guide](./accessibility.md) - Build inclusive animations
