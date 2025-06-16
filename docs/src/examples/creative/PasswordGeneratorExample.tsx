import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const PasswordGeneratorExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isGenerating, setIsGenerating] = useState(false);
  const [strength, setStrength] = useState('Medium');
  const contentRef = React.useRef<HTMLDivElement>(null);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'block',
    cursorColor: '#dc2626',
  });

  useEffect(() => {
    const textColor = colorMode === 'dark' ? '#f1f5f9' : '#1e293b';
    const mutedColor = colorMode === 'dark' ? '#94a3b8' : '#64748b';
    const strongColor = colorMode === 'dark' ? '#e2e8f0' : '#111827';
    const passwordColor = colorMode === 'dark' ? '#fbbf24' : '#dc2626'; // Better contrast for password

    typewriter
      .colorize('#dc2626')
      .type('🔐 SECURE PASSWORD GENERATOR 🔐')
      .colorize(textColor)
      .newLine()
      .type('════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('⚙️ Configuration:')
      .colorize(textColor)
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Length: 16 characters')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Include uppercase (A-Z)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Include lowercase (a-z)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Include numbers (0-9)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Include symbols (!@#$%)')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('🔄 Generating password...')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize(mutedColor)
      .type('Step 1: ')
      .colorize(textColor)
      .type('Random seed: ')
      .colorize('#3b82f6')
      .type('x7B9')
      .pauseFor(300)
      .type('mK2e')
      .pauseFor(300)
      .type('9Qw!')
      .colorize(textColor)
      .newLine()
      .colorize(mutedColor)
      .type('Step 2: ')
      .colorize(textColor)
      .type('Entropy mixing...')
      .newLine()
      .colorize(mutedColor)
      .type('Step 3: ')
      .colorize(textColor)
      .type('Character selection...')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#dc2626')
      .type('🎯 Generated Password:')
      .colorize(textColor)
      .newLine()
      .colorize(textColor)
      .type('▶ ')
      .colorize(passwordColor)
      .type('P')
      .pauseFor(100)
      .type('4')
      .pauseFor(100)
      .type('s')
      .pauseFor(100)
      .type('S')
      .pauseFor(100)
      .type('w')
      .pauseFor(100)
      .type('0')
      .pauseFor(100)
      .type('r')
      .pauseFor(100)
      .type('D')
      .pauseFor(100)
      .type('!')
      .pauseFor(100)
      .type('X')
      .pauseFor(100)
      .type('q')
      .pauseFor(100)
      .type('8')
      .pauseFor(100)
      .type('z')
      .pauseFor(100)
      .type('M')
      .pauseFor(100)
      .type('#')
      .pauseFor(100)
      .type('9')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#059669')
      .type('📊 Security Analysis:')
      .colorize(textColor)
      .newLine()
      .colorize('#dc2626')
      .type('🔴 Strength: ')
      .colorize('#10b981')
      .type('VERY STRONG')
      .colorize(textColor)
      .newLine()
      .colorize('#3b82f6')
      .type('🧮 Entropy: ')
      .colorize(textColor)
      .type('95.2 bits')
      .newLine()
      .colorize('#8b5cf6')
      .type('⏱️ Crack Time: ')
      .colorize('#dc2626')
      .type('34 trillion years')
      .colorize(textColor)
      .newLine()
      .colorize('#f59e0b')
      .type('🔢 Combinations: ')
      .colorize(textColor)
      .type('2.8 × 10²³')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('💡 Security Tips:')
      .colorize(textColor)
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Never reuse this password')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Store in password manager')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize(textColor)
      .type('Enable 2FA when possible')
      .newLine()
      .colorize('#dc2626')
      .type('⚠️ ')
      .colorize(textColor)
      .type("Don't share via email/text")
      .pauseFor(2000)
      .start(); // Start the typewriter animation
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

  // Simulate password generation process
  useEffect(() => {
    const strengths = ['Weak', 'Medium', 'Strong', 'Very Strong'];
    const interval = setInterval(() => {
      setIsGenerating((prev) => !prev);
      setStrength(strengths[Math.floor(Math.random() * strengths.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
@keyframes pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.5; }
}

          .generating {
            animation: pulse 2s infinite;
          }

          .strength-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 5px;
            animation: pulse 1s infinite;
          }
        `}
      </style>
      <div
        style={{
          backgroundColor: colorMode === 'dark' ? '#0f172a' : '#f1f5f9',
          borderRadius: '12px',
          padding: '2rem',
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          fontSize: '0.9rem',
          color: colorMode === 'dark' ? '#f8fafc' : '#0f172a',
          lineHeight: '1.5',
          minHeight: '600px',
          border:
            colorMode === 'dark'
              ? '1px solid var(--ifm-color-emphasis-300)'
              : '2px solid var(--ifm-color-emphasis-400)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow:
            colorMode === 'dark'
              ? '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
              : '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)',
        }}
      >
        {/* Background pattern - Only in dark mode */}
        {colorMode === 'dark' && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25% 25%, #1e293b 0%, transparent 50%)',
              opacity: 0.3,
            }}
          />
        )}

        {/* Status indicators */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <div
            className={isGenerating ? 'generating' : ''}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              color: colorMode === 'dark' ? '#64748b' : '#374151',
            }}
          >
            <div
              className='strength-indicator'
              style={{
                backgroundColor:
                  strength === 'Weak'
                    ? '#ef4444'
                    : strength === 'Medium'
                    ? '#f59e0b'
                    : strength === 'Strong'
                    ? '#3b82f6'
                    : '#10b981',
              }}
            />
            Strength: {strength}
          </div>
        </div>

        {/* Main content */}
        <div 
          ref={contentRef}
          style={{ 
            position: 'relative', 
            zIndex: 1, 
            whiteSpace: 'pre-line',
            height: '400px',
            overflowY: 'auto',
            paddingRight: '8px',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export { PasswordGeneratorExample };
export default PasswordGeneratorExample;
