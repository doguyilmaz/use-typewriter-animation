# Contributing to use-typewriter-animation

Thank you for your interest in contributing to `use-typewriter-animation`! This guide will help you get started with contributing to our modern, performant React typewriter animation library.

## 🚀 Quick Start for Contributors

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **Bun**: 1.0.0 or higher (preferred) or npm 8.0.0+
- **Git**: Latest version
- **React knowledge**: Familiarity with React hooks and TypeScript

### Development Setup

1. **Fork and Clone**

   ```bash
   git clone https://github.com/YOUR_USERNAME/use-typewriter-animation.git
   cd use-typewriter-animation
   ```

2. **Install Dependencies**

   ```bash
   bun install
   # or npm install
   ```

3. **Run Tests**

   ```bash
   bun test
   # Ensure all 228 tests pass
   ```

4. **Build the Project**

   ```bash
   bun run build
   ```

5. **Start Development**

   ```bash
   # Run tests in watch mode
   bun test --watch

   # Build in watch mode
   bun run watch
   ```

## 🎯 Types of Contributions

### 🐛 Bug Reports

**Before submitting a bug report:**

- Check existing issues to avoid duplicates
- Test with the latest version
- Provide a minimal reproduction case

**Bug Report Template:**

```markdown
## Bug Description

Brief description of the issue

## Steps to Reproduce

1. Step one
2. Step two
3. Step three

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- Library version:
- React version:
- Browser:
- OS:

## Minimal Reproduction

[CodeSandbox link or minimal code example]
```

### ✨ Feature Requests

**Before requesting a feature:**

- Check if it aligns with our [roadmap](../ROADMAP.md)
- Consider if it fits the library's scope
- Think about backward compatibility

**Feature Request Template:**

````markdown
## Feature Description

Clear description of the proposed feature

## Use Case

Why is this feature needed? What problem does it solve?

## Proposed API

```tsx
// Example of how the feature would be used
const { typewriter } = useTypewriter({
  newFeature: true,
});
```
````

## Implementation Considerations

Any thoughts on implementation challenges or requirements

## Alternatives Considered

Other approaches you've considered

````

### 📚 Documentation Improvements

We welcome improvements to:
- API documentation
- Examples and tutorials
- Accessibility guides
- Performance optimization guides
- Troubleshooting guides

### 🧪 Test Contributions

Help us maintain our comprehensive test suite:
- Add tests for edge cases
- Improve test coverage
- Add accessibility tests
- Performance benchmarks

## 🔧 Development Guidelines

### Code Style

We use **Biome** for code formatting and linting:

```bash
# Format code
bun run format

# Lint code
bunx biome check .

# Fix linting issues
bunx biome check --apply .
````

**Key Style Guidelines:**

- Use TypeScript for all code
- Follow React hooks conventions
- Prefer functional components
- Use meaningful variable names
- Add JSDoc comments for public APIs

### Commit Convention

We follow **Conventional Commits**:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

**Examples:**

```
feat(hook): add concurrent typing support
fix(accessibility): resolve screen reader announcements
docs(api): update useTypewriter documentation
test(concurrent): add edge case tests
```

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Pull Request Process

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**

   - Write code following our guidelines
   - Add/update tests
   - Update documentation if needed

3. **Test Your Changes**

   ```bash
   bun test
   bun run build
   bun run analyze  # Check bundle size
   ```

4. **Commit Changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

**PR Template:**

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## Testing

- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
```

## 🧪 Testing Guidelines

### Running Tests

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Run with coverage
bun test --coverage

# Run specific test file
bun test TypewriterConcurrent.test.tsx
```

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

### Test Categories

1. **Unit Tests** - Individual function testing
2. **Integration Tests** - Component interaction testing
3. **Type Tests** - TypeScript compilation testing
4. **Accessibility Tests** - WCAG compliance testing

## 📊 Performance Considerations

### Bundle Size

Monitor bundle size impact:

```bash
bun run analyze
```

**Current targets:**

- ESM: ~5.3KB gzipped
- CJS: ~5.6KB gzipped

### Performance Testing

```tsx
// Example performance test
it('should handle large text efficiently', () => {
  const largeText = 'a'.repeat(10000);
  const startTime = performance.now();

  // Test your feature

  const endTime = performance.now();
  expect(endTime - startTime).toBeLessThan(100); // 100ms threshold
});
```

## ♿ Accessibility Guidelines

All contributions must maintain WCAG 2.1 AA compliance:

### Key Requirements

- **Screen reader support** - ARIA live regions
- **Keyboard navigation** - Full keyboard accessibility
- **Reduced motion** - Respect user preferences
- **Color independence** - Don't rely solely on color
- **Focus management** - Proper focus handling

### Testing Accessibility

```bash
# Manual testing with screen readers
# - NVDA (Windows)
# - JAWS (Windows)
# - VoiceOver (macOS)
# - Orca (Linux)

# Automated testing
bun test -- --grep "accessibility"
```

## 🚀 Release Process

**Note:** Only maintainers can create releases.

### Version Bumping

```bash
# Interactive version selection
bun run version

# This will:
# 1. Prompt for version type (patch/minor/major)
# 2. Update package.json
# 3. Create git tag
# 4. Push changes
```

### Release Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Bundle size verified
- [ ] Accessibility tested
- [ ] Browser compatibility verified

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

### Getting Help

- **GitHub Discussions** - General questions and ideas
- **GitHub Issues** - Bug reports and feature requests
- **Documentation** - Check our comprehensive docs first

### Recognition

Contributors are recognized in:

- CHANGELOG.md for each release
- README.md contributors section
- GitHub contributors graph

## 📚 Resources

### Documentation

- [API Reference](../api/use-typewriter.md)
- [Accessibility Guide](../guides/accessibility.md)
- [Performance Guide](../guides/performance.md)
- [Troubleshooting](../guides/troubleshooting.md)

### Development Resources

- [Development Setup](./development.md)
- [Testing Guide](./testing.md)
- [Release Process](./releases.md)
- [Project Roadmap](../ROADMAP.md)

### External Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🎉 Thank You!

Thank you for contributing to `use-typewriter-animation`! Your contributions help make this library better for the entire React community.

---

**Questions?** Feel free to open a discussion or reach out to the maintainers.

**Happy coding!** 🚀
