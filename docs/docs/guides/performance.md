# Performance Guide

Optimize your typewriter animations for maximum performance across all devices and browsers. This guide covers best practices, optimization techniques, and performance monitoring.

## 🎯 Performance Goals

### Target Metrics

- **Bundle Size**: < 20KB (currently ~15KB)
- **First Paint**: < 100ms
- **Animation FPS**: 60fps consistently
- **Memory Usage**: < 10MB for typical use
- **CPU Usage**: < 5% on modern devices

### Performance Principles

1. **Minimize Re-renders**: Efficient React reconciliation
2. **Optimize Animations**: Use CSS transforms and GPU acceleration
3. **Memory Management**: Proper cleanup and garbage collection
4. **Bundle Optimization**: Tree-shaking and code splitting
5. **Virtualization**: Handle large text efficiently

## ⚡ Core Optimizations

### 1. Virtualization for Large Text

Enable virtualization for long content:

```tsx
const { typewriter, elements, cursor } = useTypewriter({
  enableVirtualization: true,
  maxVisibleSegments: 100, // Only render visible segments
});

// Efficient for large content
useEffect(() => {
  const longText = Array(1000).fill('This is a long sentence. ').join('');

  typewriter
    .type(longText) // Automatically virtualized
    .start();
}, []);
```

**Benefits:**

- Constant memory usage regardless of text length
- Maintains 60fps even with thousands of characters
- Automatic cleanup of off-screen elements

### 2. Optimized Re-rendering

Minimize unnecessary re-renders:

```tsx
// ✅ Good - Stable configuration
const typewriterConfig = useMemo(
  () => ({
    typeSpeed: 50,
    cursorStyle: 'bar',
    respectReducedMotion: true,
  }),
  []
);

const { typewriter, elements, cursor } = useTypewriter(typewriterConfig);

// ✅ Good - Stable effect dependencies
useEffect(() => {
  typewriter.type('Optimized text').start();
}, []); // Empty deps - runs once

// ❌ Bad - Creates new object every render
const { typewriter } = useTypewriter({
  typeSpeed: 50, // New object every render
});
```

### 3. Memory Management

Proper cleanup prevents memory leaks:

```tsx
function OptimizedTypewriter() {
  const { typewriter, elements, cursor } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('Hello, World!')
      .on('end', () => {
        // Cleanup after animation
        console.log('Animation complete');
      })
      .start();

    // Cleanup on unmount
    return () => {
      typewriter.stop(); // Stops timers and clears memory
    };
  }, []);

  return (
    <div>
      {elements}
      {cursor}
    </div>
  );
}
```

## 🚀 Advanced Optimizations

### 1. Concurrent Features (React 18+)

Leverage React's concurrent features:

```tsx
import { useDeferredValue, useTransition } from 'react';

function ConcurrentTypewriter() {
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredText = useDeferredValue(text);

  const { typewriter, elements, cursor } = useTypewriter({
    enableVirtualization: true,
  });

  const handleLongText = () => {
    startTransition(() => {
      // Non-urgent update - won't block UI
      typewriter.type(generateLongText()).start();
    });
  };

  return (
    <div>
      <button onClick={handleLongText} disabled={isPending}>
        {isPending ? 'Loading...' : 'Type Long Text'}
      </button>
      <div style={{ opacity: isPending ? 0.7 : 1 }}>
        {elements}
        {cursor}
      </div>
    </div>
  );
}
```

### 2. Web Workers for Heavy Processing

Offload heavy computations:

```tsx
// worker.js
self.onmessage = function (e) {
  const { text, operations } = e.data;

  // Heavy text processing
  const processedText = processLargeText(text, operations);

  self.postMessage({ processedText });
};

// Component
function WorkerTypewriter() {
  const [worker] = useState(() => new Worker('/worker.js'));
  const { typewriter, elements, cursor } = useTypewriter();

  useEffect(() => {
    worker.onmessage = (e) => {
      const { processedText } = e.data;
      typewriter.type(processedText).start();
    };

    // Process large text in worker
    worker.postMessage({
      text: hugeLargeText,
      operations: ['format', 'highlight', 'sanitize'],
    });

    return () => worker.terminate();
  }, []);

  return (
    <div>
      {elements}
      {cursor}
    </div>
  );
}
```

