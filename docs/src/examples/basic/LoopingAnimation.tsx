import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const LoopingAnimation: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    loop: true,
  });

  useEffect(() => {
    typewriter
      .type('Frontend Developer')
      .pauseFor(2000)
      .deleteAll()
      .type('React Enthusiast')
      .pauseFor(2000)
      .deleteAll()
      .type('TypeScript Lover')
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '1.3rem',
          lineHeight: '1.5',
          padding: '2rem',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          borderRadius: '12px',
          minHeight: '200px',
          color: 'var(--ifm-color-content)',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
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

export default LoopingAnimation;