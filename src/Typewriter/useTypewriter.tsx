import { useEffect, useMemo, useState, useCallback } from 'react';
import { createTypewriterBase, type TypewriterBaseOptions, type TypewriterBaseType, type TypewriterState, type TextSegment, typewriterStyles, typewriterKeyframes } from './TypewriterBase';

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
};

export const useTypewriter = (
	options: TypewriterBaseOptions = {}
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

	// Convert text segments to JSX elements
	const elements = useMemo(() => {
		return typewriterState.segments.map((segment: TextSegment) => {
			if (segment.isNewLine) {
				return <br key={segment.id} />;
			}

			const style: React.CSSProperties = {
				...(segment.color && { color: segment.color }),
				...(segment.backgroundColor && { backgroundColor: segment.backgroundColor }),
				...(segment.isHighlighted && typewriterStyles.highlightTransition),
			};

			return (
				<span key={segment.id} style={style}>
					{segment.content}
				</span>
			);
		});
	}, [typewriterState.segments]);

	// Create cursor element if enabled
	const cursor = useMemo(() => {
		if (options.enableCursor === false) {
			return null;
		}

		const cursorStyle: React.CSSProperties = {
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
				return (
					<span 
						style={{ 
							...cursorStyle, 
							display: 'inline-block',
							width: cursorWidth || '0.6em',
							height: '1em',
							backgroundColor: options.cursorColor || 'black',
							color: 'transparent'
						}}
					>
						 
					</span>
				);

			case 'underline':
				return (
					<span 
						style={{ 
							...cursorStyle,
							display: 'inline-block',
							width: cursorWidth || '1ch',
							borderBottom: `2px solid ${options.cursorColor || 'black'}`,
							color: 'transparent'
						}}
					>
						 
					</span>
				);

			default:
				return (
					<span style={{ ...cursorStyle, width: cursorWidth || 'auto' }}>|
					</span>
				);
		}
	}, [options, typewriterState.cursorVisible]);

	return {
		typewriter,
		state: typewriterState,
		elements,
		cursor,
		styles: typewriterStyles,
		keyframes: typewriterKeyframes,
	};
};
