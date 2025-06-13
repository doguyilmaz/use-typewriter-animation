import { useEffect } from 'react';
import { useTypewriter } from '../src/Typewriter/useTypewriter';

export const HeroSection = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    deleteSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
    cursorBlinkSpeed: 600,
  });

  useEffect(() => {
    typewriter
      .type('Build ')
      .colorize('#3b82f6')
      .type('Amazing', { speed: 120 })
      .colorize('#1f2937')
      .type(' Typewriter\nAnimations with ')
      .colorize('#10b981')
      .type('React', { speed: 100 })
      .pauseFor(1000)
      .deleteLetters(5)
      .colorize('#f59e0b')
      .type('TypeScript')
      .pauseFor(1000)
      .deleteLetters(10)
      .colorize('#ef4444')
      .type('Accessibility')
      .pauseFor(1000)
      .deleteLetters(13)
      .colorize('#8b5cf6')
      .type('Performance')
      .pauseFor(2000)
      .deleteAll()
      .type('🚀 ')
      .colorize('#3b82f6')
      .type('use-typewriter-animation')
      .pauseFor(500)
      .type('\n')
      .colorize('#6b7280')
      .type('The most comprehensive React typewriter library', { speed: 60 })
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '2rem',
              minHeight: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'pre-wrap',
            }}
          >
            <div>
              {elements}
              {cursor}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '4rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Lightning Fast
              </h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                50%+ faster rendering with state-driven updates
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♿</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                WCAG 2.1 AA
              </h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Complete accessibility support</p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                React 19 Ready
              </h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Full React 19 compatibility</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
