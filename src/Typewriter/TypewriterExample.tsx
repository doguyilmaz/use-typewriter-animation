import { useEffect } from 'react';
import { useTypewriter } from './useTypewriter';

const Typewriter = () => {
  const { ref, typewriter } = useTypewriter({
    typeSpeed: 50,
    loop: false,
    cursorStyle: 'bar', // You can also try 'block' or 'underline'
    cursorBlinkSpeed: 500, // Customize the blink speed
    cursorColor: 'blue', // Customize the cursor color
  });

  useEffect(() => {
    if (typewriter) {
      typewriter
        .on('typeStart', () => console.log('Typing started!'))
        .on('typeEnd', () => console.log('Typing finished!'))
        .type('Hello, ')
        .colorize('red')
        .type('this will be red.', { speed: 80 })
        .pauseFor(500)
        .deleteLetters(5)
        .colorize('blue')
        .type(" Now it's blue!", { speed: 100 })
        .highlight(0, 5, { color: 'yellow', background: 'black' }) // Highlight "Hello"
        .start();
    }
  }, [typewriter]);

  return <div ref={ref}></div>;
};

export default Typewriter;
