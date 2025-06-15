import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const MultiLinePoetry: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#db2777',
  });

  useEffect(() => {
    typewriter
      .colorize('#db2777')
      .type('✨ Code & Dreams ✨')
      .colorize('#374151')
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
      .colorize('#374151')
      .pauseFor(600)
      .colorize('#059669')
      .type('While loops and arrays take wing.')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .type('Each ')
      .colorize('#dc2626')
      .type('semicolon')
      .colorize('#374151')
      .type(' a pause in thought,')
      .newLine()
      .pauseFor(500)
      .type('Each ')
      .colorize('#0ea5e9')
      .type('function')
      .colorize('#374151')
      .type(' a lesson taught.')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .type('From ')
      .colorize('#f59e0b')
      .type('bugs')
      .colorize('#374151')
      .type(' we learn to ')
      .colorize('#10b981')
      .type('grow')
      .colorize('#374151')
      .type(',')
      .newLine()
      .pauseFor(700)
      .type('In every error, ')
      .colorize('#8b5cf6')
      .type('wisdom')
      .colorize('#374151')
      .type(' we sow.')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .type('        ')
      .colorize('#6b7280')
      .type("~ A Developer's Heart")
      .colorize('#374151')
      .start();
  }, []);

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
          border: '2px solid var(--ifm-color-primary-light)',
          borderRadius: '16px',
          minHeight: '400px',
          boxShadow: '0 8px 24px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
          whiteSpace: 'pre-wrap',
          color: 'var(--ifm-color-content)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default MultiLinePoetry;