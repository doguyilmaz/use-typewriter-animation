import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const LoadingStates: React.FC = () => {
  const [currentState, setCurrentState] = useState(0);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  const loadingStates = [
    { name: 'Initializing', color: '#6b7280', icon: '⚡' },
    { name: 'Connecting', color: '#3b82f6', icon: '🔗' },
    { name: 'Loading Data', color: '#f59e0b', icon: '📊' },
    { name: 'Processing', color: '#8b5cf6', icon: '⚙️' },
    { name: 'Finalizing', color: '#10b981', icon: '✨' },
    { name: 'Complete', color: '#059669', icon: '✅' },
  ];

  useEffect(() => {
    const runLoadingSequence = async () => {
      setCurrentState(0);
      typewriter
        .colorize('#6b7280')
        .type('⚡ Initializing system...')
        .pauseFor(1000)
        .type('\n')
        .colorize('#3b82f6')
        .type('▸ Loading use-typewriter-animation library')
        .pauseFor(800)
        .type('\n')
        .colorize('#10b981')
        .type('✓ TypeScript definitions loaded')
        .pauseFor(600)
        .type('\n')
        .colorize('#10b981')
        .type('✓ React hooks initialized')
        .pauseFor(1200)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 4000));

      setCurrentState(1);
      typewriter
        .colorize('#3b82f6')
        .type('🔗 Establishing connection...')
        .pauseFor(800)
        .type('\n\n')
        .colorize('#6b7280')
        .type('• Checking browser compatibility')
        .pauseFor(500)
        .type('\n• Detecting accessibility preferences')
        .pauseFor(500)
        .type('\n• Setting up event listeners')
        .pauseFor(700)
        .type('\n\n')
        .colorize('#10b981')
        .type('Connection established! 🎉')
        .pauseFor(1500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 4500));

      setCurrentState(5);
      typewriter
        .colorize('#059669')
        .type('✅ Setup Complete!')
        .pauseFor(1000)
        .type('\n\n')
        .colorize('#1f2937')
        .type('Welcome to ')
        .colorize('#3b82f6')
        .type('use-typewriter-animation')
        .colorize('#1f2937')
        .type('!')
        .pauseFor(800)
        .type('\n\nYour typewriter is now ready! ✨')
        .start();
    };

    runLoadingSequence();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          width: '100%',
          fontFamily: 'monospace',
          borderRadius: '12px',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          padding: '2rem',
          minHeight: '300px',
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '2rem',
            border: '1px solid var(--ifm-color-emphasis-200)',
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
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--ifm-color-content)',
              }}
            >
              Progress
            </span>
            <span
              style={{
                fontSize: '14px',
                color: 'var(--ifm-color-content-secondary)',
              }}
            >
              {Math.round((currentState / (loadingStates.length - 1)) * 100)}%
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: 'var(--ifm-color-emphasis-200)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundColor: 'var(--ifm-color-primary)',
                borderRadius: '4px',
                width: `${(currentState / (loadingStates.length - 1)) * 100}%`,
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '8px',
            padding: '1.5rem',
            minHeight: '200px',
            fontFamily: 'monospace',
            fontSize: '14px',
            color: 'var(--ifm-color-content)',
            whiteSpace: 'pre-wrap',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default LoadingStates;
