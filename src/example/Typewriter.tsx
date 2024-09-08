import React, { useEffect } from 'react';
import { useTypewriter } from '../Typewriter/useTypewriter';

const Typewriter = () => {
  const { ref, typewriter } = useTypewriter({
    typeSpeed: 50,
    loop: false,
    cursorStyle: 'bar',
    cursorBlinkSpeed: 500,
    cursorColor: 'blue',
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
        .highlight(0, 5, { color: 'yellow', background: 'black' })
        .start();
    }
  }, [typewriter]);

  return <div ref={ref}></div>;
};

export default Typewriter;
