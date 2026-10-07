import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function Chaining() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 45 });

  useEffect(() => {
    typewriter
      .type('Hello, World!')
      .pauseFor(800)
      .deleteWords(1)
      .colorize('#e11d48')
      .type('React!')
      .colorize()
      .newLine()
      .type('Chain any steps you need.')
      .pauseFor(400)
      .highlightWords(3, 'end', { background: '#fde68a', color: '#1c1917' })
      .start();
  }, [typewriter]);

  return (
    <p className='demo-text'>
      {elements}
      {cursor}
    </p>
  );
}
