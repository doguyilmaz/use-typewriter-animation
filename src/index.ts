// Main hook export
export { useTypewriter } from './Typewriter/useTypewriter';

// Type exports for better TypeScript experience
export type {
	UseTypewriterReturn,
	UseTypewriterOptions,
} from './Typewriter/useTypewriter';

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