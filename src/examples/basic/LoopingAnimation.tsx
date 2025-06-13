import React, { useEffect } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const LoopingAnimation = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 100,
    deleteSpeed: 50,
    loop: true,
    cursorStyle: 'underline',
    cursorColor: '#06b6d4',
  });

  useEffect(() => {
    typewriter
      .type('I am a ')
      .colorize('#06b6d4')
      .type('Developer')
      .pauseFor(2000)
      .deleteLetters(9)
      .colorize('#10b981')
      .type('Designer')
      .pauseFor(2000)
      .deleteLetters(8)
      .colorize('#f59e0b')
      .type('Creator')
      .pauseFor(2000)
      .deleteLetters(7)
      .colorize('#ef4444')
      .type('Problem Solver')
      .pauseFor(2000)
      .deleteLetters(14)
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '32px',
          fontWeight: '700',
          padding: '3rem',
          backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center',
          minHeight: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
