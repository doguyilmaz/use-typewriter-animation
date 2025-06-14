import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

// Comprehensive Basic Example
export const ComprehensiveBasicExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      typeSpeed: 50,
      loop: false,
      cursorStyle: 'bar',
      cursorBlinkSpeed: 500,
      cursorColor: 'currentColor',
      enableCursor: true,
      ariaLabel: 'Comprehensive typewriter animation demonstration',
      ariaLive: 'polite',
      respectReducedMotion: true,
      announceCompletion: true,
    });

  useEffect(() => {
    typewriter
      .type('Hello, ', {
        screenReaderText: 'Hello,',
        announceCompletion: false,
      })
      .colorize('#ef4444')
      .type('this will be red.', {
        speed: 80,
        screenReaderText: 'this will be red.',
        announceCompletion: false,
      })
      .pauseFor(500)
      .deleteLetters(5)
      .colorize('#3b82f6')
      .type(" Now it's blue!", {
        speed: 100,
        screenReaderText: "Now it's blue!",
        announceCompletion: true,
      })
      .pauseFor(800)
      .type('\n\n✨ This example showcases:')
      .pauseFor(400)
      .type('\n• Text colorization')
      .pauseFor(300)
      .type('\n• Delete operations')
      .pauseFor(300)
      .type('\n• Accessibility features')
      .pauseFor(300)
      .type('\n• Keyboard controls')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '1.5rem',
          border: '2px solid var(--ifm-color-emphasis-300)',
          borderRadius: '12px',
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-color-content)',
          minHeight: '280px',
          height: '280px',
          fontSize: '18px',
          lineHeight: '1.6',
          outline: 'none',
          whiteSpace: 'pre-line',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
};

// Multi-line Poetry Example
export const MultiLinePoetryExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#db2777',
  });

  useEffect(() => {
    typewriter
      .colorize('#db2777')
      .type('✨ Code & Dreams ✨')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .type('In lines of code we weave our dreams,')
      .newLine()
      .pauseFor(600)
      .type('Where logic meets creative schemes.')
      .newLine()
      .newLine()
      .pauseFor(400)
      .colorize('#7c3aed')
      .type('Functions dance and variables sing,')
      .newLine()
      .colorize('#374151')
      .pauseFor(600)
      .colorize('#059669')
      .type('While loops and arrays take wing.')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .type('Each ')
      .colorize('#dc2626')
      .type('semicolon')
      .colorize('#374151')
      .type(' a pause in thought,')
      .newLine()
      .pauseFor(500)
      .type('Each ')
      .colorize('#0ea5e9')
      .type('function')
      .colorize('#374151')
      .type(' a lesson taught.')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .type('From ')
      .colorize('#f59e0b')
      .type('bugs')
      .colorize('#374151')
      .type(' we learn to ')
      .colorize('#10b981')
      .type('grow')
      .colorize('#374151')
      .type(',')
      .newLine()
      .pauseFor(700)
      .type('In every error, ')
      .colorize('#8b5cf6')
      .type('wisdom')
      .colorize('#374151')
      .type(' we sow.')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .type('        ')
      .colorize('#6b7280')
      .type("~ A Developer's Heart")
      .colorize('#374151')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Crimson Text", "Georgia", serif',
          fontSize: '1.15rem',
          lineHeight: '2',
          padding: '3rem',
          backgroundColor: '#fdf2f8',
          border: '3px solid #f9a8d4',
          borderRadius: '20px',
          minHeight: '300px',
          boxShadow: '0 20px 40px rgba(219, 39, 119, 0.1)',
          position: 'relative',
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: '#db2777',
            borderRadius: '2px',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '20px',
            fontSize: '2rem',
            color: '#f9a8d4',
            opacity: '0.3',
          }}
        >
          "
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '20px',
            fontSize: '2rem',
            color: '#f9a8d4',
            opacity: '0.3',
            transform: 'rotate(180deg)',
          }}
        >
          "
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            color: '#374151',
            whiteSpace: 'pre-wrap',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Loading States Example
export const LoadingStatesExample: React.FC = () => {
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
        .type('\n\nYour typewriter is now ready! ✨')
        .start();
    };

    runLoadingSequence();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        className='loading-example-container'
        style={{
          width: '100%',
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          padding: '2rem',
          boxSizing: 'border-box',
        }}
      >
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

        {/* Terminal */}
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
              width: '100%',
              boxSizing: 'border-box',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {elements}
            {cursor}
          </div>
        </div>
      </div>
    </>
  );
};

