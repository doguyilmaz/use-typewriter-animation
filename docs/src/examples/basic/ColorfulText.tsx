import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const ColorfulText: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
  });

  useEffect(() => {
    typewriter
      .type('This is ')
      .colorize('#3b82f6')
      .type('blue text')
      .colorize('')
      .type(' and ')
      .colorize('#10b981')
      .type('green text')
      .colorize('')
      .type(' and ')
      .colorize('#ef4444')
      .type('red text!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '1.2rem',
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

export default ColorfulText;