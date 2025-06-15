---
sidebar_position: 2
title: Voice Command Simulator
description: Interactive voice assistant simulation with speech recognition and command processing
tags: [voice, assistant, commands, AI, interaction]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { VoiceCommandExample } from '@site/src/examples/interactive';

<ExamplePage
component={VoiceCommandExample}
difficulty="Advanced"
description="Create an immersive voice assistant interface with speech recognition simulation, command processing, and intelligent responses. Perfect for AI demonstrations, voice UI prototypes, and interactive assistant showcases."
tags={["Voice interaction", "AI assistant", "Speech recognition", "Command processing", "Smart interface"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const VoiceCommandExample: React.FC = () => {
const [isListening, setIsListening] = useState(false);
const [currentCommand, setCurrentCommand] = useState('');
const [confidence, setConfidence] = useState(95);

const { typewriter, elements, cursor, keyframes } = useTypewriter({
typeSpeed: 35,
cursorStyle: 'block',
cursorColor: '#3b82f6',
});

const commands = [
'Set timer for 10 minutes',
'Play relaxing music',
'What\\'s the weather like?',
'Send a message to John',
'Turn off the lights',
];

useEffect(() => {
typewriter
.colorize('#3b82f6')
.type('🎤 VOICE ASSISTANT INTERFACE 🎤')
.colorize('#374151')
.newLine()
.type('═══════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#10b981')
.type('🔊 Assistant Status: ')
.colorize('#22c55e')
.type('ACTIVE')
.colorize('#374151')
.newLine()
.colorize('#6b7280')
.type('Language: English (US) | Model: Advanced AI v3.2')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#fbbf24')
.type('👂 Listening for commands...')
.colorize('#374151')
.newLine()
.type('────────────────────────────────────────')
.newLine()
.pauseFor(1500)
.colorize('#3b82f6')
.type('🗣️ User: ')
.colorize('#1f2937')
.type('"Hey Assistant, set a timer for 10 minutes"')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#8b5cf6')
.type('🔍 Processing Speech...')
.colorize('#374151')
.newLine()
.colorize('#6b7280')
.type('• Audio quality: Excellent (95% confidence)')
.newLine()
.type('• Background noise: Minimal')
.newLine()
.type('• Speech recognition: Complete')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#10b981')
.type('✅ Command Recognized:')
.colorize('#374151')
.newLine()
.colorize('#22c55e')
.type('→ Action: ')
.colorize('#1f2937')
.type('CREATE_TIMER')
.colorize('#374151')
.newLine()
.colorize('#22c55e')
.type('→ Duration: ')
.colorize('#1f2937')
.type('10 minutes')
.colorize('#374151')
.newLine()
.colorize('#22c55e')
.type('→ Confirmation: ')
.colorize('#1f2937')
.type('Required')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#3b82f6')
.type('🤖 Assistant: ')
.colorize('#374151')
.pauseFor(600)
.type('"Sure! I\\'ve set a timer for 10 minutes.')
.pauseFor(400)
.type(' I\\'ll notify you when it\\'s time.')
.pauseFor(300)
.type(' Is there anything else I can help you with?"')
.newLine()
.newLine()
.pauseFor(1500)
.colorize('#f59e0b')
.type('⏰ Timer Created:')
.colorize('#374151')
.newLine()
.colorize('#fbbf24')
.type('• Duration: 10:00 minutes')
.newLine()
.type('• Status: Running')
.newLine()
.type('• Remaining: 09:58')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#8b5cf6')
.type('📊 Session Statistics:')
.colorize('#374151')
.newLine()
.colorize('#6b7280')
.type('Commands processed: 1')
.newLine()
.type('Success rate: 100%')
.newLine()
.type('Average response time: 1.2s')
.newLine()
.type('User satisfaction: Excellent')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#ec4899')
.type('🎯 Available Commands:')
.colorize('#374151')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Timer & Alarms')
.colorize('#6b7280')
.type(' (set, cancel, check)')
.colorize('#374151')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Music Control')
.colorize('#6b7280')
.type(' (play, pause, skip)')
.colorize('#374151')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Weather Information')
.colorize('#6b7280')
.type(' (current, forecast)')
.colorize('#374151')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Smart Home')
.colorize('#6b7280')
.type(' (lights, temperature)')
.colorize('#374151')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Communication')
.colorize('#6b7280')
.type(' (calls, messages)')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#3b82f6')
.type('🎙️ Ready for next command...')
.start();
}, []);

// Simulate voice activity
useEffect(() => {
const interval = setInterval(() => {
setIsListening(prev => !prev);
setCurrentCommand(commands[Math.floor(Math.random() * commands.length)]);
setConfidence(85 + Math.floor(Math.random() \* 15));
}, 3500);

    return () => clearInterval(interval);

}, []);

return (
<>

<style>
{keyframes}
{\`
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
        \`}
      </style>

      <div
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#374151',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #3b82f6',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
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
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
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
          }}
        >
          {isListening && [1, 2, 3, 4, 5, 6, 7].map(i => (
            <div
              key={i}
              className="voice-wave"
              style={{
                width: '4px',
                backgroundColor: '#3b82f6',
                borderRadius: '2px',
                animationDelay: \`\${i * 0.1}s\`,
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
            color: '#6b7280',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>Confidence:</span>
          <span style={{ color: confidence > 90 ? '#22c55e' : confidence > 70 ? '#fbbf24' : '#ef4444' }}>
            {confidence}%
          </span>
        </div>

        {/* Main content */}
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>

);
};

export default VoiceCommandExample;`}
instructions={[
"Implement realistic speech recognition with confidence scoring",
"Design voice activity detection with visual feedback indicators",
"Add comprehensive command processing and response generation",
"Include session statistics and performance monitoring",
"Create immersive voice wave visualizations and microphone controls"
]}
/>

## Use Cases

- **AI Assistant Demos**: Showcase voice interface capabilities and natural language processing
- **Smart Home Interfaces**: Voice-controlled home automation and IoT device management
- **Accessibility Tools**: Voice navigation and control systems for disabled users
- **Automotive Systems**: In-car voice assistants and hands-free operation interfaces
- **Customer Service**: Voice-powered support systems and automated assistance platforms
