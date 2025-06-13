import React, { useEffect, useState } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const AccessibilityShowcase = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const {
    typewriter,
    elements,
    cursor,
    keyframes,
    accessibilityProps,
    screenReaderAnnouncement,
    state,
  } = useTypewriter({
    typeSpeed: 70,
    cursorStyle: 'bar',
    cursorColor: '#10b981',
    enableKeyboardControls: true,
    autoKeyboardHandling: true,
    ariaLabel: 'Accessibility demonstration typewriter',
    ariaLive: 'polite',
    respectReducedMotion: true,
    announceCompletion: true,
    screenReaderText: 'Welcome to our accessibility showcase',
  });

  useEffect(() => {
    typewriter
      .type('♿ ')
      .colorize('#10b981')
      .type('Accessibility First Design')
      .pauseFor(1000)
      .type('\n\n')
      .colorize('#6b7280')
      .type('This typewriter is fully ')
      .colorize('#3b82f6')
      .type('WCAG 2.1 AA compliant')
      .colorize('#6b7280')
      .type(' with:')
      .pauseFor(800)
      .type('\n\n✓ ')
      .colorize('#10b981')
      .type('ARIA live regions')
      .colorize('#6b7280')
      .type(' for screen readers')
      .pauseFor(600)
      .type('\n✓ ')
      .colorize('#10b981')
      .type('Keyboard navigation')
      .colorize('#6b7280')
      .type(' (Space, Escape, R)')
      .pauseFor(600)
      .type('\n✓ ')
      .colorize('#10b981')
      .type('Reduced motion support')
      .colorize('#6b7280')
      .type(' (automatic detection)')
      .pauseFor(600)
      .type('\n✓ ')
      .colorize('#10b981')
      .type('Focus management')
      .colorize('#6b7280')
      .type(' and visual indicators')
      .pauseFor(1000)
      .type('\n\n')
      .colorize('#8b5cf6')
      .type('Try the keyboard controls! 🎹')
      .start();
  }, []);

  const getAccessibilityInfo = () => {
    return {
      ariaLive: state.isTyping ? 'polite' : 'off',
      role: 'region',
      tabIndex: 0,
      'aria-describedby': 'accessibility-description',
    };
  };

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          maxWidth: '700px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            Accessibility Showcase
          </h1>
          <p
            style={{
              color: '#6b7280',
              fontSize: '1.1rem',
            }}
          >
            Demonstrating WCAG 2.1 AA compliance features
          </p>
        </div>

        {/* Status indicator */}
        <div
          style={{
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <span style={{ fontWeight: '600', color: '#374151' }}>Animation Status</span>
            <div
              style={{
                backgroundColor: state.isTyping
                  ? '#10b981'
                  : state.isPaused
                  ? '#f59e0b'
                  : '#6b7280',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              {state.isTyping ? 'TYPING' : state.isPaused ? 'PAUSED' : 'READY'}
            </div>
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            Reduced Motion: {state.reducedMotion ? 'Enabled' : 'Disabled'} • ARIA Live:{' '}
            {state.isTyping ? 'Active' : 'Inactive'}
          </div>
        </div>

        {/* Main typewriter area */}
        <div
          {...accessibilityProps}
          {...getAccessibilityInfo()}
          style={{
            backgroundColor: '#ffffff',
            border: '3px solid #3b82f6',
            borderRadius: '16px',
            padding: '2rem',
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#1f2937',
            minHeight: '300px',
            whiteSpace: 'pre-wrap',
            outline: 'none',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          }}
          onFocus={() => setShowInstructions(true)}
        >
          {elements}
          {cursor}
          {screenReaderAnnouncement}
        </div>

        {/* Accessibility description (hidden but available to screen readers) */}
        <div
          id='accessibility-description'
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: '0',
          }}
        >
          This is an interactive typewriter animation with full accessibility support. You can
          control it using Space to pause or resume, Escape to skip, and R to reset.
        </div>

        {/* Keyboard controls */}
        {showInstructions && (
          <div
            style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '1.5rem',
              marginTop: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              🎹 Keyboard Controls
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <kbd
                  style={{
                    backgroundColor: '#374151',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                  }}
                >
                  SPACE
                </kbd>
                <span style={{ fontSize: '14px' }}>Pause/Resume</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <kbd
                  style={{
                    backgroundColor: '#374151',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                  }}
                >
                  ESC
                </kbd>
                <span style={{ fontSize: '14px' }}>Skip to end</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <kbd
                  style={{
                    backgroundColor: '#374151',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                  }}
                >
                  R
                </kbd>
                <span style={{ fontSize: '14px' }}>Reset animation</span>
              </div>
            </div>
          </div>
        )}

        {/* Accessibility features list */}
        <div
          style={{
            backgroundColor: '#f0f9ff',
            border: '1px solid #0ea5e9',
            borderRadius: '12px',
            padding: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#0c4a6e',
              marginBottom: '1rem',
            }}
          >
            ✨ Accessibility Features
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              display: 'grid',
              gap: '0.5rem',
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> ARIA live regions for real-time announcements
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Semantic roles and labels for screen readers
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> prefers-reduced-motion detection and support
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Keyboard navigation with customizable shortcuts
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Focus management and visual indicators
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> High contrast mode compatibility
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
