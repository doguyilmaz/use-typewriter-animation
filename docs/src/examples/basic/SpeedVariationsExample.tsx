import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const SpeedVariationsExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 100,
    cursorStyle: 'block',
    cursorColor: colorMode === 'dark' ? '#60a5fa' : '#3b82f6',
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
          fontFamily: '"Courier New", monospace',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          padding: '2.5rem',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: colorMode === 'dark' ? '2px solid var(--ifm-color-primary)' : '2px solid #3b82f6',
          borderRadius: '16px',
          minHeight: '300px',
          color: 'var(--ifm-color-content)',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow:
            colorMode === 'dark'
              ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(96, 165, 250, 0.15)'
              : '0 20px 40px rgba(59, 130, 246, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)',
          background:
            colorMode === 'dark'
              ? 'linear-gradient(135deg, var(--ifm-background-surface-color) 0%, rgba(96, 165, 250, 0.05) 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export { SpeedVariationsExample };
export default SpeedVariationsExample;
