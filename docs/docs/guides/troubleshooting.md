# Troubleshooting Guide

Common issues and solutions for `use-typewriter-animation`. This guide helps you quickly resolve problems and optimize your typewriter animations.

## 🚨 Common Issues

### Animation Not Working

#### Problem: Text appears instantly without animation

**Symptoms:**

- Text shows up immediately
- No typing animation
- Cursor may or may not appear

**Solutions:**

1. **Missing Keyframes** (Most Common)

```tsx
// ❌ Wrong - Missing keyframes
return (
  <div>
    {elements}
    {cursor}
  </div>
);

// ✅ Correct - Include keyframes
return (
  <>
    <style>{keyframes}</style>
    <div>
      {elements}
      {cursor}
    </div>
  </>
);
```

2. **Forgot to Call `.start()`**

```tsx
// ❌ Wrong - Animation never starts
useEffect(() => {
  typewriter.type('Hello, World!');
}, []);

// ✅ Correct - Call start()
useEffect(() => {
  typewriter.type('Hello, World!').start();
}, []);
```

3. **Reduced Motion Enabled**

```tsx
// Check if user has reduced motion preference
const { typewriter } = useTypewriter({
  respectReducedMotion: true,
  reducedMotionFallback: 'slow', // Try 'slow' instead of 'instant'
});
```

### Performance Issues

#### Problem: Animation is laggy or stuttering

**Symptoms:**

- Choppy animation
- Low frame rate
- Browser becomes unresponsive

**Solutions:**

1. **Enable Virtualization for Large Text**

```tsx
const { typewriter } = useTypewriter({
  enableVirtualization: true,
  maxVisibleSegments: 100,
});
```

2. **Optimize Re-renders**

```tsx
// ❌ Wrong - Creates new object every render
const { typewriter } = useTypewriter({
  typeSpeed: 50, // New object each time
});

// ✅ Correct - Stable configuration
const config = useMemo(
  () => ({
    typeSpeed: 50,
    cursorStyle: 'bar',
  }),
  []
);

const { typewriter } = useTypewriter(config);
```

3. **Use GPU Acceleration**

```tsx
const optimizedStyles = {
  transform: 'translateZ(0)', // Force GPU layer
  willChange: 'transform, opacity',
};

return (
  <div style={optimizedStyles}>
    {elements}
    {cursor}
  </div>
);
```

### Memory Leaks

#### Problem: Memory usage keeps increasing

**Symptoms:**

- Browser becomes slow over time
- Memory usage grows continuously
- Page crashes after extended use

**Solutions:**

1. **Proper Cleanup**

```tsx
useEffect(() => {
  typewriter.type('Hello').start();

  // ✅ Always cleanup
  return () => {
    typewriter.stop();
  };
}, []);
```

2. **Remove Event Listeners**

```tsx
useEffect(() => {
  const handleEnd = () => console.log('Done');

  typewriter.on('end', handleEnd).type('Hello').start();

  return () => {
    typewriter.off('end', handleEnd); // Remove listener
    typewriter.stop();
  };
}, []);
```

### TypeScript Errors

#### Problem: Type errors in TypeScript projects

**Common Errors:**

1. **Missing Type Imports**

```tsx
// ❌ Wrong - Missing types
import { useTypewriter } from 'use-typewriter-animation';

// ✅ Correct - Import types
import { useTypewriter, UseTypewriterOptions, TypewriterState } from 'use-typewriter-animation';
```

2. **Incorrect Option Types**

```tsx
// ❌ Wrong - Invalid cursor style
const options = {
  cursorStyle: 'invalid', // Type error
};

// ✅ Correct - Valid cursor style
const options: UseTypewriterOptions = {
  cursorStyle: 'bar', // 'bar' | 'block' | 'underline'
};
```

### React Strict Mode Issues

#### Problem: Animation runs twice in development

**Symptoms:**

- Animation plays twice
- Only happens in development
- Works fine in production

**Solution:**

```tsx
// ✅ Handle Strict Mode properly
useEffect(() => {
  let cancelled = false;

  const runAnimation = async () => {
    if (cancelled) return;

    typewriter.type('Hello, World!').start();
  };

  runAnimation();

  return () => {
    cancelled = true;
    typewriter.stop();
  };
}, []);
```

## 🔧 Debugging Tools

### Debug Mode

Enable debug logging:

```tsx
const { typewriter, state, metrics } = useTypewriter({
  // Enable debug mode (if available)
  debug: process.env.NODE_ENV === 'development',
});

// Log state changes
useEffect(() => {
  console.log('Typewriter state:', state);
}, [state]);

// Log performance metrics
useEffect(() => {
  console.log('Performance metrics:', metrics);
}, [metrics]);
```

### Performance Monitoring

Monitor performance in real-time:

```tsx
function DebugTypewriter() {
  const { typewriter, elements, cursor, metrics } = useTypewriter();
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setDebugInfo({
        memory: performance.memory?.usedJSHeapSize || 0,
        timing: performance.now(),
        segments: metrics.totalSegments,
        fps: metrics.animationFrameRate,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [metrics]);

  return (
    <div>
      <div>
        {elements}
        {cursor}
      </div>

      {/* Debug Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '1rem',
          fontSize: '0.8rem',
          fontFamily: 'monospace',
        }}
      >
        <h4>Debug Info</h4>
        <div>Memory: {(debugInfo.memory / 1024 / 1024).toFixed(2)}MB</div>
        <div>Segments: {debugInfo.segments}</div>
        <div>FPS: {debugInfo.fps}</div>
        <div>Virtualized: {metrics.isVirtualized ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
}
```

