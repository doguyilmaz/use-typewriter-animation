import { useEffect, useState } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const KeyboardControls = () => {
  const [controlsVisible, setControlsVisible] = useState(true);

  const {
    typewriter,
    elements,
    cursor,
    keyframes,
    accessibilityProps,
    screenReaderAnnouncement,
    state,
  } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
    enableKeyboardControls: true,
    autoKeyboardHandling: true,
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

  const getStatusBadge = () => {
    if (state.isPaused) return { text: 'PAUSED', color: '#f59e0b' };
    if (state.isTyping) return { text: 'TYPING', color: '#10b981' };
    if (state.isComplete) return { text: 'COMPLETE', color: '#6b7280' };
    return { text: 'READY', color: '#3b82f6' };
  };

  const status = getStatusBadge();

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          backgroundColor: '#0f172a',
          borderRadius: '12px',
          border: '2px solid #334155',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Header with status */}
        <div
          style={{
            backgroundColor: '#1e293b',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #334155',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: '#f1f5f9',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            Keyboard Controls Demo
          </div>
          <div
            style={{
              backgroundColor: status.color,
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            {status.text}
          </div>
        </div>

        {/* Main content */}
        <div
          {...accessibilityProps}
          tabIndex={0}
          style={{
            padding: '2rem',
            color: '#e2e8f0',
            fontSize: '16px',
            lineHeight: '1.6',
            minHeight: '200px',
            whiteSpace: 'pre-wrap',
            outline: 'none',
          }}
          onFocus={() => setControlsVisible(true)}
        >
          {elements}
          {cursor}
          {screenReaderAnnouncement}
        </div>

        {/* Controls info */}
        {controlsVisible && (
          <div
            style={{
              backgroundColor: '#1e293b',
              borderTop: '1px solid #334155',
              padding: '1rem 1.5rem',
              fontSize: '12px',
              color: '#94a3b8',
            }}
          >
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <kbd
                  style={{ padding: '2px 6px', backgroundColor: '#334155', borderRadius: '4px' }}
                >
                  SPACE
                </kbd>{' '}
                Pause/Resume
              </div>
              <div>
                <kbd
                  style={{ padding: '2px 6px', backgroundColor: '#334155', borderRadius: '4px' }}
                >
                  ESC
                </kbd>{' '}
                Skip
              </div>
              <div>
                <kbd
                  style={{ padding: '2px 6px', backgroundColor: '#334155', borderRadius: '4px' }}
                >
                  R
                </kbd>{' '}
                Reset
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
