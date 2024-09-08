import { useEffect } from 'react';
import { useTypewriter } from './useTypewriter';

const Typewriter = () => {
  const { ref, typewriter } = useTypewriter({
    typeSpeed: 50,
    loop: false,
  });

  useEffect(() => {
    typewriter
      .type('Hello, ')
      .colorize('red')
      .type('this will be red.')
      .pauseFor(500)
      .deleteLetters(5)
      .colorize('blue')
      .type(" Now it's blue!")
      .start();
  }, [typewriter]);

  return <div ref={ref}></div>;
};

export default Typewriter;
