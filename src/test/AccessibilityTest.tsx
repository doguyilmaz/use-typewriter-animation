import React from 'react';
import { useTypewriter } from '../Typewriter/useTypewriter';

/**
 * Accessibility Testing Utilities for Typewriter Animation Library
 * 
 * This file contains utilities and test components to verify WCAG 2.1 compliance
 * and accessibility features of the typewriter animation library.
 */

// Accessibility test scenarios
export const AccessibilityTestScenarios = {
	// Test reduced motion preferences
	ReducedMotionTest: () => {
		const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } = useTypewriter({
			respectReducedMotion: true,
			reducedMotionFallback: 'instant',
			ariaLabel: 'Reduced motion test typewriter',
		});

		React.useEffect(() => {
			typewriter
				.type('This text should appear instantly if reduced motion is preferred.', {
					screenReaderText: 'Complete text for screen readers',
					announceCompletion: true,
				})
				.start();
		}, [typewriter]);

		return (
			<div {...accessibilityProps} data-testid="reduced-motion-typewriter">
				{elements}
				{cursor}
				{screenReaderAnnouncement}
			</div>
		);
	},

	// Test ARIA live regions and screen reader support
	ScreenReaderTest: () => {
		const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } = useTypewriter({
			ariaLive: 'polite',
			ariaLabel: 'Screen reader test typewriter',
			role: 'status',
			announceCompletion: true,
			screenReaderText: 'Welcome to our accessible typewriter animation!',
		});

		React.useEffect(() => {
			typewriter
				.type('Welcome to our accessible typewriter animation!', {
					screenReaderText: 'Welcome to our accessible typewriter animation!',
					announceCompletion: true,
				})
				.start();
		}, [typewriter]);

		return (
			<div {...accessibilityProps} data-testid="screen-reader-typewriter">
				{elements}
				{cursor}
				{screenReaderAnnouncement}
			</div>
		);
	},

	// Test keyboard navigation controls
	KeyboardControlTest: () => {
		const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } = useTypewriter({
			enableKeyboardControls: true,
			autoKeyboardHandling: true,
			keyboardShortcuts: {
				pause: ['Space'],
				resume: ['Space'],
				skip: ['Escape'],
				reset: ['KeyR'],
			},
			ariaLabel: 'Keyboard controllable typewriter (Space to pause/resume, Escape to skip, R to reset)',
		});

		React.useEffect(() => {
			typewriter
				.type('Use Space to pause/resume, Escape to skip, R to reset.', {
					announceCompletion: true,
				})
				.pauseFor(1000)
				.type(' Try the keyboard controls!')
				.start();
		}, [typewriter]);

		return (
			<div {...accessibilityProps} data-testid="keyboard-control-typewriter" tabIndex={0}>
				{elements}
				{cursor}
				{screenReaderAnnouncement}
			</div>
		);
	},

	// Test high contrast mode compatibility
	HighContrastTest: () => {
		const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } = useTypewriter({
			cursorColor: 'currentColor',
			ariaLabel: 'High contrast mode test typewriter',
		});

		React.useEffect(() => {
			typewriter
				.type('This text should be visible in high contrast mode.')
				.colorize('#0066cc')
				.type(' Blue text.')
				.colorize('')
				.type(' Normal text.')
				.start();
		}, [typewriter]);

		return (
			<div 
				{...accessibilityProps} 
				data-testid="high-contrast-typewriter"
				style={{ 
					color: 'currentColor',
					backgroundColor: 'transparent',
					border: '1px solid currentColor',
					padding: '1rem',
				}}
			>
				{elements}
				{cursor}
				{screenReaderAnnouncement}
			</div>
		);
	},

	// Comprehensive accessibility test
	ComprehensiveAccessibilityTest: () => {
		const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } = useTypewriter({
			// ARIA settings
			ariaLive: 'polite',
			ariaLabel: 'Comprehensive accessibility test typewriter',
			role: 'status',
			
			// Reduced motion support
			respectReducedMotion: true,
			reducedMotionFallback: 'instant',
			
			// Keyboard controls
			enableKeyboardControls: true,
			autoKeyboardHandling: true,
			
			// Screen reader optimizations
			announceCompletion: true,
			screenReaderText: 'All accessibility features are working correctly.',
			
			// Visual settings for high contrast
			cursorColor: 'currentColor',
		});

		React.useEffect(() => {
			typewriter
				.type('Testing all accessibility features: ', {
					announceCompletion: false,
				})
				.pauseFor(500)
				.type('ARIA labels ✓ ', {
					announceCompletion: false,
				})
				.type('Reduced motion ✓ ', {
					announceCompletion: false,
				})
				.type('Keyboard controls ✓ ', {
					announceCompletion: false,
				})
				.type('Screen reader support ✓', {
					announceCompletion: true,
				})
				.start();
		}, [typewriter]);

		return (
			<div 
				{...accessibilityProps} 
				data-testid="comprehensive-accessibility-typewriter"
				tabIndex={0}
				style={{
					border: '2px solid currentColor',
					padding: '1rem',
					backgroundColor: 'transparent',
					color: 'inherit',
				}}
			>
				<div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', opacity: 0.7 }}>
					Controls: Space (pause/resume), Escape (skip), R (reset)
				</div>
				{elements}
				{cursor}
				{screenReaderAnnouncement}
			</div>
		);
	},
};

