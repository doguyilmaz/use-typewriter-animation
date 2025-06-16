import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const TerminalExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isOnline, setIsOnline] = useState(true);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'block',
    cursorColor: '#22c55e',
  });

  const commands = ['npm install', 'git status', 'docker build', 'yarn dev'];

  useEffect(() => {
    typewriter
      .colorize('#22c55e')
      .type('user@dev-machine')
      .colorize('#3b82f6')
      .type(':')
      .colorize('#8b5cf6')
      .type('~/projects/my-app')
      .colorize('#f8fafc')
      .type('$ ')
      .pauseFor(800)
      .type('ls -la')
      .newLine()
      .colorize('#6b7280')
      .type('total 24')
      .newLine()
      .type('drwxr-xr-x 8 user staff 256 Oct 15 14:30 .')
      .newLine()
      .type('drwxr-xr-x 3 user staff 96 Oct 15 14:20 ..')
      .newLine()
      .type('drw-r--r-- 1 user staff 1024 Oct 15 14:29 .git')
      .newLine()
      .type('-rw-r--r-- 1 user staff 123 Oct 15 14:25 .gitignore')
      .newLine()
      .type('-rw-r--r-- 1 user staff 2048 Oct 15 14:30 package.json')
      .newLine()
      .type('drwxr-xr-x 4 user staff 128 Oct 15 14:28 src')
      .newLine()
      .type('drwxr-xr-x 2 user staff 64 Oct 15 14:25 docs')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#22c55e')
      .type('user@dev-machine')
      .colorize('#3b82f6')
      .type(':')
      .colorize('#8b5cf6')
      .type('~/projects/my-app')
      .colorize('#f8fafc')
      .type('$ ')
      .pauseFor(1000)
      .type('git status')
      .newLine()
      .colorize('#fbbf24')
      .type('On branch ')
      .colorize('#22c55e')
      .type('main')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#3b82f6')
      .type("Your branch is up to date with 'origin/main'.")
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#22c55e')
      .type('Changes to be committed:')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#6b7280')
      .type(' (use "git reset HEAD <file>..." to unstage)')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#22c55e')
      .type('\tnew file: ')
      .colorize('#f8fafc')
      .type('src/components/Typewriter.tsx')
      .newLine()
      .colorize('#fbbf24')
      .type('\tmodified: ')
      .colorize('#f8fafc')
      .type('package.json')
      .newLine()
      .newLine()
      .colorize('#22c55e')
      .type('user@dev-machine')
      .colorize('#3b82f6')
      .type(':')
      .colorize('#8b5cf6')
      .type('~/projects/my-app')
      .colorize('#f8fafc')
      .type('$ ')
      .pauseFor(1200)
      .type('npm run build')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('> my-app@1.0.0 build')
      .newLine()
      .type('> webpack --mode=production')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('📦 Bundling assets...')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#22c55e')
      .type('✓ ')
      .colorize('#f8fafc')
      .type('Compiled successfully in 2.34s')
      .newLine()
      .colorize('#22c55e')
      .type('✓ ')
      .colorize('#f8fafc')
      .type('Asset optimization complete')
      .newLine()
      .colorize('#22c55e')
      .type('✓ ')
      .colorize('#f8fafc')
      .type('Bundle size: 1.2MB → 342KB (gzipped)')
      .newLine()
      .newLine()
      .colorize('#10b981')
      .type('🎉 Build completed successfully!')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#22c55e')
      .type('user@dev-machine')
      .colorize('#3b82f6')
      .type(':')
      .colorize('#8b5cf6')
      .type('~/projects/my-app')
      .colorize('#f8fafc')
      .type('$ ')
      .pauseFor(500)
      .type('echo "Ready for deployment! 🚀"')
      .newLine()
      .colorize('#fbbf24')
      .type('Ready for deployment! 🚀')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#22c55e')
      .type('user@dev-machine')
      .colorize('#3b82f6')
      .type(':')
      .colorize('#8b5cf6')
      .type('~/projects/my-app')
      .colorize('#f8fafc')
      .type('$ ')
      .start();
  }, []);

  // Simulate terminal activity
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
      setIsOnline((prev) => (Math.random() > 0.1 ? true : !prev));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
@keyframes blink {
0%, 50% { opacity: 1; }
51%, 100% { opacity: 0; }
}

          @keyframes terminal-glow {
            0%, 100% { 
              box-shadow: ${
                colorMode === 'dark'
                  ? '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)'
                  : '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)'
              }; 
            }
            50% { 
              box-shadow: ${
                colorMode === 'dark'
                  ? '0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3)'
                  : '0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.2)'
              }; 
            }
          }

          .terminal-window {
            animation: terminal-glow 4s ease-in-out infinite;
          }

          .status-indicator {
            animation: blink 2s infinite;
          }
        `}
      </style>

      <div
        className='terminal-window'
        style={{
          backgroundColor: '#0d1117',
          borderRadius: '12px',
          padding: '0',
          fontFamily: 'JetBrains Mono, Consolas, monospace',
          fontSize: '0.85rem',
          color: '#f0f6fc',
          lineHeight: '1.4',
          minHeight: '500px',
          border:
            colorMode === 'dark' ? '1px solid #30363d' : '1px solid var(--ifm-color-emphasis-300)',
          overflow: 'hidden',
          boxShadow:
            colorMode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.4)'
              : '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Terminal header */}
        <div
          style={{
            backgroundColor: '#21262d',
            padding: '12px 16px',
            borderBottom: '1px solid #30363d',
            borderRadius: '12px 12px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
          </div>
          <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>Terminal — bash</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              className={isOnline ? 'status-indicator' : ''}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: isOnline ? '#22c55e' : '#ef4444',
              }}
            />
            <span style={{ fontSize: '0.7rem', color: '#8b949e' }}>
              {isOnline ? 'Connected' : 'Offline'}
            </span>
          </div>
        </div>

        {/* Terminal content */}
        <div style={{ padding: '16px', whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>

        {/* Current command indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            backgroundColor: 'rgba(33, 38, 45, 0.8)',
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '0.7rem',
            color: '#8b949e',
            border: '1px solid #30363d',
          }}
        >
          Next: {commands[currentCommand]}
        </div>
      </div>
    </>
  );
};

export { TerminalExample };
export default TerminalExample;
