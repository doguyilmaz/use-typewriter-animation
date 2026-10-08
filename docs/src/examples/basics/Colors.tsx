import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function Colors() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 40 });

  useEffect(() => {
    typewriter
      .type('Text can be ')
      .colorize('#e11d48')
      .type('red')
      .colorize()
      .type(', ')
      .colorize('#2563eb')
      .type('blue')
      .colorize()
      .type(' or highlighted afterwards.')
      .pauseFor(500)
      .highlightWords(2, 'end', { background: '#fde68a', color: '#1c1917' })
      .start();
  }, [typewriter]);

  return (
    <p>
      {elements}
      {cursor}
    </p>
  );
}
