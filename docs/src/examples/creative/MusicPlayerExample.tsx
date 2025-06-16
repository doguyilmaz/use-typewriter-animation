import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const MusicPlayerExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(75);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 45,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
  });

  const tracks = [
    { title: 'Synthwave Dreams', artist: 'Neon Pulse', duration: '3:42' },
    { title: 'Digital Horizon', artist: 'Cyber Flow', duration: '4:15' },
    { title: 'Electric Nights', artist: 'Voltage', duration: '3:28' },
    { title: 'Future Vibes', artist: 'Echo Labs', duration: '3:55' },
  ];

  useEffect(() => {
    const textColor = colorMode === 'dark' ? '#e5e7eb' : '#1f2937';
    const mutedColor = colorMode === 'dark' ? '#6b7280' : '#9ca3af';
    const lightTextColor = colorMode === 'dark' ? '#f3f4f6' : '#111827';
    const subtleColor = colorMode === 'dark' ? '#9ca3af' : '#6b7280';

    typewriter
      .colorize('#8b5cf6')
      .type('🎵 MUSIC PLAYER INTERFACE 🎵')
      .colorize(textColor)
      .newLine()
      .type('══════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#10b981')
      .type('♪ Now Playing:')
      .colorize(textColor)
      .newLine()
      .colorize('#3b82f6')
      .type('🎧 ')
      .colorize(lightTextColor)
      .type('Synthwave Dreams')
      .colorize(subtleColor)
      .type(' - Neon Pulse')
      .colorize(textColor)
      .newLine()
      .colorize(mutedColor)
      .type('Duration: 3:42 | Quality: 320kbps | Genre: Electronic')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('🎛️ Playback Controls:')
      .colorize(textColor)
      .newLine()
      .type('────────────────────────────────────────')
      .newLine()
      .pauseFor(600)
      .colorize(mutedColor)
      .type('[')
      .colorize('#10b981')
      .type('⏮️ PREV')
      .colorize(mutedColor)
      .type('] [')
      .colorize('#ef4444')
      .type('⏸️ PAUSE')
      .colorize(mutedColor)
      .type('] [')
      .colorize('#10b981')
      .type('⏭️ NEXT')
      .colorize(mutedColor)
      .type('] [')
      .colorize('#8b5cf6')
      .type('🔀 SHUFFLE')
      .colorize(mutedColor)
      .type('] [')
      .colorize('#f59e0b')
      .type('🔁 REPEAT')
      .colorize(mutedColor)
      .type(']')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('🎚️ Volume: ')
      .colorize('#10b981')
      .type('75%')
      .colorize(mutedColor)
      .type(' [████████░░] ')
      .colorize(textColor)
      .newLine()
      .colorize('#8b5cf6')
      .type('📊 Progress: ')
      .colorize('#fbbf24')
      .type('1:23')
      .colorize(mutedColor)
      .type(' / ')
      .colorize(subtleColor)
      .type('3:42')
      .colorize(mutedColor)
      .type(' [███░░░░░░░]')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#f59e0b')
      .type('📜 QUEUE (4 tracks):')
      .colorize(textColor)
      .newLine()
      .type('══════════════════════════════════════════')
      .newLine()
      .pauseFor(600)
      .colorize('#10b981')
      .type('▶ ')
      .colorize(lightTextColor)
      .type('1. Synthwave Dreams')
      .colorize(subtleColor)
      .type(' - Neon Pulse')
      .colorize(mutedColor)
      .type(' (3:42)')
      .colorize(textColor)
      .newLine()
      .pauseFor(400)
      .colorize(mutedColor)
      .type(' ')
      .colorize(lightTextColor)
      .type('2. Digital Horizon')
      .colorize(subtleColor)
      .type(' - Cyber Flow')
      .colorize(mutedColor)
      .type(' (4:15)')
      .colorize(textColor)
      .newLine()
      .pauseFor(400)
      .colorize(mutedColor)
      .type(' ')
      .colorize(lightTextColor)
      .type('3. Electric Nights')
      .colorize(subtleColor)
      .type(' - Voltage')
      .colorize(mutedColor)
      .type(' (3:28)')
      .colorize(textColor)
      .newLine()
      .pauseFor(400)
      .colorize(mutedColor)
      .type(' ')
      .colorize(lightTextColor)
      .type('4. Future Vibes')
      .colorize(subtleColor)
      .type(' - Echo Labs')
      .colorize(mutedColor)
      .type(' (3:55)')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#ec4899')
      .type('🎨 Equalizer:')
      .colorize(textColor)
      .newLine()
      .colorize(mutedColor)
      .type('Bass: [██████░░░░] 60%')
      .newLine()
      .type('Mid: [████████░░] 80%')
      .newLine()
      .type('Treble: [██████████] 100%')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#10b981')
      .type('💿 Album: ')
      .colorize(lightTextColor)
      .type('Retrowave Collection Vol. 1')
      .colorize(textColor)
      .newLine()
      .colorize('#3b82f6')
      .type('🏷️ Playlist: ')
      .colorize(lightTextColor)
      .type('Coding Sessions')
      .colorize(textColor)
      .newLine()
      .colorize('#fbbf24')
      .type('⭐ Favorites: ')
      .colorize(lightTextColor)
      .type('247 tracks')
      .colorize(textColor)
      .newLine()
      .newLine()
      .pauseFor(1500)
      .colorize('#8b5cf6')
      .type('🎉 Enjoying your music! 🎉')
      .start();
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

  // Simulate music player activity
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrack((prev) => (prev + 1) % tracks.length);
      setIsPlaying((prev) => Math.random() > 0.3);
      setVolume((prev) => Math.max(20, Math.min(100, prev + (Math.random() - 0.5) * 20)));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes equalizer {
            0%, 100% { height: 20%; }
            25% { height: 60%; }
            50% { height: 100%; }
            75% { height: 40%; }
          }

          .music-pulse {
            animation: pulse 2s ease-in-out infinite;
          }

          .equalizer-bar {
            animation: equalizer 1.5s ease-in-out infinite;
          }

          .music-content::-webkit-scrollbar {
            width: 6px;
          }

          .music-content::-webkit-scrollbar-track {
            background: ${colorMode === 'dark' ? 'rgba(31, 41, 55, 0.5)' : 'rgba(248, 250, 252, 0.5)'};
            border-radius: 3px;
          }

          .music-content::-webkit-scrollbar-thumb {
            background: #8b5cf6;
            border-radius: 3px;
          }

          .music-content::-webkit-scrollbar-thumb:hover {
            background: #7c3aed;
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: colorMode === 'dark' ? '#1f2937' : '#f8fafc',
          borderRadius: '16px',
          padding: '2.5rem',
          paddingTop: '4rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: colorMode === 'dark' ? '#e5e7eb' : '#1f2937',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #8b5cf6',
          position: 'relative',
          background:
            colorMode === 'dark'
              ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          boxShadow:
            colorMode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)'
              : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 20px rgba(139, 92, 246, 0.15)',
        }}
      >
        {/* Album art placeholder */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '80px',
            height: '80px',
            backgroundColor: '#8b5cf6',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white',
            zIndex: 10,
          }}
          className='music-pulse'
        >
          🎵
        </div>

        {/* Player status */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor:
              colorMode === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            zIndex: 10,
          }}
        >
          <span style={{ color: isPlaying ? '#10b981' : '#ef4444' }}>
            {isPlaying ? '▶️' : '⏸️'}
          </span>
          <span>{isPlaying ? 'Playing' : 'Paused'}</span>
        </div>

        {/* Equalizer visualization */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '4px',
            alignItems: 'end',
            height: '40px',
            zIndex: 10,
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className='equalizer-bar'
              style={{
                width: '6px',
                backgroundColor: '#8b5cf6',
                borderRadius: '2px',
                animationDelay: `${i * 0.1}s`,
                minHeight: '8px',
              }}
            />
          ))}
        </div>

        {/* Volume indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            fontSize: '0.8rem',
            color: colorMode === 'dark' ? '#9ca3af' : '#6b7280',
            zIndex: 10,
          }}
        >
          🔊 {Math.round(volume)}%
        </div>

        {/* Main content */}
        <div 
          ref={contentRef}
          className="music-content"
          style={{ 
            whiteSpace: 'pre-line', 
            position: 'relative', 
            zIndex: 1,
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

export { MusicPlayerExample };
export default MusicPlayerExample;
