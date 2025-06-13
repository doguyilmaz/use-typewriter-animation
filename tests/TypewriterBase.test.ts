import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  createTypewriterBase,
  typewriterStyles,
  typewriterKeyframes,
  detectReducedMotion,
  detectHighContrast,
} from '../src/Typewriter/TypewriterBase';
import type { TypewriterBaseOptions, TypewriterState } from '../src/Typewriter/TypewriterBase';

describe('TypewriterBase', () => {
  let mockOnStateChange: ReturnType<typeof vi.fn>;
  let typewriter: ReturnType<typeof createTypewriterBase>;

  beforeEach(() => {
    mockOnStateChange = vi.fn();
  });

  describe('Factory Function', () => {
    it('should create typewriter instance with callback', () => {
      typewriter = createTypewriterBase(mockOnStateChange);

      expect(typewriter).toBeDefined();
      expect(typeof typewriter.type).toBe('function');
      expect(typeof typewriter.start).toBe('function');
      expect(typeof typewriter.stop).toBe('function');
    });

    it('should create typewriter with options', () => {
      const options: TypewriterBaseOptions = {
        typeSpeed: 100,
        deleteSpeed: 50,
        loop: true,
        enableKeyboardControls: true,
        respectReducedMotion: true,
      };

      typewriter = createTypewriterBase(mockOnStateChange, options);

      expect(typewriter).toBeDefined();
    });

    it('should initialize with default state', () => {
      typewriter = createTypewriterBase(mockOnStateChange);

      const state = typewriter.getState();
      expect(state.segments).toEqual([]);
      expect(state.isTyping).toBe(false);
      expect(state.currentText).toBe('');
      expect(state.visibleText).toBe('');
      expect(state.cursorVisible).toBe(true);
    });

    it('should initialize with accessibility options', () => {
      const options: TypewriterBaseOptions = {
        enableKeyboardControls: true,
        respectReducedMotion: true,
        ariaLive: 'polite',
        role: 'status',
      };

      typewriter = createTypewriterBase(mockOnStateChange, options);
      const state = typewriter.getState();

      expect(state.canBePaused).toBe(true);
      expect(state.reducedMotion).toBeDefined();
    });
  });

  describe('Method Chaining', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should support method chaining', () => {
      const result = typewriter.type('Hello').pauseFor(100).deleteLetters(2).type(' World');

      expect(result).toBe(typewriter);
    });

    it('should return typewriter instance from all methods', () => {
      expect(typewriter.type('test')).toBe(typewriter);
      expect(typewriter.deleteLetters(1)).toBe(typewriter);
      expect(typewriter.deleteWords(1)).toBe(typewriter);
      expect(typewriter.deleteAll()).toBe(typewriter);
      expect(typewriter.pauseFor(100)).toBe(typewriter);
      expect(typewriter.colorize('red')).toBe(typewriter);
      expect(typewriter.newLine()).toBe(typewriter);
      expect(typewriter.reset()).toBe(typewriter);
      expect(typewriter.highlight(0, 5, { background: 'yellow' })).toBe(typewriter);
      expect(typewriter.highlightWords(1, 'start', { background: 'blue' })).toBe(typewriter);
    });
  });

  describe('Text Operations', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should handle type operation with options', () => {
      const result = typewriter.type('Hello', {
        speed: 50,
        screenReaderText: 'Typing hello',
        announceCompletion: true,
      });

      expect(result).toBe(typewriter);
    });

    it('should handle colorize operation', () => {
      const result = typewriter.colorize('red').type('Colored text');

      expect(result).toBe(typewriter);
    });

    it('should handle newLine operation', () => {
      const result = typewriter.type('Line 1').newLine().type('Line 2');

      expect(result).toBe(typewriter);
    });

    it('should handle pauseFor operation', () => {
      const result = typewriter.type('Hello').pauseFor(1000).type('World');

      expect(result).toBe(typewriter);
    });
  });

  describe('Delete Operations', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should handle deleteLetters operation', () => {
      const result = typewriter.deleteLetters(5);

      expect(result).toBe(typewriter);
    });

    it('should handle deleteWords operation', () => {
      const result = typewriter.deleteWords(2);

      expect(result).toBe(typewriter);
    });

    it('should handle deleteAll operation', () => {
      const result = typewriter.deleteAll();

      expect(result).toBe(typewriter);
    });
  });

  describe('Highlight Operations', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should handle highlight operation', () => {
      const result = typewriter.highlight(0, 5, {
        background: 'yellow',
        color: 'black',
      });

      expect(result).toBe(typewriter);
    });

    it('should handle highlightWords operation from start', () => {
      const result = typewriter.highlightWords(2, 'start', {
        background: 'blue',
      });

      expect(result).toBe(typewriter);
    });

    it('should handle highlightWords operation from end', () => {
      const result = typewriter.highlightWords(1, 'end', {
        background: 'green',
      });

      expect(result).toBe(typewriter);
    });
  });

  describe('State Management', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should provide current state', () => {
      const state = typewriter.getState();

      expect(state).toBeDefined();
      expect(state.segments).toEqual([]);
      expect(state.isTyping).toBe(false);
      expect(state.currentText).toBe('');
      expect(state.visibleText).toBe('');
      expect(state.isLooping).toBe(false);
      expect(state.cursorVisible).toBe(true);
    });

    it('should track pause state correctly', () => {
      // Initially not paused
      expect(typewriter.isPaused()).toBe(false);

      // Pause only works when animation is running
      // So pause without running should not change state
      typewriter.pause();
      expect(typewriter.isPaused()).toBe(false);

      // Resume should work regardless
      typewriter.resume();
      expect(typewriter.isPaused()).toBe(false);
    });

    it('should handle reset operation', () => {
      // Add some content first
      typewriter.type('Hello World');

      // Reset should clear everything
      const result = typewriter.reset();
      const state = typewriter.getState();

      expect(result).toBe(typewriter);
      expect(state.segments).toEqual([]);
      expect(state.currentText).toBe('');
      expect(state.visibleText).toBe('');
      expect(state.isTyping).toBe(false);
    });
  });

  describe('Event System', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should support event listeners', () => {
      const startHandler = vi.fn();
      const endHandler = vi.fn();
      const loopHandler = vi.fn();

      const result1 = typewriter.on('start', startHandler);
      const result2 = typewriter.on('end', endHandler);
      const result3 = typewriter.on('loop', loopHandler);

      expect(result1).toBe(typewriter);
      expect(result2).toBe(typewriter);
      expect(result3).toBe(typewriter);
    });

    it('should support multiple listeners for same event', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();

      const result1 = typewriter.on('start', handler1);
      const result2 = typewriter.on('start', handler2);

      expect(result1).toBe(typewriter);
      expect(result2).toBe(typewriter);
    });
  });

  describe('Control Operations', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should handle pause operation', () => {
      expect(() => typewriter.pause()).not.toThrow();
    });

    it('should handle resume operation', () => {
      expect(() => typewriter.resume()).not.toThrow();
    });

    it('should handle skip operation', () => {
      expect(() => typewriter.skip()).not.toThrow();
    });

    it('should handle stop operation', () => {
      expect(() => typewriter.stop()).not.toThrow();
    });
  });

  describe('Async Operations', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should return promise from start method', () => {
      const promise = typewriter.type('Hello').start();

      expect(promise).toBeInstanceOf(Promise);
    });

    it('should handle multiple start calls gracefully', () => {
      const promise1 = typewriter.type('Hello').start();
      const promise2 = typewriter.start(); // Second call

      expect(promise1).toBeInstanceOf(Promise);
      expect(promise2).toBeInstanceOf(Promise);
    });
  });

  describe('Options and Configuration', () => {
    it('should respect typeSpeed option', () => {
      const options: TypewriterBaseOptions = { typeSpeed: 100 };
      typewriter = createTypewriterBase(mockOnStateChange, options);

      expect(typewriter).toBeDefined();
    });

    it('should respect deleteSpeed option', () => {
      const options: TypewriterBaseOptions = { deleteSpeed: 50 };
      typewriter = createTypewriterBase(mockOnStateChange, options);

      expect(typewriter).toBeDefined();
    });

    it('should respect loop option', () => {
      const options: TypewriterBaseOptions = { loop: true };
      typewriter = createTypewriterBase(mockOnStateChange, options);

      expect(typewriter).toBeDefined();
    });

    it('should respect cursor options', () => {
      const options: TypewriterBaseOptions = {
        cursorStyle: 'block',
        cursorColor: 'red',
        cursorBlinkSpeed: 500,
        enableCursor: true,
      };
      typewriter = createTypewriterBase(mockOnStateChange, options);

      expect(typewriter).toBeDefined();
    });

    it('should respect accessibility options', () => {
      const options: TypewriterBaseOptions = {
        ariaLive: 'assertive',
        ariaLabel: 'Typewriter animation',
        role: 'log',
        respectReducedMotion: true,
        enableKeyboardControls: true,
      };
      typewriter = createTypewriterBase(mockOnStateChange, options);

      const state = typewriter.getState();
      expect(state.canBePaused).toBe(true);
    });
  });
});

