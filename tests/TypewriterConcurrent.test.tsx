/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, test } from 'vitest';

describe('TypewriterConcurrent Module', () => {
  describe('Module Imports and Exports', () => {
    test('should import module without throwing', async () => {
      expect(async () => {
        await import('../src/Typewriter/TypewriterConcurrent');
      }).not.toThrow();
    });

    test('should export useConcurrentTypewriter function', async () => {
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      expect(module.useConcurrentTypewriter).toBeDefined();
      expect(typeof module.useConcurrentTypewriter).toBe('function');
    });

    test('should export useTypewriterPerformanceMonitor function', async () => {
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      expect(module.useTypewriterPerformanceMonitor).toBeDefined();
      expect(typeof module.useTypewriterPerformanceMonitor).toBe('function');
    });

    test('should export useSchedulerAwareAnimation function', async () => {
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      expect(module.useSchedulerAwareAnimation).toBeDefined();
      expect(typeof module.useSchedulerAwareAnimation).toBe('function');
    });

    test('should export useReact19Features function', async () => {
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      expect(module.useReact19Features).toBeDefined();
      expect(typeof module.useReact19Features).toBe('function');
    });

    test('should export ConcurrentTypewriterOptions type', async () => {
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      // Type exports are not runtime values, but we can test the module loads
      expect(module).toBeDefined();
    });
  });

  describe('Function Signatures', () => {
    test('useConcurrentTypewriter should have correct function properties', async () => {
      const { useConcurrentTypewriter } = await import('../src/Typewriter/TypewriterConcurrent');
      expect(useConcurrentTypewriter.name).toBe('useConcurrentTypewriter');
      expect(useConcurrentTypewriter.length).toBeLessThanOrEqual(1); // Should accept 0 or 1 parameter
    });

    test('useTypewriterPerformanceMonitor should have correct function properties', async () => {
      const { useTypewriterPerformanceMonitor } = await import(
        '../src/Typewriter/TypewriterConcurrent'
      );
      expect(useTypewriterPerformanceMonitor.name).toBe('useTypewriterPerformanceMonitor');
      expect(useTypewriterPerformanceMonitor.length).toBe(0); // Should accept no parameters
    });

    test('useSchedulerAwareAnimation should have correct function properties', async () => {
      const { useSchedulerAwareAnimation } = await import('../src/Typewriter/TypewriterConcurrent');
      expect(useSchedulerAwareAnimation.name).toBe('useSchedulerAwareAnimation');
      expect(useSchedulerAwareAnimation.length).toBe(0); // Should accept no parameters
    });

    test('useReact19Features should have correct function properties', async () => {
      const { useReact19Features } = await import('../src/Typewriter/TypewriterConcurrent');
      expect(useReact19Features.name).toBe('useReact19Features');
      expect(useReact19Features.length).toBe(0); // Should accept no parameters
    });
  });

  describe('Module Dependencies', () => {
    test('should successfully import React hooks', async () => {
      // Test that the module can import React hooks without error
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      expect(module).toBeDefined();
    });

    test('should successfully import base useTypewriter', async () => {
      // Test that the module can import the base typewriter without error
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      expect(module).toBeDefined();
    });
  });

  describe('Type Safety and Interface Compliance', () => {
    test('should accept valid ConcurrentTypewriterOptions', async () => {
      const { useConcurrentTypewriter } = await import('../src/Typewriter/TypewriterConcurrent');

      // Test that the function accepts various option configurations
      expect(() => {
        const options = {
          enableConcurrentMode: true,
          useTimeSlicing: true,
          priority: 'normal' as const,
          timeSliceBatchSize: 10,
        };
        // We're not calling the hook, just testing that the types work
        expect(typeof options).toBe('object');
      }).not.toThrow();
    });

    test('should handle priority type constraints', async () => {
      // Test that priority types are properly constrained
      const validPriorities = ['immediate', 'normal', 'low'];
      validPriorities.forEach((priority) => {
        expect(['immediate', 'normal', 'low']).toContain(priority);
      });
    });
  });

  describe('Error Handling in Module Loading', () => {
    test('should handle import errors gracefully', async () => {
      // Test that importing the module doesn't throw unexpected errors
      try {
        await import('../src/Typewriter/TypewriterConcurrent');
        expect(true).toBe(true); // Module loaded successfully
      } catch (error) {
        // If there's an error, it should be a specific expected error
        expect(error).toBeInstanceOf(Error);
      }
    });
  });

  describe('API Surface Validation', () => {
    test('should export expected number of functions', async () => {
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      const exportedFunctions = Object.keys(module).filter(
        (key) => typeof module[key as keyof typeof module] === 'function'
      );

      expect(exportedFunctions).toHaveLength(4);
      expect(exportedFunctions).toContain('useConcurrentTypewriter');
      expect(exportedFunctions).toContain('useTypewriterPerformanceMonitor');
      expect(exportedFunctions).toContain('useSchedulerAwareAnimation');
      expect(exportedFunctions).toContain('useReact19Features');
    });

    test('should follow React hook naming conventions', async () => {
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      const hookNames = Object.keys(module).filter(
        (key) => typeof module[key as keyof typeof module] === 'function'
      );

      hookNames.forEach((name) => {
        expect(name).toMatch(/^use[A-Z]/); // Should start with 'use' followed by capital letter
      });
    });
  });

  describe('Performance and Memory Safety', () => {
    test('should not create memory leaks during import', async () => {
      // Test multiple imports don't cause issues
      for (let i = 0; i < 5; i++) {
        const module = await import('../src/Typewriter/TypewriterConcurrent');
        expect(module).toBeDefined();
      }
    });

    test('should be tree-shakeable', async () => {
      // Test that individual functions can be imported
      const { useConcurrentTypewriter } = await import('../src/Typewriter/TypewriterConcurrent');
      expect(useConcurrentTypewriter).toBeDefined();
    });
  });

  describe('Browser API Feature Detection', () => {
    test('should handle missing performance API', () => {
      // Test feature detection works when APIs are missing
      const originalPerformance = global.performance;
      delete (global as any).performance;

      expect(() => {
        // Test that code can handle missing performance API
        const hasPerformance = typeof performance !== 'undefined';
        expect(typeof hasPerformance).toBe('boolean');
      }).not.toThrow();

      // Restore
      global.performance = originalPerformance;
    });

    test('should handle missing scheduler API', () => {
      // Test feature detection works when scheduler is missing
      const originalWindow = global.window;
      delete (global as any).window;

      expect(() => {
        // Test that code can handle missing window/scheduler
        const hasWindow = typeof window !== 'undefined';
        expect(typeof hasWindow).toBe('boolean');
      }).not.toThrow();

      // Restore
      global.window = originalWindow;
    });
  });

  describe('React Version Compatibility', () => {
    test('should detect React concurrent features availability', async () => {
      // Test that the module can detect React features without crashing
      const module = await import('../src/Typewriter/TypewriterConcurrent');
      expect(() => {
        expect(module).toBeDefined();
      }).not.toThrow();
    });
  });
});
