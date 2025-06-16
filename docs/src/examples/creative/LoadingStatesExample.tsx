import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const LoadingStatesExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loadingSpeed, setLoadingSpeed] = useState('Normal');
  const contentRef = React.useRef<HTMLDivElement>(null);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 25,
    cursorStyle: 'block',
    cursorColor: '#22c55e',
  });

  // Define theme-aware colors
  const colors = {
    background: colorMode === 'dark' ? '#0f172a' : '#1e293b',
    surface: colorMode === 'dark' ? '#1e293b' : '#334155',
    text: colorMode === 'dark' ? '#f8fafc' : '#e2e8f0',
    muted: colorMode === 'dark' ? '#64748b' : '#94a3b8',
    border: colorMode === 'dark' ? '#334155' : '#475569',
    accent: '#22c55e',
  };

  useEffect(() => {
    const neutralColor = colors.text;

    typewriter
      .colorize('#22c55e')
      .type('⚡ SYSTEM INITIALIZATION ⚡')
      .colorize(neutralColor)
      .newLine()
      .type('════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize(colors.muted)
      .type('Starting application bootstrap...')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#3b82f6')
      .type('[1/8] ')
      .colorize(neutralColor)
      .type('Loading configuration files... ')
      .pauseFor(1000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('      config.json, env.local, package.json')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[2/8] ')
      .colorize(neutralColor)
      .type('Initializing database connection... ')
      .pauseFor(1500)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('      PostgreSQL v14.2 on port 5432')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[3/8] ')
      .colorize(neutralColor)
      .type('Loading dependencies... ')
      .pauseFor(2000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('      react@18.2.0, typescript@4.9.5, tailwind@3.2.4')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[4/8] ')
      .colorize(neutralColor)
      .type('Setting up API routes... ')
      .pauseFor(1200)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('      /api/auth, /api/users, /api/data, /api/uploads')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[5/8] ')
      .colorize(neutralColor)
      .type('Compiling TypeScript... ')
      .pauseFor(1800)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('      47 files compiled, 0 errors, 2 warnings')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[6/8] ')
      .colorize(neutralColor)
      .type('Starting development server... ')
      .pauseFor(1000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('      Server running on http://localhost:3000')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[7/8] ')
      .colorize(neutralColor)
      .type('Running security checks... ')
      .pauseFor(1400)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('      No vulnerabilities found, all packages secure')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[8/8] ')
      .colorize(neutralColor)
      .type('Finalizing startup... ')
      .pauseFor(800)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('📊 Performance Metrics:')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('├─ Startup time: ')
      .colorize('#22c55e')
      .type('2.34s')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('├─ Memory usage: ')
      .colorize('#22c55e')
      .type('89.2MB')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('├─ Bundle size: ')
      .colorize('#22c55e')
      .type('1.8MB')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('└─ Dependencies: ')
      .colorize('#22c55e')
      .type('247 packages')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('🎉 APPLICATION READY!')
      .colorize(neutralColor)
      .newLine()
      .newLine()
      .colorize(colors.muted)
      .type('→ Local:   ')
      .colorize('#3b82f6')
      .type('http://localhost:3000')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('→ Network: ')
      .colorize('#3b82f6')
      .type('http://192.168.1.100:3000')
      .colorize(neutralColor)
      .newLine()
      .colorize(colors.muted)
      .type('→ Press Ctrl+C to stop the server')
      .start();
  }, [colorMode]);

  // Smart auto-scroll - only when user is at bottom
  useEffect(() => {
    if (contentRef.current && elements && elements.length > 0) {
      const container = contentRef.current;
      const isNearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 50;
      
      if (isNearBottom) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [elements]);

  // Simulate loading progress
  useEffect(() => {
    const speeds = ['Fast', 'Normal', 'Slow'];
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev % 8) + 1);
      setProgress((prev) => (prev + Math.floor(Math.random() * 15) + 5) % 100);
      setLoadingSpeed(speeds[Math.floor(Math.random() * speeds.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes loading-pulse {
            0%, 100% { 
              box-shadow: ${
                colorMode === 'dark'
                  ? '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)'
                  : '0 0 30px rgba(34, 197, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.1)'
              }; 
            }
            50% { 
              box-shadow: ${
                colorMode === 'dark'
                  ? '0 0 50px rgba(34, 197, 94, 0.6), 0 0 100px rgba(34, 197, 94, 0.3)'
                  : '0 0 50px rgba(34, 197, 94, 0.6), 0 0 100px rgba(34, 197, 94, 0.2)'
              }; 
            }
          }
          
          @keyframes progress-fill {
            0% { width: 0%; }
            100% { width: var(--progress-width); }
          }
          
          @keyframes step-glow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          
          .loading-container {
            animation: loading-pulse 4s ease-in-out infinite;
          }
          
          .progress-bar {
            animation: progress-fill 2s ease-out;
          }
          
          .active-step {
            animation: step-glow 2s ease-in-out infinite;
          }
        `}
      </style>
      <div
        className='loading-container'
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          fontFamily: '"JetBrains Mono", "Consolas", "Monaco", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.5',
          borderRadius: '12px',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          border: `2px solid ${colors.accent}`,
          position: 'relative',
          background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.surface} 100%)`,
          boxShadow:
            colorMode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.4)'
              : '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Loading Header */}
        <div
          style={{
            backgroundColor: colors.accent,
            color: colors.background,
            padding: '12px 20px',
            borderRadius: '10px 10px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '1.1rem' }}>⚡</div>
            <div style={{ fontWeight: '600' }}>System Loader</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '0.8rem' }}>Step {currentStep}/8</div>
            <div style={{ fontSize: '0.8rem' }}>{loadingSpeed}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            backgroundColor: colors.surface,
            padding: '12px 20px',
            borderBottom: `1px solid ${colors.border}`,
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.8rem', color: colors.muted }}>Progress</span>
            <span style={{ fontSize: '0.8rem', color: colors.muted }}>{progress}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: colors.border,
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <div
              className='progress-bar'
              style={{
                height: '100%',
                backgroundColor: colors.accent,
                width: `${progress}%`,
                transition: 'width 0.5s ease',
                borderRadius: '3px',
              }}
            />
          </div>
        </div>

        {/* Loading Content */}
        <div
          ref={contentRef}
          style={{
            flex: 1,
            padding: '20px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            overflow: 'auto',
          }}
        >
          {elements}
          {cursor}
        </div>

        {/* Loading Footer - Fixed at bottom */}
        <div
          style={{
            backgroundColor: colors.surface,
            borderTop: `1px solid ${colors.border}`,
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0 0 10px 10px',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: colors.muted }}>Loading dependencies...</div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={currentStep === i ? 'active-step' : ''}
                  style={{
                    width: '4px',
                    height: '4px',
                    backgroundColor: currentStep >= i ? colors.accent : colors.border,
                    borderRadius: '50%',
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: colors.muted }}>
              {Math.floor(Math.random() * 50) + 200}ms
            </div>
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: colors.accent,
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { LoadingStatesExample };
export default LoadingStatesExample;
