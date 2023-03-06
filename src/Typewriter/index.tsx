import { useEffect, useLayoutEffect, useRef } from 'react';

import useTypewriter from './useTypewriter';

const Typewriter = () => {
  const { ref, typewriter } = useTypewriter({ loop: false });

  useEffect(() => {
    typewriter
      .type('Hello my name is Rudy!')
      .pauseFor(300)
      .deleteAll()
      .type('wqvrqwrq qwrvqwrvqw \n\nfsafsdaf')
      .pauseFor(200)
      .deleteLetters(5)
      .colorize('red')
      .type('asfafs Hsf mdsgy name b!')
      .deleteWords(2)
      .start();
  }, []);

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
};

export default Typewriter;
