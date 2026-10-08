import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function Chain() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 50 });

  useEffect(() => {
    typewriter
      .type('Hello, World!')
      .pauseFor(800)
      .deleteWords(1)
      .type('React!')
      .newLine()
      .type('Queue as many steps as you need.')
      .start();
  }, [typewriter]);

  return (
    <p>
      {elements}
      {cursor}
    </p>
  );
}
