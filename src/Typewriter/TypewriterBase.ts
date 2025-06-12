// TypeScript types for the typewriter

type QueueAction = () => Promise<void>;
type HighlightStyle = { background: string; color?: string };
type HighlightFrom = 'start' | 'end';
type TypewriterEvents = 'start' | 'end' | 'loop';

export type TypewriterBaseOptions = {
	loop?: boolean;
	typeSpeed?: number;
	deleteSpeed?: number;
	cursorStyle?: 'block' | 'underline' | 'bar';
	cursorBlinkSpeed?: number;
	cursorColor?: string;
	cursorWidth?: string | number;
	enableCursor?: boolean;
};

export type TextSegment = {
	id: string;
	content: string;
	color?: string;
	backgroundColor?: string;
	isHighlighted?: boolean;
	isNewLine?: boolean;
};

export type TypewriterState = {
	segments: TextSegment[];
	isTyping: boolean;
	isLooping: boolean;
	currentText: string;
	visibleText: string;
	cursorVisible: boolean;
};

export type TypewriterStateUpdater = (state: TypewriterState) => void;

export type TypewriterBaseType = {
	type: (text: string, options?: { speed?: number }) => TypewriterBaseType;
	deleteLetters: (letterCount: number) => TypewriterBaseType;
	deleteWords: (wordCount: number) => TypewriterBaseType;
	deleteAll: () => TypewriterBaseType;
	pauseFor: (duration: number) => TypewriterBaseType;
	colorize: (color: string) => TypewriterBaseType;
	highlight: (start: number, length: number, style: HighlightStyle) => TypewriterBaseType;
	highlightWords: (wordCount: number, from: HighlightFrom, style: HighlightStyle) => TypewriterBaseType;
	newLine: () => TypewriterBaseType;
	on: (event: TypewriterEvents, callback: () => void) => TypewriterBaseType;
	start: () => Promise<void>;
	stop: () => void;
	reset: () => void;
	getState: () => TypewriterState;
};

// CSS-in-JS styles to eliminate global style injection
export const typewriterStyles = {
	cursor: {
		display: 'inline-block',
		animation: 'typewriter-blink 1s step-end infinite',
	},
	highlightTransition: {
		transition: 'color 0.3s ease, background-color 0.3s ease',
	},
	optimizedText: {
		// Optimize text rendering for better performance
		textRendering: 'optimizeSpeed' as const,
		fontKerning: 'none' as const,
		fontVariantLigatures: 'none' as const,
	},
	container: {
		// Container optimizations
		willChange: 'contents',
		contain: 'layout style' as const,
	},
};

// CSS keyframes for cursor blinking and typing animations
export const typewriterKeyframes = `
	@keyframes typewriter-blink {
		from, to { opacity: 1; }
		50% { opacity: 0; }
	}
	
	@keyframes typewriter-appear {
		from { opacity: 0; transform: translateY(-2px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	@keyframes typewriter-highlight {
		0% { background-color: transparent; }
		50% { background-color: rgba(255, 255, 0, 0.3); }
		100% { background-color: var(--highlight-color, transparent); }
	}
`;

