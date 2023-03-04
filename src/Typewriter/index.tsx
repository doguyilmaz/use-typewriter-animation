import { useEffect, useLayoutEffect, useRef } from 'react';
import TypewriterBase from './TypewriterBase';
import useTypewriter from './useTypewriter';

const Typewriter = () => {
  const { ref, typewriter } = useTypewriter({ loop: true });

  useEffect(() => {
    if (!typewriter) return;

    typewriter
      ?.type('Hello my name is Rudy!')
      .pauseFor(300)
      .deleteAll()
      .type('wqvrqwrq qwrvqwrvqw \n\nfsafsdaf')
      .pauseFor(200)
      .deleteLetters(5)
      .color('red')
      .type('asfafs Hsf mdsgy name b!')
      .deleteWords(6)
      .start();
  }, []);

  return (
    <div>
      <div ref={ref} className='whitespace'></div>
    </div>
  );
};

export default Typewriter;