### 3. Intersection Observer for Lazy Loading

Only animate when visible:

```tsx
function LazyTypewriter({ text }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  const { typewriter, elements, cursor } = useTypewriter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible) {
      typewriter.type(text).start();
    }
  }, [isVisible, text]);

  return (
    <div ref={ref}>
      {elements}
      {cursor}
    </div>
  );
}
```

## 📊 Performance Monitoring

### 1. Built-in Metrics

Monitor performance with built-in metrics:

```tsx
function MonitoredTypewriter() {
  const { typewriter, elements, cursor, metrics } = useTypewriter({
    enableVirtualization: true,
  });

  useEffect(() => {
    typewriter
      .on('start', () => {
        console.log('Animation started');
        performance.mark('typewriter-start');
      })
      .on('end', () => {
        performance.mark('typewriter-end');
        performance.measure('typewriter-duration', 'typewriter-start', 'typewriter-end');

        const measure = performance.getEntriesByName('typewriter-duration')[0];
        console.log(`Animation took ${measure.duration}ms`);
      })
      .type('Performance monitored text')
      .start();
  }, []);

  // Display metrics
  return (
    <div>
      <div>
        {elements}
        {cursor}
      </div>
      <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
        <div>Total Segments: {metrics.totalSegments}</div>
        <div>Visible Segments: {metrics.visibleSegments}</div>
        <div>Virtualized: {metrics.isVirtualized ? 'Yes' : 'No'}</div>
        <div>Render Time: {metrics.renderTime}ms</div>
        <div>Memory Usage: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
      </div>
    </div>
  );
}
```

### 2. React DevTools Profiler

Profile your components:

```tsx
import { Profiler } from 'react';

function ProfiledTypewriter() {
  const { typewriter, elements, cursor } = useTypewriter();

  const onRenderCallback = (id, phase, actualDuration) => {
    console.log('Typewriter render:', {
      id,
      phase,
      actualDuration,
    });
  };

  return (
    <Profiler id='typewriter' onRender={onRenderCallback}>
      <div>
        {elements}
        {cursor}
      </div>
    </Profiler>
  );
}
```

### 3. Custom Performance Hooks

Create reusable performance monitoring:

```tsx
function usePerformanceMonitor(name) {
  const [metrics, setMetrics] = useState({});

  const startMeasure = useCallback(
    (label) => {
      performance.mark(`${name}-${label}-start`);
    },
    [name]
  );

  const endMeasure = useCallback(
    (label) => {
      const startMark = `${name}-${label}-start`;
      const endMark = `${name}-${label}-end`;
      const measureName = `${name}-${label}`;

      performance.mark(endMark);
      performance.measure(measureName, startMark, endMark);

      const measure = performance.getEntriesByName(measureName)[0];
      setMetrics((prev) => ({
        ...prev,
        [label]: measure.duration,
      }));
    },
    [name]
  );

  return { metrics, startMeasure, endMeasure };
}

// Usage
function PerformantTypewriter() {
  const { metrics, startMeasure, endMeasure } = usePerformanceMonitor('typewriter');
  const { typewriter, elements, cursor } = useTypewriter();

  useEffect(() => {
    startMeasure('typing');

    typewriter
      .type('Performance measured text')
      .on('end', () => endMeasure('typing'))
      .start();
  }, []);

  return (
    <div>
      <div>
        {elements}
        {cursor}
      </div>
      {metrics.typing && <div>Typing took: {metrics.typing.toFixed(2)}ms</div>}
    </div>
  );
}
```

## 🎨 CSS Optimizations

### 1. GPU Acceleration

Use CSS transforms for smooth animations:

