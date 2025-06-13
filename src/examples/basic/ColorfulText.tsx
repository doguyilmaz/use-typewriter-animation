import { useEffect } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const ColorfulText = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'block',
    cursorColor: '#ef4444',
  });

  useEffect(() => {
    typewriter
      .type('Creating ')
      .colorize('#3b82f6')
      .type('beautiful', { speed: 120 })
      .colorize('#10b981')
      .type(' and ')
      .colorize('#f59e0b')
      .type('colorful')
      .colorize('#8b5cf6')
      .type(' text ')
      .colorize('#ef4444')
      .type('animations')
      .pauseFor(500)
      .colorize('#6b7280')
      .type(' is now super easy! ✨')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '24px',
          fontWeight: '600',
          padding: '2rem',
          backgroundColor: '#1f2937',
          borderRadius: '12px',
          color: '#f3f4f6',
          textAlign: 'center',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};
