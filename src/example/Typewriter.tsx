import React, { useEffect } from 'react';
import { useTypewriter } from '../Typewriter/useTypewriter';

const Typewriter = () => {
	const { typewriter, elements, cursor, keyframes } = useTypewriter({
		typeSpeed: 50,
		loop: false,
		cursorStyle: 'bar',
		cursorBlinkSpeed: 500,
		cursorColor: 'blue',
		enableCursor: true,
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
			<div>
				{elements}
				{cursor}
			</div>
		</>
	);
};

export default Typewriter;
