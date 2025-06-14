# Music Player Demo

This example simulates a retro music player interface with song information, playback controls, and animated waveform visualization.

## Live Demo

```tsx live
function MusicPlayerDemo() {
  const [currentTime, setCurrentTime] = useState('0:00');
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#ff6b6b',
  });

  useEffect(() => {
    typewriter
      .colorize('#ff6b6b')
      .type('♪ ♫ RETRO MUSIC PLAYER ♫ ♪')
      .colorize('#333333')
      .newLine()
      .type('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#4ecdc4')
      .type('Now Playing:')
      .colorize('#333333')
      .newLine()
      .colorize('#ff6b6b')
      .type('🎵 "Cosmic Journey"')
      .colorize('#333333')
      .newLine()
      .colorize('#95e1d3')
      .type('Artist: ')
      .colorize('#666666')
      .type('Digital Dreams')
      .colorize('#333333')
      .newLine()
      .colorize('#95e1d3')
      .type('Album: ')
      .colorize('#666666')
      .type('Neon Nights (2024)')
      .colorize('#333333')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#4ecdc4')
      .type('⏯️  Controls: ')
      .colorize('#ff6b6b')
      .type('⏮️ ⏸️ ⏭️')
      .colorize('#333333')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#ffd93d')
      .type('📊 Waveform: ')
      .colorize('#ff6b6b')
      .type('▁▃▅▂▄▆▅▃▁▂▄▇▅▂▁▃▆▄▂▅▃▁')
      .colorize('#333333')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#95e1d3')
      .type('Duration: ')
      .colorize('#666666')
      .type('3:47')
      .colorize('#333333')
      .type(' / ')
      .colorize('#666666')
      .type('3:47')
      .colorize('#333333')
      .newLine()
      .colorize('#95e1d3')
      .type('Progress: ')
      .colorize('#ff6b6b')
      .type('█')
      .pauseFor(200)
      .type('█')
      .pauseFor(200)
      .type('█')
      .pauseFor(200)
      .type('█')
      .pauseFor(200)
      .type('█')
      .pauseFor(200)
      .type('█')
      .colorize('#e0e0e0')
      .type('░░░░░░░░░░')
      .colorize('#333333')
      .type(' 60%')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#4ecdc4')
      .type('🎧 Volume: ')
      .colorize('#ff6b6b')
      .type('██████████')
      .colorize('#e0e0e0')
      .type('░░')
      .colorize('#666666')
      .type(' 80%')
      .colorize('#333333')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#ffd93d')
      .type('⭐ Rating: ')
      .colorize('#ff6b6b')
      .type('★★★★☆')
      .colorize('#333333')
      .type(' (4.2/5)')
      .start();
  }, []);

  // Simulate time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const minutes = Math.floor(Math.random() * 4);
      const seconds = Math.floor(Math.random() * 60);
      setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      setIsPlaying(Math.random() > 0.5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          
          @keyframes waveform {
            0%, 100% { transform: scaleY(1); }
            25% { transform: scaleY(1.5); }
            50% { transform: scaleY(0.8); }
            75% { transform: scaleY(1.2); }
          }
        `}
      </style>
      <div
        style={{
          fontFamily: '"IBM Plex Mono", "Courier New", monospace',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          padding: '2.5rem',
          backgroundColor: '#f7f9fc',
          border: '3px solid #ff6b6b',
          borderRadius: '20px',
          minHeight: '320px',
          boxShadow: '0 15px 35px rgba(255, 107, 107, 0.2)',
          position: 'relative',
          background: 'linear-gradient(135deg, #f7f9fc 0%, #e8f4f8 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#ff6b6b',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            animation: isPlaying ? 'pulse 2s infinite' : 'none',
          }}
        >
          {isPlaying ? '🔊 PLAYING' : '⏸️ PAUSED'} • {currentTime}
        </div>

        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#4ecdc4',
              borderRadius: '50%',
              animation: 'pulse 1s infinite',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#ffd93d',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#ff6b6b',
              borderRadius: '50%',
            }}
          />
        </div>

        <div style={{ color: '#333333', whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Music Interface**: Complete music player simulation
- **Real-time Updates**: Dynamic time and status indicators
- **Visual Progress Bars**: Show playback progress and volume levels
- **Waveform Visualization**: ASCII art representation of audio
- **Rating System**: Star-based music rating display
- **Control Buttons**: Standard music player controls (play, pause, skip)
- **Color-coded Information**: Different colors for different data types

## Music Player Elements

1. **Track Information**: Song title, artist, album
2. **Playback Controls**: Visual representation of player buttons
3. **Progress Tracking**: Time elapsed and remaining
4. **Volume Control**: Visual volume level indicator
5. **Waveform Display**: ASCII-based audio visualization
6. **Rating System**: Star ratings for tracks

## Interactive Features

- **Live Status**: Real-time playing/paused status
- **Dynamic Time**: Simulated current playback time
- **Visual Feedback**: Pulsing animations for active states
- **Status Indicators**: LED-style lights showing system status

## Use Cases

- **Music Streaming Sites**: Showcase player interface design
- **Audio Software Demos**: Demonstrate music application features
- **Creative Portfolios**: Show UI/UX design capabilities
- **Entertainment Websites**: Create engaging music-themed content
- **Retro-themed Projects**: Nostalgic music player aesthetics