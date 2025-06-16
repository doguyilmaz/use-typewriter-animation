import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const StorytellingDemoExample: React.FC = () => {
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
      background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
      textColor: '#2d3748',
    },
    {
      title: 'Day',
      background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
      textColor: '#ffffff',
    },
    {
      title: 'Dusk',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textColor: '#ffffff',
    },
    {
      title: 'Night',
      background: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
      textColor: '#ffffff',
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

      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Scene 2: Day - Start transition first
      setCurrentScene(1);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for background transition
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

      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Scene 3: Dusk - Start transition first
      setCurrentScene(2);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for background transition
      typewriter
        .colorize('#a29bfe')
        .type('🌆 Chapter 3: The Mastery')
        .pauseFor(1000)
        .type('\n\n')
        .colorize('#ffffff')
        .type('As evening approached, the developer refined their craft.')
        .pauseFor(800)
        .type('\n\nThey discovered the power of ')
        .colorize('#fd79a8')
        .type('accessibility')
        .colorize('#ffffff')
        .type(', the importance of ')
        .colorize('#fdcb6e')
        .type('performance')
        .colorize('#ffffff')
        .type(', and the art of ')
        .colorize('#00b894')
        .type('elegant design')
        .colorize('#ffffff')
        .type('.')
        .pauseFor(1000)
        .type('\n\nEach animation became more ')
        .colorize('#e17055')
        .type('polished')
        .colorize('#ffffff')
        .type(', more ')
        .colorize('#a29bfe')
        .type('meaningful')
        .colorize('#ffffff')
        .type('.')
        .pauseFor(2000)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Scene 4: Night - Start transition first
      setCurrentScene(3);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for background transition
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
            50% { transform: translateY(-5px) rotate(2deg); }
          }
          
          @keyframes background-dawn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes background-day {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes background-night {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
      <div
        style={{
          minHeight: '500px',
          borderRadius: '12px',
          // padding: '3rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background layers for smooth transitions */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: scenes[0].background,
            opacity: currentScene === 0 ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            borderRadius: '12px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: scenes[1].background,
            opacity: currentScene === 1 ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            borderRadius: '12px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: scenes[2].background,
            opacity: currentScene === 2 ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            borderRadius: '12px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: scenes[3].background,
            opacity: currentScene === 3 ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            borderRadius: '12px',
          }}
        />

        {/* Scene indicator in top-right */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#ffffff',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>
            {currentScene === 0
              ? '🌅'
              : currentScene === 1
              ? '☀️'
              : currentScene === 2
              ? '🌆'
              : '🌙'}
          </span>
          <span>{scenes[currentScene]?.title || 'Dawn'}</span>
        </div>

        <div
          style={{
            fontSize: '1.2rem',
            fontFamily: 'system-ui, sans-serif',
            color: scenes[currentScene]?.textColor || '#ffffff',
            whiteSpace: 'pre-line',
            lineHeight: '1.6',
            textAlign: 'center',
            maxWidth: '800px',
            width: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            position: 'relative',
            zIndex: 5,
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default StorytellingDemoExample;