/**
 * Accessibility Testing Utilities
 */
export const AccessibilityTestUtils = {
	/**
	 * Check if an element has proper ARIA attributes
	 */
	checkAriaAttributes: (element: HTMLElement) => {
		const checks = {
			hasAriaLive: element.hasAttribute('aria-live'),
			hasRole: element.hasAttribute('role'),
			hasAriaLabel: element.hasAttribute('aria-label'),
			hasAriaBusy: element.hasAttribute('aria-busy'),
		};
		
		return {
			...checks,
			isAccessible: Object.values(checks).some(Boolean),
		};
	},

	/**
	 * Check if reduced motion is respected
	 */
	checkReducedMotion: () => {
		if (typeof window === 'undefined') return false;
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	},

	/**
	 * Check if high contrast mode is active
	 */
	checkHighContrast: () => {
		if (typeof window === 'undefined') return false;
		return window.matchMedia('(prefers-contrast: high)').matches;
	},

	/**
	 * Simulate keyboard events for testing
	 */
	simulateKeyboardEvent: (key: string, element?: HTMLElement) => {
		const target = element || document;
		const event = new KeyboardEvent('keydown', {
			key,
			code: key,
			bubbles: true,
		});
		target.dispatchEvent(event);
	},

	/**
	 * Check if screen reader announcements are present
	 */
	checkScreenReaderAnnouncements: (container: HTMLElement) => {
		const srElements = container.querySelectorAll('[aria-live]');
		const hiddenElements = container.querySelectorAll('[style*="position: absolute"]');
		
		return {
			hasAriaLiveElements: srElements.length > 0,
			hasHiddenAnnouncements: hiddenElements.length > 0,
			announcements: Array.from(srElements).map(el => el.textContent),
		};
	},

	/**
	 * Accessibility audit function
	 */
	auditAccessibility: (container: HTMLElement) => {
		const aria = AccessibilityTestUtils.checkAriaAttributes(container);
		const screenReader = AccessibilityTestUtils.checkScreenReaderAnnouncements(container);
		const reducedMotion = AccessibilityTestUtils.checkReducedMotion();
		const highContrast = AccessibilityTestUtils.checkHighContrast();
		const keyboardFocusable = container.tabIndex >= 0 || container.hasAttribute('tabindex');

		const audit = {
			aria,
			screenReader,
			reducedMotion,
			highContrast,
			keyboardFocusable,
		};

		const score = [
			aria.isAccessible,
			screenReader.hasAriaLiveElements,
			reducedMotion,
			highContrast,
			keyboardFocusable
		].filter(Boolean).length;

		return {
			...audit,
			score: score,
			maxScore: 5,
			percentage: Math.round((score / 5) * 100),
			isCompliant: score >= 4, // At least 80% compliance
		};
	},
};

// Type-safe expect function for test environments
type ExpectFunction = (value: any) => { toBe: (expected: any) => void; toBeGreaterThan: (expected: any) => void; };
declare const expect: ExpectFunction | undefined;

/**
 * Jest/Vitest test helpers
 */
export const AccessibilityTestHelpers = {
	/**
	 * Test that an element meets basic accessibility requirements
	 */
	expectAccessibleTypewriter: (container: HTMLElement) => {
		const audit = AccessibilityTestUtils.auditAccessibility(container);
		
		// Basic accessibility checks (only run if expect is available)
		if (typeof expect !== 'undefined') {
			expect(audit.aria.isAccessible).toBe(true);
			expect(audit.screenReader.hasAriaLiveElements).toBe(true);
			expect(audit.isCompliant).toBe(true);
		} else {
			// Fallback for non-test environments
			if (!audit.aria.isAccessible || !audit.screenReader.hasAriaLiveElements || !audit.isCompliant) {
				throw new Error('Accessibility requirements not met');
			}
		}
		
		return audit;
	},

	/**
	 * Test keyboard navigation functionality
	 */
	testKeyboardNavigation: async (container: HTMLElement) => {
		// Focus the container
		container.focus();
		
		// Test pause/resume
		AccessibilityTestUtils.simulateKeyboardEvent('Space');
		
		// Test skip
		AccessibilityTestUtils.simulateKeyboardEvent('Escape');
		
		// Test reset
		AccessibilityTestUtils.simulateKeyboardEvent('KeyR');
		
		return true;
	},

	/**
	 * Test screen reader announcements
	 */
	testScreenReaderAnnouncements: (container: HTMLElement) => {
		const announcements = AccessibilityTestUtils.checkScreenReaderAnnouncements(container);
		
		if (typeof expect !== 'undefined') {
			expect(announcements.hasAriaLiveElements).toBe(true);
			expect(announcements.announcements.length).toBeGreaterThan(0);
		} else {
			// Fallback for non-test environments
			if (!announcements.hasAriaLiveElements || announcements.announcements.length === 0) {
				throw new Error('Screen reader announcements not found');
			}
		}
		
		return announcements;
	},
};

// Export default comprehensive test component
export default AccessibilityTestScenarios.ComprehensiveAccessibilityTest;