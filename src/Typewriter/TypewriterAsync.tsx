import { Suspense, useTransition, useDeferredValue } from 'react';
import {
  useTypewriter,
  type UseTypewriterOptions,
  type UseTypewriterReturn,
} from './useTypewriter';

/**
 * Enhanced options for React 19 concurrent features
 */
export type UseTypewriterAsyncOptions = UseTypewriterOptions & {
  /** Enable concurrent rendering with startTransition (default: true) */
  enableConcurrentRendering?: boolean;
  /** Use deferred values for non-urgent updates (default: true) */
  useDeferredUpdates?: boolean;
  /** Priority for transitions ('user-blocking' | 'user-visible' | 'background') */
  transitionPriority?: 'user-blocking' | 'user-visible' | 'background';
};

/**
 * Enhanced return type with React 19 concurrent features
 */
export type UseTypewriterAsyncReturn = UseTypewriterReturn & {
  /** Whether a transition is currently pending */
  isPending: boolean;
  /** Deferred state for non-critical updates */
  deferredState: UseTypewriterReturn['state'];
  /** Start a transition for typewriter operations */
  startTypewriterTransition: (callback: () => void) => void;
};

/**
 * Enhanced useTypewriter hook with React 19 concurrent features
 * Provides better performance for complex animations and large text sequences
 */
export function useTypewriterAsync(
  options: UseTypewriterAsyncOptions = {}
): UseTypewriterAsyncReturn {
  const {
    enableConcurrentRendering = true,
    useDeferredUpdates = true,
    transitionPriority = 'user-visible',
    ...typewriterOptions
  } = options;

  const [isPending, startTransition] = useTransition();
  const typewriterResult = useTypewriter(typewriterOptions);

  // Use deferred values for non-critical state updates
  const deferredState = useDeferredUpdates
    ? useDeferredValue(typewriterResult.state)
    : typewriterResult.state;

  // Enhanced transition function with priority hints
  const startTypewriterTransition = (callback: () => void) => {
    if (enableConcurrentRendering) {
      // React 19 transition with priority
      startTransition(() => {
        // Priority hint for React scheduler
        if (transitionPriority === 'user-blocking') {
          // Immediate update for user interactions
          callback();
        } else {
          // Deferred update for background animations
          setTimeout(callback, 0);
        }
      });
    } else {
      callback();
    }
  };

  return {
    ...typewriterResult,
    isPending,
    deferredState,
    startTypewriterTransition,
  };
}

/**
 * Suspense wrapper component for async typewriter loading
 */
export interface TypewriterSuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  /** Custom error boundary for typewriter errors */
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>;
}

export function TypewriterSuspense({
  children,
  fallback = <div>Loading typewriter...</div>,
  errorFallback,
}: TypewriterSuspenseProps) {
  if (errorFallback) {
    return (
      <TypewriterErrorBoundary fallback={errorFallback}>
        <Suspense fallback={fallback}>{children}</Suspense>
      </TypewriterErrorBoundary>
    );
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}

/**
 * Error boundary specifically for typewriter operations
 */
interface TypewriterErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ComponentType<{ error: Error; retry: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class TypewriterErrorBoundary extends React.Component<
  TypewriterErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: TypewriterErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Typewriter Error:', error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const Fallback = this.props.fallback;
      return <Fallback error={this.state.error} retry={this.retry} />;
    }

    return this.props.children;
  }
}

// React import for error boundary
import React from 'react';
