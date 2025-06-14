---
sidebar_position: 1
title: Contributing Guide
description: How to contribute to use-typewriter-animation
---

# 🤝 Contributing to use-typewriter-animation

Thank you for your interest in contributing! This guide will help you get started with contributing to our modern, performant React typewriter animation library.

## 🚀 Quick Start

1. **Fork** the repository on GitHub
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/use-typewriter-animation.git`
3. **Install** dependencies: `bun install`
4. **Run** tests: `bun test`
5. **Build** the project: `bun run build`

## 🛠️ Development Setup

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Bun** 1.0.0 or higher (preferred)
- **Git** latest version
- **React knowledge** - Familiarity with React hooks and TypeScript

### Installation

```bash
# Clone and navigate
git clone https://github.com/YOUR_USERNAME/use-typewriter-animation.git
cd use-typewriter-animation

# Install dependencies
bun install

# Verify setup
bun test        # Run tests (228 tests should pass)
bun run build   # Build project
```

### Development Commands

```bash
bun test              # Run all tests
bun test --watch      # Watch mode for development
bun test --coverage   # Coverage report
bun run build         # Build project
bun run watch         # Build in watch mode
bun run format        # Format code with Biome
bun run analyze       # Check bundle size
```

## 📝 Types of Contributions

### 🐛 Bug Fixes

- Fix existing bugs and improve error handling
- Performance improvements
- SSR/RSC compatibility fixes

### ✨ New Features

- New animation types and customization options
- React 19 concurrent features
- Accessibility improvements

### 📖 Documentation

- Fix typos, add examples, improve API docs
- Create tutorials and troubleshooting guides

### 🧪 Tests

- Add missing test coverage
- Improve test reliability and performance benchmarks

## 🔄 Pull Request Process

### 1. Create Your Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Changes

- Write code following our TypeScript and React guidelines
- Add tests for new functionality
- Update documentation if needed
- Ensure all tests pass: `bun test`
- Build successfully: `bun run build`

### 3. Commit & Push

Use conventional commit format:

```bash
git commit -m "feat: add concurrent typing animations"
git commit -m "fix: resolve SSR hydration mismatch"
git commit -m "docs: update API reference"
git push origin feature/your-feature-name
```

### 4. Create Pull Request

Include in your PR:

- Clear title and description
- Reference related issues
- List of changes made
- Screenshots/GIFs for UI changes

## 🧪 Testing Guidelines

### Test Requirements

- **Unit tests** for all new functions/hooks
- **TypeScript type tests** for type safety
- **Performance tests** for critical paths

### Test Structure

```typescript
describe('useTypewriter', () => {
  test('should render text progressively', () => {
    expect(typeof useTypewriter).toBe('function');
  });

  test('should handle edge cases', () => {
    // Test implementation
  });
});
```

## 📏 Code Style

### TypeScript Guidelines

- Use **strict TypeScript** settings
- Export **proper types** for all APIs
- Add **JSDoc comments** for public APIs
- Follow **React hooks conventions**

### Formatting

We use **Biome** for code formatting:

```bash
bun run format              # Format code
bunx biome check .          # Check formatting
bunx biome check --apply .  # Fix issues
```

### Commit Convention

Follow **Conventional Commits**:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Test changes
- `refactor:` - Code refactoring
- `chore:` - Build/tooling changes

## 🐛 Bug Reports

When reporting bugs, include:

- **React version** and **use-typewriter-animation version**
- **Environment** (browser, Node.js, etc.)
- **Steps to reproduce** with minimal code example
- **Expected vs actual behavior**
- **CodeSandbox link** (preferred)

## 💡 Feature Requests

For new features, provide:

- **Use case** - Why is this needed?
- **Proposed API** - How should it work?
- **Examples** - Show usage examples

## ♿ Accessibility

All contributions must maintain **WCAG 2.1 AA compliance**:

- Screen reader support with ARIA live regions
- Full keyboard accessibility
- Respect user motion preferences
- Proper focus management

## 📊 Performance

Monitor bundle size impact:

```bash
bun run analyze
```

**Current targets:**

- ESM: ~5.3KB gzipped
- CJS: ~5.6KB gzipped

## 🤝 Community

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback

### Getting Help

- 💬 [GitHub Discussions](https://github.com/doguyilmaz/use-typewriter-animation/discussions) - Questions and ideas
- 🐛 [GitHub Issues](https://github.com/doguyilmaz/use-typewriter-animation/issues) - Bug reports and features

## 📚 Resources

- [API Reference](../api/use-typewriter.md)
- [Accessibility Guide](../guides/accessibility.md)
- [Performance Guide](../guides/performance.md)
- [React Hooks Documentation](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎉 Recognition

Contributors are recognized in:

- README contributors section
- CHANGELOG.md for each release
- GitHub contributors graph

---

**Questions?** Open a discussion or create an issue with the `question` label.

**Thank you for contributing!** 🚀
