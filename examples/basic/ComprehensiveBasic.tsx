// This example is ready to copy to your project
// Install: npm install use-typewriter-animation
// Then copy this entire component to your codebase

import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const ComprehensiveBasic = () => {
  const {
    typewriter,
    elements,
    cursor,
    keyframes,
    metrics,
    styles,
    accessibilityProps,
    screenReaderAnnouncement,
  } = useTypewriter({
    // Visual settings
    typeSpeed: 50,
    loop: false,
    cursorStyle: 'bar',
    cursorBlinkSpeed: 500,
    cursorColor: 'currentColor', // Better for high contrast
    enableCursor: true,

    // Performance optimizations
    enableVirtualization: true,
    maxVisibleSegments: 50,

    // Accessibility settings
    ariaLabel: 'Comprehensive typewriter animation demonstration',
    ariaLive: 'polite',
    respectReducedMotion: true,
    reducedMotionFallback: 'instant',
    announceCompletion: true,

    // Keyboard controls
    enableKeyboardControls: true,
    autoKeyboardHandling: true,
  });

  useEffect(() => {
    typewriter
      .on('start', () => console.log('🚀 Typing started!'))
      .on('end', () => console.log('✅ Typing finished!'))
      .on('loop', () => console.log('🔄 Loop iteration!'))
      .type('Hello, ', {
        screenReaderText: 'Hello,',
        announceCompletion: false,
      })
      .colorize('#ef4444') // Modern red color
      .type('this will be red.', {
        speed: 80,
        screenReaderText: 'this will be red.',
        announceCompletion: false,
      })
      .pauseFor(500)
      .deleteLetters(5)
      .colorize('#3b82f6') // Modern blue color
      .type(" Now it's blue!", {
        speed: 100,
        screenReaderText: "Now it's blue!",
        announceCompletion: true,
      })
      .pauseFor(800)
      .type('\n\n✨ This example showcases:')
      .pauseFor(400)
      .type('\n• Text colorization')
      .pauseFor(300)
      .type('\n• Delete operations')
      .pauseFor(300)
      .type('\n• Accessibility features')
      .pauseFor(300)
      .type('\n• Keyboard controls')
      .pauseFor(300)
      .type('\n• Performance metrics')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          maxWidth: '600px',
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
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            Comprehensive Basic Example
          </h2>
          <p
            style={{
              color: '#6b7280',
              fontSize: '0.9rem',
            }}
          >
            Demonstrating multiple features in a single component
          </p>
        </div>

        {/* Main typewriter container */}
        <div
          {...accessibilityProps}
          tabIndex={0} // Make focusable for keyboard navigation
          style={{
            ...styles.container,
            ...styles.optimizedText,
            padding: '1.5rem',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            color: '#1f2937',
            minHeight: '200px',
            fontSize: '18px',
            lineHeight: '1.6',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            outline: 'none',
          }}
        >
          {elements}
          {cursor}
          {screenReaderAnnouncement}
        </div>

        {/* Keyboard controls info */}
        <div
          style={{
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1rem',
            marginTop: '1rem',
            fontSize: '14px',
            color: '#6b7280',
            textAlign: 'center',
          }}
        >
          <strong>Keyboard Controls:</strong> Space (pause/resume) • Escape (skip) • R (reset)
        </div>

        {/* Performance metrics in development */}
        {process.env.NODE_ENV === 'development' && (
          <div
            style={{
              backgroundColor: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              padding: '1rem',
              marginTop: '1rem',
              fontSize: '12px',
              color: '#374151',
            }}
          >
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📊 Development Metrics</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              <div>Segments: {metrics.totalSegments}</div>
              <div>Visible: {metrics.visibleSegments}</div>
              <div>Virtualized: {metrics.isVirtualized ? 'Yes' : 'No'}</div>
              <div>Reduced Motion: {typewriter.getState().reducedMotion ? 'Yes' : 'No'}</div>
            </div>
          </div>
        )}

        {/* Feature highlights */}
        <div
          style={{
            backgroundColor: '#f0f9ff',
            border: '1px solid #0ea5e9',
            borderRadius: '8px',
            padding: '1rem',
            marginTop: '1rem',
          }}
        >
          <div
            style={{
              fontWeight: '600',
              color: '#0c4a6e',
              marginBottom: '0.5rem',
            }}
          >
            ✨ Features Demonstrated
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              color: '#0c4a6e',
              fontSize: '14px',
            }}
          >
            <li>✓ Text colorization with modern colors</li>
            <li>✓ Delete operations and dynamic content</li>
            <li>✓ Accessibility with ARIA support</li>
            <li>✓ Keyboard controls for interaction</li>
            <li>✓ Performance metrics and virtualization</li>
            <li>✓ Screen reader compatibility</li>
          </ul>
        </div>
      </div>
    </>
  );
};
