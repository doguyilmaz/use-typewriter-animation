---
sidebar_position: 9
title: Music Player
description: Interactive music player interface with song queue and playback controls
tags: [music, player, audio, interface, entertainment]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { MusicPlayerExample } from '@site/src/examples/creative';

<ExamplePage
component={MusicPlayerExample}
difficulty="Intermediate"
description="Build an immersive music player interface with song queue management, playback controls, and real-time track information display. Perfect for entertainment apps, audio streaming platforms, and multimedia showcases."
tags={["Music interface", "Audio player", "Playlist management", "Entertainment apps", "Media controls"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const MusicPlayerExample: React.FC = () => {
const [currentTrack, setCurrentTrack] = useState(0);
const [isPlaying, setIsPlaying] = useState(true);
const [volume, setVolume] = useState(75);

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
typewriter
.colorize('#8b5cf6')
.type('🎵 MUSIC PLAYER INTERFACE 🎵')
.colorize('#e5e7eb')
.newLine()
.type('══════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#10b981')
.type('♪ Now Playing:')
.colorize('#e5e7eb')
.newLine()
.colorize('#3b82f6')
.type('🎧 ')
.colorize('#f3f4f6')
.type('Synthwave Dreams')
.colorize('#9ca3af')
.type(' - Neon Pulse')
.colorize('#e5e7eb')
.newLine()
.colorize('#6b7280')
.type('Duration: 3:42 | Quality: 320kbps | Genre: Electronic')
.colorize('#e5e7eb')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#fbbf24')
.type('🎛️ Playback Controls:')
.colorize('#e5e7eb')
.newLine()
.type('────────────────────────────────────────')
.newLine()
.pauseFor(600)
.colorize('#6b7280')
.type('[')
.colorize('#10b981')
.type('⏮️ PREV')
.colorize('#6b7280')
.type('] [')
.colorize('#ef4444')
.type('⏸️ PAUSE')
.colorize('#6b7280')
.type('] [')
.colorize('#10b981')
.type('⏭️ NEXT')
.colorize('#6b7280')
.type('] [')
.colorize('#8b5cf6')
.type('🔀 SHUFFLE')
.colorize('#6b7280')
.type('] [')
.colorize('#f59e0b')
.type('🔁 REPEAT')
.colorize('#6b7280')
.type(']')
.colorize('#e5e7eb')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#3b82f6')
.type('🎚️ Volume: ')
.colorize('#10b981')
.type('75%')
.colorize('#6b7280')
.type(' [████████░░] ')
.colorize('#e5e7eb')
.newLine()
.colorize('#8b5cf6')
.type('📊 Progress: ')
.colorize('#fbbf24')
.type('1:23')
.colorize('#6b7280')
.type(' / ')
.colorize('#9ca3af')
.type('3:42')
.colorize('#6b7280')
.type(' [███░░░░░░░]')
.colorize('#e5e7eb')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#f59e0b')
.type('📜 QUEUE (4 tracks):')
.colorize('#e5e7eb')
.newLine()
.type('══════════════════════════════════════════')
.newLine()
.pauseFor(600)
.colorize('#10b981')
.type('▶ ')
.colorize('#f3f4f6')
.type('1. Synthwave Dreams')
.colorize('#9ca3af')
.type(' - Neon Pulse')
.colorize('#6b7280')
.type(' (3:42)')
.colorize('#e5e7eb')
.newLine()
.pauseFor(400)
.colorize('#6b7280')
.type(' ')
.colorize('#f3f4f6')
.type('2. Digital Horizon')
.colorize('#9ca3af')
.type(' - Cyber Flow')
.colorize('#6b7280')
.type(' (4:15)')
.colorize('#e5e7eb')
.newLine()
.pauseFor(400)
.colorize('#6b7280')
.type(' ')
.colorize('#f3f4f6')
.type('3. Electric Nights')
.colorize('#9ca3af')
.type(' - Voltage')
.colorize('#6b7280')
.type(' (3:28)')
.colorize('#e5e7eb')
.newLine()
.pauseFor(400)
.colorize('#6b7280')
.type(' ')
.colorize('#f3f4f6')
.type('4. Future Vibes')
.colorize('#9ca3af')
.type(' - Echo Labs')
.colorize('#6b7280')
.type(' (3:55)')
.colorize('#e5e7eb')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#ec4899')
.type('🎨 Equalizer:')
.colorize('#e5e7eb')
.newLine()
.colorize('#6b7280')
.type('Bass: [██████░░░░] 60%')
.newLine()
.type('Mid: [████████░░] 80%')
.newLine()
.type('Treble: [██████████] 100%')
.colorize('#e5e7eb')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#10b981')
.type('💿 Album: ')
.colorize('#f3f4f6')
.type('Retrowave Collection Vol. 1')
.colorize('#e5e7eb')
.newLine()
.colorize('#3b82f6')
.type('🏷️ Playlist: ')
.colorize('#f3f4f6')
.type('Coding Sessions')
.colorize('#e5e7eb')
.newLine()
.colorize('#fbbf24')
.type('⭐ Favorites: ')
.colorize('#f3f4f6')
.type('247 tracks')
.colorize('#e5e7eb')
.newLine()
.newLine()
.pauseFor(1500)
.colorize('#8b5cf6')
.type('🎉 Enjoying your music! 🎉')
.start();
}, []);

// Simulate music player activity
useEffect(() => {
const interval = setInterval(() => {
setCurrentTrack(prev => (prev + 1) % tracks.length);
setIsPlaying(prev => Math.random() > 0.3);
setVolume(prev => Math.max(20, Math.min(100, prev + (Math.random() - 0.5) \* 20)));
}, 4000);

    return () => clearInterval(interval);

}, []);

return (
<>

<style>
{keyframes}
{\`
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
        \`}
      </style>

      <div
        style={{
          backgroundColor: '#1f2937',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#e5e7eb',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #8b5cf6',
          position: 'relative',
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
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
          }}
          className="music-pulse"
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
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
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
          }}
        >
          {[1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className="equalizer-bar"
              style={{
                width: '6px',
                backgroundColor: '#8b5cf6',
                borderRadius: '2px',
                animationDelay: \`\${i * 0.1}s\`,
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
            color: '#9ca3af',
          }}
        >
          🔊 {Math.round(volume)}%
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

export default MusicPlayerExample;`}
instructions={[
"Design immersive audio player interface with comprehensive controls",
"Implement queue management and track progression systems",
"Add real-time equalizer visualization and volume controls",
"Include metadata display for albums, playlists, and favorites",
"Create responsive player status indicators and progress tracking"
]}
/>

## Use Cases

- **Music Streaming Apps**: Core player interface for audio streaming platforms
- **Entertainment Software**: Media player components for desktop applications
- **Web Audio Projects**: Interactive music players for websites and portfolios
- **Educational Platforms**: Audio content players for courses and tutorials
- **Gaming Applications**: Background music controllers and audio management
