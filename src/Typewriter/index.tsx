import { useEffect } from 'react';
import useTypewriter from './useTypewriter';

const Typewriter = () => {
  const { ref, typewriter, start } = useTypewriter();

  useEffect(() => {
    typewriter
      ?.type('Hello my name is Rudy!')
      .pauseFor(300)
      .deleteAll()
      .type('wqvrqwrq qwrvqwrvqw \n\nfsafsdaf')
      .pauseFor(200)
      .deleteLetters(5)
      .color('red')
      .type('asfafs Hsf mdsgy name b!')
      .deleteWords(6);
  }, [typewriter]);

  return (
    <div>
      <div ref={ref} />

      <button type='button' onClick={() => start()}>
        Start
      </button>
    </div>
  );
};

export default Typewriter;
