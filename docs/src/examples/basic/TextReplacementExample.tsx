import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const TextReplacementExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'block',
    cursorColor: '#f59e0b',
  });

  useEffect(() => {
    typewriter
      .type('I am ')
      .colorize('#3b82f6')
      .type('happy')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(5)
      .colorize('#ef4444')
      .type('excited')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(7)
      .colorize('#10b981')
      .type('thrilled')
      .colorize('#374151')
      .type(' today!')
      .newLine()
      .newLine()
      .type('React is ')
      .colorize('#8b5cf6')
      .type('difficult')
      .colorize('#374151')
      .pauseFor(1200)
      .deleteLetters(9)
      .colorize('#059669')
      .type('amazing')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(7)
      .colorize('#dc2626')
      .type('powerful')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(8)
      .colorize('#7c3aed')
      .type('fantastic')
      .colorize('#374151')
      .type('!')
      .newLine()
      .newLine()
      .type('Learning: ')
      .colorize('#6b7280')
      .type('JavaScript')
      .pauseFor(800)
      .deleteLetters(10)
      .colorize('#f59e0b')
      .type('TypeScript')
      .pauseFor(800)
      .deleteLetters(10)
      .colorize('#06b6d4')
      .type('React')
      .pauseFor(800)
      .deleteLetters(5)
      .colorize('#8b5cf6')
      .type('Next.js')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('Status: ')
      .colorize('#ef4444')
      .type('❌ Offline')
      .pauseFor(1500)
      .deleteLetters(10)
      .colorize('#f59e0b')
      .type('⏳ Connecting')
      .pauseFor(1500)
      .deleteLetters(13)
      .colorize('#10b981')
      .type('✅ Online')
      .colorize('#374151')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"SF Mono", "Monaco", "Inconsolata", monospace',
          fontSize: '1.1rem',
          lineHeight: '1.7',
          padding: '2.5rem',
          backgroundColor: '#fffbeb',
          border: '2px solid #fbbf24',
          borderRadius: '12px',
          minHeight: '220px',
          boxShadow: '0 10px 25px rgba(245, 158, 11, 0.1)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            fontSize: '0.75rem',
            color: '#92400e',
            fontWeight: '500',
            backgroundColor: '#fef3c7',
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          LIVE REPLACEMENT
        </div>
        <div
          style={{
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            color: '#92400e',
            fontWeight: '600',
          }}
        >
          🔄 Dynamic Text Replacement
        </div>
        <div style={{ color: '#374151' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export { TextReplacementExample };
export default TextReplacementExample;