import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const HeroSection: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorColor: '#ffffff',
  });

  useEffect(() => {
    typewriter
      .type('Build ')
      .colorize('#60a5fa')
      .type('Amazing')
      .colorize('#ffffff')
      .type(' React Apps')
      .newLine()
      .pauseFor(1000)
      .type('with ')
      .colorize('#34d399')
      .type('TypeScript')
      .colorize('#ffffff')
      .type(' & ')
      .colorize('#f87171')
      .type('Modern Tools')
      .pauseFor(2000)
      .newLine()
      .type('✨ Fast • Reliable • Scalable')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          paddingTop: '5rem',
          borderRadius: '16px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          minHeight: '400px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'system-ui, sans-serif',
            whiteSpace: 'pre-line',
            lineHeight: '1.2',
            minHeight: '300px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default HeroSection;