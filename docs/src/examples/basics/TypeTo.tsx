import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function TypeTo() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 60, deleteSpeed: 40 });

  useEffect(() => {
    typewriter
      .typeTo('The quick brown fox')
      .pauseFor(1000)
      .typeTo('The quick brown cat') // deletes "fox", types "cat"
      .pauseFor(1000)
      .typeTo('The slow brown cat') // deletes back to "The ", types the rest
      .start();
  }, [typewriter]);

  return (
    <p>
      {elements}
      {cursor}
    </p>
  );
}
