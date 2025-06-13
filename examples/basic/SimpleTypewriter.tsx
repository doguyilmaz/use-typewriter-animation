// This example is ready to copy to your project
// Install: npm install use-typewriter-animation
// Then copy this entire component to your codebase

import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const SimpleTypewriter = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('Hello, World! 👋')
      .pauseFor(1000)
      .type('\nWelcome to use-typewriter-animation')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '18px',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          minHeight: '100px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};
