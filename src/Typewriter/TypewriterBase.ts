// TypeScript types for the typewriter

type QueueAction = () => Promise<void>;
type HighlightStyle = { background: string; color?: string };
type HighlightFrom = 'start' | 'end';
type TypewriterEvents = 'start' | 'end' | 'loop';

export type TypeMethodOptions = {
  speed?: number;
  screenReaderText?: string;
  announceCompletion?: boolean;
  reducedMotionFallback?: 'instant' | 'none';
};

export type TypewriterBaseOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  cursorStyle?: 'block' | 'underline' | 'bar';
  cursorBlinkSpeed?: number;
  cursorColor?: string;
  cursorWidth?: string | number;
  enableCursor?: boolean;
  // Accessibility options
  ariaLive?: 'polite' | 'assertive' | 'off';
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: 'status' | 'log' | 'alert' | 'marquee';
  screenReaderText?: string;
  announceCompletion?: boolean;
  respectReducedMotion?: boolean;
  reducedMotionFallback?: 'instant' | 'none';
  // Keyboard navigation options
  enableKeyboardControls?: boolean;
  keyboardShortcuts?: {
    pause?: string[];
    resume?: string[];
    skip?: string[];
    reset?: string[];
  };
  manageFocus?: boolean;
  focusOnComplete?: boolean;
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
  // Accessibility state
  screenReaderAnnouncement?: string;
  isComplete?: boolean;
  reducedMotion?: boolean;
  // Keyboard control state
  isPaused?: boolean;
  canBePaused?: boolean;
};

export type TypewriterStateUpdater = (state: TypewriterState) => void;

