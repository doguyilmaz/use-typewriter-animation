import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const CharacterEffectsExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: colorMode === 'dark' ? '#a78bfa' : '#8b5cf6',
  });

  useEffect(() => {
    typewriter
      .type('Special Characters: ')
      .colorize('#8b5cf6')
      .type('★')
      .pauseFor(200)
      .type('⚡')
      .pauseFor(200)
      .type('❤️')
      .pauseFor(200)
      .type('🎉')
      .pauseFor(200)
      .type('🚀')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('E-m-o-j-i   S-p-a-c-i-n-g: ')
      .colorize('#ef4444')
      .type('🔥')
      .pauseFor(300)
      .type(' ')
      .type('💎')
      .pauseFor(300)
      .type(' ')
      .type('✨')
      .pauseFor(300)
      .type(' ')
      .type('🌟')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('Numbers with rhythm: ')
      .colorize('#059669')
      .type('1')
      .pauseFor(100)
      .type('2')
      .pauseFor(150)
      .type('3')
      .pauseFor(200)
      .type('4')
      .pauseFor(250)
      .type('5')
      .pauseFor(300)
      .type('!')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('ASCII Art:')
      .newLine()
      .colorize('#6366f1')
      .type('  /\\_/\\  ')
      .newLine()
      .type(' ( o.o ) ')
      .newLine()
      .type('  > ^ <  ')
      .colorize('#374151')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"JetBrains Mono", "Courier New", monospace',
          fontSize: '1rem',
          lineHeight: '1.6',
          padding: '2rem',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          borderRadius: '12px',
          minHeight: '250px',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: colorMode === 'dark' ? 'linear-gradient(90deg, #a78bfa, #f472b6, #22d3ee)' : 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)',
          }}
        />
        <div
          style={{
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: 'var(--ifm-color-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          ✨ Character Effects Playground
        </div>
        <div style={{ color: 'var(--ifm-color-content)', whiteSpace: 'pre-wrap' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export { CharacterEffectsExample };
export default CharacterEffectsExample;