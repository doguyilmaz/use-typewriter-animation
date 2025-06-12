import React, { useEffect } from 'react';
import { useTypewriter } from '../Typewriter/useTypewriter';

const Typewriter = () => {
	const { typewriter, elements, cursor, keyframes, metrics, styles } = useTypewriter({
		typeSpeed: 50,
		loop: false,
		cursorStyle: 'bar',
		cursorBlinkSpeed: 500,
		cursorColor: 'blue',
		enableCursor: true,
		// Performance optimizations
		enableVirtualization: true,
		maxVisibleSegments: 50,
	});

	useEffect(() => {
		typewriter
			.on('start', () => console.log('Typing started!'))
			.on('end', () => console.log('Typing finished!'))
			.on('loop', () => console.log('Loop iteration!'))
			.type('Hello, ')
			.colorize('red')
			.type('this will be red.', { speed: 80 })
			.pauseFor(500)
			.deleteLetters(5)
			.colorize('blue')
			.type(" Now it's blue!", { speed: 100 })
			.highlight(0, 5, { color: 'black', background: 'white' })
			.start();
	}, [typewriter]);

	return (
		<>
			<style>{keyframes}</style>
			<div style={{ ...styles.container, ...styles.optimizedText }}>
				{elements}
				{cursor}
			</div>
			{/* Performance metrics in development */}
			{process.env.NODE_ENV === 'development' && (
				<div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
					Segments: {metrics.totalSegments} | Visible: {metrics.visibleSegments} | 
					Virtualized: {metrics.isVirtualized ? 'Yes' : 'No'}
				</div>
			)}
		</>
	);
};

export default Typewriter;
