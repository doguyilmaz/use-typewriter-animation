import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

export const ColorfulText: React.FC = () => {
  const { colorMode } = useColorMode();
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'bar',
    cursorColor: colorMode === 'dark' ? '#60a5fa' : '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('This is ')
      .colorize('#3b82f6')
      .type('blue text')
      .colorize('')
      .type(', and this is ')
      .colorize('#ef4444')
      .type('red text')
      .colorize('')
      .type('!')
      .newLine()
      .pauseFor(800)
      .type('Watch the ')
      .colorize('#f59e0b')
      .type('rainbow')
      .colorize('#10b981')
      .type(' effect')
      .colorize('#8b5cf6')
      .type(' as')
      .colorize('#ef4444')
      .type(' each')
      .colorize('#3b82f6')
      .type(' word')
      .colorize('#f59e0b')
      .type(' changes')
      .colorize('#10b981')
      .type(' color')
      .colorize('')
      .type('!')
      .newLine()
      .pauseFor(1000)
      .type('🌈 Beautiful, accessible, and smooth!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", sans-serif',
          fontSize: '1.2rem',
          lineHeight: '1.7',
          padding: '2.5rem',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '2px solid var(--ifm-color-emphasis-200)',
          borderRadius: '16px',
          minHeight: '250px',
          color: 'var(--ifm-color-content)',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow:
            colorMode === 'dark'
              ? '0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
              : '0 15px 35px rgba(0, 0, 0, 0.1), 0 0 20px rgba(59, 130, 246, 0.1)',
          background:
            colorMode === 'dark'
              ? 'linear-gradient(135deg, var(--ifm-background-surface-color) 0%, rgba(59, 130, 246, 0.05) 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default ColorfulText;
