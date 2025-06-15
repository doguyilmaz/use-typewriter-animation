import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const AIChatInterface: React.FC = () => {
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
          backgroundColor: 'var(--ifm-background-surface-color)',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid var(--ifm-color-primary)',
          position: 'relative',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
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

export default AIChatInterface;