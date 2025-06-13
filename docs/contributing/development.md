# Development Setup Guide

This guide will help you set up a local development environment for `use-typewriter-animation`.

## 🚀 Quick Setup

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **Bun**: 1.0.0 or higher (recommended)
- **Git**: Latest version

### Installation

```bash
# Clone the repository
git clone https://github.com/doguyilmaz/use-typewriter-animation.git
cd use-typewriter-animation

# Install dependencies
bun install

# Run tests to verify setup
bun test

# Build the project
bun run build
```

## 📁 Project Structure

```
use-typewriter-animation/
├── src/                     # Source code
│   ├── index.ts            # Main entry point
│   ├── hooks/              # React hooks
│   ├── components/         # React components
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript type definitions
├── tests/                   # Test files
│   ├── setup.ts            # Test setup configuration
│   └── **/*.test.tsx       # Test files
├── examples/                # Usage examples
├── dist/                    # Built files (generated)
├── scripts/                 # Build and utility scripts
│   ├── esbuild.ts          # Build configuration
│   ├── version-bump.ts     # Version management
│   └── bundle-analysis.ts  # Bundle analysis
├── vitest.config.ts        # Test configuration
├── tsconfig.json           # TypeScript configuration
├── biome.json              # Code formatting configuration
├── package.json            # Package configuration
└── docs/                   # Documentation
    ├── README.md           # Documentation hub
    ├── ROADMAP.md          # Project roadmap
    ├── examples.md         # Example showcase
    ├── guides/             # Feature guides
    ├── api/                # API reference
    └── contributing/       # Contributor guides
```

## 🛠️ Development Commands

### Building

```bash
# Clean build artifacts
bun run clean

# Build the project
bun run build

# Build in watch mode
bun run watch

# Analyze bundle size
bun run analyze
```

### Testing

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Run tests with coverage
bun test --coverage

# Run tests with UI
bun test --ui

# Run specific test file
bun test TypewriterConcurrent.test.tsx
```

### Code Quality

```bash
# Format code
bun run format

# Lint code
bunx biome check .

# Fix linting issues
bunx biome check --apply .
```

### Package Management

```bash
# Create package for testing
bun run pack

# Version management (interactive)
bun run version

# Full release pipeline
bun run release
```

## 🔧 Configuration Files

### TypeScript Configuration (`tsconfig.json`)

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
    "noEmit": false,
    "declaration": true,
    "declarationMap": true,
    "outDir": "dist/types",
    "jsx": "react-jsx"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

### Build Configuration (`scripts/esbuild.ts`)

```typescript
// scripts/esbuild.ts configuration highlights
{
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2020'],
  format: 'esm', // or 'cjs'
  outdir: 'dist/esm', // or 'dist/cjs'
  external: ['react', 'react-dom'],
  plugins: [nodeExternals()]
}
```

### Test Configuration (`vitest.config.ts`)

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/', 'dist/'],
    },
  },
});
```

## 🧪 Testing Strategy

### Test Categories

1. **Unit Tests** - Individual function testing
2. **Integration Tests** - Component interaction testing
3. **Type Tests** - TypeScript compilation testing
4. **Accessibility Tests** - WCAG compliance testing

### Test Structure

Our tests focus on:

- **Structural validation** - Module imports/exports
- **Function signatures** - React hook conventions
- **TypeScript compliance** - Type safety
- **API surface validation** - Public interface stability
- **Browser API detection** - Feature detection logic

### Writing Tests

```tsx
import { describe, it, expect } from 'vitest';
import { useTypewriter } from '../src';

describe('useTypewriter', () => {
  it('should export the hook function', () => {
    expect(typeof useTypewriter).toBe('function');
  });

  it('should follow React hook naming convention', () => {
    expect(useTypewriter.name).toBe('useTypewriter');
  });
});
```

## 🚀 Build Process

### Development Build

```bash
bun run build
```

This creates:

- `dist/esm/` - ES modules
- `dist/cjs/` - CommonJS modules
- `dist/types/` - TypeScript declarations

### Production Build

The build process:

1. Cleans previous build artifacts
2. Runs TypeScript compiler for type definitions
3. Runs esbuild for ESM and CJS bundles
4. Generates source maps
5. Minifies output

### Bundle Analysis

```bash
bun run analyze
```

Provides detailed bundle size information:

- Raw bundle sizes
- Gzipped sizes
- Dependency analysis
- Tree-shaking effectiveness

## 🔍 Debugging

### Common Issues

1. **TypeScript errors**: Run `bun run types` to check
2. **Test failures**: Check `tests/setup.ts` configuration
3. **Build issues**: Verify `scripts/esbuild.ts` settings
4. **Import problems**: Check `src/index.ts` exports

### Debug Tools

```bash
# Check TypeScript compilation
bun run types

# Verbose test output
bun test --reporter=verbose

# Build with detailed output
DEBUG=* bun run build
```

### Browser DevTools

For debugging in examples:

1. Open browser DevTools
2. Go to Sources tab
3. Enable source maps
4. Set breakpoints in TypeScript files

## 📊 Performance Monitoring

### Bundle Size Targets

- **ESM**: ~5.3KB gzipped
- **CJS**: ~5.6KB gzipped
- **Types**: ~2KB

### Performance Testing

```tsx
// Example performance test
it('should handle large text efficiently', () => {
  const largeText = 'a'.repeat(10000);
  const startTime = performance.now();

  // Test your feature

  const endTime = performance.now();
  expect(endTime - startTime).toBeLessThan(100);
});
```

### Memory Profiling

```tsx
// Memory usage testing
it('should not leak memory', () => {
  const initialMemory = performance.memory?.usedJSHeapSize || 0;

  // Run your code multiple times

  const finalMemory = performance.memory?.usedJSHeapSize || 0;
  const memoryIncrease = finalMemory - initialMemory;

  expect(memoryIncrease).toBeLessThan(1024 * 1024); // 1MB threshold
});
```

## 🔧 IDE Setup

### VS Code

Recommended extensions:

- **TypeScript and JavaScript Language Features** (built-in)
- **Biome** - Code formatting and linting
- **Vitest** - Test runner integration
- **React Snippets** - React development helpers

### Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 🌐 Browser Testing

### Supported Browsers

- **Chrome**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **Edge**: 88+

### Testing Strategy

1. **Automated testing** with Vitest
2. **Manual testing** in target browsers
3. **Accessibility testing** with screen readers
4. **Performance testing** with DevTools

### Cross-browser Issues

Common issues and solutions:

- **CSS compatibility**: Use autoprefixer
- **JavaScript features**: Check caniuse.com
- **React compatibility**: Test with different React versions

## 📚 Resources

### Documentation

- [Contributing Guide](./contributing.md)
- [Testing Guide](./testing.md)
- [Release Process](./releases.md)

### External Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [esbuild Documentation](https://esbuild.github.io/)

---

**Need help?** Open an issue or discussion on GitHub!