// Storytelling Demo Example
export const StorytellingDemoExample: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#ffffff',
    cursorBlinkSpeed: 600,
  });

  const scenes = [
    {
      title: 'Dawn',
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      textColor: '#1f2937',
      containerBg: 'rgba(255, 255, 255, 0.95)',
    },
    {
      title: 'Day',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      textColor: '#1f2937',
      containerBg: 'rgba(255, 255, 255, 0.95)',
    },
    {
      title: 'Night',
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      textColor: '#f9fafb',
      containerBg: 'rgba(31, 41, 55, 0.95)',
    },
  ];

  useEffect(() => {
    const tellStory = async () => {
      // Scene 1: Dawn
      setCurrentScene(0);
      typewriter
        .colorize('#e67e22')
        .type('🌅 Chapter 1: The Beginning')
        .pauseFor(1000)
        .type('\n\n')
        .colorize('#2d3748')
        .type('Once upon a time, in a digital realm far beyond the screen, ')
        .colorize('#e74c3c')
        .type('a young developer')
        .colorize('#2d3748')
        .type(' discovered the power of typewriter animations...')
        .pauseFor(2000)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Scene 2: Day
      setCurrentScene(1);
      typewriter
        .colorize('#0984e3')
        .type('☀️ Chapter 2: The Journey')
        .pauseFor(1000)
        .type('\n\n')
        .colorize('#ffffff')
        .type('Armed with ')
        .colorize('#00b894')
        .type('React')
        .colorize('#ffffff')
        .type(' and ')
        .colorize('#6c5ce7')
        .type('TypeScript')
        .colorize('#ffffff')
        .type(', our hero ventured forth to create something ')
        .colorize('#fdcb6e')
        .type('magical')
        .colorize('#ffffff')
        .type('.')
        .pauseFor(500)
        .type('\n\nThey learned about accessibility, performance, and elegance.')
        .pauseFor(2500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 6000));

      // Scene 3: Night
      setCurrentScene(2);
      typewriter
        .colorize('#74b9ff')
        .type('🌟 Epilogue: The Legacy')
        .pauseFor(1000)
        .type('\n\n')
        .colorize('#ffffff')
        .type("Under the starlit sky, the developer's work lived on.")
        .pauseFor(800)
        .type('\n\nTheir typewriter library became a beacon of ')
        .colorize('#00b894')
        .type('accessibility')
        .colorize('#ffffff')
        .type(', ')
        .colorize('#fdcb6e')
        .type('performance')
        .colorize('#ffffff')
        .type(', and ')
        .colorize('#fd79a8')
        .type('beauty')
        .colorize('#ffffff')
        .type('.')
        .pauseFor(1000)
        .type('\n\nAnd they all typed happily ever after... ')
        .colorize('#e17055')
        .type('✨')
        .pauseFor(1500)
        .type('\n\n')
        .colorize('#ddd')
        .type('The End.')
        .start();
    };

    tellStory();
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        `}
      </style>
      <div
        style={{
          minHeight: '500px',
          width: '100%',
          background: scenes[currentScene]?.background || scenes[0].background,
          transition: 'all 2s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
          boxSizing: 'border-box',
        }}
      >
        {/* Animated background elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            animation: currentScene === 1 ? 'float 6s ease-in-out infinite' : 'none',
          }}
        />

        {/* Scene indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '8px 16px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {scenes[currentScene]?.title || 'Loading...'}
        </div>

        {/* Main story container */}
        <div
          style={{
            maxWidth: '100%',
            width: '100%',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              backgroundColor: scenes[currentScene]?.containerBg || 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '3rem',
              minHeight: '350px',
              height: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              overflow: 'auto',
            }}
          >
            <div
              style={{
                fontSize: '1.5rem',
                lineHeight: '1.8',
                color: scenes[currentScene]?.textColor || '#ffffff',
                whiteSpace: 'pre-wrap',
                textAlign: 'left',
                width: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              {elements}
              {cursor}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
          }}
        >
          {scenes.map((_, index) => (
            <div
              key={index}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor:
                  index <= currentScene ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Chat Simulation Example
export const ChatSimulationExample: React.FC = () => {
  const [onlineUsers, setOnlineUsers] = useState(3);
  const [currentTyper, setCurrentTyper] = useState('Alex');
  const [messageCount, setMessageCount] = useState(0);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 35,
    cursorStyle: 'bar',
    cursorColor: '#00d4aa',
  });

  useEffect(() => {
    typewriter
      .colorize('#00d4aa')
      .type('💬 Team Chat - Project Alpha')
      .colorize('#2d3748')
      .newLine()
      .type('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#718096')
      .type('Sarah joined the channel')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3182ce')
      .type('Sarah')
      .colorize('#718096')
      .type(' - 2:34 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Hey team! Just pushed the latest UI updates 🚀')
      .newLine()
      .type('The new color scheme looks amazing!')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#e53e3e')
      .type('Alex')
      .colorize('#718096')
      .type(' - 2:35 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Awesome work Sarah! ')
      .colorize('#f6ad55')
      .type('👏')
      .colorize('#2d3748')
      .newLine()
      .type('I tested it on mobile - everything looks perfect')
      .newLine()
      .type('Should we schedule the deployment for tomorrow?')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#718096')
      .type('Mike is typing...')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .deleteLetters(17)
      .colorize('#805ad5')
      .type('Mike')
      .colorize('#718096')
      .type(' - 2:36 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Perfect timing! ')
      .colorize('#f6ad55')
      .type('⚡')
      .colorize('#2d3748')
      .newLine()
      .type('I just finished the API optimization')
      .newLine()
      .type('Performance improved by 40% - check this out:')
      .newLine()
      .newLine()
      .colorize('#2d3748')
      .type('┌─────────────────────────────────────┐')
      .newLine()
      .type('│ ')
      .colorize('#38a169')
      .type('✓ API Response Time: 120ms → 72ms  ')
      .colorize('#2d3748')
      .type('│')
      .newLine()
      .type('│ ')
      .colorize('#38a169')
      .type('✓ Memory Usage: 85MB → 51MB       ')
      .colorize('#2d3748')
      .type('│')
      .newLine()
      .type('│ ')
      .colorize('#38a169')
      .type('✓ Bundle Size: 2.1MB → 1.3MB      ')
      .colorize('#2d3748')
      .type('│')
      .newLine()
      .type('└─────────────────────────────────────┘')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#3182ce')
      .type('Sarah')
      .colorize('#718096')
      .type(' - 2:38 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Holy moly! ')
      .colorize('#f6ad55')
      .type('🤯')
      .colorize('#2d3748')
      .type(" That's incredible Mike!")
      .newLine()
      .type('How did you manage such huge improvements?')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#805ad5')
      .type('Mike')
      .colorize('#718096')
      .type(' - 2:39 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Mainly three things:')
      .newLine()
      .type('1. ')
      .colorize('#f6ad55')
      .type('🔄')
      .colorize('#2d3748')
      .type(' Implemented Redis caching for frequent queries')
      .newLine()
      .type('2. ')
      .colorize('#f6ad55')
      .type('⚡')
      .colorize('#2d3748')
      .type(' Switched to lazy loading for components')
      .newLine()
      .type('3. ')
      .colorize('#f6ad55')
      .type('🗜️')
      .colorize('#2d3748')
      .type(' Optimized database indexes')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#e53e3e')
      .type('Alex')
      .colorize('#718096')
      .type(' - 2:40 PM')
      .colorize('#2d3748')
      .newLine()
      .type('This is going to make our users SO happy ')
      .colorize('#f6ad55')
      .type('😊')
      .colorize('#2d3748')
      .newLine()
      .type("Let's definitely ship this tomorrow!")
      .newLine()
      .type("I'll update the deployment docs")
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#718096')
      .type('Emma joined the channel')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .colorize('#d69e2e')
      .type('Emma')
      .colorize('#718096')
      .type(' - 2:41 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Hey everyone! ')
      .colorize('#f6ad55')
      .type('👋')
      .colorize('#2d3748')
      .newLine()
      .type('Just saw the performance metrics - AMAZING work team!')
      .newLine()
      .type('Marketing is going to love these numbers ')
      .colorize('#f6ad55')
      .type('📈')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#3182ce')
      .type('Sarah')
      .colorize('#718096')
      .type(' - 2:42 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Thanks Emma! ')
      .colorize('#f6ad55')
      .type('🎉')
      .colorize('#2d3748')
      .newLine()
      .type('Should we schedule a demo for the stakeholders?')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#718096')
      .type('Alex is typing...')
      .start();
  }, []);

  // Simulate chat activity
  useEffect(() => {
    const users = ['Sarah', 'Alex', 'Mike', 'Emma', 'David'];
    const interval = setInterval(() => {
      setOnlineUsers(Math.floor(Math.random() * 3) + 3);
      setCurrentTyper(users[Math.floor(Math.random() * users.length)]);
      setMessageCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes message-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 170, 0.2); }
            50% { box-shadow: 0 0 40px rgba(0, 212, 170, 0.4); }
          }
          
          @keyframes typing-dots {
            0%, 20% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          
          @keyframes pulse-online {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          
          .chat-container {
            animation: message-glow 4s ease-in-out infinite;
          }
          
          .typing-indicator {
            animation: typing-dots 1.5s ease-in-out infinite;
          }
          
          .online-indicator {
            animation: pulse-online 2s ease-in-out infinite;
          }
        `}
      </style>
      <div
        className='chat-container'
        style={{
          backgroundColor: '#ffffff',
          color: '#2d3748',
          fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", sans-serif',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          padding: '0',
          borderRadius: '16px',
          minHeight: '400px',
          maxHeight: '500px',
          overflowY: 'auto',
          border: '2px solid #00d4aa',
          position: 'relative',
          background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            backgroundColor: '#00d4aa',
            color: '#ffffff',
            padding: '16px 20px',
            borderRadius: '14px 14px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '1.2rem' }}>💬</div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '1rem' }}>Team Alpha</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{onlineUsers} members online</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div
              className='online-indicator'
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#38a169',
                borderRadius: '50%',
              }}
            />
            <div style={{ fontSize: '0.8rem' }}>Active</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div
          style={{
            padding: '20px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {elements}
          {cursor}
        </div>

        {/* Chat Footer */}
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: '#f7fafc',
            borderTop: '1px solid #e2e8f0',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0 0 14px 14px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#718096' }}>{currentTyper} is typing...</div>
            <div
              className='typing-indicator'
              style={{
                display: 'flex',
                gap: '3px',
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#cbd5e0',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#cbd5e0',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#cbd5e0',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#718096' }}>{messageCount} new messages</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#3182ce',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#e53e3e',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#805ad5',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#d69e2e',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Code Editor Example
export const CodeEditorExample: React.FC = () => {
  const [editorTheme, setEditorTheme] = useState('VS Code Dark');
  const [currentLine, setCurrentLine] = useState(1);
  const [activeFile, setActiveFile] = useState('App.tsx');

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 45,
    cursorStyle: 'bar',
    cursorColor: '#007acc',
  });

  useEffect(() => {
    typewriter
      .colorize('#6a9955')
      .type('// Real-time React application with TypeScript')
      .colorize('#d4d4d4')
      .newLine()
      .colorize('#c586c0')
      .type('import')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#9cdcfe')
      .type('React')
      .colorize('#d4d4d4')
      .type(', { ')
      .colorize('#9cdcfe')
      .type('useState')
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('useEffect')
      .colorize('#d4d4d4')
      .type(' } ')
      .colorize('#c586c0')
      .type('from')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#ce9178')
      .type("'react'")
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .colorize('#c586c0')
      .type('import')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#9cdcfe')
      .type('axios')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#c586c0')
      .type('from')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#ce9178')
      .type("'axios'")
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .newLine()
      .colorize('#6a9955')
      .type('// Interface definition for type safety')
      .colorize('#d4d4d4')
      .newLine()
      .colorize('#569cd6')
      .type('interface')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#4ec9b0')
      .type('User')
      .colorize('#d4d4d4')
      .type(' {')
      .newLine()
      .type('  ')
      .colorize('#9cdcfe')
      .type('id')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('number')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('  ')
      .colorize('#9cdcfe')
      .type('name')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('string')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('  ')
      .colorize('#9cdcfe')
      .type('email')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('string')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('  ')
      .colorize('#9cdcfe')
      .type('isActive')
      .colorize('#569cd6')
      .type('?')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('boolean')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('}')
      .newLine()
      .newLine()
      .colorize('#6a9955')
      .type('// Functional component with hooks')
      .colorize('#d4d4d4')
      .newLine()
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#dcdcaa')
      .type('UserDashboard')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#4ec9b0')
      .type('React')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#4ec9b0')
      .type('FC')
      .colorize('#d4d4d4')
      .type(' = () => {')
      .newLine()
      .type('  ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' [')
      .colorize('#9cdcfe')
      .type('users')
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('setUsers')
      .colorize('#d4d4d4')
      .type('] = ')
      .colorize('#dcdcaa')
      .type('useState')
      .colorize('#d4d4d4')
      .type('<')
      .colorize('#4ec9b0')
      .type('User')
      .colorize('#d4d4d4')
      .type('[]>([]);')
      .newLine()
      .type('  ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' [')
      .colorize('#9cdcfe')
      .type('loading')
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('setLoading')
      .colorize('#d4d4d4')
      .type('] = ')
      .colorize('#dcdcaa')
      .type('useState')
      .colorize('#d4d4d4')
      .type('<')
      .colorize('#569cd6')
      .type('boolean')
      .colorize('#d4d4d4')
      .type('>(')
      .colorize('#569cd6')
      .type('false')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .newLine()
      .type('  ')
      .colorize('#6a9955')
      .type('// Async data fetching with error handling')
      .colorize('#d4d4d4')
      .newLine()
      .type('  ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#dcdcaa')
      .type('fetchUsers')
      .colorize('#d4d4d4')
      .type(' = ')
      .colorize('#569cd6')
      .type('async')
      .colorize('#d4d4d4')
      .type(' () => {')
      .newLine()
      .type('    ')
      .colorize('#dcdcaa')
      .type('setLoading')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#569cd6')
      .type('true')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    ')
      .colorize('#c586c0')
      .type('try')
      .colorize('#d4d4d4')
      .type(' {')
      .newLine()
      .type('      ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#9cdcfe')
      .type('response')
      .colorize('#d4d4d4')
      .type(' = ')
      .colorize('#c586c0')
      .type('await')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#9cdcfe')
      .type('axios')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#dcdcaa')
      .type('get')
      .colorize('#d4d4d4')
      .type('<')
      .colorize('#4ec9b0')
      .type('User')
      .colorize('#d4d4d4')
      .type('[]>(')
      .colorize('#ce9178')
      .type("'/api/users');")
      .colorize('#d4d4d4')
      .newLine()
      .type('      ')
      .colorize('#dcdcaa')
      .type('setUsers')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#9cdcfe')
      .type('response')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#9cdcfe')
      .type('data')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    } ')
      .colorize('#c586c0')
      .type('catch')
      .colorize('#d4d4d4')
      .type(' (')
      .colorize('#9cdcfe')
      .type('error')
      .colorize('#d4d4d4')
      .type(') {')
      .newLine()
      .type('      ')
      .colorize('#9cdcfe')
      .type('console')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#dcdcaa')
      .type('error')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#ce9178')
      .type("'Failed to fetch users:'")
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('error')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    } ')
      .colorize('#c586c0')
      .type('finally')
      .colorize('#d4d4d4')
      .type(' {')
      .newLine()
      .type('      ')
      .colorize('#dcdcaa')
      .type('setLoading')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#569cd6')
      .type('false')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    }')
      .newLine()
      .type('  };')
      .newLine()
      .newLine()
      .type('  ')
      .colorize('#c586c0')
      .type('return')
      .colorize('#d4d4d4')
      .type(' <')
      .colorize('#4fc1ff')
      .type('div')
      .colorize('#d4d4d4')
      .type('>')
      .colorize('#9cdcfe')
      .type('Dashboard')
      .colorize('#d4d4d4')
      .type('</')
      .colorize('#4fc1ff')
      .type('div')
      .colorize('#d4d4d4')
      .type('>;')
      .newLine()
      .type('};')
      .start();
  }, []);

  // Simulate editor interactions
  useEffect(() => {
    const themes = ['VS Code Dark', 'Monokai Pro', 'Dracula', 'One Dark Pro'];
    const files = ['App.tsx', 'utils.ts', 'api.ts', 'types.d.ts', 'hooks.ts'];

    const interval = setInterval(() => {
      setEditorTheme(themes[Math.floor(Math.random() * themes.length)]);
      setCurrentLine(Math.floor(Math.random() * 45) + 1);
      setActiveFile(files[Math.floor(Math.random() * files.length)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes editor-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(0, 122, 204, 0.2); }
            50% { box-shadow: 0 0 50px rgba(0, 122, 204, 0.4); }
          }
          
          @keyframes intellisense-popup {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes line-highlight {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(0, 122, 204, 0.1); }
          }
          
          .editor-container {
            animation: editor-glow 5s ease-in-out infinite;
          }
          
          .current-line {
            animation: line-highlight 3s ease-in-out infinite;
          }
          
          .intellisense-tooltip {
            animation: intellisense-popup 0.3s ease-out;
          }
        `}
      </style>
      <div
        className='editor-container'
        style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          fontFamily: '"Cascadia Code", "JetBrains Mono", "Fira Code", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.5',
          borderRadius: '8px',
          minHeight: '400px',
          maxHeight: '500px',
          overflowY: 'auto',
          border: '1px solid #3e3e42',
          position: 'relative',
          background: 'linear-gradient(135deg, #1e1e1e 0%, #252526 100%)',
        }}
      >
        {/* Editor Tab Bar */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#2d2d30',
            borderBottom: '1px solid #3e3e42',
            padding: '0',
            position: 'sticky',
            top: 0,
            zIndex: 2,
          }}
        >
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: activeFile === 'App.tsx' ? '#1e1e1e' : '#2d2d30',
              color: activeFile === 'App.tsx' ? '#ffffff' : '#cccccc',
              borderRight: '1px solid #3e3e42',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📄 {activeFile}
            {activeFile === 'App.tsx' && <span style={{ color: '#f48771' }}>●</span>}
          </div>
          <div
            style={{
              padding: '8px 16px',
              color: '#cccccc',
              borderRight: '1px solid #3e3e42',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📊 utils.ts
          </div>
          <div style={{ flex: 1 }} />
          <div
            style={{
              padding: '8px 16px',
              fontSize: '0.75rem',
              color: '#858585',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span>{editorTheme}</span>
            <span>Line {currentLine}</span>
            <span>TypeScript React</span>
          </div>
        </div>

        {/* Editor Content */}
        <div
          style={{
            padding: '16px 0',
            position: 'relative',
          }}
        >
          {/* Line Numbers */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '16px',
              bottom: '16px',
              width: '50px',
              backgroundColor: '#1e1e1e',
              borderRight: '1px solid #3e3e42',
              color: '#858585',
              fontSize: '0.8rem',
              paddingTop: '2px',
              textAlign: 'right',
              paddingRight: '12px',
              lineHeight: '1.5',
            }}
          >
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i + 1}
                className={currentLine === i + 1 ? 'current-line' : ''}
                style={{
                  height: '1.5em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  color: currentLine === i + 1 ? '#ffffff' : '#858585',
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <div
            style={{
              marginLeft: '60px',
              paddingRight: '16px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {elements}
            {cursor}
          </div>
        </div>

        {/* Status Bar */}
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: '#007acc',
            color: '#ffffff',
            padding: '6px 16px',
            fontSize: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>⚙️ Git: main</span>
            <span>⚠️ 0 Problems</span>
            <span>📊 Live TypeScript</span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span>UTF-8</span>
            <span>LF</span>
            <span>Spaces: 2</span>
          </div>
        </div>

        {/* IntelliSense Tooltip */}
        <div
          className='intellisense-tooltip'
          style={{
            position: 'absolute',
            top: '120px',
            left: '180px',
            backgroundColor: '#252526',
            border: '1px solid #3e3e42',
            borderRadius: '4px',
            padding: '8px 12px',
            fontSize: '0.8rem',
            color: '#cccccc',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 3,
          }}
        >
          💡 <strong>useState</strong>
          <div style={{ fontSize: '0.75rem', color: '#858585', marginTop: '4px' }}>
            Returns a stateful value and a function to update it
          </div>
        </div>
      </div>
    </>
  );
};

// Glitch Effect Example
export const GlitchEffectExample: React.FC = () => {
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
        className='glitch-container'
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

// System Initialization Example
export const SystemInitializationExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loadingSpeed, setLoadingSpeed] = useState('Normal');

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 25,
    cursorStyle: 'block',
    cursorColor: '#22c55e',
  });

  useEffect(() => {
    typewriter
      .colorize('#22c55e')
      .type('⚡ SYSTEM INITIALIZATION ⚡')
      .colorize('#f8fafc')
      .newLine()
      .type('════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#64748b')
      .type('Starting application bootstrap...')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#3b82f6')
      .type('[1/8] ')
      .colorize('#f8fafc')
      .type('Loading configuration files... ')
      .pauseFor(1000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      config.json, env.local, package.json')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[2/8] ')
      .colorize('#f8fafc')
      .type('Initializing database connection... ')
      .pauseFor(1500)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      PostgreSQL v14.2 on port 5432')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[3/8] ')
      .colorize('#f8fafc')
      .type('Loading dependencies... ')
      .pauseFor(2000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      react@18.2.0, typescript@4.9.5, tailwind@3.2.4')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[4/8] ')
      .colorize('#f8fafc')
      .type('Setting up API routes... ')
      .pauseFor(1200)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      /api/auth, /api/users, /api/data, /api/uploads')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[5/8] ')
      .colorize('#f8fafc')
      .type('Compiling TypeScript... ')
      .pauseFor(1800)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      47 files compiled, 0 errors, 2 warnings')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[6/8] ')
      .colorize('#f8fafc')
      .type('Starting development server... ')
      .pauseFor(1000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      Server running on http://localhost:3000')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[7/8] ')
      .colorize('#f8fafc')
      .type('Running security checks... ')
      .pauseFor(1400)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      No vulnerabilities found, all packages secure')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[8/8] ')
      .colorize('#f8fafc')
      .type('Finalizing startup... ')
      .pauseFor(800)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('📊 Performance Metrics:')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('├─ Startup time: ')
      .colorize('#22c55e')
      .type('2.34s')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('├─ Memory usage: ')
      .colorize('#22c55e')
      .type('89.2MB')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('├─ Bundle size: ')
      .colorize('#22c55e')
      .type('1.8MB')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('└─ Dependencies: ')
      .colorize('#22c55e')
      .type('247 packages')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('🎉 APPLICATION READY!')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#64748b')
      .type('→ Local:   ')
      .colorize('#3b82f6')
      .type('http://localhost:3000')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('→ Network: ')
      .colorize('#3b82f6')
      .type('http://192.168.1.100:3000')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('→ Press Ctrl+C to stop the server')
      .start();
  }, []);

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
            0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.3); }
            50% { box-shadow: 0 0 50px rgba(34, 197, 94, 0.6); }
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
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          fontFamily: '"JetBrains Mono", "Consolas", "Monaco", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.5',
          borderRadius: '12px',
          minHeight: '400px',
          maxHeight: '500px',
          overflowY: 'auto',
          border: '2px solid #22c55e',
          position: 'relative',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}
      >
        {/* Loading Header */}
        <div
          style={{
            backgroundColor: '#22c55e',
            color: '#0f172a',
            padding: '12px 20px',
            borderRadius: '10px 10px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 2,
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
            backgroundColor: '#1e293b',
            padding: '12px 20px',
            borderBottom: '1px solid #334155',
            position: 'sticky',
            top: '48px',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Progress</span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{progress}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: '#334155',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <div
              className='progress-bar'
              style={{
                height: '100%',
                backgroundColor: '#22c55e',
                width: `${progress}%`,
                transition: 'width 0.5s ease',
                borderRadius: '3px',
              }}
            />
          </div>
        </div>

        {/* Loading Content */}
        <div
          style={{
            padding: '20px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {elements}
          {cursor}
        </div>

        {/* Loading Footer */}
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: '#1e293b',
            borderTop: '1px solid #334155',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0 0 10px 10px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Loading dependencies...</div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={currentStep === i ? 'active-step' : ''}
                  style={{
                    width: '4px',
                    height: '4px',
                    backgroundColor: currentStep >= i ? '#22c55e' : '#475569',
                    borderRadius: '50%',
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              {Math.floor(Math.random() * 50) + 200}ms
            </div>
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Keyboard Controls Example
export const KeyboardControlsExample: React.FC = () => {
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [demoText, setDemoText] = useState('Click here to activate keyboard controls...');
  const [isPaused, setIsPaused] = useState(false);
  const [animationRunning, setAnimationRunning] = useState(false);

  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      typeSpeed: 80,
      cursorStyle: 'bar',
      cursorColor: '#8b5cf6',
      ariaLabel: 'Interactive typewriter with keyboard controls',
      respectReducedMotion: true,
    });

  const startDemo = () => {
    setAnimationRunning(true);
    typewriter
      .type('🎮 Interactive Typewriter Demo')
      .pauseFor(1000)
      .type('\n\nClick this area to activate, then try:')
      .pauseFor(500)
      .type('\n• Press SPACE to pause (resume removes overlay)')
      .pauseFor(500)
      .type('\n• Press ESCAPE to skip to end')
      .pauseFor(500)
      .type('\n• Press R to reset animation')
      .pauseFor(1000)
      .type('\n\nStatus: Ready for keyboard input!')
      .pauseFor(500)
      .type('\n\n(Note: True resume not possible, shows concept)')
      .start();
  };

  useEffect(() => {
    startDemo();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isActive) return;

      let action = '';
      switch (event.code) {
        case 'Space':
          event.preventDefault();
          if (isPaused) {
            setIsPaused(false);
            action = 'SPACE pressed - Animation resumed (overlay removed)';
          } else {
            typewriter.stop();
            setIsPaused(true);
            action = 'SPACE pressed - Animation paused';
          }
          setKeyPressed('Space');
          break;
        case 'Escape':
          event.preventDefault();
          typewriter.stop();
          typewriter.deleteAll();
          setTimeout(() => {
            typewriter.type('⚡ Skipped to end! Press R to reset.').start();
            setAnimationRunning(false);
          }, 100);
          setIsPaused(false);
          action = 'ESCAPE pressed - Skipped to end';
          setKeyPressed('Escape');
          break;
        case 'KeyR':
          event.preventDefault();
          typewriter.deleteAll();
          setTimeout(() => {
            setAnimationRunning(true);
            typewriter
              .type('🔄 Animation reset!')
              .pauseFor(1000)
              .deleteAll()
              .type('🎮 Interactive Typewriter Demo')
              .pauseFor(500)
              .type('\n\nTry the controls again:')
              .pauseFor(300)
              .type('\n• SPACE to pause/resume')
              .pauseFor(300)
              .type('\n• ESCAPE to skip')
              .pauseFor(300)
              .type('\n• R to reset')
              .pauseFor(500)
              .type('\n\nReady for input!')
              .start();
          }, 100);
          setIsPaused(false);
          action = 'R pressed - Animation reset';
          setKeyPressed('R');
          break;
        default:
          return;
      }

      setDemoText(action);

      // Clear the key pressed indicator after 2 seconds
      setTimeout(() => {
        setKeyPressed('');
      }, 2000);
    };

    if (isActive) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isActive, typewriter, isPaused, animationRunning]);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '12px',
          border: '2px solid var(--ifm-color-emphasis-300)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: 'var(--ifm-color-emphasis-200)',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--ifm-color-emphasis-300)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: 'var(--ifm-color-content)',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            Keyboard Controls Demo
          </div>
          <div
            style={{
              backgroundColor: '#8b5cf6',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            INTERACTIVE
          </div>
        </div>

        {/* Main content */}
        <div
          {...accessibilityProps}
          tabIndex={0}
          style={{
            padding: '2rem',
            color: 'var(--ifm-color-content)',
            fontSize: '16px',
            lineHeight: '1.6',
            minHeight: '350px',
            height: '350px',
            whiteSpace: 'pre-wrap',
            outline: isActive ? '2px solid #8b5cf6' : '2px solid transparent',
            cursor: 'pointer',
            width: '100%',
            boxSizing: 'border-box',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            overflow: 'auto',
            backgroundColor: isActive ? 'var(--ifm-color-emphasis-100)' : 'transparent',
            transition: 'all 0.2s ease',
            position: 'relative',
          }}
          onFocus={() => {
            setControlsVisible(true);
            setIsActive(true);
          }}
          onBlur={() => setIsActive(false)}
          onClick={() => {
            setIsActive(true);
            setDemoText('Controls activated! Try pressing Space, Escape, or R');
          }}
          onKeyDown={(e) => {
            if (e.code === 'Enter' || e.code === 'Space') {
              e.preventDefault();
              setIsActive(true);
              setDemoText('Controls activated! Try pressing Space, Escape, or R');
            }
          }}
        >
          {elements}
          {cursor}
          {screenReaderAnnouncement}

          {/* Pause indicator overlay */}
          {isPaused && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(139, 92, 246, 0.9)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                zIndex: 10,
              }}
            >
              ⏸️ PAUSED - Press SPACE to remove overlay
            </div>
          )}

          {/* Demo feedback area */}
          {isActive && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--ifm-color-emphasis-200)',
                borderRadius: '8px',
                border: '2px solid #8b5cf6',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#8b5cf6',
                  marginBottom: '0.5rem',
                }}
              >
                🎮 Live Demo Feedback:
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--ifm-color-content)',
                  fontFamily: 'monospace',
                }}
              >
                {demoText}
              </div>
              {keyPressed && (
                <div
                  style={{
                    fontSize: '12px',
                    color: '#8b5cf6',
                    marginTop: '0.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  Key detected: {keyPressed}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Controls info */}
        {controlsVisible && (
          <div
            style={{
              backgroundColor: 'var(--ifm-color-emphasis-200)',
              borderTop: '1px solid var(--ifm-color-emphasis-300)',
              padding: '1rem 1.5rem',
              fontSize: '12px',
              color: 'var(--ifm-color-content-secondary)',
            }}
          >
            <div
              style={{
                marginBottom: '0.5rem',
                fontWeight: 'bold',
                color: isActive ? '#8b5cf6' : 'var(--ifm-color-content-secondary)',
              }}
            >
              {isActive
                ? '🎮 Controls Active - Use keyboard shortcuts below:'
                : '📋 Click the area above to activate keyboard controls:'}
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <kbd
                  style={{
                    padding: '2px 6px',
                    backgroundColor: 'var(--ifm-color-emphasis-300)',
                    borderRadius: '4px',
                    color: 'var(--ifm-color-content)',
                  }}
                >
                  SPACE
                </kbd>{' '}
                Pause/Resume
              </div>
              <div>
                <kbd
                  style={{
                    padding: '2px 6px',
                    backgroundColor: 'var(--ifm-color-emphasis-300)',
                    borderRadius: '4px',
                    color: 'var(--ifm-color-content)',
                  }}
                >
                  ESC
                </kbd>{' '}
                Skip
              </div>
              <div>
                <kbd
                  style={{
                    padding: '2px 6px',
                    backgroundColor: 'var(--ifm-color-emphasis-300)',
                    borderRadius: '4px',
                    color: 'var(--ifm-color-content)',
                  }}
                >
                  R
                </kbd>{' '}
                Reset
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// Virtualization Demo Example
export const VirtualizationDemoExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes, metrics } = useTypewriter({
    typeSpeed: 20,
    cursorStyle: 'bar',
    cursorColor: '#f59e0b',
  });

  useEffect(() => {
    const longText = `⚡ Performance Demo: Virtualized Rendering

This demonstration shows how the typewriter handles extremely long text sequences efficiently.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

🚀 Performance features:
- Virtualized rendering for memory efficiency
- Batched DOM updates
- React.memo optimizations  
- Hardware-accelerated CSS
- Smart segment grouping

The typewriter maintains 60fps even with massive text sequences thanks to these optimizations.`;

    typewriter.type(longText.trim()).start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
        {/* Metrics panel */}
        <div
          style={{
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            border: '2px solid var(--ifm-color-emphasis-300)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--ifm-color-content)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            📊 Performance Metrics
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--ifm-background-surface-color)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#3b82f6',
                }}
              >
                {metrics?.totalSegments || 0}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--ifm-color-content-secondary)',
                  fontWeight: '500',
                }}
              >
                Total Segments
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--ifm-background-surface-color)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#10b981',
                }}
              >
                {metrics?.visibleSegments || 0}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--ifm-color-content-secondary)',
                  fontWeight: '500',
                }}
              >
                Rendered Segments
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--ifm-background-surface-color)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#8b5cf6',
                }}
              >
                {Math.round(
                  ((metrics?.visibleSegments || 0) / Math.max(metrics?.totalSegments || 1, 1)) * 100
                )}
                %
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--ifm-color-content-secondary)',
                  fontWeight: '500',
                }}
              >
                Efficiency
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div
          style={{
            backgroundColor: 'var(--ifm-background-surface-color)',
            border: '2px solid var(--ifm-color-emphasis-300)',
            borderRadius: '12px',
            padding: '2rem',
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'var(--ifm-color-content)',
            minHeight: '400px',
            maxHeight: '600px',
            overflowY: 'auto',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Terminal Simulation
export const TerminalExample: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'block',
    cursorColor: '#00ff00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    typewriter
      .type('$ ')
      .colorize('#00ff00')
      .type('whoami')
      .pauseFor(1000)
      .newLine()
      .colorize('#ffffff')
      .type('developer')
      .newLine()
      .type('$ ')
      .colorize('#00ff00')
      .type('ls -la')
      .pauseFor(800)
      .newLine()
      .colorize('#ffffff')
      .type('drwxr-xr-x  projects/')
      .newLine()
      .type('-rw-r--r--  README.md')
      .newLine()
      .type('$ ')
      .colorize('#00ff00')
      .type('echo "Hello, World!"')
      .pauseFor(600)
      .newLine()
      .colorize('#ffffff')
      .type('Hello, World!')
      .start();

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#000',
          color: '#00ff00',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '0.9rem',
          padding: '1.5rem',
          borderRadius: '8px',
          minHeight: '300px',
          height: '300px',
          whiteSpace: 'pre-line',
          border: '2px solid #333',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
      >
        <div style={{ color: '#666', marginBottom: '0.5rem' }}>Terminal - {currentTime}</div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

// Code Syntax Highlighting Example
export const CodeSyntaxExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
  });

  useEffect(() => {
    typewriter
      .colorize('#ff79c6') // Pink for keywords
      .type('function')
      .colorize('#ffffff')
      .type(' ')
      .colorize('#50fa7b') // Green for function names
      .type('greetUser')
      .colorize('#ffffff')
      .type('(')
      .colorize('#ffb86c') // Orange for parameters
      .type('name')
      .colorize('#ffffff')
      .type(') {')
      .newLine()
      .type('    ')
      .colorize('#ff79c6')
      .type('const')
      .colorize('#ffffff')
      .type(' ')
      .colorize('#8be9fd') // Cyan for variables
      .type('message')
      .colorize('#ffffff')
      .type(' = ')
      .colorize('#f1fa8c') // Yellow for strings
      .type('`Hello, ${name}!`')
      .colorize('#ffffff')
      .type(';')
      .newLine()
      .newLine()
      .type('    ')
      .colorize('#8be9fd')
      .type('console')
      .colorize('#ffffff')
      .type('.')
      .colorize('#50fa7b')
      .type('log')
      .colorize('#ffffff')
      .type('(')
      .colorize('#8be9fd')
      .type('message')
      .colorize('#ffffff')
      .type(');')
      .newLine()
      .type('}')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#282a36',
          color: '#f8f8f2',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '0.9rem',
          padding: '1.5rem',
          borderRadius: '8px',
          whiteSpace: 'pre',
          border: '1px solid #44475a',
          lineHeight: '1.5',
          minHeight: '300px',
          height: '300px',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            color: '#6272a4',
            marginBottom: '1rem',
            fontSize: '0.8rem',
            borderBottom: '1px solid #44475a',
            paddingBottom: '0.5rem',
          }}
        >
          📝 editor.js - JavaScript
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

// Chat Simulation
export const ChatExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
  });

  useEffect(() => {
    typewriter
      .colorize('#3b82f6')
      .type('Alice: ')
      .colorize('')
      .type('Hey everyone! 👋')
      .newLine()
      .pauseFor(1000)
      .colorize('#10b981')
      .type('Bob: ')
      .colorize('')
      .type('Hi Alice! How are you doing?')
      .newLine()
      .pauseFor(1200)
      .colorize('#ef4444')
      .type('Charlie: ')
      .colorize('')
      .type('Great to see you all here!')
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('Alice: ')
      .colorize('')
      .type("I'm working on some cool React projects 🚀")
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '12px',
          padding: '1.5rem',
          maxWidth: '100%',
          width: '100%',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          whiteSpace: 'pre-line',
          lineHeight: '1.6',
          color: 'var(--ifm-color-content)',
          boxSizing: 'border-box',
          minHeight: '250px',
          height: '250px',
          overflow: 'auto',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        <div
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}
        >
          💬 Team Chat
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

// Hero Section
export const HeroExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorColor: '#ffffff',
  });

  useEffect(() => {
    typewriter
      .type('Build ')
      .colorize('#60a5fa')
      .type('Amazing')
      .colorize('#ffffff')
      .type(' React Apps')
      .newLine()
      .pauseFor(1000)
      .type('with ')
      .colorize('#34d399')
      .type('TypeScript')
      .colorize('#ffffff')
      .type(' & ')
      .colorize('#f87171')
      .type('Modern Tools')
      .pauseFor(2000)
      .newLine()
      .type('✨ Fast • Reliable • Scalable')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          paddingTop: '5rem',
          borderRadius: '16px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          minHeight: '400px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'system-ui, sans-serif',
            whiteSpace: 'pre-line',
            lineHeight: '1.2',
            minHeight: '300px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Accessibility Showcase
export const AccessibilityExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      respectReducedMotion: true,
      ariaLabel: 'Accessibility demonstration',
      announceCompletion: true,
      typeSpeed: 60,
      cursorColor: '#0066cc',
    });

  useEffect(() => {
    typewriter
      .type('♿ Fully accessible animation')
      .pauseFor(1000)
      .newLine()
      .type('✅ WCAG 2.1 AA compliant')
      .newLine()
      .type('🔊 Screen reader support')
      .newLine()
      .type('⌨️ Keyboard navigation')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        style={{
          fontSize: '1.2rem',
          fontFamily: 'system-ui, sans-serif',
          whiteSpace: 'pre-line',
          padding: '2rem',
          border: '2px solid #3b82f6',
          borderRadius: '8px',
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '250px',
          height: '250px',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
};

// Simple Typewriter Example
export const SimpleTypewriterExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('Hello, World!')
      .pauseFor(1000)
      .newLine()
      .type('Welcome to typewriter animations.')
      .pauseFor(800)
      .newLine()
      .type('This is a simple example to get you started.')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          padding: '2rem',
          backgroundColor: '#ffffff',
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          minHeight: '200px',
          color: '#1f2937',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

// Colorful Text Example
export const ColorfulTextExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
  });

  useEffect(() => {
    typewriter
      .type('This is ')
      .colorize('#3b82f6')
      .type('blue text')
      .colorize('#374151')
      .type(', and this is ')
      .colorize('#ef4444')
      .type('red text')
      .colorize('#374151')
      .type('!')
      .newLine()
      .pauseFor(800)
      .type('Watch the ')
      .colorize('#f59e0b')
      .type('rainbow')
      .colorize('#10b981')
      .type(' effect')
      .colorize('#8b5cf6')
      .type(' as')
      .colorize('#ef4444')
      .type(' each')
      .colorize('#3b82f6')
      .type(' word')
      .colorize('#f59e0b')
      .type(' changes')
      .colorize('#10b981')
      .type(' color')
      .colorize('#374151')
      .type('!')
      .newLine()
      .pauseFor(1000)
      .type('🌈 Beautiful, accessible, and smooth!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", sans-serif',
          fontSize: '1.2rem',
          lineHeight: '1.7',
          padding: '2.5rem',
          backgroundColor: '#ffffff',
          border: '2px solid #e5e7eb',
          borderRadius: '16px',
          minHeight: '250px',
          color: '#374151',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

// Speed Variations Example
export const SpeedVariationsExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 100,
    cursorStyle: 'block',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('The quick brown fox...', { speed: 30 })
      .pauseFor(800)
      .newLine()
      .type('JUMPS!', { speed: 5 })
      .pauseFor(500)
      .newLine()
      .type('...and lands gracefully', { speed: 80 })
      .pauseFor(1000)
      .newLine()
      .newLine()
      .type('🐌 Slow typing creates suspense...', { speed: 150 })
      .pauseFor(1200)
      .newLine()
      .type('⚡ FAST TYPING CREATES EXCITEMENT!', { speed: 10 })
      .pauseFor(800)
      .newLine()
      .type('🎯 Normal speed for readability.', { speed: 50 })
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          padding: '2.5rem',
          backgroundColor: '#f8fafc',
          border: '2px solid #3b82f6',
          borderRadius: '16px',
          minHeight: '300px',
          color: '#1e293b',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

// Looping Animation Example
export const LoopingAnimationExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    loop: true,
    cursorStyle: 'block',
    cursorColor: '#10b981',
  });

  useEffect(() => {
    typewriter
      .type('Frontend Developer')
      .pauseFor(2000)
      .deleteAll()
      .type('React Enthusiast')
      .pauseFor(2000)
      .deleteAll()
      .type('TypeScript Lover')
      .pauseFor(2000)
      .deleteAll()
      .type('UI/UX Designer')
      .pauseFor(2000)
      .deleteAll()
      .type('Creative Coder')
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontSize: '1.8rem',
          fontFamily: '"Poppins", "Segoe UI", sans-serif',
          fontWeight: '600',
          color: '#1f2937',
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: '#f0fdf4',
          border: '3px solid #10b981',
          borderRadius: '20px',
          minHeight: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.75rem',
            color: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            padding: '4px 12px',
            borderRadius: '12px',
            fontWeight: '500',
          }}
        >
          🔄 INFINITE LOOP
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

// Character Effects Example
export const CharacterEffectsExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
  });

  useEffect(() => {
    typewriter
      .type('Special Characters: ')
      .colorize('#8b5cf6')
      .type('★')
      .pauseFor(200)
      .type('⚡')
      .pauseFor(200)
      .type('❤️')
      .pauseFor(200)
      .type('🎉')
      .pauseFor(200)
      .type('🚀')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('E-m-o-j-i   S-p-a-c-i-n-g: ')
      .colorize('#ef4444')
      .type('🔥')
      .pauseFor(300)
      .type(' ')
      .type('💎')
      .pauseFor(300)
      .type(' ')
      .type('✨')
      .pauseFor(300)
      .type(' ')
      .type('🌟')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('Numbers with rhythm: ')
      .colorize('#059669')
      .type('1')
      .pauseFor(100)
      .type('2')
      .pauseFor(150)
      .type('3')
      .pauseFor(200)
      .type('4')
      .pauseFor(250)
      .type('5')
      .pauseFor(300)
      .type('!')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('ASCII Art:')
      .newLine()
      .colorize('#6366f1')
      .type('  /\\_/\\  ')
      .newLine()
      .type(' ( o.o ) ')
      .newLine()
      .type('  > ^ <  ')
      .colorize('#374151')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"JetBrains Mono", "Courier New", monospace',
          fontSize: '1rem',
          lineHeight: '1.6',
          padding: '2rem',
          backgroundColor: '#fefefe',
          border: '3px solid #e879f9',
          borderRadius: '16px',
          minHeight: '250px',
          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)',
          }}
        />
        <div
          style={{
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#8b5cf6',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          ✨ Character Effects Playground
        </div>
        <div style={{ color: '#374151', whiteSpace: 'pre-wrap' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Text Replacement Example
export const TextReplacementExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'block',
    cursorColor: '#f59e0b',
  });

  useEffect(() => {
    typewriter
      .type('I am ')
      .colorize('#3b82f6')
      .type('happy')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(5)
      .colorize('#ef4444')
      .type('excited')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(7)
      .colorize('#10b981')
      .type('thrilled')
      .colorize('#374151')
      .type(' today!')
      .newLine()
      .newLine()
      .type('React is ')
      .colorize('#8b5cf6')
      .type('difficult')
      .colorize('#374151')
      .pauseFor(1200)
      .deleteLetters(9)
      .colorize('#059669')
      .type('amazing')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(7)
      .colorize('#dc2626')
      .type('powerful')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(8)
      .colorize('#7c3aed')
      .type('fantastic')
      .colorize('#374151')
      .type('!')
      .newLine()
      .newLine()
      .type('Learning: ')
      .colorize('#6b7280')
      .type('JavaScript')
      .pauseFor(800)
      .deleteLetters(10)
      .colorize('#f59e0b')
      .type('TypeScript')
      .pauseFor(800)
      .deleteLetters(10)
      .colorize('#06b6d4')
      .type('React')
      .pauseFor(800)
      .deleteLetters(5)
      .colorize('#8b5cf6')
      .type('Next.js')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('Status: ')
      .colorize('#ef4444')
      .type('❌ Offline')
      .pauseFor(1500)
      .deleteLetters(10)
      .colorize('#f59e0b')
      .type('⏳ Connecting')
      .pauseFor(1500)
      .deleteLetters(13)
      .colorize('#10b981')
      .type('✅ Online')
      .colorize('#374151')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"SF Mono", "Monaco", "Inconsolata", monospace',
          fontSize: '1.1rem',
          lineHeight: '1.7',
          padding: '2.5rem',
          backgroundColor: '#fffbeb',
          border: '2px solid #fbbf24',
          borderRadius: '12px',
          minHeight: '220px',
          boxShadow: '0 10px 25px rgba(245, 158, 11, 0.1)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            fontSize: '0.75rem',
            color: '#92400e',
            fontWeight: '500',
            backgroundColor: '#fef3c7',
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          LIVE REPLACEMENT
        </div>
        <div
          style={{
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            color: '#92400e',
            fontWeight: '600',
          }}
        >
          🔄 Dynamic Text Replacement
        </div>
        <div style={{ color: '#374151' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Password Generator Example
export const PasswordGeneratorExample: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [strength, setStrength] = useState('Medium');

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'block',
    cursorColor: '#dc2626',
  });

  useEffect(() => {
    typewriter
      .colorize('#dc2626')
      .type('🔐 SECURE PASSWORD GENERATOR 🔐')
      .colorize('#374151')
      .newLine()
      .type('════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('⚙️  Configuration:')
      .colorize('#374151')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Length: 16 characters')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include uppercase (A-Z)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include lowercase (a-z)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include numbers (0-9)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include symbols (!@#$%)')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('🔄 Generating password...')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#6b7280')
      .type('Step 1: ')
      .colorize('#374151')
      .type('Random seed: ')
      .colorize('#3b82f6')
      .type('x7B9')
      .pauseFor(300)
      .type('mK2e')
      .pauseFor(300)
      .type('9Qw!')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 2: ')
      .colorize('#374151')
      .type('Entropy mixing...')
      .newLine()
      .colorize('#6b7280')
      .type('Step 3: ')
      .colorize('#374151')
      .type('Character selection...')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#dc2626')
      .type('🎯 Generated Password:')
      .colorize('#374151')
      .newLine()
      .colorize('#374151')
      .type('▶ ')
      .colorize('#1f2937')
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
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#059669')
      .type('📊 Security Analysis:')
      .colorize('#374151')
      .newLine()
      .colorize('#dc2626')
      .type('🔴 Strength: ')
      .colorize('#10b981')
      .type('VERY STRONG')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('🧮 Entropy: ')
      .colorize('#374151')
      .type('95.2 bits')
      .newLine()
      .colorize('#8b5cf6')
      .type('⏱️  Crack Time: ')
      .colorize('#dc2626')
      .type('34 trillion years')
      .colorize('#374151')
      .newLine()
      .colorize('#f59e0b')
      .type('🔢 Combinations: ')
      .colorize('#374151')
      .type('2.8 × 10²³')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('💡 Security Tips:')
      .colorize('#374151')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Never reuse this password')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Store in password manager')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Enable 2FA when possible')
      .newLine()
      .colorize('#dc2626')
      .type('⚠️  ')
      .colorize('#374151')
      .type("Don't share via email/text")
      .start();
  }, []);

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
          backgroundColor: '#0f172a',
          borderRadius: '12px',
          padding: '2rem',
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          fontSize: '0.9rem',
          color: '#f8fafc',
          lineHeight: '1.5',
          minHeight: '600px',
          border: '1px solid #1e293b',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern */}
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
              color: '#64748b',
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
        <div style={{ position: 'relative', zIndex: 1, whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Recipe Builder Example
export const RecipeBuilderExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentIngredient, setCurrentIngredient] = useState(0);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#f59e0b',
  });

  const ingredients = [
    { name: 'Fresh Basil', amount: '2 cups', cost: '$3.50' },
    { name: 'Pine Nuts', amount: '1/2 cup', cost: '$8.99' },
    { name: 'Parmesan', amount: '1 cup grated', cost: '$12.00' },
    { name: 'Garlic', amount: '4 cloves', cost: '$1.25' },
  ];

  useEffect(() => {
    typewriter
      .colorize('#10b981')
      .type('👨‍🍳 RECIPE BUILDER PRO 👩‍🍳')
      .colorize('#374151')
      .newLine()
      .type('══════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('📋 Creating: ')
      .colorize('#10b981')
      .type('Classic Basil Pesto')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Prep Time: 15 min | Cook Time: 0 min | Serves: 4')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('🛒 INGREDIENTS CHECKLIST:')
      .colorize('#374151')
      .newLine()
      .type('────────────────────────────────────────')
      .newLine()
      .pauseFor(600)
      .colorize('#10b981')
      .type('✓ ')
      .colorize('#374151')
      .type('Fresh Basil leaves - 2 cups')
      .colorize('#6b7280')
      .type(' ($3.50)')
      .colorize('#374151')
      .newLine()
      .pauseFor(400)
      .colorize('#10b981')
      .type('✓ ')
      .colorize('#374151')
      .type('Pine nuts - 1/2 cup')
      .colorize('#6b7280')
      .type(' ($8.99)')
      .colorize('#374151')
      .newLine()
      .pauseFor(400)
      .colorize('#10b981')
      .type('✓ ')
      .colorize('#374151')
      .type('Parmesan cheese, grated - 1 cup')
      .colorize('#6b7280')
      .type(' ($12.00)')
      .colorize('#374151')
      .newLine()
      .pauseFor(400)
      .colorize('#10b981')
      .type('✓ ')
      .colorize('#374151')
      .type('Garlic cloves - 4 large')
      .colorize('#6b7280')
      .type(' ($1.25)')
      .colorize('#374151')
      .newLine()
      .pauseFor(400)
      .colorize('#10b981')
      .type('✓ ')
      .colorize('#374151')
      .type('Extra virgin olive oil - 1/2 cup')
      .colorize('#6b7280')
      .type(' ($4.99)')
      .colorize('#374151')
      .newLine()
      .pauseFor(400)
      .colorize('#10b981')
      .type('✓ ')
      .colorize('#374151')
      .type('Salt and pepper to taste')
      .colorize('#6b7280')
      .type(' ($0.50)')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#dc2626')
      .type('💰 Total Cost: $31.23')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#8b5cf6')
      .type('👨‍🍳 COOKING INSTRUCTIONS:')
      .colorize('#374151')
      .newLine()
      .type('══════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('[Step 1] ')
      .colorize('#374151')
      .type('Prepare the basil')
      .newLine()
      .colorize('#6b7280')
      .type('• Wash and dry fresh basil leaves thoroughly')
      .newLine()
      .type('• Remove any thick stems')
      .newLine()
      .type('• Tear larger leaves into smaller pieces')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('[Step 2] ')
      .colorize('#374151')
      .type('Toast the pine nuts')
      .newLine()
      .colorize('#6b7280')
      .type('• Heat a dry pan over medium heat')
      .newLine()
      .type('• Add pine nuts and toast for 2-3 minutes')
      .newLine()
      .type('• Stir frequently until golden brown')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('[Step 3] ')
      .colorize('#374151')
      .type('Process in food processor')
      .newLine()
      .colorize('#6b7280')
      .type('• Add garlic and pulse until minced')
      .newLine()
      .type('• Add pine nuts and basil, pulse until chopped')
      .newLine()
      .type('• Slowly drizzle in olive oil while processing')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('[Step 4] ')
      .colorize('#374151')
      .type('Final touches')
      .newLine()
      .colorize('#6b7280')
      .type('• Stir in grated Parmesan cheese')
      .newLine()
      .type('• Season with salt and pepper')
      .newLine()
      .type('• Taste and adjust seasoning')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .colorize('#10b981')
      .type('🎉 RECIPE COMPLETE! 🎉')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type("💡 Chef's Tips:")
      .colorize('#374151')
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize('#374151')
      .type('Store in refrigerator for up to 1 week')
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize('#374151')
      .type('Freeze in ice cube trays for portion control')
      .newLine()
      .colorize('#10b981')
      .type('• ')
      .colorize('#374151')
      .type('Add a splash of lemon juice to prevent browning')
      .start();
  }, []);

  // Simulate cooking progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev % 4) + 1);
      setCurrentIngredient((prev) => (prev + 1) % ingredients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes steam {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
          }
          
          @keyframes bubble {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          .cooking-step {
            animation: bubble 2s ease-in-out infinite;
          }
          
          .ingredient-highlight {
            animation: steam 3s ease-in-out infinite;
          }
        `}
      </style>
      <div
        style={{
          backgroundColor: '#fef3c7',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'Georgia, serif',
          fontSize: '0.95rem',
          color: '#78350f',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #f59e0b',
          position: 'relative',
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        }}
      >
        {/* Kitchen decoration */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontSize: '2rem',
            animation: 'steam 4s ease-in-out infinite',
          }}
        >
          🍽️
        </div>

        {/* Current step indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}
        >
          <span className='cooking-step'>Step {currentStep}</span>
        </div>

        {/* Ingredient spotlight */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(251, 191, 36, 0.2)',
            padding: '8px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
          }}
        >
          <span className='ingredient-highlight'>🥄</span>
          <span>Now using: {ingredients[currentIngredient]?.name}</span>
        </div>

        {/* Main recipe content */}
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Music Player Example
export const MusicPlayerExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(75);

  const tracks = [
    'Neon Dreams',
    'Digital Horizon', 
    'Electric Nights',
    'Future Vibes'
  ];

  useEffect(() => {
    typewriter
      .colorize('#3b82f6')
      .type('🎵 MUSIC PLAYER 🎵')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#10b981')
      .type('Now Playing:')
      .colorize('#1f2937')
      .newLine()
      .colorize('#f3f4f6')
      .type(`♪ ${tracks[currentTrack]} ♪`)
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(400)
      .colorize('#6366f1')
      .type('🎧 PLAYLIST:')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type(' ')
      .colorize('#f3f4f6')
      .type('1. Neon Dreams')
      .newLine()
      .colorize('#6b7280')
      .type(' ')
      .colorize('#f3f4f6')
      .type('2. Digital Horizon')
      .newLine()
      .colorize('#6b7280')
      .type(' ')
      .colorize('#f3f4f6')
      .type('3. Electric Nights')
      .newLine()
      .colorize('#6b7280')
      .type(' ')
      .colorize('#f3f4f6')
      .type('4. Future Vibes')
      .newLine()
      .newLine()
      .colorize('#6366f1')
      .type('🎛️ EQUALIZER:')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('Bass: [██████░░░░] 60%')
      .newLine()
      .type('Mid: [████████░░] 80%')
      .newLine()
      .type('Treble: [██████████] 100%')
      .start();
  }, [currentTrack]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrack(prev => (prev + 1) % tracks.length);
      setIsPlaying(prev => Math.random() > 0.3);
      setVolume(prev => Math.max(20, Math.min(100, prev + (Math.random() - 0.5) * 20)));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#0f172a',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#f1f5f9',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid #3b82f6',
          position: 'relative',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Voice Command Example  
export const VoiceCommandExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#10b981',
  });

  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [confidence, setConfidence] = useState(95);

  const commands = [
    'Turn on the lights',
    'Play some music',
    'What\'s the weather today?',
    'Set a timer for 5 minutes',
    'Call mom',
    'Send a message to John'
  ];

  useEffect(() => {
    typewriter
      .colorize('#10b981')
      .type('🎤 AI VOICE ASSISTANT')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#3b82f6')
      .type('Status: ')
      .colorize(isListening ? '#10b981' : '#6b7280')
      .type(isListening ? '🟢 LISTENING...' : '⚫ IDLE')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(400)
      .colorize('#f59e0b')
      .type('Last Command:')
      .colorize('#1f2937')
      .newLine()
      .colorize('#e5e7eb')
      .type(`"${currentCommand}"`)
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#8b5cf6')
      .type(`Confidence: ${confidence}%`)
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#6366f1')
      .type('📋 AVAILABLE COMMANDS:')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('• "Turn on the lights"')
      .newLine()
      .type('• "Play some music"')
      .newLine()
      .type('• "What\'s the weather?"')
      .newLine()
      .type('• "Set a timer"')
      .newLine()
      .type('• "Call someone"')
      .newLine()
      .type('• "Send a message"')
      .start();
  }, [isListening, currentCommand, confidence]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsListening(prev => !prev);
      setCurrentCommand(commands[Math.floor(Math.random() * commands.length)]);
      setConfidence(85 + Math.floor(Math.random() * 15));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid #10b981',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// AI Chat Interface Example
export const AIChatInterfaceExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 35,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
  });

  const [isTyping, setIsTyping] = useState(false);
  const [userStatus, setUserStatus] = useState('online');
  const [messageCount, setMessageCount] = useState(3);

  const statuses = ['online', 'typing', 'away', 'busy'];

  useEffect(() => {
    typewriter
      .colorize('#8b5cf6')
      .type('💬 AI CUSTOMER SUPPORT')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#10b981')
      .type('🤖 AI Assistant: ')
      .colorize('#374151')
      .type('Hello! How can I help you today?')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('👤 You: ')
      .colorize('#374151')
      .type('I\'m having trouble with my order')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#10b981')
      .type('🤖 AI Assistant: ')
      .colorize(isTyping ? '#6b7280' : '#374151')
      .type(isTyping ? 'typing...' : 'I\'d be happy to help! Can you provide your order number?')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('👤 You: ')
      .colorize('#374151')
      .type('Sure, it\'s #ORD-12345')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('🤖 AI Assistant: ')
      .colorize('#374151')
      .type('Perfect! I found your order. Let me check the status...')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type(`Status: ${userStatus.toUpperCase()} • ${messageCount} messages`)
      .start();
  }, [isTyping, userStatus, messageCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(prev => !prev);
      setUserStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      setMessageCount(prev => (prev % 10) + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#faf5ff',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid #8b5cf6',
          position: 'relative',
          background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Data Visualization Example
export const DataVisualizationExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 25,
    cursorStyle: 'bar',
    cursorColor: '#059669',
  });

  const [chartType, setChartType] = useState('bar');
  const [isLoading, setIsLoading] = useState(false);
  const [dataPoint, setDataPoint] = useState(85);

  const chartTypes = ['bar', 'line', 'pie', 'scatter'];

  useEffect(() => {
    typewriter
      .colorize('#059669')
      .type('📊 BUSINESS ANALYTICS DASHBOARD')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#3b82f6')
      .type('📈 SALES PERFORMANCE')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('Q1 Revenue: $2.4M (+12%)')
      .newLine()
      .type('Q2 Revenue: $2.8M (+15%)')
      .newLine()
      .type('Q3 Revenue: $3.1M (+18%)')
      .newLine()
      .type('Q4 Revenue: $3.5M (+22%)')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('🎯 KEY METRICS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#10b981')
      .type('Customer Satisfaction: ')
      .colorize('#1f2937')
      .type(`${dataPoint}%`)
      .newLine()
      .colorize('#10b981')
      .type('Conversion Rate: ')
      .colorize('#1f2937')
      .type('4.2%')
      .newLine()
      .colorize('#10b981')
      .type('Avg Order Value: ')
      .colorize('#1f2937')
      .type('$127.50')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#8b5cf6')
      .type(`📊 Chart Type: ${chartType.toUpperCase()}`)
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type(isLoading ? '⏳ Loading data...' : '✅ Data updated')
      .start();
  }, [chartType, isLoading, dataPoint]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartType(chartTypes[Math.floor(Math.random() * chartTypes.length)]);
      setIsLoading(Math.random() > 0.7);
      setDataPoint(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 10)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#f0fdf4',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid #059669',
          position: 'relative',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Code Review Example
export const CodeReviewExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'bar',
    cursorColor: '#dc2626',
  });

  const [reviewStatus, setReviewStatus] = useState('in-progress');
  const [approvalCount, setApprovalCount] = useState(2);
  const [commentsCount, setCommentsCount] = useState(5);

  const statuses = ['in-progress', 'approved', 'changes-requested', 'pending'];

  useEffect(() => {
    typewriter
      .colorize('#dc2626')
      .type('🔍 CODE REVIEW - PR #247')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#3b82f6')
      .type('Title: ')
      .colorize('#374151')
      .type('Add user authentication system')
      .newLine()
      .colorize('#3b82f6')
      .type('Author: ')
      .colorize('#374151')
      .type('@sarah-dev')
      .newLine()
      .colorize('#3b82f6')
      .type('Branch: ')
      .colorize('#374151')
      .type('feature/auth-system → main')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('📋 REVIEW STATUS')
      .colorize('#1f2937')
      .newLine()
      .colorize(reviewStatus === 'approved' ? '#10b981' : 
                reviewStatus === 'changes-requested' ? '#dc2626' : '#6b7280')
      .type(`Status: ${reviewStatus.replace('-', ' ').toUpperCase()}`)
      .colorize('#1f2937')
      .newLine()
      .colorize('#10b981')
      .type(`Approvals: ${approvalCount}/3`)
      .colorize('#1f2937')
      .newLine()
      .colorize('#f59e0b')
      .type(`Comments: ${commentsCount}`)
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#8b5cf6')
      .type('📝 RECENT COMMENTS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('• @mike-lead: LGTM! Great work on the validation')
      .newLine()
      .type('• @jane-security: Please add rate limiting')
      .newLine()
      .type('• @alex-qa: Tests look comprehensive 👍')
      .start();
  }, [reviewStatus, approvalCount, commentsCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      setApprovalCount(Math.floor(Math.random() * 4)); 
      setCommentsCount(Math.floor(Math.random() * 8) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#fef2f2',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid #dc2626',
          position: 'relative',
          background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// E-commerce Checkout Example
export const EcommerceCheckoutExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 20,
    cursorStyle: 'bar',
    cursorColor: '#059669',
  });

  const [paymentStep, setPaymentStep] = useState('cart');
  const [cartTotal, setCartTotal] = useState(208.85);
  const [orderStatus, setOrderStatus] = useState('processing');

  const steps = ['cart', 'shipping', 'payment', 'confirmation'];

  useEffect(() => {
    typewriter
      .colorize('#059669')
      .type('🛒 E-COMMERCE CHECKOUT')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#3b82f6')
      .type('📦 CART ITEMS (4)')
      .colorize('#1f2937')
      .newLine()
      .colorize('#f3f4f6')
      .type('1. Wireless Headphones')
      .newLine()
      .colorize('#6b7280')
      .type(' Premium Audio | Noise Cancelling')
      .colorize('#059669')
      .type(' → $89.99')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#f3f4f6')
      .type('2. Phone Case')
      .newLine()
      .colorize('#6b7280')
      .type(' Protective | Clear Design')
      .colorize('#059669')
      .type(' → $49.90')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#f3f4f6')
      .type('3. USB-C Cable')
      .newLine()
      .colorize('#6b7280')
      .type(' Fast Charging | 6ft Length')
      .colorize('#059669')
      .type(' → $15.99')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#f3f4f6')
      .type('4. Power Bank')
      .newLine()
      .colorize('#6b7280')
      .type(' 10,000mAh | Wireless Charging')
      .colorize('#059669')
      .type(' → $42.97')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('💰 ORDER SUMMARY')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('Subtotal:')
      .colorize('#1f2937')
      .type(' $198.85')
      .newLine()
      .colorize('#6b7280')
      .type('Shipping (Express):')
      .colorize('#1f2937')
      .type(' $12.99')
      .newLine()
      .colorize('#6b7280')
      .type('Tax (8.5%):')
      .colorize('#1f2937')
      .type(' $16.90')
      .newLine()
      .colorize('#6b7280')
      .type('Discount (SAVE10):')
      .colorize('#22c55e')
      .type(' -$19.89')
      .colorize('#1f2937')
      .newLine()
      .type('─────────────────────────')
      .newLine()
      .colorize('#f59e0b')
      .type('TOTAL:')
      .colorize('#1f2937')
      .type(' ')
      .colorize('#059669')
      .type('$208.85')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#8b5cf6')
      .type('🏠 SHIPPING ADDRESS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type(' John Smith')
      .newLine()
      .type(' 123 Tech Street, Apt 4B')
      .newLine()
      .type(' San Francisco, CA 94105')
      .newLine()
      .type(' Phone: (555) 123-4567')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#10b981')
      .type('🚚 DELIVERY OPTIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type(' Express Delivery (1-2 business days)')
      .newLine()
      .type(' Estimated Arrival: March 15, 2024')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .colorize('#dc2626')
      .type(`🔄 Status: ${orderStatus.toUpperCase()}`)
      .start();
  }, [paymentStep, cartTotal, orderStatus]);

  useEffect(() => {
    const interval = setInterval(() => {
      const steps = ['cart', 'shipping', 'payment', 'confirmation'];
      setPaymentStep(steps[Math.floor(Math.random() * steps.length)]);
      setCartTotal(prev => Math.max(50, Math.min(500, prev + (Math.random() - 0.5) * 50)));
      const statuses = ['processing', 'completed', 'pending', 'failed'];
      setOrderStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #059669',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

// Scientific Calculator Example
export const ScientificCalculatorExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 35,
    cursorStyle: 'bar',
    cursorColor: '#7c3aed',
  });

  const [currentValue, setCurrentValue] = useState(42.75);
  const [calculationMode, setCalculationMode] = useState('scientific');
  const [memoryValue, setMemoryValue] = useState(3.14159);

  const modes = ['basic', 'scientific', 'programming', 'statistics'];

  useEffect(() => {
    typewriter
      .colorize('#7c3aed')
      .type('🧮 SCIENTIFIC CALCULATOR')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#10b981')
      .type('Display: ')
      .colorize('#374151')
      .type(currentValue.toString())
      .newLine()
      .colorize('#10b981')
      .type('Mode: ')
      .colorize('#374151')
      .type(calculationMode.toUpperCase())
      .newLine()
      .colorize('#10b981')
      .type('Memory: ')
      .colorize('#374151')
      .type(memoryValue.toFixed(5))
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('🔢 BASIC OPERATIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('[+] [-] [×] [÷] [=]')
      .newLine()
      .type('[√] [x²] [x³] [1/x]')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#f59e0b')
      .type('📐 SCIENTIFIC FUNCTIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('[sin] [cos] [tan] [log]')
      .newLine()
      .type('[ln] [e^x] [10^x] [π]')
      .newLine()
      .type('[deg] [rad] [C] [P]')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(700)
      .colorize('#dc2626')
      .type('💾 MEMORY FUNCTIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('[MS] [MR] [MC] [M+] [M-]')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#8b5cf6')
      .type('Recent Calculation:')
      .colorize('#1f2937')
      .newLine()
      .colorize('#e5e7eb')
      .type('sin(45°) × π ≈ 2.2214')
      .start();
  }, [currentValue, calculationMode, memoryValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue(prev => Math.round((Math.random() * 1000 + prev * 0.1) * 100) / 100);
      const modes = ['basic', 'scientific', 'programming', 'statistics'];
      setCalculationMode(modes[Math.floor(Math.random() * modes.length)]);
      setMemoryValue(prev => Math.round((prev + (Math.random() - 0.5) * 100) * 100) / 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#f5f3ff',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid #7c3aed',
          position: 'relative',
          background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};
