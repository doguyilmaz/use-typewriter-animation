# 🧪 Testing Guide

This guide covers testing practices, strategies, and requirements for contributing to `use-typewriter-animation`.

## 📋 Table of Contents

- [🎯 Testing Philosophy](#-testing-philosophy)
- [🧪 Test Types](#-test-types)
- [🔧 Test Environment](#-test-environment)
- [✍️ Writing Tests](#️-writing-tests)
- [🚀 Running Tests](#-running-tests)
- [📊 Coverage Requirements](#-coverage-requirements)
- [🔍 Debugging Tests](#-debugging-tests)
- [💡 Best Practices](#-best-practices)

## 🎯 Testing Philosophy

Our testing approach focuses on:

- **Reliability** - Tests should be consistent and predictable
- **Maintainability** - Easy to understand and modify
- **Coverage** - Comprehensive but not excessive
- **Performance** - Fast execution for development workflow
- **Real-world scenarios** - Test actual usage patterns

## 🧪 Test Types

### 1. **Unit Tests** 🔧

Test individual functions and hooks in isolation.

```typescript
describe('useTypewriter', () => {
  test('should initialize with empty display text', () => {
    const { result } = renderHook(() => useTypewriter({ text: 'Hello' }));

    expect(result.current.displayText).toBe('');
    expect(result.current.isTyping).toBe(false);
  });
});
```

### 2. **Integration Tests** 🔗

Test how multiple components work together.

```typescript
describe('TypewriterConcurrent Integration', () => {
  test('should integrate with performance monitoring', () => {
    const { result } = renderHook(() => {
      const typewriter = useConcurrentTypewriter({ text: 'Hello' });
      const monitor = useTypewriterPerformanceMonitor();
      return { typewriter, monitor };
    });

    expect(result.current.typewriter).toBeDefined();
    expect(result.current.monitor).toBeDefined();
  });
});
```

### 3. **Type Tests** 📝

Verify TypeScript type safety and inference.

```typescript
// Type tests using @ts-expect-error
describe('Type Safety', () => {
  test('should enforce correct option types', () => {
    // @ts-expect-error - speed should be number
    useTypewriter({ text: 'Hello', speed: 'fast' });

    // Should pass
    useTypewriter({ text: 'Hello', speed: 100 });
  });
});
```

### 4. **Performance Tests** ⚡

Ensure acceptable performance characteristics.

```typescript
describe('Performance', () => {
  test('should handle large text efficiently', () => {
    const largeText = 'A'.repeat(10000);
    const start = performance.now();

    renderHook(() => useTypewriter({ text: largeText }));

    const duration = performance.now() - start;
    expect(duration).toBeLessThan(100); // ms
  });
});
```

### 5. **SSR Tests** 🌐

Verify server-side rendering compatibility.

```typescript
describe('SSR Compatibility', () => {
  test('should not cause hydration mismatches', () => {
    // Mock server environment
    Object.defineProperty(window, 'document', {
      value: undefined,
      writable: true,
    });

    const { result } = renderHook(() => useTypewriter({ text: 'Hello' }));

    expect(result.current.displayText).toBe('');
  });
});
```

## 🔧 Test Environment

### Configuration Files

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      threshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
});
```

### Test Setup

```typescript
// tests/setup.ts
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};
```

## ✍️ Writing Tests

### Test Structure

Follow the **Arrange-Act-Assert** pattern:

```typescript
test('should handle text changes', () => {
  // Arrange
  const initialText = 'Hello';
  const newText = 'Hi there';
  const { result, rerender } = renderHook(({ text }) => useTypewriter({ text }), {
    initialProps: { text: initialText },
  });

  // Act
  rerender({ text: newText });

  // Assert
  expect(result.current.displayText).toBe('');
  expect(result.current.isTyping).toBe(true);
});
```

### Test Naming

Use descriptive test names that explain:

- **What** is being tested
- **When** or under what conditions
- **Expected** outcome

```typescript
// ❌ Bad
test('typewriter works', () => {});

// ✅ Good
test('should start typing when text prop changes', () => {});
test('should pause typing when pause prop is true', () => {});
test('should handle empty text gracefully', () => {});
```

### Testing Hooks

Use `@testing-library/react` for hook testing:

```typescript
import { renderHook, act } from '@testing-library/react';

test('should update display text progressively', async () => {
  const { result } = renderHook(() => useTypewriter({ text: 'Hello', speed: 1 }));

  // Start animation
  act(() => {
    result.current.start();
  });

  // Wait for first character
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 10));
  });

  expect(result.current.displayText).toBe('H');
});
```

### Testing Async Operations

Handle asynchronous behavior properly:

```typescript
test('should handle async text loading', async () => {
  const mockLoader = vi.fn().mockResolvedValue('Loaded text');

  const { result } = renderHook(() => useTypewriterAsync({ loader: mockLoader }));

  expect(result.current.isLoading).toBe(true);

  await waitFor(() => {
    expect(result.current.isLoading).toBe(false);
  });

  expect(result.current.displayText).toBe('Loaded text');
});
```

### Mocking

Mock external dependencies appropriately:

```typescript
// Mock timers for animation testing
beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

test('should respect speed setting', () => {
  const { result } = renderHook(() => useTypewriter({ text: 'Hi', speed: 100 }));

  act(() => {
    result.current.start();
  });

  // Advance timers
  act(() => {
    vi.advanceTimersByTime(100);
  });

  expect(result.current.displayText).toBe('H');
});
```

## 🚀 Running Tests

### Available Commands

```bash
# Run all tests
bun test

# Watch mode for development
bun test:watch

# Run specific test file
bun test useTypewriter.test.tsx

# Run tests matching pattern
bun test --grep "should handle"

# Run with coverage
bun test:coverage

# Visual test UI
bun test:ui

# Run tests in specific environment
bun test --environment=jsdom
```

### Test Output

```bash
✓ useTypewriter > should initialize correctly
✓ useTypewriter > should handle text changes
✓ useTypewriter > should respect speed setting
✗ useTypewriter > should pause when requested
  Error: Expected false, received true
    at tests/useTypewriter.test.tsx:45:32
```

### Filtering Tests

```bash
# Run only unit tests
bun test --grep "unit"

# Skip integration tests
bun test --grep "integration" --invert

# Run specific describe block
bun test --grep "useTypewriter"

# Run failed tests only
bun test --reporter=verbose --bail=1
```

## 📊 Coverage Requirements

### Coverage Targets

| Type       | Minimum | Target |
| ---------- | ------- | ------ |
| Lines      | 80%     | 90%    |
| Functions  | 80%     | 90%    |
| Branches   | 70%     | 85%    |
| Statements | 80%     | 90%    |

### Coverage Reports

```bash
# Generate coverage report
bun test:coverage

# Open HTML report
open coverage/index.html

# Check coverage thresholds
bun test:coverage --reporter=text-summary
```

### Coverage Analysis

Focus coverage on:

- **Core functionality** - Main hook logic
- **Edge cases** - Error handling, boundary conditions
- **Public API** - All exported functions and types
- **Critical paths** - Performance-sensitive code

Don't obsess over:

- **Type definitions** - Focus on runtime behavior
- **Trivial getters** - Simple property access
- **Development utilities** - Debug helpers, dev tools

## 🔍 Debugging Tests

### Debug Strategies

1. **Use `console.log`** for quick debugging:

```typescript
test('debug test', () => {
  const { result } = renderHook(() => useTypewriter({ text: 'Hi' }));
  console.log('Current state:', result.current);
});
```

2. **VS Code debugging** with launch configuration:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Current Test",
  "program": "${workspaceFolder}/node_modules/vitest/vitest.mjs",
  "args": ["run", "${relativeFile}", "--reporter=verbose"],
  "console": "integratedTerminal"
}
```

3. **Browser debugging** for complex issues:

```bash
bun test --inspect-brk
# Open chrome://inspect in Chrome
```

### Common Issues

1. **Timer-related tests failing**:

   - Use `vi.useFakeTimers()` and `vi.advanceTimersByTime()`

2. **Async tests hanging**:

   - Ensure all promises are awaited
   - Use proper cleanup in `afterEach`

3. **Mock issues**:
   - Clear mocks between tests: `vi.clearAllMocks()`
   - Reset modules if needed: `vi.resetModules()`

## 💡 Best Practices

### Do's ✅

- **Test behavior, not implementation**
- **Use descriptive test names**
- **Keep tests focused and small**
- **Mock external dependencies**
- **Test edge cases and error conditions**
- **Use proper cleanup**
- **Test TypeScript types**

### Don'ts ❌

- **Don't test internal implementation details**
- **Don't write overly complex tests**
- **Don't ignore test failures**
- **Don't mock everything**
- **Don't write tests just for coverage**
- **Don't forget to test error paths**

### Performance Tips

- **Use `vi.useFakeTimers()`** for timer-based tests
- **Mock heavy dependencies** appropriately
- **Run tests in parallel** when possible
- **Use `beforeEach/afterEach`** for setup/cleanup
- **Avoid unnecessary DOM operations**

### Code Quality

```typescript
// ✅ Good test structure
describe('useTypewriter', () => {
  describe('initialization', () => {
    test('should start with empty display text', () => {
      // Test implementation
    });
  });

  describe('text animation', () => {
    test('should type characters progressively', () => {
      // Test implementation
    });
  });

  describe('error handling', () => {
    test('should handle invalid speed gracefully', () => {
      // Test implementation
    });
  });
});
```

---

## 🎯 Test Checklist

Before submitting your PR, ensure:

- [ ] All tests pass: `bun test`
- [ ] Coverage meets minimum requirements
- [ ] New features have corresponding tests
- [ ] Edge cases are covered
- [ ] Types are tested where applicable
- [ ] Performance implications are considered
- [ ] Tests run in CI environment

**Happy testing!** 🧪 Well-tested code is reliable code.
