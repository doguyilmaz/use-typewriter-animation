# 🛠️ Development Setup Guide

This guide will help you set up your development environment for contributing to `use-typewriter-animation`.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **Bun** 1.0.0 or higher (recommended)
- **Git** for version control
- **VS Code** (recommended) with TypeScript support

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/your-username/use-typewriter-animation.git
# (replace 'your-username' with your GitHub username)
cd use-typewriter-animation

# Add the upstream remote
git remote add upstream https://github.com/doguyilmaz/use-typewriter-animation.git
```

### 2. Install Dependencies

```bash
# Install all dependencies using Bun (recommended)
bun install

# Or use npm if you prefer
npm install
```

### 3. Verify Setup

```bash
# Run tests to ensure everything works
bun test

# Build the project
bun run build

# Start the development watcher
bun run watch
```

## 📁 Project Structure

```
use-typewriter-animation/
├── src/                    # Source code
│   ├── Typewriter/        # Main typewriter components
│   │   ├── useTypewriter.tsx
│   │   ├── TypewriterConcurrent.tsx
│   │   ├── TypewriterAsync.tsx
│   │   └── TypewriterServer.tsx
│   └── index.ts           # Main exports
├── tests/                 # Test files
├── docs/                  # Documentation
├── examples/             # Usage examples
├── dist/                 # Built files (generated)
├── scripts/             # Build and utility scripts
│   ├── esbuild.ts       # Build configuration
│   ├── version-bump.ts  # Version management
│   └── bundle-analysis.ts # Bundle analysis
├── vitest.config.ts     # Test configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Package configuration
```

## 🔧 Development Scripts

### Core Development

```bash
# Start development with file watching
bun run watch

# Build the project
bun run build

# Clean build artifacts
bun run clean
```

### Testing

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test:watch

# Run tests with coverage
bun test:coverage

# Open test UI
bun test:ui

# Run specific test file
bun test Typewriter.test.tsx
```

### Code Quality

```bash
# Format code with Biome
bun run format

# Type checking
bun run types

# Bundle analysis
bun run analyze
```

### Release Process

```bash
# Version bump (interactive)
bun run version

# Full release pipeline
bun run release
```

## 🧪 Testing Environment

### Test Configuration

The project uses **Vitest** with **JSDOM** environment:

- **Test files**: `tests/*.test.tsx`
- **Setup file**: `tests/setup.ts`
- **Config**: `vitest.config.ts`

### Writing Tests

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTypewriter } from '../src';

describe('useTypewriter', () => {
  it('should type text progressively', () => {
    const { result } = renderHook(() => useTypewriter({ text: 'Hello' }));

    expect(result.current.displayText).toBe('');

    act(() => {
      // Trigger animation
    });

    expect(result.current.displayText).toBe('Hello');
  });
});
```

### Test Best Practices

- **Unit tests** for individual functions
- **Integration tests** for hook combinations
- **Type tests** for TypeScript safety
- **Performance tests** for critical paths
- **SSR tests** for server compatibility

## 🏗️ Build Process

### Build Pipeline

The project uses **esbuild** for fast builds:

1. **Clean** - Remove old build files
2. **Bundle** - Create ESM and CJS bundles
3. **Types** - Generate TypeScript declarations
4. **Verify** - Ensure build integrity

### Build Outputs

```
dist/
├── esm/           # ES modules
│   └── index.mjs
├── cjs/           # CommonJS modules
│   └── index.js
└── types/         # TypeScript declarations
    └── index.d.ts
```

### Bundle Configuration

```typescript
// scripts/esbuild.ts configuration highlights
{
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2020'],
  external: ['react', 'react-dom'],
  // ... more config
}
```

## 🔍 Debugging

### VS Code Setup

Add to `.vscode/launch.json`:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Tests",
  "program": "${workspaceFolder}/node_modules/vitest/vitest.mjs",
  "args": ["run", "--reporter=verbose"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

### Chrome DevTools

For browser debugging:

```bash
# Run tests with Chrome DevTools
bun test --inspect-brk
```

### Common Issues

1. **TypeScript errors**: Run `bun run types` to check
2. **Test failures**: Check `tests/setup.ts` configuration
3. **Build issues**: Verify `scripts/esbuild.ts` settings
4. **Import problems**: Check `src/index.ts` exports

## 🔄 Git Workflow

### Branch Naming

- **Features**: `feature/description`
- **Fixes**: `fix/description`
- **Docs**: `docs/description`
- **Tests**: `test/description`

### Commit Messages

Use conventional commits:

```bash
feat: add concurrent typing support
fix: resolve SSR hydration issue
docs: update API documentation
test: add edge case coverage
```

### Before Committing

```bash
# Ensure everything works
bun test
bun run build
bun run types

# Format code
bun run format
```

## 🚀 Performance Tips

### Development Speed

- Use **Bun** for faster installs and scripts
- Run `bun run watch` for live rebuilds
- Use `bun test:watch` for test-driven development
- Enable **TypeScript strict mode** for better DX

### Build Optimization

- **Tree shaking** removes unused code
- **Bundle splitting** for better caching
- **Source maps** for debugging
- **Minification** for production

## 📞 Getting Help

If you encounter issues during setup:

1. **Check the logs** for error messages
2. **Clear dependencies**: `rm -rf node_modules && bun install`
3. **Update tools**: Ensure latest Node.js and Bun versions
4. **Ask for help**: Create an issue with setup details

## 🎯 Next Steps

Once your development environment is ready:

1. **Pick an issue** from GitHub Issues
2. **Create a branch** for your changes
3. **Write tests** for new functionality
4. **Update docs** if needed
5. **Submit a PR** following our guidelines

---

**Happy coding!** 🎉 Your development environment is now ready for contributing to use-typewriter-animation.
