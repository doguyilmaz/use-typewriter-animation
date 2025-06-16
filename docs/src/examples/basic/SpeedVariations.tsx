import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const SpeedVariations: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 100,
    cursorStyle: 'block',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('The quick brown fox...', { speed: 30 })
      .pauseFor(800)
      .newLine()
      .type('JUMPS!', { speed: 5 })
      .pauseFor(500)
      .newLine()
      .type('...and lands gracefully', { speed: 80 })
      .pauseFor(1000)
      .newLine()
      .newLine()
      .type('🐌 Slow typing creates suspense...', { speed: 150 })
      .pauseFor(1200)
      .newLine()
      .type('⚡ FAST TYPING CREATES EXCITEMENT!', { speed: 10 })
      .pauseFor(800)
      .newLine()
      .type('🎯 Normal speed for readability.', { speed: 50 })
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", sans-serif',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          padding: '2rem',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '2px solid var(--ifm-color-emphasis-200)',
          borderRadius: '12px',
          minHeight: '300px',
          color: 'var(--ifm-color-content)',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default SpeedVariations;