import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

export const AIChatInterface: React.FC = () => {
  const { colorMode } = useColorMode();
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
      .colorize('#ffffff')
      .type('🤖 AI Assistant')
      .newLine()
      .colorize('#ffffff')
      .type('Hello! How can I help you today?')
      .pauseFor(1000)
      .newLine()
      .newLine()
      .colorize('#000000')
      .type('You')
      .newLine()
      .colorize('#000000')
      .type('I\'m having trouble with my order')
      .pauseFor(1200)
      .newLine()
      .newLine()
      .colorize('#ffffff')
      .type('🤖 AI Assistant')
      .newLine()
      .colorize('#ffffff')
      .type(isTyping ? 'typing...' : 'I\'d be happy to help! Can you provide your order number?')
      .pauseFor(800)
      .newLine()
      .newLine()
      .colorize('#000000')
      .type('You')
      .newLine()
      .colorize('#000000')
      .type('Sure, it\'s #ORD-12345')
      .pauseFor(1000)
      .newLine()
      .newLine()
      .colorize('#ffffff')
      .type('🤖 AI Assistant')
      .newLine()
      .colorize('#ffffff')
      .type('Perfect! I found your order. Let me check the status...')
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
      <style>
        {keyframes}
        {`
          @keyframes messageSlide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes typingDot {
            0%, 60%, 100% { opacity: 0.3; }
            30% { opacity: 1; }
          }
          
          .message-slide {
            animation: messageSlide 0.5s ease-out;
          }
          
          .typing-indicator {
            display: inline-flex;
            gap: 2px;
          }
          
          .typing-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #8b5cf6;
            animation: typingDot 1.4s infinite;
          }
          
          .typing-dot:nth-child(2) { animation-delay: 0.2s; }
          .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        `}
      </style>
      
      {/* Chat Interface Container */}
      <div
        style={{
          background: colorMode === 'dark' 
            ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)'
            : 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)',
          borderRadius: '20px',
          padding: '0',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '0.9rem',
          minHeight: '500px',
          position: 'relative',
          overflow: 'hidden',
          border: colorMode === 'dark' ? '1px solid #4338ca' : '1px solid #6366f1',
          boxShadow: colorMode === 'dark' 
            ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.2)'
            : '0 20px 40px rgba(99, 102, 241, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.1)',
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            background: colorMode === 'dark' 
              ? 'rgba(30, 27, 75, 0.9)' 
              : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '16px 20px',
            borderBottom: colorMode === 'dark' 
              ? '1px solid rgba(99, 102, 241, 0.2)' 
              : '1px solid rgba(99, 102, 241, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* AI Avatar */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
            }}
          >
            🤖
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontWeight: '600', 
              fontSize: '16px',
              color: colorMode === 'dark' ? '#ffffff' : '#1f2937',
            }}>
              AI Support Assistant
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: colorMode === 'dark' ? '#a5b4fc' : '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: userStatus === 'online' ? '#10b981' : 
                           userStatus === 'away' ? '#f59e0b' : '#ef4444',
                animation: userStatus === 'online' ? 'pulse 2s infinite' : 'none',
              }} />
              {userStatus === 'typing' ? 'Typing...' : 'Online'}
            </div>
          </div>

          {/* Message Counter */}
          <div style={{
            background: colorMode === 'dark' 
              ? 'rgba(139, 92, 246, 0.2)' 
              : 'rgba(139, 92, 246, 0.1)',
            color: '#8b5cf6',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: '600',
          }}>
            {messageCount} messages
          </div>
        </div>

        {/* Chat Messages Area */}
        <div
          style={{
            padding: '20px',
            height: '400px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Message Bubbles Container */}
          <div style={{ position: 'relative', whiteSpace: 'pre-line' }}>
            {elements}
            {cursor}
          </div>
          
          {/* Typing Indicator */}
          {isTyping && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 0',
            }}>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
              }}>
                🤖
              </div>
              <div style={{
                background: colorMode === 'dark' 
                  ? 'rgba(139, 92, 246, 0.1)' 
                  : 'rgba(139, 92, 246, 0.05)',
                padding: '12px 16px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input Area */}
        <div
          style={{
            background: colorMode === 'dark' 
              ? 'rgba(30, 27, 75, 0.9)' 
              : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '16px 20px',
            borderTop: colorMode === 'dark' 
              ? '1px solid rgba(99, 102, 241, 0.2)' 
              : '1px solid rgba(99, 102, 241, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              flex: 1,
              background: colorMode === 'dark' 
                ? 'rgba(55, 65, 81, 0.5)' 
                : 'rgba(243, 244, 246, 0.8)',
              borderRadius: '20px',
              padding: '10px 16px',
              fontSize: '14px',
              color: colorMode === 'dark' ? '#9ca3af' : '#6b7280',
              border: colorMode === 'dark' 
                ? '1px solid rgba(75, 85, 99, 0.5)' 
                : '1px solid rgba(209, 213, 219, 0.5)',
            }}
          >
            Type your message...
          </div>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
            }}
          >
            ➤
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatInterface;