import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const CharacterEffectsExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
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
          backgroundColor: '#fefefe',
          border: '3px solid #e879f9',
          borderRadius: '16px',
          minHeight: '250px',
          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.15)',
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
            background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)',
          }}
        />
        <div
          style={{
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#8b5cf6',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          ✨ Character Effects Playground
        </div>
        <div style={{ color: '#374151', whiteSpace: 'pre-wrap' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export { CharacterEffectsExample };
export default CharacterEffectsExample;