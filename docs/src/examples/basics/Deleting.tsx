import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function Deleting() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 40, deleteSpeed: 60 });

  useEffect(() => {
    typewriter
      .type('Delete three letters')
      .pauseFor(600)
      .deleteLetters(7)
      .type('words, two of them')
      .pauseFor(600)
      .deleteWords(2)
      .type('or everything.')
      .pauseFor(800)
      .deleteAll({ speed: 15 })
      .type('Emoji count as one: 👩‍👩‍👧')
      .pauseFor(600)
      .deleteLetters(1)
      .start();
  }, [typewriter]);

  return (
    <p>
      {elements}
      {cursor}
    </p>
  );
}
