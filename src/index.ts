// Main hook export
export { useTypewriter } from './Typewriter/useTypewriter';

// Type exports for better TypeScript experience
export type {
	UseTypewriterReturn,
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