```tsx
const optimizedStyles = {
  // Enable GPU acceleration
  transform: 'translateZ(0)',
  willChange: 'transform, opacity',

  // Optimize text rendering
  textRendering: 'optimizeSpeed',
  fontSmooth: 'antialiased',
  WebkitFontSmoothing: 'antialiased',

  // Prevent layout thrashing
  contain: 'layout style paint',
};

return (
  <div style={optimizedStyles}>
    {elements}
    {cursor}
  </div>
);
```

### 2. Efficient Keyframes

Optimize CSS animations:

```css
/* ✅ Good - Uses transform (GPU accelerated) */
@keyframes cursor-blink-optimized {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* ❌ Bad - Causes layout recalculation */
@keyframes cursor-blink-slow {
  0%,
  50% {
    visibility: visible;
  }
  51%,
  100% {
    visibility: hidden;
  }
}
```

### 3. Container Queries (Modern Browsers)

Responsive without JavaScript:

```css
.typewriter-container {
  container-type: inline-size;
}

@container (max-width: 400px) {
  .typewriter-text {
    font-size: 0.9rem;
    line-height: 1.4;
  }
}

@container (min-width: 800px) {
  .typewriter-text {
    font-size: 1.2rem;
    line-height: 1.6;
  }
}
```

## 📱 Mobile Optimizations

### 1. Touch-Friendly Controls

Optimize for mobile devices:

```tsx
function MobileOptimizedTypewriter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  }, []);

  const { typewriter, elements, cursor } = useTypewriter({
    typeSpeed: isMobile ? 40 : 30, // Slower on mobile
    enableKeyboardControls: !isMobile, // Disable on mobile
    respectReducedMotion: true,
  });

  return (
    <div
      style={{
        fontSize: isMobile ? '1rem' : '1.2rem',
        padding: isMobile ? '0.5rem' : '1rem',
        touchAction: 'manipulation', // Prevent zoom on double-tap
      }}
    >
      {elements}
      {cursor}
    </div>
  );
}
```

### 2. Reduced Motion Detection

Respect user preferences:

```tsx
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

function AccessibleTypewriter() {
  const prefersReducedMotion = useReducedMotion();

  const { typewriter, elements, cursor } = useTypewriter({
    respectReducedMotion: true,
    reducedMotionFallback: prefersReducedMotion ? 'instant' : 'slow',
  });

  return (
    <div>
      {elements}
      {cursor}
    </div>
  );
}
```

## 🔧 Bundle Optimization

### 1. Tree Shaking

Import only what you need:

```tsx
// ✅ Good - Tree-shakeable imports
import { useTypewriter } from 'use-typewriter-animation';

// ❌ Bad - Imports entire library
import * as TypewriterLib from 'use-typewriter-animation';
```

### 2. Code Splitting

Split large typewriter implementations:

```tsx
import { lazy, Suspense } from 'react';

// Lazy load heavy typewriter components
const HeavyTypewriter = lazy(() => import('./HeavyTypewriter'));
const CreativeTypewriter = lazy(() => import('./CreativeTypewriter'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading typewriter...</div>}>
        <HeavyTypewriter />
      </Suspense>

      <Suspense fallback={<div>Loading creative typewriter...</div>}>
        <CreativeTypewriter />
      </Suspense>
    </div>
  );
}
```

### 3. Dynamic Imports

Load features on demand:

```tsx
function DynamicTypewriter() {
  const [advancedFeatures, setAdvancedFeatures] = useState(null);

  const loadAdvancedFeatures = async () => {
    const module = await import('./advanced-typewriter-features');
    setAdvancedFeatures(module);
  };

  const { typewriter, elements, cursor } = useTypewriter();

  return (
    <div>
      <div>
        {elements}
        {cursor}
      </div>

      <button onClick={loadAdvancedFeatures}>Load Advanced Features</button>

      {advancedFeatures && <advancedFeatures.AdvancedControls typewriter={typewriter} />}
    </div>
  );
}
```

## 📈 Performance Testing

### 1. Automated Performance Tests

