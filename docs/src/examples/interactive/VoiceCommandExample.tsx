import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const VoiceCommandExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [confidence, setConfidence] = useState(95);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 35,
    cursorStyle: 'block',
    cursorColor: colorMode === 'dark' ? '#60a5fa' : '#3b82f6',
  });

  const commands = [
    'Set timer for 10 minutes',
    'Play relaxing music',
    "What's the weather like?",
    'Send a message to John',
    'Turn off the lights',
  ];

  useEffect(() => {
    const textColor = colorMode === 'dark' ? '#e5e7eb' : '#374151';
    const mutedColor = colorMode === 'dark' ? '#9ca3af' : '#6b7280';
    const strongColor = colorMode === 'dark' ? '#f3f4f6' : '#1f2937';

    typewriter
      .colorize('#3b82f6')
      .type('🎤 VOICE ASSISTANT INTERFACE 🎤')
      .colorize(textColor)
      .newLine()
      .type('═══════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#10b981')
      .type('🔊 Assistant Status: ')
      .colorize('#22c55e')
      .type('ACTIVE')
      .colorize(textColor)
      .newLine()
      .colorize(mutedColor)
      .type('Language: English (US) | Model: Advanced AI v3.2')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('👂 Listening for commands...')
      .colorize(textColor)
      .newLine()
      .type('────────────────────────────────────────')
      .newLine()
      .pauseFor(1500)
      .colorize('#3b82f6')
      .type('🗣️ User: ')
      .colorize(strongColor)
      .type('"Hey Assistant, set a timer for 10 minutes"')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#8b5cf6')
      .type('🔍 Processing Speech...')
      .colorize(textColor)
      .newLine()
      .colorize(mutedColor)
      .type('• Audio quality: Excellent (95% confidence)')
      .newLine()
      .type('• Background noise: Minimal')
      .newLine()
      .type('• Speech recognition: Complete')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('✅ Command Recognized:')
      .colorize(textColor)
      .newLine()
      .colorize('#22c55e')
      .type('→ Action: ')
      .colorize(strongColor)
      .type('CREATE_TIMER')
      .colorize(textColor)
      .newLine()
      .colorize('#22c55e')
      .type('→ Duration: ')
      .colorize(strongColor)
      .type('10 minutes')
      .colorize(textColor)
      .newLine()
      .colorize('#22c55e')
      .type('→ Confirmation: ')
      .colorize(strongColor)
      .type('Required')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#3b82f6')
      .type('🤖 Assistant: ')
      .colorize(textColor)
      .pauseFor(600)
      .type('"Sure! I\'ve set a timer for 10 minutes.')
      .pauseFor(400)
      .type(" I'll notify you when it's time.")
      .pauseFor(300)
      .type(' Is there anything else I can help you with?"')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .colorize('#f59e0b')
      .type('⏰ Timer Created:')
      .colorize(textColor)
      .newLine()
      .colorize('#fbbf24')
      .type('• Duration: 10:00 minutes')
      .newLine()
      .type('• Status: Running')
      .newLine()
      .type('• Remaining: 09:58')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#8b5cf6')
      .type('📊 Session Statistics:')
      .colorize(textColor)
      .newLine()
      .colorize(mutedColor)
      .type('Commands processed: 1')
      .newLine()
      .type('Success rate: 100%')
      .newLine()
      .type('Average response time: 1.2s')
      .newLine()
      .type('User satisfaction: Excellent')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#ec4899')
      .type('🎯 Available Commands:')
      .colorize(textColor)
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize(textColor)
      .type('Timer & Alarms')
      .colorize(mutedColor)
      .type(' (set, cancel, check)')
      .colorize(textColor)
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize(textColor)
      .type('Music Control')
      .colorize(mutedColor)
      .type(' (play, pause, skip)')
      .colorize(textColor)
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize(textColor)
      .type('Weather Information')
      .colorize(mutedColor)
      .type(' (current, forecast)')
      .colorize(textColor)
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize(textColor)
      .type('Smart Home')
      .colorize(mutedColor)
      .type(' (lights, temperature)')
      .colorize(textColor)
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize(textColor)
      .type('Communication')
      .colorize(mutedColor)
      .type(' (calls, messages)')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#3b82f6')
      .type('🎙️ Ready for next command...')
      .start();
  }, [colorMode]);

  // Simulate voice activity
  useEffect(() => {
    const interval = setInterval(() => {
      setIsListening((prev) => !prev);
      setCurrentCommand(commands[Math.floor(Math.random() * commands.length)]);
      setConfidence(85 + Math.floor(Math.random() * 15));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes listening {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
          }

          @keyframes processing {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes voice-wave {
            0%, 100% { height: 4px; }
            25% { height: 20px; }
            50% { height: 12px; }
            75% { height: 16px; }
          }

          .listening-indicator {
            animation: listening 2s ease-in-out infinite;
          }

          .processing-icon {
            animation: processing 2s linear infinite;
          }

          .voice-wave {
            animation: voice-wave 1s ease-in-out infinite;
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          borderRadius: '16px',
          padding: '2.5rem',
          paddingTop: '4rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '500px',
          border: colorMode === 'dark' ? '2px solid var(--ifm-color-primary)' : '2px solid #3b82f6',
          position: 'relative',
          background:
            colorMode === 'dark'
              ? 'linear-gradient(135deg, var(--ifm-background-surface-color) 0%, rgba(59, 130, 246, 0.05) 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          boxShadow:
            colorMode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.15)'
              : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 20px rgba(59, 130, 246, 0.1)',
        }}
      >
        {/* Microphone indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '60px',
            height: '60px',
            backgroundColor: isListening ? '#22c55e' : '#6b7280',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: 'white',
            zIndex: 10,
          }}
          className={isListening ? 'listening-indicator' : ''}
        >
          🎤
        </div>

        {/* Status indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor:
              colorMode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isListening ? '#22c55e' : '#fbbf24',
            }}
            className={isListening ? 'listening-indicator' : ''}
          />
          <span>{isListening ? 'Listening' : 'Processing'}</span>
        </div>

        {/* Voice wave visualization */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '3px',
            alignItems: 'end',
            height: '30px',
            zIndex: 10,
          }}
        >
          {isListening &&
            [1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className='voice-wave'
                style={{
                  width: '4px',
                  backgroundColor: colorMode === 'dark' ? '#60a5fa' : '#3b82f6',
                  borderRadius: '2px',
                  animationDelay: `${i * 0.1}s`,
                  minHeight: '4px',
                }}
              />
            ))}
        </div>

        {/* Confidence indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            fontSize: '0.8rem',
            color: colorMode === 'dark' ? '#9ca3af' : '#6b7280',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10,
          }}
        >
          <span>Confidence:</span>
          <span
            style={{ color: confidence > 90 ? '#22c55e' : confidence > 70 ? '#fbbf24' : '#ef4444' }}
          >
            {confidence}%
          </span>
        </div>

        {/* Main content */}
        <div style={{ whiteSpace: 'pre-line', position: 'relative', zIndex: 1 }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export { VoiceCommandExample };
export default VoiceCommandExample;
