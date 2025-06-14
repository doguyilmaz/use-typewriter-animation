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

// Code Editor Simulation
export const CodeEditorExample: React.FC = () => {
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
