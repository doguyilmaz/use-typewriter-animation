import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const KeyboardControls: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [isPaused, setIsPaused] = useState(false);
  const [animationRunning, setAnimationRunning] = useState(false);

  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      typeSpeed: 80,
      cursorStyle: 'bar',
      cursorColor: '#8b5cf6',
      ariaLabel: 'Interactive typewriter with keyboard controls',
      respectReducedMotion: true,
    });

  const startDemo = () => {
    setAnimationRunning(true);
    typewriter
      .type('🎮 Interactive Typewriter Demo')
      .pauseFor(1000)
      .type('\n\nClick this area to activate, then try:')
      .pauseFor(500)
      .type('\n• Press SPACE to pause/resume')
      .pauseFor(500)
      .type('\n• Press ESCAPE to skip to end')
      .pauseFor(500)
      .type('\n• Press R to reset animation')
      .pauseFor(1000)
      .type('\n\nStatus: Ready for keyboard input!')
      .start();
  };

  useEffect(() => {
    startDemo();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isActive) return;

      let action = '';
      switch (event.code) {
        case 'Space':
          event.preventDefault();
          if (isPaused) {
            setIsPaused(false);
            action = 'SPACE pressed - Animation resumed';
          } else {
            typewriter.stop();
            setIsPaused(true);
            action = 'SPACE pressed - Animation paused';
          }
          setKeyPressed('Space');
          break;
        case 'Escape':
          event.preventDefault();
          typewriter.stop();
          typewriter.deleteAll();
          setTimeout(() => {
            typewriter.type('⚡ Skipped to end! Press R to reset.').start();
            setAnimationRunning(false);
          }, 100);
          setIsPaused(false);
          action = 'ESCAPE pressed - Skipped to end';
          setKeyPressed('Escape');
          break;
        case 'KeyR':
          event.preventDefault();
          typewriter.deleteAll();
          setTimeout(() => {
            setAnimationRunning(true);
            typewriter
              .type('🔄 Animation reset!')
              .pauseFor(1000)
              .deleteAll()
              .type('🎮 Interactive Typewriter Demo')
              .pauseFor(500)
              .type('\n\nTry the controls again:')
              .pauseFor(300)
              .type('\n• SPACE to pause/resume')
              .pauseFor(300)
              .type('\n• ESCAPE to skip')
              .pauseFor(300)
              .type('\n• R to reset')
              .pauseFor(500)
              .type('\n\nReady for input!')
              .start();
          }, 100);
          setIsPaused(false);
          action = 'R pressed - Animation reset';
          setKeyPressed('R');
          break;
        default:
          return;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isActive, isPaused, typewriter]);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        onClick={() => setIsActive(true)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        style={{
          position: 'relative',
          fontFamily: 'monospace',
          fontSize: '1rem',
          lineHeight: '1.6',
          padding: '2rem',
          backgroundColor: isActive ? 'var(--ifm-color-primary-lightest)' : 'var(--ifm-background-surface-color)',
          border: `2px solid ${isActive ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-200)'}`,
          borderRadius: '12px',
          minHeight: '300px',
          color: 'var(--ifm-color-content)',
          whiteSpace: 'pre-wrap',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.2s ease',
        }}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
        
        {keyPressed && (
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'var(--ifm-color-primary)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: '600',
            }}
          >
            Last key: {keyPressed}
          </div>
        )}
        
        {isPaused && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1.2rem',
              fontWeight: '600',
            }}
          >
            ⏸️ PAUSED
          </div>
        )}
      </div>
    </>
  );
};

export default KeyboardControls;