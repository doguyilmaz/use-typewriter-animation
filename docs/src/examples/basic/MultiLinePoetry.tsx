import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

export const MultiLinePoetry: React.FC = () => {
  const { colorMode } = useColorMode();
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: colorMode === 'dark' ? '#f472b6' : '#db2777',
  });

  useEffect(() => {
    const baseColor = colorMode === 'dark' ? '#e5e7eb' : '#374151';

    typewriter
      .colorize('#db2777')
      .type('✨ Code & Dreams ✨')
      .colorize(baseColor)
      .newLine()
      .newLine()
      .pauseFor(800)
      .type('In lines of code we weave our dreams,')
      .newLine()
      .pauseFor(600)
      .type('Where logic meets creative schemes.')
      .newLine()
      .newLine()
      .pauseFor(400)
      .colorize('#7c3aed')
      .type('Functions dance and variables sing,')
      .newLine()
      .colorize(baseColor)
      .pauseFor(600)
      .colorize('#059669')
      .type('While loops and arrays take wing.')
      .colorize(baseColor)
      .newLine()
      .newLine()
      .pauseFor(800)
      .type('Each ')
      .colorize('#dc2626')
      .type('semicolon')
      .colorize(baseColor)
      .type(' a pause in thought,')
      .newLine()
      .pauseFor(500)
      .type('Each ')
      .colorize('#0ea5e9')
      .type('function')
      .colorize(baseColor)
      .type(' a lesson taught.')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .type('From ')
      .colorize('#f59e0b')
      .type('bugs')
      .colorize(baseColor)
      .type(' we learn to ')
      .colorize('#10b981')
      .type('grow')
      .colorize(baseColor)
      .type(',')
      .newLine()
      .pauseFor(700)
      .type('In every error, ')
      .colorize('#8b5cf6')
      .type('wisdom')
      .colorize(baseColor)
      .type(' we sow.')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .type('        ')
      .colorize(colorMode === 'dark' ? '#9ca3af' : '#6b7280')
      .type("~ A Developer's Heart")
      .colorize(baseColor)
      .start();
  }, [colorMode]);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Georgia", serif',
          fontSize: '1.15rem',
          lineHeight: '2',
          padding: '3rem',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border:
            colorMode === 'dark'
              ? '2px solid var(--ifm-color-primary)'
              : '2px solid var(--ifm-color-primary-light)',
          borderRadius: '16px',
          minHeight: '400px',
          boxShadow:
            colorMode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(219, 39, 119, 0.15)'
              : '0 8px 24px var(--ifm-color-emphasis-200), 0 0 20px rgba(219, 39, 119, 0.1)',
          whiteSpace: 'pre-wrap',
          color: 'var(--ifm-color-content)',
          background:
            colorMode === 'dark'
              ? 'linear-gradient(135deg, var(--ifm-background-surface-color) 0%, rgba(219, 39, 119, 0.05) 100%)'
              : 'linear-gradient(135deg, var(--ifm-background-surface-color) 0%, rgba(219, 39, 119, 0.03) 100%)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default MultiLinePoetry;