describe('Utility Functions', () => {
  describe('detectReducedMotion', () => {
    it('should return boolean', () => {
      const result = detectReducedMotion();
      expect(typeof result).toBe('boolean');
    });

    it('should handle missing window object', () => {
      // This test runs in Node.js where window is undefined
      expect(() => detectReducedMotion()).not.toThrow();
    });
  });

  describe('detectHighContrast', () => {
    it('should return boolean', () => {
      const result = detectHighContrast();
      expect(typeof result).toBe('boolean');
    });

    it('should handle missing window object', () => {
      // This test runs in Node.js where window is undefined
      expect(() => detectHighContrast()).not.toThrow();
    });
  });
});

describe('Exported Styles and Keyframes', () => {
  describe('typewriterStyles', () => {
    it('should export cursor styles', () => {
      expect(typewriterStyles.cursor).toBeDefined();
      expect(typewriterStyles.cursor.display).toBe('inline-block');
      expect(typewriterStyles.cursor.animation).toContain('typewriter-blink');
    });

    it('should export highlight transition styles', () => {
      expect(typewriterStyles.highlightTransition).toBeDefined();
      expect(typewriterStyles.highlightTransition.transition).toContain('color');
    });

    it('should export optimized text styles', () => {
      expect(typewriterStyles.optimizedText).toBeDefined();
      expect(typewriterStyles.optimizedText.textRendering).toBe('optimizeSpeed');
    });

    it('should export container styles', () => {
      expect(typewriterStyles.container).toBeDefined();
      expect(typewriterStyles.container.willChange).toBe('contents');
    });

    it('should export accessibility styles', () => {
      expect(typewriterStyles.screenReaderOnly).toBeDefined();
      expect(typewriterStyles.screenReaderOnly.position).toBe('absolute');
    });

    it('should export reduced motion cursor styles', () => {
      expect(typewriterStyles.reducedMotionCursor).toBeDefined();
      expect(typewriterStyles.reducedMotionCursor.animation).toBe('none');
    });
  });

  describe('typewriterKeyframes', () => {
    it('should export CSS keyframes as string', () => {
      expect(typeof typewriterKeyframes).toBe('string');
      expect(typewriterKeyframes).toContain('@keyframes typewriter-blink');
      expect(typewriterKeyframes).toContain('@keyframes typewriter-appear');
      expect(typewriterKeyframes).toContain('@keyframes typewriter-highlight');
    });

    it('should include reduced motion media queries', () => {
      expect(typewriterKeyframes).toContain('@media (prefers-reduced-motion: reduce)');
    });
  });
});
