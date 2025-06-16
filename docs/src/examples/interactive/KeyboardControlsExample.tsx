import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const KeyboardControlsExample: React.FC = () => {
  const [controlsVisible, setControlsVisible] = useState(true);

  const {
    typewriter,
    elements,
    cursor,
    keyframes,
    accessibilityProps,
    screenReaderAnnouncement,
  } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
    ariaLabel: 'Interactive typewriter with keyboard controls',
    respectReducedMotion: true,
  });

  useEffect(() => {
    typewriter
      .type('🎮 Interactive Typewriter Demo')
      .pauseFor(1000)
      .type('\n\nYou can control this animation:')
      .pauseFor(500)
      .type('\n• Press SPACE to pause/resume')
      .pauseFor(500)
      .type('\n• Press ESCAPE to skip to end')
      .pauseFor(500)
      .type('\n• Press R to reset animation')
      .pauseFor(1000)
      .type('\n\nTry it out! 🚀')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        style={{
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '12px',
          border: '2px solid var(--ifm-color-emphasis-300)',
          padding: '2rem',
          color: 'var(--ifm-color-content)',
          fontSize: '16px',
          lineHeight: '1.6',
          minHeight: '350px',
          height: '350px',
          whiteSpace: 'pre-wrap',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
        onFocus={() => setControlsVisible(true)}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
};

export { KeyboardControlsExample };
export default KeyboardControlsExample;