import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const PROMPT_COLOR = '#4ade80';

export default function Terminal() {
  const { typewriter, elements, cursor } = useTypewriter({
    typeSpeed: 70,
    humanize: 0.6,
    cursorStyle: 'block',
  });

  useEffect(() => {
    typewriter
      .colorize(PROMPT_COLOR)
      .type('$ ', { speed: 0 })
      .colorize()
      .pauseFor(500)
      .type('npm install use-typewriter-animation')
      .pauseFor(700)
      .newLine()
      .type('added 1 package in 1s', { speed: 0 })
      .newLine()
      .colorize(PROMPT_COLOR)
      .type('$ ', { speed: 0 })
      .colorize()
      .start();
  }, [typewriter]);

  return (
    <pre className='demo-terminal'>
      {elements}
      {cursor}
    </pre>
  );
}
