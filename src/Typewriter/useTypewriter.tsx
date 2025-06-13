import { useEffect, useMemo, useState, useCallback, memo, useRef } from 'react';
import { createTypewriterBase, type TypewriterBaseOptions, type TypewriterBaseType, type TypewriterState, type TextSegment, typewriterStyles, typewriterKeyframes } from './TypewriterBase';

export type UseTypewriterOptions = TypewriterBaseOptions & {
	/** Enable virtualization for long text sequences (default: false) */
	enableVirtualization?: boolean;
	/** Maximum visible segments when virtualization is enabled (default: 100) */
	maxVisibleSegments?: number;
	/** Enable automatic keyboard event handling */
	autoKeyboardHandling?: boolean;
};

export type UseTypewriterReturn = {
	/** The typewriter instance with all control methods */
	typewriter: TypewriterBaseType;
	/** Current state of the typewriter animation */
	state: TypewriterState;
	/** Rendered JSX elements for the typewriter text */
	elements: JSX.Element[];
	/** Cursor element (if enabled) */
	cursor: JSX.Element | null;
	/** CSS styles object for styling */
	styles: typeof typewriterStyles;
	/** CSS keyframes string for animations */
	keyframes: string;
	/** Performance metrics */
	metrics: {
		totalSegments: number;
		visibleSegments: number;
		isVirtualized: boolean;
	};
	/** Accessibility props for the container */
	accessibilityProps: {
		'aria-live'?: 'polite' | 'assertive' | 'off';
		'aria-label'?: string;
		'aria-describedby'?: string;
		'role'?: string;
		'aria-busy'?: boolean;
	};
	/** Screen reader announcement element */
	screenReaderAnnouncement: JSX.Element | null;
};

