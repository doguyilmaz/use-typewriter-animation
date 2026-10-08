import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function StepSpeed() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 40 });

  useEffect(() => {
    typewriter
      .type('Normal speed. ')
      .type('Slow and deliberate. ', { speed: 160 })
      .type('Instant!', { speed: 0 })
      .pauseFor(1000)
      .deleteAll({ speed: 0 })
      .type('Cleared at once.')
      .start();
  }, [typewriter]);

  return (
    <p>
      {elements}
      {cursor}
    </p>
  );
}
