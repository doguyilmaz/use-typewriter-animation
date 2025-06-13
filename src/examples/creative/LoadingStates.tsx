import { useEffect, useState } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const LoadingStates = () => {
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
      // Initialize
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

      // Connecting
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

      // Loading Data
      setCurrentState(2);
      typewriter
        .colorize('#f59e0b')
        .type('📊 Loading animation data...')
        .pauseFor(600)
        .type('\n\n')
        .colorize('#6b7280')
        .type('Loading: ')
        .colorize('#3b82f6')
        .type('[████████████████████] 100%')
        .pauseFor(400)
        .type('\n\n')
        .colorize('#6b7280')
        .type('Segments processed: ')
        .colorize('#10b981')
        .type('1,337')
        .pauseFor(400)
        .type('\n')
        .colorize('#6b7280')
        .type('Characters analyzed: ')
        .colorize('#10b981')
        .type('42,195')
        .pauseFor(400)
        .type('\n')
        .colorize('#6b7280')
        .type('Animations queued: ')
        .colorize('#10b981')
        .type('∞')
        .pauseFor(1500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Processing
      setCurrentState(3);
      typewriter
        .colorize('#8b5cf6')
        .type('⚙️ Processing animations...')
        .pauseFor(800)
        .type('\n\n')
        .colorize('#6b7280')
        .type('◐ Optimizing performance')
        .pauseFor(500)
        .deleteLetters(20)
        .type('◓ Optimizing performance')
        .pauseFor(500)
        .deleteLetters(20)
        .type('◑ Optimizing performance')
        .pauseFor(500)
        .deleteLetters(20)
        .type('◒ Optimizing performance')
        .pauseFor(500)
        .deleteLetters(20)
        .colorize('#10b981')
        .type('✓ Performance optimized')
        .pauseFor(600)
        .type('\n')
        .colorize('#6b7280')
        .type('◐ Applying accessibility features')
        .pauseFor(400)
        .deleteLetters(31)
        .type('◓ Applying accessibility features')
        .pauseFor(400)
        .deleteLetters(31)
        .colorize('#10b981')
        .type('✓ Accessibility features applied')
        .pauseFor(1200)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Finalizing
      setCurrentState(4);
      typewriter
        .colorize('#10b981')
        .type('✨ Finalizing setup...')
        .pauseFor(800)
        .type('\n\n')
        .colorize('#6b7280')
        .type('Running final checks:')
        .pauseFor(400)
        .type('\n')
        .colorize('#10b981')
        .type('✓ Memory management: OK')
        .pauseFor(300)
        .type('\n')
        .colorize('#10b981')
        .type('✓ Event cleanup: OK')
        .pauseFor(300)
        .type('\n')
        .colorize('#10b981')
        .type('✓ React StrictMode: OK')
        .pauseFor(300)
        .type('\n')
        .colorize('#10b981')
        .type('✓ TypeScript types: OK')
        .pauseFor(500)
        .type('\n\n')
        .colorize('#8b5cf6')
        .type('All systems ready! 🚀')
        .pauseFor(1500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Complete
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
        .type('\n\nYour typewriter is now ready with:')
        .pauseFor(500)
        .type('\n• ')
        .colorize('#10b981')
        .type('50%+ performance boost')
        .pauseFor(300)
        .type('\n• ')
        .colorize('#10b981')
        .type('WCAG 2.1 AA accessibility')
        .pauseFor(300)
        .type('\n• ')
        .colorize('#10b981')
        .type('React 19 compatibility')
        .pauseFor(300)
        .type('\n• ')
        .colorize('#10b981')
        .type('TypeScript support')
        .pauseFor(800)
        .type('\n\n')
        .colorize('#8b5cf6')
        .type('Happy typing! ✨')
        .start();
    };

    runLoadingSequence();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'JetBrains Mono, Monaco, monospace',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
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
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '0.5rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Loading State Demo
            </h1>
            <p
              style={{
                color: '#6b7280',
                fontSize: '1rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Realistic loading sequences with typewriter animations
            </p>
          </div>

          {/* Progress bar */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '2rem',
              border: '1px solid #d1d5db',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
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
                  color: '#374151',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Progress
              </span>
              <span
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {Math.round((currentState / (loadingStates.length - 1)) * 100)}%
              </span>
            </div>
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#f3f4f6',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${(currentState / (loadingStates.length - 1)) * 100}%`,
                  height: '100%',
                  backgroundColor: loadingStates[currentState]?.color || '#3b82f6',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>
          </div>

          {/* State indicators */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              marginBottom: '2rem',
            }}
          >
            {loadingStates.map((state, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: index <= currentState ? state.color : '#f3f4f6',
                  color: index <= currentState ? 'white' : '#9ca3af',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  fontFamily: 'system-ui, sans-serif',
                  opacity: index === currentState ? 1 : index < currentState ? 0.8 : 0.4,
                  transform: index === currentState ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <div style={{ fontSize: '16px', marginBottom: '4px' }}>{state.icon}</div>
                {state.name}
              </div>
            ))}
          </div>

          {/* Main terminal */}
          <div
            style={{
              backgroundColor: '#1e1e1e',
              borderRadius: '12px',
              border: '1px solid #333',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                backgroundColor: '#2d2d2d',
                padding: '12px 16px',
                borderBottom: '1px solid #333',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ff5f57',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ffbd2e',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#28ca42',
                }}
              />
              <span
                style={{
                  marginLeft: '12px',
                  color: '#888',
                  fontSize: '13px',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Loading Terminal
              </span>
            </div>

            {/* Terminal content */}
            <div
              style={{
                padding: '20px',
                color: '#e5e7eb',
                fontSize: '14px',
                lineHeight: '1.5',
                minHeight: '200px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {elements}
              {cursor}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
