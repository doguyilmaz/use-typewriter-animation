import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

export const ChatSimulation: React.FC = () => {
  const { colorMode } = useColorMode();
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
      .type('# project-alpha')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#6b7280')
      .type('Sarah joined #project-alpha')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('Sarah')
      .colorize('#6b7280')
      .type(' Today at 2:34 PM')
      .newLine()
      .colorize('#e5e7eb')
      .type('Hey team! Just pushed the latest UI updates 🚀')
      .newLine()
      .type('The new color scheme looks amazing!')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#ef4444')
      .type('Alex')
      .colorize('#6b7280')
      .type(' Today at 2:35 PM')
      .newLine()
      .colorize('#e5e7eb')
      .type('Awesome work Sarah! ')
      .colorize('#f59e0b')
      .type('👏')
      .newLine()
      .colorize('#e5e7eb')
      .type('I tested it on mobile - everything looks perfect')
      .newLine()
      .type('Should we schedule the deployment for tomorrow?')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#6b7280')
      .type('Mike is typing...')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .deleteLetters(17)
      .colorize('#8b5cf6')
      .type('Mike')
      .colorize('#6b7280')
      .type(' Today at 2:36 PM')
      .newLine()
      .colorize('#e5e7eb')
      .type('Perfect timing! ')
      .colorize('#f59e0b')
      .type('⚡')
      .newLine()
      .colorize('#e5e7eb')
      .type('I just finished the API optimization')
      .newLine()
      .type('Performance improved by 40% - check this out:')
      .newLine()
      .newLine()
      .colorize('#2d3748')
      .type('```')
      .newLine()
      .colorize('#10b981')
      .type('✓ API Response Time: 120ms → 72ms')
      .newLine()
      .type('✓ Memory Usage: 85MB → 51MB')
      .newLine()
      .type('✓ Bundle Size: 2.1MB → 1.3MB')
      .newLine()
      .colorize('#2d3748')
      .type('```')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#3b82f6')
      .type('Sarah')
      .colorize('#6b7280')
      .type(' Today at 2:38 PM')
      .newLine()
      .colorize('#e5e7eb')
      .type('Holy moly! ')
      .colorize('#f59e0b')
      .type('🤯')
      .colorize('#e5e7eb')
      .type(" That's incredible Mike!")
      .newLine()
      .type('Ready to deploy tomorrow! 🎉')
      .start();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prev => Math.max(1, prev + (Math.random() > 0.5 ? 1 : -1)));
      setCurrentTyper(['Alex', 'Sarah', 'Mike', 'Jennifer'][Math.floor(Math.random() * 4)]);
      setMessageCount(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes slackPulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          
          @keyframes typing {
            0%, 60%, 100% { opacity: 0.4; }
            30% { opacity: 1; }
          }
          
          .slack-sidebar::-webkit-scrollbar {
            width: 6px;
          }
          
          .slack-sidebar::-webkit-scrollbar-track {
            background: ${colorMode === 'dark' ? '#2d3748' : '#f1f5f9'};
          }
          
          .slack-sidebar::-webkit-scrollbar-thumb {
            background: ${colorMode === 'dark' ? '#4a5568' : '#cbd5e0'};
            border-radius: 3px;
          }
          
          .chat-content::-webkit-scrollbar {
            width: 8px;
          }
          
          .chat-content::-webkit-scrollbar-track {
            background: ${colorMode === 'dark' ? '#1a202c' : '#f8fafc'};
          }
          
          .chat-content::-webkit-scrollbar-thumb {
            background: ${colorMode === 'dark' ? '#4a5568' : '#e2e8f0'};
            border-radius: 4px;
          }
        `}
      </style>
      
      {/* Slack-style Layout */}
      <div
        style={{
          display: 'flex',
          height: '500px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '14px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: colorMode === 'dark' ? '1px solid #2d3748' : '1px solid #e2e8f0',
          boxShadow: colorMode === 'dark' 
            ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Sidebar */}
        <div
          className="slack-sidebar"
          style={{
            width: '240px',
            background: colorMode === 'dark' 
              ? 'linear-gradient(180deg, #4a154b 0%, #350d36 100%)'
              : 'linear-gradient(180deg, #611f69 0%, #4a154b 100%)',
            color: 'white',
            padding: '0',
            overflowY: 'auto',
            borderRight: colorMode === 'dark' ? '1px solid #2d3748' : '1px solid #e2e8f0',
          }}
        >
          {/* Workspace Header */}
          <div style={{
            padding: '16px 16px 12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <div style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '4px',
              color: 'white',
            }}>
              DevTeam
            </div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'slackPulse 2s infinite',
              }} />
              {onlineUsers} members online
            </div>
          </div>

          {/* Channels */}
          <div style={{ padding: '12px 0' }}>
            <div style={{
              padding: '4px 16px',
              fontSize: '13px',
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '8px',
            }}>
              Channels
            </div>
            
            <div style={{
              padding: '6px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ color: '#00d4aa' }}>#</span>
              project-alpha
              <div style={{
                marginLeft: 'auto',
                background: '#ef4444',
                color: 'white',
                borderRadius: '10px',
                padding: '1px 6px',
                fontSize: '11px',
                fontWeight: '600',
              }}>
                3
              </div>
            </div>
            
            <div style={{
              padding: '6px 16px',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span>#</span>
              general
            </div>
            
            <div style={{
              padding: '6px 16px',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span>#</span>
              random
            </div>
          </div>

          {/* Direct Messages */}
          <div style={{ padding: '12px 0' }}>
            <div style={{
              padding: '4px 16px',
              fontSize: '13px',
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '8px',
            }}>
              Direct Messages
            </div>
            
            {['Sarah', 'Alex', 'Mike', 'Jennifer'].map((name, index) => (
              <div key={name} style={{
                padding: '6px 16px',
                color: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: index < 2 ? '#10b981' : '#6b7280',
                }} />
                {name}
                {name === currentTyper && (
                  <div style={{
                    fontSize: '10px',
                    animation: 'typing 1.5s infinite',
                  }}>
                    typing...
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Channel Header */}
          <div style={{
            padding: '16px 20px',
            borderBottom: colorMode === 'dark' ? '1px solid #2d3748' : '1px solid #e2e8f0',
            background: colorMode === 'dark' ? '#1a202c' : '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              fontWeight: '700',
              fontSize: '16px',
              color: colorMode === 'dark' ? '#ffffff' : '#1a202c',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <span style={{ color: '#00d4aa' }}>#</span>
              project-alpha
            </div>
            <div style={{
              fontSize: '12px',
              color: colorMode === 'dark' ? '#a0aec0' : '#6b7280',
            }}>
              Sprint planning and development updates
            </div>
            <div style={{
              marginLeft: 'auto',
              background: colorMode === 'dark' ? '#2d3748' : '#f1f5f9',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              color: colorMode === 'dark' ? '#a0aec0' : '#6b7280',
            }}>
              {messageCount} messages today
            </div>
          </div>

          {/* Messages */}
          <div
            className="chat-content"
            style={{
              flex: 1,
              padding: '16px 20px',
              background: colorMode === 'dark' ? '#1a202c' : '#ffffff',
              overflowY: 'auto',
              whiteSpace: 'pre-line',
            }}
          >
            {elements}
            {cursor}
          </div>

          {/* Message Input */}
          <div style={{
            padding: '16px 20px',
            borderTop: colorMode === 'dark' ? '1px solid #2d3748' : '1px solid #e2e8f0',
            background: colorMode === 'dark' ? '#1a202c' : '#ffffff',
          }}>
            <div style={{
              background: colorMode === 'dark' ? '#2d3748' : '#f8fafc',
              border: colorMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '14px',
              color: colorMode === 'dark' ? '#a0aec0' : '#6b7280',
            }}>
              Message #project-alpha
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSimulation;
