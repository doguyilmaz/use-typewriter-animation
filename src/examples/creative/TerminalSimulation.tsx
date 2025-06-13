import React, { useEffect, useState } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const TerminalSimulation = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'block',
    cursorColor: '#10b981',
    cursorBlinkSpeed: 600,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    typewriter
      .colorize('#10b981')
      .type('user@macbook-pro', { speed: 60 })
      .colorize('#3b82f6')
      .type(' ~ ', { speed: 30 })
      .colorize('#f59e0b')
      .type('% ', { speed: 30 })
      .colorize('#e5e7eb')
      .type('npm install use-typewriter-animation', { speed: 25 })
      .pauseFor(800)
      .type('\n')
      .colorize('#6b7280')
      .type('⠋ Installing dependencies...', { speed: 20 })
      .pauseFor(1500)
      .deleteAll()
      .colorize('#10b981')
      .type('✓ Dependencies installed successfully!\n\n', { speed: 30 })
      .colorize('#10b981')
      .type('user@macbook-pro')
      .colorize('#3b82f6')
      .type(' ~ ')
      .colorize('#f59e0b')
      .type('% ')
      .colorize('#e5e7eb')
      .type('cd my-project', { speed: 25 })
      .pauseFor(500)
      .type('\n')
      .colorize('#10b981')
      .type('user@macbook-pro')
      .colorize('#3b82f6')
      .type(' ~/my-project ')
      .colorize('#f59e0b')
      .type('% ')
      .colorize('#e5e7eb')
      .type('code .', { speed: 25 })
      .pauseFor(800)
      .type('\n')
      .colorize('#6b7280')
      .type('Opening in Visual Studio Code...\n\n')
      .colorize('#10b981')
      .type('user@macbook-pro')
      .colorize('#3b82f6')
      .type(' ~/my-project ')
      .colorize('#f59e0b')
      .type('% ')
      .colorize('#e5e7eb')
      .type('bun dev', { speed: 25 })
      .pauseFor(600)
      .type('\n')
      .colorize('#8b5cf6')
      .type('🚀 Development server starting...\n')
      .colorize('#06b6d4')
      .type('   Local:   http://localhost:3000\n')
      .colorize('#10b981')
      .type('   Ready in 2.3s ⚡️\n\n')
      .colorize('#10b981')
      .type('user@macbook-pro')
      .colorize('#3b82f6')
      .type(' ~/my-project ')
      .colorize('#f59e0b')
      .type('% ')
      .start();

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'JetBrains Mono, SF Mono, Monaco, monospace',
          backgroundColor: '#1e1e1e',
          borderRadius: '12px',
          border: '1px solid #333',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          maxWidth: '800px',
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
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
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
              }}
            >
              Terminal — zsh — 80×24
            </span>
          </div>
          <div
            style={{
              color: '#888',
              fontSize: '12px',
            }}
          >
            {currentTime}
          </div>
        </div>

        {/* Terminal content */}
        <div
          style={{
            padding: '20px',
            color: '#e5e7eb',
            fontSize: '14px',
            lineHeight: '1.5',
            minHeight: '300px',
            whiteSpace: 'pre-wrap',
            fontWeight: '400',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};
