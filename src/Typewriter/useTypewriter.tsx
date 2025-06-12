import { useEffect, useMemo, useState, useCallback, memo } from 'react';
import { createTypewriterBase, type TypewriterBaseOptions, type TypewriterBaseType, type TypewriterState, type TextSegment, typewriterStyles, typewriterKeyframes } from './TypewriterBase';

export type UseTypewriterOptions = TypewriterBaseOptions & {
	/** Enable virtualization for long text sequences (default: false) */
	enableVirtualization?: boolean;
	/** Maximum visible segments when virtualization is enabled (default: 100) */
	maxVisibleSegments?: number;
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
	});

	// State updater callback
	const updateState = useCallback((newState: TypewriterState) => {
		setTypewriterState(newState);
	}, []);

	// Create typewriter instance
	const typewriter = useMemo(() => {
		return createTypewriterBase(updateState, options);
	}, [updateState, options]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			typewriter.stop();
		};
	}, [typewriter]);

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
			const baseStyle = {
				...typewriterStyles.cursor,
				animationDuration: `${options.cursorBlinkSpeed || 500}ms`,
				color: options.cursorColor || 'black',
				opacity: typewriterState.cursorVisible ? 1 : 0,
			};

			const cursorWidth = typeof options.cursorWidth === 'number' 
				? `${options.cursorWidth}px` 
				: options.cursorWidth;

			switch (options.cursorStyle) {
				case 'block':
					return {
						...baseStyle,
						display: 'inline-block',
						width: cursorWidth || '0.6em',
						height: '1em',
						backgroundColor: options.cursorColor || 'black',
						color: 'transparent'
					};

				case 'underline':
					return {
						...baseStyle,
						display: 'inline-block',
						width: cursorWidth || '1ch',
						borderBottom: `2px solid ${options.cursorColor || 'black'}`,
						color: 'transparent'
					};

				default:
					return {
						...baseStyle,
						width: cursorWidth || 'auto'
					};
			}
		}, [options.cursorStyle, options.cursorWidth, options.cursorColor, options.cursorBlinkSpeed, typewriterState.cursorVisible]);

		if (options.cursorStyle === 'block' || options.cursorStyle === 'underline') {
			return <span style={cursorStyle}> </span>;
		}
		return <span style={cursorStyle}>|</span>;
	});

	const cursor = <TypewriterCursor />;

	return {
		typewriter,
		state: typewriterState,
		elements,
		cursor,
		styles: typewriterStyles,
		keyframes: typewriterKeyframes,
		metrics,
	};
};
