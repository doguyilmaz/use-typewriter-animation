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
      {state.segments.map(({ id, text, color }) => {
        if (text === '\n') return <br key={id} />;
        if (color) {
          return (
            <strong key={id} style={{ color }}>
              {text}
            </strong>
          );
        }
        return <span key={id}>{text}</span>;
      })}
      {state.status === 'done' ? ' ✓' : '…'}
    </p>
  );
}