export type TypewriterBaseType = {
  type: (text: string, options?: TypeMethodOptions) => TypewriterBaseType;
  deleteLetters: (letterCount: number) => TypewriterBaseType;
  deleteWords: (wordCount: number) => TypewriterBaseType;
  deleteAll: () => TypewriterBaseType;
  pauseFor: (duration: number) => TypewriterBaseType;
  colorize: (color: string) => TypewriterBaseType;
  highlight: (start: number, length: number, style: HighlightStyle) => TypewriterBaseType;
  highlightWords: (
    wordCount: number,
    from: HighlightFrom,
    style: HighlightStyle
  ) => TypewriterBaseType;
  newLine: () => TypewriterBaseType;
  on: (event: TypewriterEvents, callback: () => void) => TypewriterBaseType;
  start: () => Promise<void>;
  stop: () => void;
  reset: () => TypewriterBaseType;
  getState: () => TypewriterState;
  // Keyboard control methods
  pause: () => void;
  resume: () => void;
  skip: () => void;
  isPaused: () => boolean;
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
  // Accessibility styles
  screenReaderOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' as const,
    border: '0',
  },
  reducedMotionCursor: {
    display: 'inline-block',
    animation: 'none',
    opacity: 1,
  },
  highContrastMode: {
    // Ensure visibility in high contrast mode
    '@media (prefers-contrast: high)': {
      borderColor: 'currentColor',
      backgroundColor: 'transparent',
    },
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
	
	/* Respect reduced motion preferences */
	@media (prefers-reduced-motion: reduce) {
		@keyframes typewriter-blink {
			from, to { opacity: 1; }
		}
		
		@keyframes typewriter-appear {
			from, to { opacity: 1; transform: translateY(0); }
		}
		
		@keyframes typewriter-highlight {
			from, to { background-color: var(--highlight-color, transparent); }
		}
	}
`;

// Accessibility utility functions
export const detectReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  if (!window.matchMedia) return false;
  try {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery ? mediaQuery.matches : false;
  } catch {
    return false;
  }
};

export const detectHighContrast = (): boolean => {
  if (typeof window === 'undefined') return false;
  if (!window.matchMedia) return false;
  try {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    return mediaQuery ? mediaQuery.matches : false;
  } catch {
    return false;
  }
};

export function createTypewriterBase(
  onStateChange: TypewriterStateUpdater,
  options: TypewriterBaseOptions = {}
): TypewriterBaseType {
  const actionQueue: QueueAction[] = [];
  const eventCallbacks: { [K in TypewriterEvents]: (() => void)[] } = {
    start: [],
    end: [],
    loop: [],
  };

  // Detect accessibility preferences
  const hasReducedMotion = options.respectReducedMotion !== false && detectReducedMotion();
  const shouldRespectReducedMotion = options.respectReducedMotion ?? true;

  let currentState: TypewriterState = {
    segments: [],
    isTyping: false,
    isLooping: false,
    currentText: '',
    visibleText: '',
    cursorVisible: true,
    // Accessibility state
    screenReaderAnnouncement: '',
    isComplete: false,
    reducedMotion: hasReducedMotion && shouldRespectReducedMotion,
    // Keyboard control state
    isPaused: false,
    canBePaused: options.enableKeyboardControls ?? false,
  };

  let typeSpeed = options.typeSpeed || 30;
  let deleteSpeed = options.deleteSpeed || 30;
  let shouldLoop = options.loop || false;
  let currentColor = '';
  let isRunning = false;
  let activeTimeouts: Set<ReturnType<typeof setTimeout>> = new Set();
  let isDestroyed = false;

  // Keyboard control state
  let isPaused = false;
  let pausedResolvers: (() => void)[] = [];

  // Simplified state update - no more unnecessary batching
  const updateState = (updates: Partial<TypewriterState>) => {
    if (isDestroyed) return;
    currentState = { ...currentState, ...updates };
    onStateChange(currentState);
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
    activeTimeouts.forEach((timeout) => clearTimeout(timeout));
    activeTimeouts.clear();
  };

  const generateSegmentId = () =>
    `segment-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

  const typewriterBase: TypewriterBaseType = {
    type: function (text, options = {}) {
      addToQueue((resolve) => {
        if (!isRunning) {
          eventCallbacks.start.forEach((callback) => callback());
          isRunning = true;
          updateState({ isTyping: true });
        }

        // Handle reduced motion - instant display
        if (currentState.reducedMotion && options.reducedMotionFallback !== 'none') {
          const segmentId = generateSegmentId();
          const newSegments: TextSegment[] = text.split('').map((char, index) => ({
            id: `${segmentId}-${index}`,
            content: char,
            ...(currentColor ? { color: currentColor } : {}),
            isNewLine: false,
          }));

          updateState({
            segments: [...currentState.segments, ...newSegments],
            currentText: currentState.currentText + text,
            visibleText: currentState.visibleText + text,
            screenReaderAnnouncement: options.screenReaderText || text,
          });

          resolve();
          return;
        }

        let charIndex = 0;
        const speed = options.speed || typeSpeed;
        const segmentId = generateSegmentId();

        const typeNextChar = () => {
          if (isDestroyed || charIndex >= text.length) {
            // Announce completion for screen readers
            if (charIndex >= text.length && options.announceCompletion) {
              updateState({
                screenReaderAnnouncement: `Finished typing: ${text}`,
              });
            }
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
            // Progressive announcement for screen readers
            screenReaderAnnouncement:
              charIndex === text.length - 1 ? options.screenReaderText || text : '',
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
          const newVisibleText = newSegments.map((s) => s.content).join('');

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

        if (count === 0) {
          resolve();
          return;
        }

        // Calculate how many characters to remove
        const wordsToDelete = words.slice(-count);
        let charsToRemove = wordsToDelete.join(' ').length;

        // Include trailing space if deleting from the end and there are remaining words
        if (words.length > count && currentState.visibleText.endsWith(' ')) {
          charsToRemove += 1;
        }

        let deletedCount = 0;
        const deleteNextChar = () => {
          if (isDestroyed || deletedCount >= charsToRemove || currentState.segments.length === 0) {
            resolve();
            return;
          }

          const newSegments = currentState.segments.slice(0, -1);
          const newVisibleText = newSegments.map((s) => s.content).join('');

          updateState({
            segments: newSegments,
            visibleText: newVisibleText,
          });

          deletedCount++;
          const timeout = setTimeout(deleteNextChar, deleteSpeed) as ReturnType<typeof setTimeout>;
          activeTimeouts.add(timeout);
        };

        if (charsToRemove > 0) {
          deleteNextChar();
        } else {
          resolve();
        }
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
      if (isDestroyed) {
        // Instance was destroyed, reset for new start
        isDestroyed = false; // Reset the destroyed flag
        isRunning = false; // Reset running flag
        activeTimeouts.clear(); // Clear any stale timeouts

        // Clear existing state to prevent accumulation from multiple runs
        currentState = {
          segments: [],
          isTyping: false,
          isLooping: false,
          currentText: '',
          visibleText: '',
          cursorVisible: true,
          screenReaderAnnouncement: '',
          isComplete: false,
          reducedMotion: currentState.reducedMotion ?? false, // Preserve this setting
          isPaused: false,
          canBePaused: currentState.canBePaused ?? false, // Preserve this setting
        };
        onStateChange(currentState);
        currentColor = ''; // Reset color
      }

      // Prevent multiple simultaneous start calls
      if (isRunning) {
        return;
      }

      try {
        for (const action of actionQueue) {
          if (isDestroyed) break;
          await action();
        }

        if (shouldLoop && !isDestroyed) {
          eventCallbacks.loop.forEach((callback) => callback());
          updateState({ isLooping: true });
          // Use setTimeout to prevent stack overflow in loop mode
          const timeout = setTimeout(() => {
            if (!isDestroyed) {
              typewriterBase.start();
            }
          }, 0) as ReturnType<typeof setTimeout>;
          activeTimeouts.add(timeout);
        } else if (!isDestroyed) {
          eventCallbacks.end.forEach((callback) => callback());
          updateState({
            isTyping: false,
            isLooping: false,
            isComplete: true,
          });
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

    reset: function () {
      typewriterBase.stop();
      updateState({
        segments: [],
        isTyping: false,
        isLooping: false,
        currentText: '',
        visibleText: '',
        cursorVisible: true,
        screenReaderAnnouncement: '',
        isComplete: false,
        reducedMotion: hasReducedMotion && shouldRespectReducedMotion,
        isPaused: false,
        canBePaused: options.enableKeyboardControls ?? false,
      });
      currentColor = '';
      isRunning = false;
      isPaused = false;
      pausedResolvers = [];
      return this;
    },

    getState: () => ({ ...currentState }),

    // Keyboard control methods
    pause: () => {
      if (!isPaused && isRunning) {
        isPaused = true;
        updateState({ isPaused: true });
      }
    },

    resume: () => {
      if (isPaused) {
        isPaused = false;
        updateState({ isPaused: false });
        // Resume any paused operations
        pausedResolvers.forEach((resolve) => resolve());
        pausedResolvers = [];
      }
    },

    skip: () => {
      // Skip current animation by clearing timeouts and advancing to end
      clearAllTimeouts();
      if (isRunning) {
        eventCallbacks.end.forEach((callback) => callback());
        updateState({
          isTyping: false,
          isLooping: false,
          isComplete: true,
        });
        isRunning = false;
      }
    },

    isPaused: () => isPaused,
  };

  // Enhanced cleanup function to be called when component unmounts
  typewriterBase.stop = () => {
    isDestroyed = true;
    actionQueue.length = 0;
    clearAllTimeouts();
    updateState({ isTyping: false, isLooping: false });
    isRunning = false;
    // Clear event callbacks
    Object.keys(eventCallbacks).forEach((key) => {
      eventCallbacks[key as TypewriterEvents] = [];
    });
  };

  return typewriterBase;
}

export default createTypewriterBase;
