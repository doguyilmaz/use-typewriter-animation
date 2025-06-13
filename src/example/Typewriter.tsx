import React, { useEffect } from 'react';
import { useTypewriter } from '../Typewriter/useTypewriter';

const Typewriter = () => {
	const { 
		typewriter, 
		elements, 
		cursor, 
		keyframes, 
		metrics, 
		styles, 
		accessibilityProps, 
		screenReaderAnnouncement 
	} = useTypewriter({
		// Visual settings
		typeSpeed: 50,
		loop: false,
		cursorStyle: 'bar',
		cursorBlinkSpeed: 500,
		cursorColor: 'currentColor', // Better for high contrast
		enableCursor: true,
		
		// Performance optimizations
		enableVirtualization: true,
		maxVisibleSegments: 50,
		
		// Accessibility settings
		ariaLabel: 'Typewriter animation demonstration',
		ariaLive: 'polite',
		respectReducedMotion: true,
		reducedMotionFallback: 'instant',
		announceCompletion: true,
		
		// Keyboard controls
		enableKeyboardControls: true,
		autoKeyboardHandling: true,
	});

	useEffect(() => {
		typewriter
			.on('start', () => console.log('Typing started!'))
			.on('end', () => console.log('Typing finished!'))
			.on('loop', () => console.log('Loop iteration!'))
			.type('Hello, ', {
				screenReaderText: 'Hello,',
				announceCompletion: false,
			})
			.colorize('red')
			.type('this will be red.', { 
				speed: 80,
				screenReaderText: 'this will be red.',
				announceCompletion: false,
			})
			.pauseFor(500)
			.deleteLetters(5)
			.colorize('blue')
			.type(" Now it's blue!", { 
				speed: 100,
				screenReaderText: "Now it's blue!",
				announceCompletion: true,
			})
			.highlight(0, 5, { color: 'black', background: 'white' })
			.start();
	}, [typewriter]);

	return (
		<>
			<style>{keyframes}</style>
			
			<div 
				{...accessibilityProps}
				tabIndex={0} // Make focusable for keyboard navigation
				style={{ 
					...styles.container, 
					...styles.optimizedText,
					padding: '1rem',
					border: '2px solid currentColor',
					borderRadius: '8px',
					backgroundColor: 'transparent',
					color: 'inherit',
				}}
			>
				<div style={{ 
					marginBottom: '0.5rem', 
					fontSize: '0.75rem', 
					opacity: 0.7,
					color: 'inherit',
				}}>
					Accessible typewriter with keyboard controls: Space (pause/resume), Escape (skip), R (reset)
				</div>
				
				{elements}
				{cursor}
				{screenReaderAnnouncement}
			</div>
			
			{/* Performance metrics in development */}
			{process.env.NODE_ENV === 'development' && (
				<div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
					Segments: {metrics.totalSegments} | Visible: {metrics.visibleSegments} | 
					Virtualized: {metrics.isVirtualized ? 'Yes' : 'No'} | 
					Reduced Motion: {typewriter.getState().reducedMotion ? 'Yes' : 'No'}
				</div>
			)}
		</>
	);
};

export default Typewriter;
