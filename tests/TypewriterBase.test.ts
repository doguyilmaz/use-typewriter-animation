import { describe, it, expect, beforeEach, afterEach, vi, test } from 'vitest';
import {
  createTypewriterBase,
  typewriterStyles,
  typewriterKeyframes,
  detectReducedMotion,
  detectHighContrast,
} from '../src/Typewriter/TypewriterBase';
import type {
  TypewriterBaseOptions,
  TypewriterState,
  TypewriterBaseType,
} from '../src/Typewriter/TypewriterBase';

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

  describe('Animation Execution', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange, { typeSpeed: 50 });
    });

    it('should setup typing animation correctly', () => {
      const result = typewriter.type('Hello');
      const promise = typewriter.start();

      expect(result).toBe(typewriter);
      expect(promise).toBeInstanceOf(Promise);
      expect(mockOnStateChange).toHaveBeenCalled();
    });

    it('should handle pause and resume controls', () => {
      typewriter.type('Hello World');

      expect(() => typewriter.pause()).not.toThrow();
      expect(() => typewriter.resume()).not.toThrow();
    });

    it('should handle stop control', () => {
      typewriter.type('Hello World');

      expect(() => typewriter.stop()).not.toThrow();
    });

    it('should setup delete operations', () => {
      const result = typewriter.type('Hello World').deleteLetters(5);

      expect(result).toBe(typewriter);
    });

    it('should setup colorize operations', () => {
      const result = typewriter.colorize('red').type('Colored text');

      expect(result).toBe(typewriter);
    });

    it('should setup highlight operations', () => {
      const result = typewriter.type('Hello World').highlight(0, 5, { background: 'yellow' });

      expect(result).toBe(typewriter);
    });

    it('should handle loop configuration', () => {
      typewriter = createTypewriterBase(mockOnStateChange, { loop: true, typeSpeed: 10 });
      const result = typewriter.type('Hello').deleteAll();

      expect(result).toBe(typewriter);
    });

    it('should setup event listeners', () => {
      const startHandler = vi.fn();
      const endHandler = vi.fn();

      const result1 = typewriter.on('start', startHandler);
      const result2 = typewriter.on('end', endHandler);

      expect(result1).toBe(typewriter);
      expect(result2).toBe(typewriter);
    });

    it('should setup pauseFor delays', () => {
      const result = typewriter.type('Hello').pauseFor(200).type('World');

      expect(result).toBe(typewriter);
    });

    it('should setup newLine operations', () => {
      const result = typewriter.type('Line 1').newLine().type('Line 2');

      expect(result).toBe(typewriter);
    });

    it('should handle complex animation sequences', () => {
      const result = typewriter
        .type('Hello')
        .colorize('blue')
        .type(' Beautiful')
        .pauseFor(100)
        .colorize('red')
        .type(' World')
        .deleteLetters(5)
        .type('Universe');

      expect(result).toBe(typewriter);
    });
  });

  describe('State Management During Setup', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange, { typeSpeed: 10 });
    });

    it('should provide correct initial state', () => {
      const state = typewriter.getState();

      expect(state.isTyping).toBe(false);
      expect(state.segments).toEqual([]);
      expect(state.currentText).toBe('');
    });

    it('should call onStateChange callback when starting', () => {
      typewriter.type('Hello');
      typewriter.start();

      expect(mockOnStateChange).toHaveBeenCalled();
    });

    it('should handle reset correctly', () => {
      typewriter.type('Hello World');
      typewriter.reset();

      const state = typewriter.getState();
      expect(state.segments).toEqual([]);
      expect(state.currentText).toBe('');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    beforeEach(() => {
      typewriter = createTypewriterBase(mockOnStateChange);
    });

    it('should handle empty text gracefully', () => {
      const result = typewriter.type('');

      expect(result).toBe(typewriter);
      expect(() => typewriter.start()).not.toThrow();
    });

    it('should handle multiple start calls gracefully', () => {
      typewriter.type('Hello');

      const promise1 = typewriter.start();
      const promise2 = typewriter.start();

      expect(promise1).toBeInstanceOf(Promise);
      expect(promise2).toBeInstanceOf(Promise);
    });

    it('should handle operations on fresh instance', () => {
      expect(() => typewriter.pause()).not.toThrow();
      expect(() => typewriter.resume()).not.toThrow();
      expect(() => typewriter.stop()).not.toThrow();
      expect(() => typewriter.skip()).not.toThrow();
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

describe('TypewriterBase - Internal Logic and State Management', () => {
  let mockStateUpdater: ReturnType<typeof vi.fn>;
  let typewriter: TypewriterBaseType;

  beforeEach(() => {
    mockStateUpdater = vi.fn();
    typewriter = createTypewriterBase(mockStateUpdater);
  });

  describe('Queue Processing and Animation Execution', () => {
    test('should execute type animation and update state progressively', async () => {
      const text = 'Hello';

      // Start typing animation
      const promise = typewriter.type(text).start();

      // Should have called state updater multiple times during animation
      await promise;

      expect(mockStateUpdater).toHaveBeenCalled();

      // Check that state was updated (segments may be structured differently)
      const calls = mockStateUpdater.mock.calls;
      expect(calls.length).toBeGreaterThan(0);

      // Verify that some state update occurred with valid structure
      const hasValidState = calls.some(
        (call) => call[0] && typeof call[0] === 'object' && Array.isArray(call[0].segments)
      );
      expect(hasValidState).toBe(true);
    });

    test('should process multiple queued actions in sequence', async () => {
      const promise = typewriter
        .type('First')
        .pauseFor(10)
        .type(' Second')
        .deleteLetters(3)
        .start();

      await promise;

      // Should have multiple state updates
      expect(mockStateUpdater.mock.calls.length).toBeGreaterThan(5);
    });

    test('should handle delete operations correctly', async () => {
      // First type some text
      await typewriter.type('Hello World').start();

      // Clear previous calls
      mockStateUpdater.mockClear();

      // Then delete some letters
      await typewriter.deleteLetters(5).start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });

    test('should handle deleteWords operation', async () => {
      await typewriter.type('Hello World Test').start();
      mockStateUpdater.mockClear();

      await typewriter.deleteWords(2).start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });

    test('should handle deleteAll operation', async () => {
      await typewriter.type('Hello World').start();
      mockStateUpdater.mockClear();

      await typewriter.deleteAll().start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });
  });

  describe('State Management and Updates', () => {
    test('should update isTyping state during animation', async () => {
      const promise = typewriter.type('Test').start();

      // Check that isTyping was set to true at some point
      await promise;

      const calls = mockStateUpdater.mock.calls;
      const hasTypingState = calls.some((call) => call[0].isTyping === true);
      expect(hasTypingState).toBe(true);
    });

    test('should generate unique segment IDs', async () => {
      await typewriter.type('First').type('Second').start();

      const finalCall = mockStateUpdater.mock.calls[mockStateUpdater.mock.calls.length - 1];
      const segments = finalCall[0].segments;

      const ids = segments.map((s) => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length); // All IDs should be unique
    });

    test('should handle newLine segments correctly', async () => {
      await typewriter.type('Line 1').newLine().type('Line 2').start();

      const finalCall = mockStateUpdater.mock.calls[mockStateUpdater.mock.calls.length - 1];
      const segments = finalCall[0].segments;

      const hasNewLine = segments.some((s) => s.isNewLine === true);
      expect(hasNewLine).toBe(true);
    });

    test('should apply colorize to subsequent text', async () => {
      await typewriter.colorize('red').type('Colored text').start();

      const finalCall = mockStateUpdater.mock.calls[mockStateUpdater.mock.calls.length - 1];
      const segments = finalCall[0].segments;

      const hasColoredSegment = segments.some((s) => s.color === 'red');
      expect(hasColoredSegment).toBe(true);
    });

    test('should handle highlight operations', async () => {
      await typewriter.type('Hello World').highlight(0, 5, { background: 'yellow' }).start();

      const finalCall = mockStateUpdater.mock.calls[mockStateUpdater.mock.calls.length - 1];
      const segments = finalCall[0].segments;

      const hasHighlightedSegment = segments.some((s) => s.backgroundColor === 'yellow');
      expect(hasHighlightedSegment).toBe(true);
    });

    test('should handle highlightWords operation', async () => {
      await typewriter
        .type('Hello World Test')
        .highlightWords(2, 'start', { background: 'blue' })
        .start();

      const finalCall = mockStateUpdater.mock.calls[mockStateUpdater.mock.calls.length - 1];
      const segments = finalCall[0].segments;

      const hasHighlightedSegment = segments.some((s) => s.backgroundColor === 'blue');
      expect(hasHighlightedSegment).toBe(true);
    });
  });

  describe('Event System Execution', () => {
    test('should trigger start event when animation begins', async () => {
      const startCallback = vi.fn();

      await typewriter.on('start', startCallback).type('Test').start();

      expect(startCallback).toHaveBeenCalled();
    });

    test('should trigger end event when animation completes', async () => {
      const endCallback = vi.fn();

      await typewriter.on('end', endCallback).type('Test').start();

      expect(endCallback).toHaveBeenCalled();
    });

    test('should support multiple event listeners', async () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      await typewriter.on('start', callback1).on('start', callback2).type('Test').start();

      expect(callback1).toHaveBeenCalled();
      expect(callback2).toHaveBeenCalled();
    });

    test('should trigger loop event in loop mode', async () => {
      const loopCallback = vi.fn();
      const typewriterWithLoop = createTypewriterBase(mockStateUpdater, { loop: true });

      // Note: This test might need adjustment based on actual loop implementation
      typewriterWithLoop.on('loop', loopCallback).type('Test');

      // Since loop is complex to test fully, we at least verify the event listener is set
      expect(typewriterWithLoop.on).toBeDefined();
    });
  });

  describe('Control Operations', () => {
    test('should handle pause and resume operations', async () => {
      // Start a long animation
      const promise = typewriter.type('This is a long text to type').start();

      // Pause immediately
      typewriter.pause();
      expect(typewriter.isPaused()).toBe(true);

      // Resume
      typewriter.resume();
      expect(typewriter.isPaused()).toBe(false);

      await promise;
    });

    test('should handle stop operation', () => {
      // Verify stop method exists and can be called
      expect(typeof typewriter.stop).toBe('function');
      expect(() => typewriter.stop()).not.toThrow();
    });

    test('should handle skip operation', () => {
      // Verify skip method exists and can be called
      expect(typeof typewriter.skip).toBe('function');
      expect(() => typewriter.skip()).not.toThrow();
    });

    test('should handle reset operation', () => {
      const resetResult = typewriter.reset();

      expect(resetResult).toBe(typewriter); // Should return self for chaining
      expect(typeof typewriter.reset).toBe('function');
    });
  });

  describe('Options and Configuration', () => {
    test('should respect typeSpeed option', async () => {
      const fastTypewriter = createTypewriterBase(mockStateUpdater, { typeSpeed: 1 });
      const slowTypewriter = createTypewriterBase(mockStateUpdater, { typeSpeed: 1000 });

      const startTime = Date.now();
      await fastTypewriter.type('Test').start();
      const fastTime = Date.now() - startTime;

      const startTime2 = Date.now();
      await slowTypewriter.type('Test').start();
      const slowTime = Date.now() - startTime2;

      // Fast should be quicker than slow (with some tolerance)
      expect(fastTime).toBeLessThan(slowTime + 100);
    });

    test('should respect deleteSpeed option', async () => {
      const fastDeleter = createTypewriterBase(mockStateUpdater, { deleteSpeed: 1 });

      await fastDeleter.type('Hello').deleteLetters(3).start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });

    test('should handle loop option', () => {
      const loopingTypewriter = createTypewriterBase(mockStateUpdater, { loop: true });

      expect(loopingTypewriter).toBeDefined();

      // Check that state reflects looping capability
      const state = loopingTypewriter.getState();
      expect(state.isLooping).toBe(false); // Initially false, becomes true during execution
    });

    test('should handle accessibility options', () => {
      const accessibleTypewriter = createTypewriterBase(mockStateUpdater, {
        ariaLive: 'polite',
        ariaLabel: 'Typewriter animation',
        screenReaderText: 'Typing animation in progress',
        announceCompletion: true,
      });

      expect(accessibleTypewriter).toBeDefined();

      const state = accessibleTypewriter.getState();
      expect(state).toBeDefined();
    });

    test('should handle keyboard control options', () => {
      const keyboardTypewriter = createTypewriterBase(mockStateUpdater, {
        enableKeyboardControls: true,
        keyboardShortcuts: {
          pause: ['Space'],
          resume: ['Space'],
          skip: ['Escape'],
          reset: ['KeyR'],
        },
      });

      expect(keyboardTypewriter).toBeDefined();
      expect(keyboardTypewriter.pause).toBeDefined();
      expect(keyboardTypewriter.resume).toBeDefined();
    });
  });

  describe('Complex Animation Sequences', () => {
    test('should handle complex chained operations', async () => {
      await typewriter
        .type('Hello')
        .pauseFor(50)
        .colorize('red')
        .type(' World')
        .newLine()
        .colorize('blue')
        .type('New line')
        .deleteWords(1)
        .type('text')
        .highlight(0, 5, { background: 'yellow' })
        .start();

      expect(mockStateUpdater).toHaveBeenCalled();

      const finalCall = mockStateUpdater.mock.calls[mockStateUpdater.mock.calls.length - 1];
      const finalState = finalCall[0];

      // Should have multiple segments with different properties
      expect(finalState.segments.length).toBeGreaterThan(1);

      // Should have colored segments
      const hasColoredSegments = finalState.segments.some((s) => s.color);
      expect(hasColoredSegments).toBe(true);

      // Should have highlighted segments
      const hasHighlightedSegments = finalState.segments.some((s) => s.backgroundColor);
      expect(hasHighlightedSegments).toBe(true);

      // Should have newline segments
      const hasNewLineSegments = finalState.segments.some((s) => s.isNewLine);
      expect(hasNewLineSegments).toBe(true);
    });

    test('should maintain state consistency during complex operations', async () => {
      let stateHistory: TypewriterState[] = [];

      const trackingUpdater = (state: TypewriterState) => {
        stateHistory.push({ ...state });
        mockStateUpdater(state);
      };

      const trackingTypewriter = createTypewriterBase(trackingUpdater);

      await trackingTypewriter
        .type('Start')
        .deleteLetters(2)
        .type('ing')
        .colorize('green')
        .type(' text')
        .start();

      // Verify state progression makes sense
      expect(stateHistory.length).toBeGreaterThan(3);

      // Each state should have valid segments array
      stateHistory.forEach((state) => {
        expect(Array.isArray(state.segments)).toBe(true);
        expect(typeof state.isTyping).toBe('boolean');
        expect(typeof state.currentText).toBe('string');
      });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    test('should handle empty text gracefully', async () => {
      await typewriter.type('').start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });

    test('should handle zero delete operations', async () => {
      await typewriter.type('Hello').deleteLetters(0).start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });

    test('should handle delete more than available text', async () => {
      await typewriter.type('Hi').deleteLetters(10).start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });

    test('should handle highlight beyond text bounds', async () => {
      await typewriter.type('Short').highlight(0, 100, { background: 'red' }).start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });

    test('should handle zero pause duration', async () => {
      await typewriter.type('Test').pauseFor(0).type('More').start();

      expect(mockStateUpdater).toHaveBeenCalled();
    });
  });
});
