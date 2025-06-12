// Main hook export
export { useTypewriter } from './Typewriter/useTypewriter';

// React 19 concurrent features
export {
  useTypewriterAsync,
  TypewriterSuspense,
  TypewriterErrorBoundary,
} from './Typewriter/TypewriterAsync';

// Server component support
export {
  useTypewriterServer,
  TypewriterServerComponent,
  useIsomorphicEffect,
} from './Typewriter/TypewriterServer';

// Concurrent rendering features
export {
  useConcurrentTypewriter,
  useTypewriterPerformanceMonitor,
  useSchedulerAwareAnimation,
  useReact19Features,
} from './Typewriter/TypewriterConcurrent';

// Type exports for better TypeScript experience
export type { UseTypewriterReturn, UseTypewriterOptions } from './Typewriter/useTypewriter';

// React 19 types
export type {
  UseTypewriterAsyncOptions,
  UseTypewriterAsyncReturn,
  TypewriterSuspenseProps,
} from './Typewriter/TypewriterAsync';

export type {
  UseTypewriterServerOptions,
  UseTypewriterServerReturn,
  TypewriterServerComponentProps,
} from './Typewriter/TypewriterServer';

export type { ConcurrentTypewriterOptions } from './Typewriter/TypewriterConcurrent';

// Core types
export type {
  TypewriterBaseOptions,
  TypewriterBaseType,
  TypewriterState,
  TextSegment,
  TypewriterStateUpdater,
} from './Typewriter/TypewriterBase';

// Utility exports
export {
  createTypewriterBase,
  typewriterStyles,
  typewriterKeyframes,
} from './Typewriter/TypewriterBase';

// Performance testing (optional export for development)
export { PerformanceTest } from './performance/PerformanceTest';
