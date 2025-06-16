import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

export const SimpleTypewriter: React.FC = () => {
  const { colorMode } = useColorMode();
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: colorMode === 'dark' ? '#60a5fa' : '#3b82f6',
  });

  useEffect(() => {
    typewriter.type('Hello, World! 👋').pauseFor(1000).deleteLetters(9).type('React!').start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '1.5rem',
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

export default SimpleTypewriter;