```tsx
// performance.test.js
import { render, screen } from '@testing-library/react';
import { useTypewriter } from 'use-typewriter-animation';

function TestTypewriter({ text }) {
  const { typewriter, elements, cursor } = useTypewriter();

  useEffect(() => {
    typewriter.type(text).start();
  }, [text]);

  return <div data-testid="typewriter">{elements}{cursor}</div>;
}

describe('Typewriter Performance', () => {
  test('renders large text within performance budget', async () => {
    const startTime = performance.now();

    render(<TestTypewriter text="A".repeat(10000) />);

    const endTime = performance.now();
    const renderTime = endTime - startTime;

    expect(renderTime).toBeLessThan(100); // Should render in < 100ms
  });

  test('memory usage stays within limits', () => {
    const initialMemory = performance.memory?.usedJSHeapSize || 0;

    render(<TestTypewriter text="Large text content..." />);

    const finalMemory = performance.memory?.usedJSHeapSize || 0;
    const memoryIncrease = finalMemory - initialMemory;

    expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024); // < 10MB
  });
});
```

### 2. Lighthouse Integration

```javascript
// lighthouse-config.js
module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyAudits: [
      'first-contentful-paint',
      'largest-contentful-paint',
      'cumulative-layout-shift',
      'total-blocking-time',
    ],
  },
  audits: [
    'typewriter-performance-audit', // Custom audit
  ],
};
```

## 🎯 Performance Checklist

### ✅ Optimization Checklist

- [ ] **Bundle Size**

  - [ ] Tree-shaking enabled
  - [ ] Code splitting implemented
  - [ ] Dynamic imports for heavy features
  - [ ] Bundle size < 20KB

- [ ] **Runtime Performance**

  - [ ] Virtualization for large text
  - [ ] Stable configuration objects
  - [ ] Proper cleanup in useEffect
  - [ ] GPU acceleration enabled

- [ ] **Memory Management**

  - [ ] Event listeners cleaned up
  - [ ] Timers cleared on unmount
  - [ ] Large objects garbage collected
  - [ ] Memory usage < 10MB

- [ ] **Accessibility Performance**

  - [ ] Reduced motion respected
  - [ ] Screen reader optimizations
  - [ ] Keyboard controls efficient
  - [ ] ARIA updates optimized

- [ ] **Mobile Performance**
  - [ ] Touch-friendly controls
  - [ ] Responsive font sizes
  - [ ] Reduced animations on mobile
  - [ ] Battery usage optimized

## 📊 Actual Bundle Metrics

### Our Library Performance

Based on actual measurements of our build output:

```
ESM Bundle: 15KB raw → 5.3KB gzipped → 4.8KB brotli
CJS Bundle: 16KB raw → 5.6KB gzipped → 5.1KB brotli
```

### Performance Characteristics

- **Bundle Size**: 5.3KB gzipped (ESM recommended)
- **Zero Dependencies**: No external runtime dependencies
- **Tree-shakeable**: Import only what you use
- **Memory Efficient**: Virtualization available for large text
- **GPU Accelerated**: CSS-based animations

_Note: Performance will vary based on your specific use case, bundler configuration, and target browsers. We recommend measuring in your own environment._

### Comparing Libraries

When evaluating typewriter animation libraries, we recommend:

1. **Measure Yourself**: Bundle sizes and performance vary greatly based on your setup
2. **Consider Your Needs**: Features vs. size trade-offs
3. **Test in Your Environment**: What works for us might not work for you
4. **Check Recent Versions**: Libraries evolve quickly

**Our Philosophy**: We focus on providing accurate measurements of our own library rather than making comparative claims. Use our `bun run analyze` command to verify our bundle size claims.

## 🚀 Best Practices Summary

1. **Enable Virtualization** for text > 1000 characters
2. **Use Stable Configuration** objects with useMemo
3. **Implement Proper Cleanup** in useEffect
4. **Monitor Performance** with built-in metrics
5. **Respect User Preferences** for motion and accessibility
6. **Optimize for Mobile** with responsive settings
7. **Use Code Splitting** for large implementations
8. **Test Performance** regularly with automated tests

Remember: Performance is not just about speed—it's about creating smooth, accessible experiences for all users! ⚡
