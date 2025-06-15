import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const ChatSimulation: React.FC = () => {
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
      .colorize('#374151')
      .newLine()
      .type('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#6b7280')
      .type('Sarah joined the channel')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('Sarah')
      .colorize('#6b7280')
      .type(' - 2:34 PM')
      .colorize('#374151')
      .newLine()
      .type('Hey team! Just pushed the latest UI updates 🚀')
      .newLine()
      .type('The new color scheme looks amazing!')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#ef4444')
      .type('Alex')
      .colorize('#6b7280')
      .type(' - 2:35 PM')
      .colorize('#374151')
      .newLine()
      .type('Awesome work Sarah! ')
      .colorize('#f59e0b')
      .type('👏')
      .colorize('#374151')
      .newLine()
      .type('I tested it on mobile - everything looks perfect')
      .newLine()
      .type('Should we schedule the deployment for tomorrow?')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#6b7280')
      .type('Mike is typing...')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .deleteLetters(17)
      .colorize('#8b5cf6')
      .type('Mike')
      .colorize('#6b7280')
      .type(' - 2:36 PM')
      .colorize('#374151')
      .newLine()
      .type('Perfect timing! ')
      .colorize('#f59e0b')
      .type('⚡')
      .colorize('#374151')
      .newLine()
      .type('I just finished the API optimization')
      .newLine()
      .type('Performance improved by 40% - check this out:')
      .newLine()
      .newLine()
      .colorize('#374151')
      .type('┌─────────────────────────────────────┐')
      .newLine()
      .type('│ ')
      .colorize('#10b981')
      .type('✓ API Response Time: 120ms → 72ms  ')
      .colorize('#374151')
      .type('│')
      .newLine()
      .type('│ ')
      .colorize('#10b981')
      .type('✓ Memory Usage: 85MB → 51MB       ')
      .colorize('#374151')
      .type('│')
      .newLine()
      .type('│ ')
      .colorize('#10b981')
      .type('✓ Bundle Size: 2.1MB → 1.3MB      ')
      .colorize('#374151')
      .type('│')
      .newLine()
      .type('└─────────────────────────────────────┘')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#3b82f6')
      .type('Sarah')
      .colorize('#6b7280')
      .type(' - 2:38 PM')
      .colorize('#374151')
      .newLine()
      .type('Holy moly! ')
      .colorize('#f59e0b')
      .type('🤯')
      .colorize('#374151')
      .type(" That's incredible Mike!")
      .newLine()
      .type('Ready to deploy tomorrow! 🎉')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          padding: '2rem',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          borderRadius: '12px',
          minHeight: '400px',
          color: 'var(--ifm-color-content)',
          whiteSpace: 'pre-wrap',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'var(--ifm-color-success)',
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: '600',
          }}
        >
          {onlineUsers} online
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default ChatSimulation;
