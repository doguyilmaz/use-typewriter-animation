import { useMemo, useCallback, startTransition, useTransition, useDeferredValue } from 'react';
import { useTypewriter, type UseTypewriterOptions } from './useTypewriter';

/**
 * React 19 concurrent features for typewriter
 */
export type ConcurrentTypewriterOptions = UseTypewriterOptions & {
  /** Enable React concurrent features (default: true) */
  enableConcurrentMode?: boolean;
  /** Use time slicing for long animations (default: true) */
  useTimeSlicing?: boolean;
  /** Priority level for animations */
  priority?: 'immediate' | 'normal' | 'low';
  /** Batch size for time slicing (default: 5) */
  timeSliceBatchSize?: number;
  /** Enable experimental features (default: false) */
  enableExperimentalFeatures?: boolean;
};

/**
 * Enhanced concurrent typewriter hook
 * Leverages React 19's concurrent features for optimal performance
 */
export function useConcurrentTypewriter(options: ConcurrentTypewriterOptions = {}) {
  const {
    enableConcurrentMode = true,
    useTimeSlicing = true,
    priority = 'normal',
    timeSliceBatchSize = 5,
    enableExperimentalFeatures = false,
    ...typewriterOptions
  } = options;

  const [isPending, startAnimationTransition] = useTransition();
  const baseTypewriter = useTypewriter(typewriterOptions);

  // Defer non-critical updates for better performance
  const deferredState = useDeferredValue(baseTypewriter.state);

  // Enhanced transition function with priority hints
  const handleAnimationEvent = useCallback(
    (callback: () => void) => {
      if (enableConcurrentMode) {
        switch (priority) {
          case 'immediate':
            callback();
            break;
          case 'normal':
            startAnimationTransition(callback);
            break;
          case 'low':
            setTimeout(() => startAnimationTransition(callback), 0);
            break;
        }
      } else {
        callback();
      }
    },
    [enableConcurrentMode, startAnimationTransition, priority]
  );

  // Time-sliced animation control
  const enhancedTypewriter = useMemo(() => {
    if (!useTimeSlicing) {
      return baseTypewriter.typewriter;
    }

    // Wrap typewriter methods with time slicing
    return {
      ...baseTypewriter.typewriter,
      type: (text: string, options?: any) => {
        if (text.length <= timeSliceBatchSize) {
          return baseTypewriter.typewriter.type(text, options);
        }

        // Split long text into chunks for time slicing
        const chunks = [];
        for (let i = 0; i < text.length; i += timeSliceBatchSize) {
          chunks.push(text.slice(i, i + timeSliceBatchSize));
        }

        // Chain the chunks with transitions
        chunks.forEach((chunk, index) => {
          if (index === 0) {
            baseTypewriter.typewriter.type(chunk, options);
          } else {
            // Use concurrent features for subsequent chunks
            handleAnimationEvent(() => {
              baseTypewriter.typewriter.type(chunk, options);
            });
          }
        });

        return baseTypewriter.typewriter;
      },
    };
  }, [baseTypewriter.typewriter, useTimeSlicing, timeSliceBatchSize, handleAnimationEvent]);

  // Enhanced performance metrics
  const concurrentMetrics = useMemo(
    () => ({
      ...baseTypewriter.metrics,
      isPending,
      isConcurrentMode: enableConcurrentMode,
      isTimeSliced: useTimeSlicing,
      priority,
      deferredSegments: deferredState.segments.length,
    }),
    [
      baseTypewriter.metrics,
      isPending,
      enableConcurrentMode,
      useTimeSlicing,
      priority,
      deferredState.segments.length,
    ]
  );

  return {
    ...baseTypewriter,
    typewriter: enhancedTypewriter,
    state: deferredState,
    metrics: concurrentMetrics,
    isPending,
    startTransition: handleAnimationEvent,
  };
}

/**
 * Performance monitor for concurrent typewriter
 */
export function useTypewriterPerformanceMonitor() {
  const performanceEntries = useMemo(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    return {
      measure: (name: string, startMark: string, endMark: string) => {
        try {
          performance.measure(name, startMark, endMark);
          return performance.getEntriesByName(name, 'measure')[0];
        } catch (e) {
          console.warn('Performance measurement failed:', e);
          return null;
        }
      },
      mark: (name: string) => {
        try {
          performance.mark(name);
        } catch (e) {
          console.warn('Performance mark failed:', e);
        }
      },
      clearMarks: () => {
        try {
          performance.clearMarks();
          performance.clearMeasures();
        } catch (e) {
          console.warn('Performance clear failed:', e);
        }
      },
    };
  }, []);

  return performanceEntries;
}

/**
 * Scheduler-aware animation controller
 * Uses React's scheduler for optimal frame timing
 */
export function useSchedulerAwareAnimation() {
  const scheduleAnimation = useCallback((callback: () => void) => {
    // Use React 19's scheduler API when available
    if (typeof window !== 'undefined' && 'scheduler' in window) {
      const scheduler = (window as any).scheduler;
      if (scheduler && scheduler.postTask) {
        scheduler.postTask(callback, { priority: 'user-visible' });
        return;
      }
    }

    // Fallback to requestAnimationFrame
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(callback);
    } else {
      setTimeout(callback, 16); // ~60fps fallback
    }
  }, []);

  const scheduleWithPriority = useCallback(
    (
      callback: () => void,
      priority: 'user-blocking' | 'user-visible' | 'background' = 'user-visible'
    ) => {
      switch (priority) {
        case 'user-blocking':
          // Immediate execution for critical user interactions
          callback();
          break;
        case 'user-visible':
          // Standard animation timing
          scheduleAnimation(callback);
          break;
        case 'background':
          // Deferred execution for background tasks
          setTimeout(() => scheduleAnimation(callback), 100);
          break;
      }
    },
    [scheduleAnimation]
  );

  return {
    scheduleAnimation,
    scheduleWithPriority,
  };
}

/**
 * React 19 feature detection hook
 */
export function useReact19Features() {
  const features = useMemo(() => {
    const hasTransitions = typeof startTransition === 'function';
    const hasDeferredValue = typeof useDeferredValue === 'function';

    return {
      hasTransitions,
      hasDeferredValue,
      hasEffectEvent: false, // React 19 experimental feature not yet available
      isConcurrentModeAvailable: hasTransitions && hasDeferredValue,
      reactVersion: typeof React !== 'undefined' ? React.version : 'unknown',
    };
  }, []);

  return features;
}

// React import for version detection
import React from 'react';