### React DevTools

Use React DevTools Profiler:

```tsx
import { Profiler } from 'react';

function ProfiledTypewriter() {
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('Render performance:', {
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    });
  };

  return (
    <Profiler id='typewriter' onRender={onRender}>
      <YourTypewriterComponent />
    </Profiler>
  );
}
```

## 🌐 Browser Compatibility

### Supported Browsers

| Browser        | Version | Notes        |
| -------------- | ------- | ------------ |
| Chrome         | 88+     | Full support |
| Firefox        | 85+     | Full support |
| Safari         | 14+     | Full support |
| Edge           | 88+     | Full support |
| iOS Safari     | 14+     | Full support |
| Android Chrome | 88+     | Full support |

### Polyfills

For older browsers, you may need polyfills:

```tsx
// Install polyfills
npm install core-js

// In your app entry point
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

### Feature Detection

Check for required features:

```tsx
function FeatureCheck() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const checks = [
      'IntersectionObserver' in window,
      'requestAnimationFrame' in window,
      'matchMedia' in window,
    ];

    setSupported(checks.every(Boolean));
  }, []);

  if (!supported) {
    return <div>Your browser doesn't support all required features.</div>;
  }

  return <YourTypewriterComponent />;
}
```

## 📱 Mobile Issues

### Touch Events

Handle touch interactions:

```tsx
function MobileTypewriter() {
  const { typewriter, elements, cursor } = useTypewriter({
    enableKeyboardControls: false, // Disable on mobile
  });

  const handleTouch = () => {
    if (typewriter.isPaused()) {
      typewriter.resume();
    } else {
      typewriter.pause();
    }
  };

  return (
    <div onTouchStart={handleTouch} style={{ touchAction: 'manipulation' }}>
      {elements}
      {cursor}
    </div>
  );
}
```

### Viewport Issues

Handle viewport changes:

```tsx
function ResponsiveTypewriter() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { typewriter, elements, cursor } = useTypewriter({
    typeSpeed: viewport.width < 768 ? 60 : 40, // Slower on mobile
  });

  return (
    <div>
      {elements}
      {cursor}
    </div>
  );
}
```

## 🔍 Common Error Messages

### "Cannot read property 'type' of undefined"

**Cause:** Trying to use typewriter before it's initialized

**Solution:**

```tsx
// ❌ Wrong - Using typewriter immediately
const { typewriter } = useTypewriter();
typewriter.type('Hello'); // Error!

// ✅ Correct - Use in useEffect
const { typewriter } = useTypewriter();

useEffect(() => {
  typewriter.type('Hello').start();
}, []);
```

### "Maximum update depth exceeded"

**Cause:** Infinite re-render loop

**Solution:**

```tsx
// ❌ Wrong - Missing dependency array
useEffect(() => {
  typewriter.type('Hello').start();
}); // No dependency array causes infinite loop

// ✅ Correct - Empty dependency array
useEffect(() => {
  typewriter.type('Hello').start();
}, []); // Runs once
```

### "Cannot read property 'matches' of null"

**Cause:** `matchMedia` not available (older browsers)

**Solution:**

```tsx
// Add polyfill or feature detection
const supportsMatchMedia = typeof window !== 'undefined' && 'matchMedia' in window;

const { typewriter } = useTypewriter({
  respectReducedMotion: supportsMatchMedia,
});
```

## 🧪 Testing Issues

### Jest/Testing Library

Common testing problems:

```tsx
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
  },
});
```

### Async Testing

Test async animations:

```tsx
import { waitFor } from '@testing-library/react';

test('typewriter animation completes', async () => {
  render(<TypewriterComponent />);

  await waitFor(
    () => {
      expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});
```

## 📋 Diagnostic Checklist

When troubleshooting, check these items:

### ✅ Basic Setup

- [ ] Keyframes included in JSX
- [ ] `.start()` method called
- [ ] useEffect has proper dependencies
- [ ] Cleanup function implemented

### ✅ Performance

- [ ] Virtualization enabled for large text
- [ ] Stable configuration objects
- [ ] GPU acceleration enabled
- [ ] Memory leaks prevented

### ✅ Accessibility

- [ ] Reduced motion respected
- [ ] ARIA attributes configured
- [ ] Screen reader support tested
- [ ] Keyboard controls working

### ✅ Browser Support

- [ ] Target browsers supported
- [ ] Polyfills added if needed
- [ ] Feature detection implemented
- [ ] Mobile optimizations applied

### ✅ TypeScript

- [ ] Types imported correctly
- [ ] Configuration typed properly
- [ ] Event handlers typed
- [ ] No type errors in build

## 🆘 Getting Help

If you're still experiencing issues:

1. **Check the Examples** → [Example Gallery](../examples.md)
2. **Review the API** → [API Reference](../api/use-typewriter.md)
3. **Search Issues** → [GitHub Issues](https://github.com/doguyilmaz/use-typewriter-animation/issues)
4. **Create Minimal Reproduction** → [CodeSandbox Template](https://codesandbox.io)
5. **Ask for Help** → [GitHub Discussions](https://github.com/doguyilmaz/use-typewriter-animation/discussions)

### Creating a Bug Report

Include this information:

- **Library version**: `npm list use-typewriter-animation`
- **React version**: `npm list react`
- **Browser/Node version**: Check in DevTools
- **Minimal reproduction**: CodeSandbox link
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Console errors**: Any error messages

Remember: Most issues are configuration problems that can be solved quickly with the right approach! 🎯
