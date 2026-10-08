import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function CustomRender() {
  const { typewriter, state } = useTypewriter({ typeSpeed: 50 });

  useEffect(() => {
    typewriter
      .type('Render ')
      .colorize('tomato')
      .type('segments')
      .colorize()
      .type(' with your own elements.')
      .start();
  }, [typewriter]);

  return (
    <p>
      {state.segments.map((segment) =>
        segment.color ? (
          <mark key={segment.id}>{segment.text}</mark>
        ) : (
          <span key={segment.id}>{segment.text}</span>
        ),
      )}
      {state.status === 'done' ? ' ✓' : '…'}
    </p>
  );
}