export function createTypewriterBase(onStateChange: TypewriterStateUpdater, options: TypewriterBaseOptions = {}): TypewriterBaseType {
	const actionQueue: QueueAction[] = [];
	const eventCallbacks: { [K in TypewriterEvents]: (() => void)[] } = {
		start: [],
		end: [],
		loop: [],
	};

	let currentState: TypewriterState = {
		segments: [],
		isTyping: false,
		isLooping: false,
		currentText: '',
		visibleText: '',
		cursorVisible: true,
	};

	let typeSpeed = options.typeSpeed || 30;
	let deleteSpeed = options.deleteSpeed || 30;
	let shouldLoop = options.loop || false;
	let currentColor = '';
	let isRunning = false;
	let activeTimeouts: Set<ReturnType<typeof setTimeout>> = new Set();
	let isDestroyed = false;

	// Batched state updates for better performance
	let pendingUpdates: Partial<TypewriterState> | null = null;
	let updateTimeout: ReturnType<typeof setTimeout> | null = null;

	const flushUpdates = () => {
		if (pendingUpdates && !isDestroyed) {
			currentState = { ...currentState, ...pendingUpdates };
			onStateChange(currentState);
			pendingUpdates = null;
		}
		updateTimeout = null;
	};

	const updateState = (updates: Partial<TypewriterState>, immediate = false) => {
		if (isDestroyed) return;
		
		if (immediate) {
			// Immediate update for critical state changes
			currentState = { ...currentState, ...updates };
			onStateChange(currentState);
			return;
		}

		// Batch non-critical updates
		pendingUpdates = pendingUpdates ? { ...pendingUpdates, ...updates } : updates;
		
		if (!updateTimeout) {
			updateTimeout = setTimeout(flushUpdates, 0) as ReturnType<typeof setTimeout>;
		}
	};

	const addToQueue = (action: (resolve: () => void) => void) => {
		actionQueue.push(() => {
			return new Promise<void>((resolve) => {
				if (isDestroyed) {
					resolve();
					return;
				}
				action(resolve);
			});
		});
	};

	const clearAllTimeouts = () => {
		activeTimeouts.forEach(timeout => clearTimeout(timeout));
		activeTimeouts.clear();
		
		// Clear batching timeout if pending
		if (updateTimeout) {
			clearTimeout(updateTimeout);
			updateTimeout = null;
		}
		
		// Flush any pending updates before clearing
		if (pendingUpdates) {
			flushUpdates();
		}
	};

	const generateSegmentId = () => `segment-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

	const typewriterBase: TypewriterBaseType = {
		type: function (text, options = {}) {
			addToQueue((resolve) => {
				if (!isRunning) {
					eventCallbacks.start.forEach(callback => callback());
					isRunning = true;
					updateState({ isTyping: true }, true); // Immediate update for critical state
				}

				let charIndex = 0;
				const speed = options.speed || typeSpeed;
				const segmentId = generateSegmentId();

				const typeNextChar = () => {
					if (isDestroyed || charIndex >= text.length) {
						resolve();
						return;
					}

					const char = text[charIndex];
					const newSegment: TextSegment = {
						id: `${segmentId}-${charIndex}`,
						content: char,
						...(currentColor ? { color: currentColor } : {}),
						isNewLine: false,
					};

					updateState({
						segments: [...currentState.segments, newSegment],
						currentText: currentState.currentText + char,
						visibleText: currentState.visibleText + char,
					});

					charIndex++;
					const timeout = setTimeout(typeNextChar, speed) as ReturnType<typeof setTimeout>;
					activeTimeouts.add(timeout);
				};

				typeNextChar();
			});
			return this;
		},
		deleteLetters: function (letterCount) {
			addToQueue((resolve) => {
				const totalSegments = currentState.segments.length;
				const count = Math.min(letterCount, totalSegments);
				let deletedCount = 0;

				const deleteNextChar = () => {
					if (isDestroyed || deletedCount >= count || currentState.segments.length === 0) {
						resolve();
						return;
					}

					const newSegments = currentState.segments.slice(0, -1);
					const newVisibleText = newSegments.map(s => s.content).join('');

					updateState({
						segments: newSegments,
						visibleText: newVisibleText,
					});

					deletedCount++;
					const timeout = setTimeout(deleteNextChar, deleteSpeed) as ReturnType<typeof setTimeout>;
					activeTimeouts.add(timeout);
				};

				deleteNextChar();
			});
			return this;
		},
		deleteWords: function (wordCount) {
			addToQueue((resolve) => {
				const words = currentState.visibleText.trim().split(/\s+/);
				const count = Math.min(wordCount, words.length);
				const wordsToDelete = words.slice(-count);
				const charsToRemove = wordsToDelete.join(' ').length;
				
				if (charsToRemove > 0) {
					typewriterBase.deleteLetters(charsToRemove);
				}
				resolve();
			});
			return this;
		},
		deleteAll: function () {
			addToQueue((resolve) => {
				updateState({
					segments: [],
					currentText: '',
					visibleText: '',
				});
				currentColor = '';
				resolve();
			});
			return this;
		},
		pauseFor: function (duration) {
			addToQueue((resolve) => {
				const timeout = setTimeout(resolve, duration) as ReturnType<typeof setTimeout>;
				activeTimeouts.add(timeout);
			});
			return this;
		},
		colorize: function (color) {
			addToQueue((resolve) => {
				currentColor = color;
				resolve();
			});
			return this;
		},
		highlight: function (start, length, style) {
			addToQueue((resolve) => {
				const endIndex = Math.min(start + length, currentState.segments.length);
				const updatedSegments = currentState.segments.map((segment, index) => {
					if (index >= start && index < endIndex) {
						return {
							...segment,
							...(style.color ? { color: style.color } : {}),
							...(style.background ? { backgroundColor: style.background } : {}),
							isHighlighted: true,
						};
					}
					return segment;
				});

				updateState({ segments: updatedSegments });
				resolve();
			});
			return this;
		},
		highlightWords: function (wordCount, from, style) {
			addToQueue((resolve) => {
				const words = currentState.visibleText.trim().split(/\s+/);
				const count = Math.min(wordCount, words.length);

				let startWordIndex: number;
				let endWordIndex: number;

				if (from === 'start') {
					startWordIndex = 0;
					endWordIndex = count;
				} else {
					startWordIndex = Math.max(0, words.length - count);
					endWordIndex = words.length;
				}

				let charIndex = 0;
				for (let i = 0; i < words.length; i++) {
					const word = words[i];
					if (i >= startWordIndex && i < endWordIndex) {
						typewriterBase.highlight(charIndex, word.length, style);
					}
					charIndex += word.length + (i < words.length - 1 ? 1 : 0); // +1 for space
				}

				resolve();
			});
			return this;
		},
		newLine: function () {
			addToQueue((resolve) => {
				const newLineSegment: TextSegment = {
					id: generateSegmentId(),
					content: '\n',
					isNewLine: true,
				};

				updateState({
					segments: [...currentState.segments, newLineSegment],
					currentText: currentState.currentText + '\n',
					visibleText: currentState.visibleText + '\n',
				});
				resolve();
			});
			return this;
		},
		on: function (event, callback) {
			if (eventCallbacks[event]) {
				eventCallbacks[event].push(callback);
			}
			return this;
		},
		start: async function () {
			if (isDestroyed) return;

			try {
				for (const action of actionQueue) {
					if (isDestroyed) break;
					await action();
				}

				if (shouldLoop && !isDestroyed) {
					eventCallbacks.loop.forEach(callback => callback());
					updateState({ isLooping: true });
					// Use setTimeout to prevent stack overflow in loop mode
					const timeout = setTimeout(() => {
						if (!isDestroyed) {
							typewriterBase.start();
						}
					}, 0) as ReturnType<typeof setTimeout>;
					activeTimeouts.add(timeout);
				} else if (!isDestroyed) {
					eventCallbacks.end.forEach(callback => callback());
					updateState({ isTyping: false, isLooping: false });
					isRunning = false;
				}
			} catch (error) {
				console.error('Typewriter error:', error);
				updateState({ isTyping: false, isLooping: false });
				isRunning = false;
			}
		},
		stop: () => {
			actionQueue.length = 0;
			clearAllTimeouts();
			updateState({ isTyping: false, isLooping: false });
			isRunning = false;
		},
		reset: () => {
			typewriterBase.stop();
			updateState({
				segments: [],
				isTyping: false,
				isLooping: false,
				currentText: '',
				visibleText: '',
				cursorVisible: true,
			});
			currentColor = '';
			isRunning = false;
		},
		getState: () => ({ ...currentState }),
	};

	// Cleanup function to be called when component unmounts
	typewriterBase.stop = () => {
		isDestroyed = true;
		actionQueue.length = 0;
		clearAllTimeouts();
		updateState({ isTyping: false, isLooping: false });
		isRunning = false;
		// Clear event callbacks
		Object.keys(eventCallbacks).forEach(key => {
			eventCallbacks[key as TypewriterEvents] = [];
		});
	};

	return typewriterBase;
}

export default createTypewriterBase;