export const useTypewriter = (
	options: UseTypewriterOptions = {}
): UseTypewriterReturn => {
	// State for typewriter animation
	const [typewriterState, setTypewriterState] = useState<TypewriterState>({
		segments: [],
		isTyping: false,
		isLooping: false,
		currentText: '',
		visibleText: '',
		cursorVisible: true,
		screenReaderAnnouncement: '',
		isComplete: false,
		reducedMotion: false,
		isPaused: false,
		canBePaused: options.enableKeyboardControls ?? false,
	});

	// State updater callback
	const updateState = useCallback((newState: TypewriterState) => {
		setTypewriterState(newState);
	}, []);

	// Create stable typewriter instance using useRef to prevent recreations
	const typewriterRef = useRef<TypewriterBaseType | null>(null);
	
	// Only create typewriter instance once
	if (!typewriterRef.current) {
		typewriterRef.current = createTypewriterBase(updateState, options);
	}
	
	const typewriter = typewriterRef.current;

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			typewriter.stop();
		};
	}, [typewriter]);

	// Listen for reduced motion preference changes
	useEffect(() => {
		if (typeof window === 'undefined' || !window.matchMedia) return;

		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		
		const handleChange = () => {
			const hasReducedMotion = mediaQuery.matches;
			setTypewriterState(prev => ({
				...prev,
				reducedMotion: hasReducedMotion && (options.respectReducedMotion ?? true),
			}));
		};

		// Set initial state
		handleChange();

		// Listen for changes
		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [options.respectReducedMotion]);

	// Keyboard event handling
	useEffect(() => {
		if (!options.enableKeyboardControls || !options.autoKeyboardHandling) return;
		if (typeof window === 'undefined') return;

		const shortcuts = options.keyboardShortcuts || {
			pause: ['Space', ' '],
			resume: ['Space', ' '],
			skip: ['Escape', 'Enter'],
			reset: ['KeyR'],
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			const key = event.code || event.key;
			
			// Pause/Resume
			if (shortcuts.pause?.includes(key) || shortcuts.resume?.includes(key)) {
				event.preventDefault();
				if (typewriter.isPaused()) {
					typewriter.resume();
				} else {
					typewriter.pause();
				}
				return;
			}

			// Skip
			if (shortcuts.skip?.includes(key)) {
				event.preventDefault();
				typewriter.skip();
				return;
			}

			// Reset
			if (shortcuts.reset?.includes(key)) {
				event.preventDefault();
				typewriter.reset();
				return;
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [options.enableKeyboardControls, options.autoKeyboardHandling, options.keyboardShortcuts, typewriter]);

	// Memoized text segment component for better performance
	const TypewriterSegment = memo(({ segment }: { segment: TextSegment }) => {
		if (segment.isNewLine) {
			return <br />;
		}

		const style = useMemo((): React.CSSProperties => ({
			...(segment.color && { color: segment.color }),
			...(segment.backgroundColor && { backgroundColor: segment.backgroundColor }),
			...(segment.isHighlighted && typewriterStyles.highlightTransition),
		}), [segment.color, segment.backgroundColor, segment.isHighlighted]);

		return (
			<span style={style}>
				{segment.content}
			</span>
		);
	});

	// Virtualization and performance optimization
	const { enableVirtualization = false, maxVisibleSegments = 100 } = options;
	
	// Apply virtualization if enabled and segments exceed threshold
	const visibleSegments = useMemo(() => {
		if (!enableVirtualization || typewriterState.segments.length <= maxVisibleSegments) {
			return typewriterState.segments;
		}
		
		// Keep last N segments for long sequences
		return typewriterState.segments.slice(-maxVisibleSegments);
	}, [typewriterState.segments, enableVirtualization, maxVisibleSegments]);

	// Performance metrics
	const metrics = useMemo(() => ({
		totalSegments: typewriterState.segments.length,
		visibleSegments: visibleSegments.length,
		isVirtualized: enableVirtualization && typewriterState.segments.length > maxVisibleSegments,
	}), [typewriterState.segments.length, visibleSegments.length, enableVirtualization, maxVisibleSegments]);

	// Efficient text rendering with batched segments
	const elements = useMemo(() => {
		// Group consecutive segments with same styling for better performance
		const groupedSegments: (TextSegment | TextSegment[])[] = [];
		let currentGroup: TextSegment[] = [];
		
		for (const segment of visibleSegments) {
			if (segment.isNewLine) {
				if (currentGroup.length > 0) {
					groupedSegments.push([...currentGroup]);
					currentGroup = [];
				}
				groupedSegments.push(segment);
			} else {
				const canGroup = currentGroup.length === 0 || (
					currentGroup[currentGroup.length - 1].color === segment.color &&
					currentGroup[currentGroup.length - 1].backgroundColor === segment.backgroundColor &&
					currentGroup[currentGroup.length - 1].isHighlighted === segment.isHighlighted
				);
				
				if (canGroup) {
					currentGroup.push(segment);
				} else {
					if (currentGroup.length > 0) {
						groupedSegments.push([...currentGroup]);
					}
					currentGroup = [segment];
				}
			}
		}
		
		if (currentGroup.length > 0) {
			groupedSegments.push(currentGroup);
		}

		return groupedSegments.map((group, index) => {
			if (Array.isArray(group)) {
				// Render grouped segments as single span for better performance
				const firstSegment = group[0];
				const combinedText = group.map(s => s.content).join('');
				
				return (
					<TypewriterSegment 
						key={`group-${index}`}
						segment={{
							id: `group-${index}`,
							content: combinedText,
							...(firstSegment.color ? { color: firstSegment.color } : {}),
							...(firstSegment.backgroundColor ? { backgroundColor: firstSegment.backgroundColor } : {}),
							...(firstSegment.isHighlighted ? { isHighlighted: firstSegment.isHighlighted } : {}),
							isNewLine: false,
						}}
					/>
				);
			} else {
				// Single segment (usually newline)
				return <TypewriterSegment key={group.id} segment={group} />;
			}
		});
	}, [typewriterState.segments]);

	// Memoized cursor component with CSS animations
	const TypewriterCursor = memo(() => {
		if (options.enableCursor === false) {
			return null;
		}

		const cursorStyle = useMemo((): React.CSSProperties => {
			// Use reduced motion cursor if reduced motion is preferred
			const baseStyle = typewriterState.reducedMotion 
				? typewriterStyles.reducedMotionCursor 
				: {
					...typewriterStyles.cursor,
					animationDuration: `${options.cursorBlinkSpeed || 500}ms`,
				};

			const cursorWidth = typeof options.cursorWidth === 'number' 
				? `${options.cursorWidth}px` 
				: options.cursorWidth;

			const commonStyle = {
				...baseStyle,
				color: options.cursorColor || 'black',
				opacity: typewriterState.cursorVisible ? 1 : 0,
			};

			switch (options.cursorStyle) {
				case 'block':
					return {
						...commonStyle,
						display: 'inline-block',
						width: cursorWidth || '0.6em',
						height: '1em',
						backgroundColor: options.cursorColor || 'black',
						color: 'transparent'
					};

				case 'underline':
					return {
						...commonStyle,
						display: 'inline-block',
						width: cursorWidth || '1ch',
						borderBottom: `2px solid ${options.cursorColor || 'black'}`,
						color: 'transparent'
					};

				default:
					return {
						...commonStyle,
						width: cursorWidth || 'auto'
					};
			}
		}, [options.cursorStyle, options.cursorWidth, options.cursorColor, options.cursorBlinkSpeed, typewriterState.cursorVisible, typewriterState.reducedMotion]);

		if (options.cursorStyle === 'block' || options.cursorStyle === 'underline') {
			return <span style={cursorStyle}> </span>;
		}
		return <span style={cursorStyle}>|</span>;
	});

	const cursor = <TypewriterCursor />;

	// Accessibility props for the container
	const accessibilityProps = useMemo(() => {
		const props: {
			'aria-live'?: 'polite' | 'assertive' | 'off';
			'aria-label'?: string;
			'aria-describedby'?: string;
			'role'?: string;
			'aria-busy'?: boolean;
		} = {};

		// ARIA live region for screen reader announcements
		if (options.ariaLive !== undefined) {
			props['aria-live'] = options.ariaLive;
		} else {
			props['aria-live'] = 'polite'; // Default to polite
		}

		// ARIA label
		if (options.ariaLabel) {
			props['aria-label'] = options.ariaLabel;
		}

		// ARIA described by
		if (options.ariaDescribedBy) {
			props['aria-describedby'] = options.ariaDescribedBy;
		}

		// Role
		if (options.role) {
			props['role'] = options.role;
		} else {
			props['role'] = 'status'; // Default role for status updates
		}

		// Busy state during typing
		props['aria-busy'] = typewriterState.isTyping;

		return props;
	}, [options.ariaLive, options.ariaLabel, options.ariaDescribedBy, options.role, typewriterState.isTyping]);

	// Enhanced screen reader announcement component
	const screenReaderAnnouncement = useMemo(() => {
		// Always render hidden screen reader element for consistent announcements
		const announcement = typewriterState.screenReaderAnnouncement || '';
		
		// Provide helpful context for screen reader users
		const getStatusDescription = () => {
			if (typewriterState.isPaused) {
				return 'Typewriter animation paused. Press Space to resume.';
			}
			if (typewriterState.isTyping) {
				return 'Typewriter animation in progress.';
			}
			if (typewriterState.isComplete) {
				return 'Typewriter animation completed.';
			}
			return '';
		};

		const statusDescription = options.enableKeyboardControls ? getStatusDescription() : '';

		return (
			<>
				{/* Main content announcement */}
				<div
					style={typewriterStyles.screenReaderOnly}
					aria-live={options.ariaLive || 'polite'}
					aria-atomic="true"
					role="status"
				>
					{announcement}
				</div>
				
				{/* Status and keyboard controls announcement */}
				{options.enableKeyboardControls && statusDescription && (
					<div
						style={typewriterStyles.screenReaderOnly}
						aria-live="polite"
						aria-atomic="true"
						role="status"
					>
						{statusDescription}
					</div>
				)}
				
				{/* Full text for screen readers when complete */}
				{typewriterState.isComplete && options.screenReaderText && (
					<div
						style={typewriterStyles.screenReaderOnly}
						aria-label="Complete typewriter text"
						role="text"
					>
						{options.screenReaderText}
					</div>
				)}
			</>
		);
	}, [
		typewriterState.screenReaderAnnouncement, 
		typewriterState.isPaused, 
		typewriterState.isTyping, 
		typewriterState.isComplete,
		options.ariaLive, 
		options.enableKeyboardControls, 
		options.screenReaderText
	]);

	return {
		typewriter,
		state: typewriterState,
		elements,
		cursor,
		styles: typewriterStyles,
		keyframes: typewriterKeyframes,
		metrics,
		accessibilityProps,
		screenReaderAnnouncement,
	};
};
