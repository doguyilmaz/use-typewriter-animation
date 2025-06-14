# Voice Command Simulator Demo

This example creates an interactive voice assistant interface with speech recognition simulation, command processing, and responsive feedback.

## Live Demo

```tsx live
function VoiceCommandSimulatorDemo() {
  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState(0);
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
    enableKeyboardControls: true,
    autoKeyboardHandling: true,
  });

  useEffect(() => {
    typewriter
      .colorize('#3b82f6')
      .type('🎤 VOICE COMMAND SIMULATOR 🎤')
      .colorize('#374151')
      .newLine()
      .type('●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#10b981')
      .type('✓ Voice Assistant: ')
      .colorize('#374151')
      .type('ONLINE')
      .newLine()
      .colorize('#10b981')
      .type('✓ Microphone: ')
      .colorize('#374151')
      .type('Connected')
      .newLine()
      .colorize('#10b981')
      .type('✓ Speech Engine: ')
      .colorize('#374151')
      .type('Ready')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('🔍 Listening for: "Hey Assistant"')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .colorize('#3b82f6')
      .type('🎯 Wake word detected!')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Confidence: 95.7%')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#8b5cf6')
      .type('🎤 Listening... (speak now)')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#059669')
      .type('📝 Transcription:')
      .colorize('#374151')
      .newLine()
      .colorize('#1f2937')
      .type('"What\'s the weather like today?"')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('🧠 Processing command...')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('• Intent: weather_query')
      .newLine()
      .colorize('#6b7280')
      .type('• Entity: time = "today"')
      .newLine()
      .colorize('#6b7280')
      .type('• Confidence: 92.3%')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .colorize('#10b981')
      .type('🤖 Assistant Response:')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('"Today it\'s 22°C and partly cloudy.')
      .newLine()
      .type('Perfect weather for a walk!"')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#8b5cf6')
      .type('⌨️  Keyboard Controls:')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('• Space: Start/Stop listening')
      .newLine()
      .colorize('#6b7280')
      .type('• R: Reset conversation')
      .newLine()
      .colorize('#6b7280')
      .type('• Esc: Skip to end')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('🔄 Ready for next command...')
      .colorize('#374151')
      .start();
  }, []);

  // Simulate voice commands
  const commands = [
    'What\'s the time?',
    'Play some music',
    'Set a timer for 5 minutes',
    'What\'s the weather like?',
    'Tell me a joke',
    'Turn off the lights'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsListening(prev => !prev);
      setCurrentCommand(commands[Math.floor(Math.random() * commands.length)]);
      setConfidenceLevel(Math.floor(Math.random() * 30) + 70); // 70-100%
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes voice-pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          
          @keyframes listening-wave {
            0%, 100% { height: 20px; }
            25% { height: 40px; }
            50% { height: 60px; }
            75% { height: 35px; }
          }
          
          @keyframes confidence-bar {
            0% { width: 0%; }
            100% { width: var(--confidence-width); }
          }
          
          .listening-indicator {
            display: flex;
            align-items: center;
            gap: 4px;
            height: 60px;
          }
          
          .wave-bar {
            width: 4px;
            background: linear-gradient(to top, #3b82f6, #8b5cf6);
            border-radius: 2px;
            animation: listening-wave 1s ease-in-out infinite;
          }
          
          .wave-bar:nth-child(2) { animation-delay: 0.1s; }
          .wave-bar:nth-child(3) { animation-delay: 0.2s; }
          .wave-bar:nth-child(4) { animation-delay: 0.3s; }
          .wave-bar:nth-child(5) { animation-delay: 0.4s; }
        `}
      </style>
      <div
        style={{
          fontFamily: '"Inter", "system-ui", sans-serif',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          padding: '2.5rem',
          backgroundColor: '#f8fafc',
          border: '3px solid #3b82f6',
          borderRadius: '20px',
          minHeight: '400px',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'white',
            padding: '12px 16px',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span
            style={{
              fontSize: '1.5rem',
              animation: isListening ? 'voice-pulse 1s ease-in-out infinite' : 'none',
            }}
          >
            {isListening ? '🎤' : '🔇'}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>
              {isListening ? 'Listening' : 'Idle'}
            </span>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#3b82f6' }}>
              {confidenceLevel}%
            </span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '20px',
            backgroundColor: isListening ? '#10b981' : '#6b7280',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
          }}
        >
          {isListening ? '🟢 ACTIVE' : '⚫ STANDBY'}
        </div>

        {isListening && (
          <div
            className="listening-indicator"
            style={{
              position: 'absolute',
              top: '120px',
              right: '20px',
            }}
          >
            <div className="wave-bar" style={{ height: '20px' }} />
            <div className="wave-bar" style={{ height: '30px' }} />
            <div className="wave-bar" style={{ height: '40px' }} />
            <div className="wave-bar" style={{ height: '30px' }} />
            <div className="wave-bar" style={{ height: '20px' }} />
          </div>
        )}

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            color: '#374151',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ fontWeight: '600', marginBottom: '4px' }}>
            Latest Command: "{currentCommand}"
          </div>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: '#e5e7eb',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundColor: '#3b82f6',
                width: `${confidenceLevel}%`,
                transition: 'width 0.5s ease',
              }}
            />
          </div>
        </div>

        <div style={{ color: '#374151', whiteSpace: 'pre-wrap' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Interactive Controls**: Full keyboard control integration with the typewriter
- **Voice Simulation**: Real-time listening and command processing simulation
- **Speech Recognition**: Wake word detection and command transcription
- **Intent Processing**: Natural language understanding simulation
- **Visual Feedback**: Animated microphone states and confidence levels
- **Command History**: Latest voice command display with confidence bars
- **Multi-modal Interface**: Voice + keyboard interaction patterns

## Interactive Elements

1. **Keyboard Controls**: Space, R, and Esc key functionality
2. **Voice States**: Listening, processing, and responding phases
3. **Confidence Metrics**: Real-time accuracy measurements
4. **Command Processing**: Intent recognition and entity extraction
5. **Visual Indicators**: Animated waveforms and status lights

## Voice Interface Features

- **Wake Word Detection**: "Hey Assistant" activation simulation
- **Speech Transcription**: Real-time voice-to-text conversion
- **Intent Recognition**: Command understanding and classification
- **Response Generation**: Contextual assistant replies
- **Error Handling**: Confidence thresholds and fallbacks

## Interactive Design

- **Accessibility**: Full keyboard navigation support
- **Visual Feedback**: Clear state indicators and animations
- **Real-time Updates**: Live confidence and command displays
- **Multi-state Interface**: Different modes for different interaction phases

## Use Cases

- **Voice Assistant Demos**: Showcase voice interface capabilities
- **Accessibility Tools**: Voice-controlled application interfaces
- **Smart Home Interfaces**: Voice command control systems
- **AI Demonstrations**: Natural language processing showcases
- **Interactive Tutorials**: Teach voice interface design patterns