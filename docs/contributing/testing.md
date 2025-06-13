# 🧪 Testing Guide

This guide covers testing practices and requirements for contributing to `use-typewriter-animation`.

## 🚀 Quick Start

### Running Tests

```bash
bun test              # Run all tests
bun test --watch      # Watch mode for development
bun test --coverage   # Run with coverage report
bun test --ui         # Visual test interface
```

### Current Status

✅ **228 tests passing** with 100% reliability across all environments

## 🎯 Testing Philosophy

Our testing focuses on:

- **Structural validation** - Module exports, API surface, and type safety
- **Reliability** - Consistent results across environments
- **Speed** - Fast execution without heavy DOM dependencies
- **Maintainability** - Simple, focused tests that are easy to understand

## 📝 Test Types

### 1. Module Structure Tests

Test exports and basic functionality:

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

### 2. API Surface Tests

Validate public interface:

```typescript
describe('API Surface', () => {
  it('should return expected object structure', () => {
    const result = useTypewriter();
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('typewriter');
    expect(result).toHaveProperty('elements');
  });
});
```

### 3. TypeScript Tests

Ensure type safety:

```typescript
describe('TypeScript Integration', () => {
  it('should compile without type errors', () => {
    // Test passes if TypeScript compilation succeeds
    expect(typeof useTypewriter).toBe('function');
  });
});
```

## 🔧 Test Configuration

### Vitest Config (`vitest.config.ts`)

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'tests/', 'dist/'],
    },
  },
});
```

### Test Setup (`tests/setup.ts`)

```typescript
import '@testing-library/jest-dom';

// Mock matchMedia for browser API tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  })),
});
```

## ✍️ Writing Tests

### Test Structure

Use **Arrange-Act-Assert** pattern:

```typescript
describe('Feature Name', () => {
  it('should behave as expected', () => {
    // Arrange
    const input = 'test input';

    // Act
    const result = functionUnderTest(input);

    // Assert
    expect(result).toBe('expected output');
  });
});
```

### Test Naming

Use descriptive names:

```typescript
// ❌ Bad
it('should work', () => {});

// ✅ Good
it('should export useTypewriter hook function', () => {});
it('should handle configuration options gracefully', () => {});
it('should maintain stable API surface', () => {});
```

### Focus Areas

Test these key areas:

- **Exports** - All public functions and types
- **Hook signatures** - React hook conventions
- **Configuration** - Options handling
- **Type safety** - TypeScript compliance
- **Error handling** - Graceful failure modes

## 📊 Coverage Strategy

### What We Test

- **Function exports** - All public APIs
- **Type definitions** - TypeScript types
- **API stability** - Interface consistency
- **Error handling** - Invalid inputs

### Coverage Commands

```bash
bun test --coverage        # Generate coverage report
open coverage/index.html   # View HTML report
```

### Coverage Targets

- **Functions**: 80%+ covered
- **Branches**: 70%+ covered
- **Public API**: 100% tested

## 🔍 Debugging Tests

### Common Issues

1. **Import errors** - Check module resolution
2. **Type errors** - Run `bun run types`
3. **Environment issues** - Check test setup

### Debug Commands

```bash
bun test --reporter=verbose    # Detailed output
bun test SpecificTest.test.tsx # Run specific test
```

### Debug Example

```typescript
describe('Debug Test', () => {
  it('should help debug issues', () => {
    console.log('Debug info:', { useTypewriter });
    expect(useTypewriter).toBeDefined();
  });
});
```

## 🎯 Best Practices

### Do's ✅

- **Test behavior, not implementation**
- **Use descriptive test names**
- **Keep tests focused and simple**
- **Test error conditions**
- **Validate TypeScript types**

### Don'ts ❌

- **Don't test internal implementation details**
- **Don't write overly complex tests**
- **Don't ignore failing tests**
- **Don't test everything just for coverage**

### Example Test Structure

```typescript
describe('useTypewriter', () => {
  describe('exports', () => {
    it('should export hook function', () => {
      expect(typeof useTypewriter).toBe('function');
    });
  });

  describe('API surface', () => {
    it('should return expected structure', () => {
      const result = useTypewriter();
      expect(result).toHaveProperty('typewriter');
    });
  });

  describe('error handling', () => {
    it('should handle invalid config gracefully', () => {
      expect(() => useTypewriter({ speed: -1 })).not.toThrow();
    });
  });
});
```

## 🚀 Adding Tests for New Features

When adding new features:

1. **Test exports** - Ensure new functions are exported
2. **Test API** - Validate interface and return types
3. **Test integration** - Ensure it works with existing features
4. **Test edge cases** - Handle invalid inputs gracefully

### New Feature Test Template

```typescript
describe('NewFeature', () => {
  it('should export new feature function', () => {
    expect(typeof newFeature).toBe('function');
  });

  it('should integrate with existing API', () => {
    const result = useTypewriter({ newOption: true });
    expect(result).toBeDefined();
  });
});
```

## ✅ Pre-Commit Checklist

Before submitting your PR:

- [ ] All tests pass: `bun test`
- [ ] New features have tests
- [ ] TypeScript types are tested
- [ ] Coverage requirements met
- [ ] No console errors or warnings

---

**Need help with testing?** Open an issue or discussion on GitHub!

**Remember**: Good tests make the library reliable and maintainable for everyone. 🎯
