# Testing Documentation

This directory contains comprehensive tests for the `use-typewriter-animation` library.

## 🧪 Test Structure

### **Core Module Tests**

- **`TypewriterBase.test.ts`** - Unit tests for the core TypewriterBase class

  - Initialization and configuration
  - Basic typing and delete operations
  - Method chaining and sequencing
  - Pause/resume functionality
  - Loop mode behavior
  - Event system
  - State management
  - Error handling
  - Performance characteristics

- **`useTypewriter.test.tsx`** - React hook integration tests
  - Hook functionality and return values
  - Text rendering and progression
  - State management and updates
  - Performance metrics tracking
  - Accessibility features
  - Virtualization support
  - Error handling
  - Memory management
  - React Strict Mode compatibility
  - Integration scenarios

### **Feature-Specific Tests**

- **`accessibility.test.tsx`** - Comprehensive accessibility testing

  - ARIA support and attributes
  - Reduced motion detection and handling
  - Keyboard navigation and controls
  - Screen reader support
  - Focus management
  - High contrast support
  - WCAG 2.1 AA compliance validation
  - Error handling for accessibility features

- **`performance.test.ts`** - Performance and optimization tests
  - Virtualization for large text sequences
  - Memory management and cleanup
  - Performance metrics tracking
  - Optimization features (batching, memoization)
  - Performance benchmarks
  - Resource management

### **Test Utilities**

- **`setup.ts`** - Test environment configuration
  - React Testing Library setup
  - jsdom configuration
  - Mock implementations for browser APIs
  - Timer mocking for animation testing
  - Console suppression for cleaner output
  - Utility functions for test helpers

## 🚀 Running Tests

### **Basic Test Commands**

```bash
# Run all tests once
bun test:run

# Run tests in watch mode (development)
bun test:watch

# Run tests with coverage report
bun test:coverage

# Run tests with UI (if vitest UI is installed)
bun test:ui

# Run specific test file
bun test TypewriterBase.test.ts

# Run tests matching a pattern
bun test --grep "accessibility"
```

### **Coverage Targets**

Our test suite aims for high coverage across all modules:

- **Branches**: 80%+ coverage
- **Functions**: 80%+ coverage
- **Lines**: 80%+ coverage
- **Statements**: 80%+ coverage

### **Test Categories**

#### **Unit Tests**

- Test individual functions and classes in isolation
- Mock external dependencies
- Focus on specific functionality

#### **Integration Tests**

- Test React hook integration with components
- Test feature interactions
- Test real-world usage scenarios

#### **Accessibility Tests**

- WCAG 2.1 AA compliance validation
- Screen reader compatibility
- Keyboard navigation testing
- Reduced motion support

#### **Performance Tests**

- Memory leak detection
- Animation performance validation
- Virtualization effectiveness
- Resource cleanup verification

## 🛠️ Test Configuration

### **Vitest Configuration** (`vitest.config.ts`)

- **Environment**: jsdom for React component testing
- **Setup Files**: Automatic test environment setup
- **Coverage**: v8 provider with HTML/JSON reports
- **Timeouts**: 10 second test timeout for animations
- **Mocking**: Automatic mock clearing and restoration

### **Mock Implementations**

The test setup includes mocks for:

- **`window.matchMedia`** - For reduced motion testing
- **`ResizeObserver`** - For virtualization testing
- **`IntersectionObserver`** - For performance testing
- **`performance` API** - For performance metrics testing
- **`requestAnimationFrame`** - For animation testing

## 📋 Test Writing Guidelines

### **Test Structure**

```typescript
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup for each test
    vi.useFakeTimers();
  });

  afterEach(() => {
    // Cleanup after each test
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  describe('Specific Functionality', () => {
    it('should behave correctly under normal conditions', () => {
      // Arrange
      const input = 'test input';

      // Act
      const result = functionUnderTest(input);

      // Assert
      expect(result).toBe('expected output');
    });

    it('should handle edge cases gracefully', () => {
      // Test edge cases and error conditions
    });
  });
});
```

### **React Component Testing**

```typescript
const TestComponent = () => {
  const { typewriter, elements, cursor } = useTypewriter(options);

  React.useEffect(() => {
    typewriter.type('Hello').start();
  }, []);

  return (
    <div data-testid='typewriter'>
      {elements}
      {cursor}
    </div>
  );
};

it('should render typewriter correctly', () => {
  render(<TestComponent />);

  act(() => {
    vi.advanceTimersByTime(250); // Complete animation
  });

  expect(screen.getByTestId('typewriter')).toHaveTextContent('Hello');
});
```

### **Animation Testing**

```typescript
it('should animate text progressively', () => {
  const { typewriter } = useTypewriter();

  typewriter.type('Hello').start();

  // Test progression
  vi.advanceTimersByTime(50); // First character
  expect(getCurrentText()).toBe('H');

  vi.advanceTimersByTime(200); // Complete
  expect(getCurrentText()).toBe('Hello');
});
```

### **Accessibility Testing**

```typescript
it('should meet WCAG 2.1 requirements', () => {
  render(<AccessibleTypewriter />);

  const container = screen.getByRole('status');

  expect(container).toHaveAttribute('aria-live', 'polite');
  expect(container).toHaveAttribute('aria-label');
  expect(container).toBeInTheDocument();
});
```

## 🔍 Debugging Tests

### **Common Issues**

1. **Timer-related tests failing**

   ```typescript
   // Ensure fake timers are used
   beforeEach(() => {
     vi.useFakeTimers();
   });

   // Advance timers appropriately
   vi.advanceTimersByTime(expectedDuration);
   ```

2. **React component tests not updating**

   ```typescript
   // Wrap state changes in act()
   act(() => {
     typewriter.type('Hello').start();
   });
   ```

3. **Accessibility tests failing**
   ```typescript
   // Ensure proper ARIA attributes
   expect(element).toHaveAttribute('aria-label');
   expect(element).toHaveAttribute('role', 'status');
   ```

### **Test Debugging Tools**

- **`screen.debug()`** - Print current DOM state
- **`console.log()`** - Debug values (suppressed in normal runs)
- **Coverage reports** - Identify untested code paths
- **Vitest UI** - Visual test runner and debugger

## 📊 Test Metrics

### **Current Coverage** (Target)

- **TypewriterBase**: 95%+ (core functionality)
- **useTypewriter**: 90%+ (React integration)
- **Accessibility**: 85%+ (WCAG compliance)
- **Performance**: 80%+ (optimization features)

### **Test Performance**

- **Total test time**: < 30 seconds
- **Individual test timeout**: 10 seconds
- **Coverage generation**: < 10 seconds
- **Watch mode**: < 2 seconds for incremental runs

## 🎯 Best Practices

1. **Test behavior, not implementation**
2. **Use descriptive test names**
3. **Keep tests focused and isolated**
4. **Mock external dependencies**
5. **Test edge cases and error conditions**
6. **Maintain high coverage without sacrificing quality**
7. **Use proper cleanup to prevent test interference**
8. **Test accessibility features thoroughly**
9. **Validate performance characteristics**
10. **Document complex test scenarios**

## 🚀 Continuous Integration

Tests are designed to run in CI environments:

- **Fast execution** - Optimized for CI speed
- **Deterministic** - No flaky tests due to timing
- **Comprehensive** - High coverage across all features
- **Accessible** - WCAG compliance validation
- **Performance** - Memory and speed validation

Run `bun test:coverage` to generate a full coverage report before submitting changes.
