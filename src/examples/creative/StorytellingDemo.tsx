import { useEffect, useState } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const StorytellingDemo = () => {
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
      title: 'Sunset',
      background: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
      textColor: '#2d3748',
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
        .type('\n\nThey learned about:')
        .pauseFor(400)
        .type('\n• ')
        .colorize('#00b894')
        .type('Accessibility')
        .colorize('#ffffff')
        .type(' - making experiences inclusive')
        .pauseFor(400)
        .type('\n• ')
        .colorize('#fdcb6e')
        .type('Performance')
        .colorize('#ffffff')
        .type(' - keeping things lightning fast')
        .pauseFor(400)
        .type('\n• ')
        .colorize('#6c5ce7')
        .type('Elegance')
        .colorize('#ffffff')
        .type(' - beauty in simplicity')
        .pauseFor(2500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 8000));

      // Scene 3: Sunset
      setCurrentScene(2);
      typewriter
        .colorize('#e17055')
        .type('🌅 Chapter 3: The Mastery')
        .pauseFor(1000)
        .type('\n\n')
        .colorize('#2d3748')
        .type('As the sun began to set, our developer realized that ')
        .colorize('#fd79a8')
        .type('true mastery')
        .colorize('#2d3748')
        .type(' comes not from complex code, but from ')
        .colorize('#00b894')
        .type('understanding users')
        .colorize('#2d3748')
        .type(' and their needs.')
        .pauseFor(500)
        .type('\n\nEvery animation should tell a story.')
        .pauseFor(500)
        .type('\nEvery interaction should feel natural.')
        .pauseFor(500)
        .type('\nEvery user should feel welcomed.')
        .pauseFor(2500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 7000));

      // Scene 4: Night
      setCurrentScene(3);
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
      <style>{keyframes}</style>
      <div
        style={{
          minHeight: '100vh',
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
        <div
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            animation: currentScene === 1 ? 'float 8s ease-in-out infinite reverse' : 'none',
          }}
        />

        {/* Scene indicator */}
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
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
            maxWidth: '700px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '3rem',
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div
              style={{
                fontSize: '1.5rem',
                lineHeight: '1.8',
                color: scenes[currentScene]?.textColor || '#ffffff',
                whiteSpace: 'pre-wrap',
                textAlign: 'left',
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
            bottom: '2rem',
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

        {/* CSS for floating animation */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
          `}
        </style>
      </div>
    </>
  );
};
