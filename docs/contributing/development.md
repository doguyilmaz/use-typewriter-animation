# 🛠️ Development Setup

This guide will help you set up your development environment for contributing to `use-typewriter-animation`.

## 🚀 Quick Setup

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Bun** 1.0.0 or higher (recommended)
- **Git** for version control
- **VS Code** (recommended) with TypeScript support

### Installation

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/use-typewriter-animation.git
cd use-typewriter-animation

# Add the upstream remote
git remote add upstream https://github.com/doguyilmaz/use-typewriter-animation.git

# Install dependencies
bun install

# Verify setup
bun test        # Run tests (228 tests should pass)
bun run build   # Build project
bun run watch   # Start development watcher
```

## 📁 Project Structure

```
use-typewriter-animation/
├── src/                    # Source code
│   ├── index.ts           # Main exports
│   ├── hooks/             # React hooks
│   ├── components/        # React components
│   ├── utils/             # Utility functions
│   └── types/             # TypeScript definitions
├── tests/                 # Test files
│   ├── setup.ts          # Test configuration
│   └── **/*.test.tsx     # Test files
├── examples/              # Usage examples
├── dist/                  # Built files (generated)
├── scripts/               # Build scripts
│   ├── esbuild.ts        # Build configuration
│   └── version-bump.ts   # Version management
├── docs/                  # Documentation
└── package.json          # Package configuration
```

## 🔧 Development Commands

### Core Development

```bash
bun run watch         # Start development with file watching
bun run build         # Build the project
bun run clean         # Clean build artifacts
```

### Testing

```bash
bun test              # Run all tests
bun test --watch      # Watch mode for development
bun test --coverage   # Coverage report
bun test --ui         # Open test UI
```

### Code Quality

```bash
bun run format        # Format code with Biome
bun run types         # TypeScript type checking
bun run analyze       # Bundle size analysis
```

### Release

```bash
bun run version       # Interactive version bump
bun run pack          # Create package for testing
```

## 🧪 Testing

### Test Structure

Our tests focus on:

- **Structural validation** - Module imports/exports
- **Function signatures** - React hook conventions
- **TypeScript compliance** - Type safety
- **API surface validation** - Public interface stability

### Writing Tests

```typescript
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

## 🏗️ Build Process

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

The project uses **esbuild** for fast builds with:

- **Tree shaking** for smaller bundles
- **Source maps** for debugging
- **Minification** for production
- **External dependencies** (React, React DOM)

### Bundle Size Targets

- **ESM**: ~5.3KB gzipped
- **CJS**: ~5.6KB gzipped

## 🔍 Common Issues & Solutions

### TypeScript Errors

```bash
bun run types  # Check TypeScript compilation
```

### Test Failures

- Check `tests/setup.ts` configuration
- Verify React Testing Library setup

### Build Issues

- Verify `scripts/esbuild.ts` settings
- Check `src/index.ts` exports

### Import Problems

- Ensure proper export/import statements
- Check TypeScript path resolution

## 🔄 Git Workflow

### Branch Naming

- **Features**: `feature/description`
- **Fixes**: `fix/description`
- **Docs**: `docs/description`

### Before Committing

```bash
bun test           # Ensure tests pass
bun run build      # Verify build works
bun run format     # Format code
```

### Commit Messages

Use conventional commits:

```bash
feat: add concurrent typing support
fix: resolve SSR hydration issue
docs: update API documentation
test: add edge case coverage
```

## 🛠️ IDE Setup

### VS Code Extensions (Recommended)

- **Biome** - Code formatting and linting
- **Vitest** - Test runner integration
- **TypeScript** - Built-in language support

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 📊 Performance Tips

### Development Speed

- Use **Bun** for faster installs and scripts
- Run `bun run watch` for live rebuilds
- Use `bun test --watch` for test-driven development

### Bundle Optimization

```bash
bun run analyze  # Check bundle size and composition
```

## 📞 Getting Help

If you encounter issues:

1. **Check the logs** for error messages
2. **Clear dependencies**: `rm -rf node_modules && bun install`
3. **Update tools**: Ensure latest Node.js and Bun versions
4. **Ask for help**:
   - 💬 [GitHub Discussions](https://github.com/doguyilmaz/use-typewriter-animation/discussions)
   - 🐛 [GitHub Issues](https://github.com/doguyilmaz/use-typewriter-animation/issues)

## 🎯 Next Steps

Once your development environment is ready:

1. **Pick an issue** from GitHub Issues
2. **Create a branch** for your changes
3. **Write tests** for new functionality
4. **Update docs** if needed
5. **Submit a PR** following our [Contributing Guide](./contributing.md)

---

**Happy coding!** 🎉 Your development environment is now ready for contributing to use-typewriter-animation.
