import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const GlitchEffectExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'block',
    cursorColor: '#00ff41',
  });

  useEffect(() => {
    typewriter
      .colorize('#00ff41')
      .type('SYSTEM INITIALIZING...')
      .colorize('#ffffff')
      .newLine()
      .pauseFor(1000)
      .colorize('#ff0040')
      .type('ERROR: ')
      .colorize('#ffffff')
      .type('C0RRuPt3D_d4t4_d3t3ct3d')
      .newLine()
      .pauseFor(800)
      .colorize('#ffff00')
      .type('▓▓▓ GLITCH DETECTED ▓▓▓')
      .colorize('#ffffff')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#ff0040')
      .type('͎͎͎M̸̸̸E̸̸̸M̸̸̸O̸̸̸R̸̸̸Y̸̸̸ ̸̸̸L̸̸̸E̸̸̸A̸̸̸K̸̸̸')
      .colorize('#ffffff')
      .newLine()
      .colorize('#00ffff')
      .type('01001000 01100101 01101100 01110000')
      .colorize('#ffffff')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#ff0040')
      .type('ሃኦሌሎ ዎዐዪልዳ!')
      .pauseFor(300)
      .deleteLetters(12)
      .colorize('#ffff00')
      .type('H3LL0 W0RLD!')
      .pauseFor(300)
      .deleteLetters(12)
      .colorize('#00ff41')
      .type('HELLO WORLD!')
      .colorize('#ffffff')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#00ffff')
      .type('System recovered... ')
      .colorize('#00ff41')
      .type('█')
      .pauseFor(200)
      .type('█')
      .pauseFor(200)
      .type('█')
      .pauseFor(200)
      .type('█')
      .pauseFor(200)
      .type('█')
      .colorize('#ffffff')
      .type(' 100%')
      .newLine()
      .colorize('#00ff41')
      .type('> Ready for input_')
      .colorize('#ffffff')
      .start();
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes glitch-bg {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 50% 100%; }
            75% { background-position: 0% 0%; }
          }
          
          @keyframes scanlines {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          
          .glitch-container {
            position: relative;
            overflow: hidden;
          }
          
          .glitch-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff41, transparent);
            animation: scanlines 3s linear infinite;
            opacity: 0.7;
          }
          
          .glitch-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 65, 0.03) 2px,
                rgba(0, 255, 65, 0.03) 4px
              );
            pointer-events: none;
          }
        `}
      </style>
      <div
        className="glitch-container"
        style={{
          fontFamily: '"Courier New", "SF Mono", monospace',
          fontSize: '0.95rem',
          lineHeight: '1.4',
          padding: '2rem',
          backgroundColor: '#0a0a0a',
          border: '2px solid #00ff41',
          borderRadius: '8px',
          minHeight: '280px',
          color: '#ffffff',
          background: 'linear-gradient(45deg, #0a0a0a, #1a0a1a, #0a1a0a)',
          backgroundSize: '400% 400%',
          animation: 'glitch-bg 4s ease infinite',
          boxShadow: '0 0 30px rgba(0, 255, 65, 0.3), inset 0 0 30px rgba(0, 255, 65, 0.1)',
        }}
      >
        <div
          style={{
            marginBottom: '1rem',
            fontSize: '0.8rem',
            color: '#00ff41',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          ⚠ GLITCH.EXE RUNNING
        </div>
        <div style={{ whiteSpace: 'pre-wrap', fontWeight: '500' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export { GlitchEffectExample };
export default GlitchEffectExample;