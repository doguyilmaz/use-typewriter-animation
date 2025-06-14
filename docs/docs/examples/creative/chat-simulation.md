---
sidebar_position: 1
title: Chat Simulation
description: Realistic messaging interface with multiple users, typing indicators, and modern chat features
tags: [chat, messaging, conversation, team, communication]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ChatSimulationExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={ChatSimulationExample}
difficulty="Intermediate"
description="Create realistic messaging interfaces with multiple users, typing indicators, and modern chat features. Perfect for team communication tools, customer support systems, and social platforms with authentic conversation flow."
tags={["Team communication", "Messaging interface", "Typing indicators", "User interaction", "Real-time chat"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const ChatSimulationExample: React.FC = () => {
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
      .colorize('#2d3748')
      .newLine()
      .type('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#718096')
      .type('Sarah joined the channel')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3182ce')
      .type('Sarah')
      .colorize('#718096')
      .type(' - 2:34 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Hey team! Just pushed the latest UI updates 🚀')
      .newLine()
      .type('The new color scheme looks amazing!')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#e53e3e')
      .type('Alex')
      .colorize('#718096')
      .type(' - 2:35 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Awesome work Sarah! ')
      .colorize('#f6ad55')
      .type('👏')
      .colorize('#2d3748')
      .newLine()
      .type('I tested it on mobile - everything looks perfect')
      .newLine()
      .type('Should we schedule the deployment for tomorrow?')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#718096')
      .type('Mike is typing...')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .deleteLetters(17)
      .colorize('#805ad5')
      .type('Mike')
      .colorize('#718096')
      .type(' - 2:36 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Perfect timing! ')
      .colorize('#f6ad55')
      .type('⚡')
      .colorize('#2d3748')
      .newLine()
      .type('I just finished the API optimization')
      .newLine()
      .type('Performance improved by 40% - check this out:')
      .newLine()
      .newLine()
      .colorize('#2d3748')
      .type('┌─────────────────────────────────────┐')
      .newLine()
      .type('│ ')
      .colorize('#38a169')
      .type('✓ API Response Time: 120ms → 72ms  ')
      .colorize('#2d3748')
      .type('│')
      .newLine()
      .type('│ ')
      .colorize('#38a169')
      .type('✓ Memory Usage: 85MB → 51MB       ')
      .colorize('#2d3748')
      .type('│')
      .newLine()
      .type('│ ')
      .colorize('#38a169')
      .type('✓ Bundle Size: 2.1MB → 1.3MB      ')
      .colorize('#2d3748')
      .type('│')
      .newLine()
      .type('└─────────────────────────────────────┘')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#3182ce')
      .type('Sarah')
      .colorize('#718096')
      .type(' - 2:38 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Holy moly! ')
      .colorize('#f6ad55')
      .type('🤯')
      .colorize('#2d3748')
      .type(' That\\'s incredible Mike!')
      .newLine()
      .type('How did you manage such huge improvements?')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#805ad5')
      .type('Mike')
      .colorize('#718096')
      .type(' - 2:39 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Mainly three things:')
      .newLine()
      .type('1. ')
      .colorize('#f6ad55')
      .type('🔄')
      .colorize('#2d3748')
      .type(' Implemented Redis caching for frequent queries')
      .newLine()
      .type('2. ')
      .colorize('#f6ad55')
      .type('⚡')
      .colorize('#2d3748')
      .type(' Switched to lazy loading for components')
      .newLine()
      .type('3. ')
      .colorize('#f6ad55')
      .type('🗜️')
      .colorize('#2d3748')
      .type(' Optimized database indexes')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#e53e3e')
      .type('Alex')
      .colorize('#718096')
      .type(' - 2:40 PM')
      .colorize('#2d3748')
      .newLine()
      .type('This is going to make our users SO happy ')
      .colorize('#f6ad55')
      .type('😊')
      .colorize('#2d3748')
      .newLine()
      .type('Let\\'s definitely ship this tomorrow!')
      .newLine()
      .type('I\\'ll update the deployment docs')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#718096')
      .type('Emma joined the channel')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .colorize('#d69e2e')
      .type('Emma')
      .colorize('#718096')
      .type(' - 2:41 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Hey everyone! ')
      .colorize('#f6ad55')
      .type('👋')
      .colorize('#2d3748')
      .newLine()
      .type('Just saw the performance metrics - AMAZING work team!')
      .newLine()
      .type('Marketing is going to love these numbers ')
      .colorize('#f6ad55')
      .type('📈')
      .colorize('#2d3748')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#3182ce')
      .type('Sarah')
      .colorize('#718096')
      .type(' - 2:42 PM')
      .colorize('#2d3748')
      .newLine()
      .type('Thanks Emma! ')
      .colorize('#f6ad55')
      .type('🎉')
      .colorize('#2d3748')
      .newLine()
      .type('Should we schedule a demo for the stakeholders?')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#718096')
      .type('Alex is typing...')
      .start();
  }, []);

  // Simulate chat activity
  useEffect(() => {
    const users = ['Sarah', 'Alex', 'Mike', 'Emma', 'David'];
    const interval = setInterval(() => {
      setOnlineUsers(Math.floor(Math.random() * 3) + 3);
      setCurrentTyper(users[Math.floor(Math.random() * users.length)]);
      setMessageCount(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {\`
          @keyframes message-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 170, 0.2); }
            50% { box-shadow: 0 0 40px rgba(0, 212, 170, 0.4); }
          }
          
          @keyframes typing-dots {
            0%, 20% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          
          @keyframes pulse-online {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          
          .chat-container {
            animation: message-glow 4s ease-in-out infinite;
          }
          
          .typing-indicator {
            animation: typing-dots 1.5s ease-in-out infinite;
          }
          
          .online-indicator {
            animation: pulse-online 2s ease-in-out infinite;
          }
        \`}
      </style>
      <div
        className="chat-container"
        style={{
          backgroundColor: '#ffffff',
          color: '#2d3748',
          fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", sans-serif',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          padding: '0',
          borderRadius: '16px',
          minHeight: '400px',
          maxHeight: '500px',
          overflowY: 'auto',
          border: '2px solid #00d4aa',
          position: 'relative',
          background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            backgroundColor: '#00d4aa',
            color: '#ffffff',
            padding: '16px 20px',
            borderRadius: '14px 14px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '1.2rem' }}>💬</div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '1rem' }}>Team Alpha</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                {onlineUsers} members online
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div
              className="online-indicator"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#38a169',
                borderRadius: '50%',
              }}
            />
            <div style={{ fontSize: '0.8rem' }}>Active</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div
          style={{
            padding: '20px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {elements}
          {cursor}
        </div>

        {/* Chat Footer */}
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: '#f7fafc',
            borderTop: '1px solid #e2e8f0',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0 0 14px 14px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#718096' }}>
              {currentTyper} is typing...
            </div>
            <div
              className="typing-indicator"
              style={{
                display: 'flex',
                gap: '3px',
              }}
            >
              <div style={{ width: '4px', height: '4px', backgroundColor: '#cbd5e0', borderRadius: '50%' }} />
              <div style={{ width: '4px', height: '4px', backgroundColor: '#cbd5e0', borderRadius: '50%' }} />
              <div style={{ width: '4px', height: '4px', backgroundColor: '#cbd5e0', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#718096' }}>
              {messageCount} new messages
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: '#3182ce', borderRadius: '50%' }} />
              <div style={{ width: '6px', height: '6px', backgroundColor: '#e53e3e', borderRadius: '50%' }} />
              <div style={{ width: '6px', height: '6px', backgroundColor: '#805ad5', borderRadius: '50%' }} />
              <div style={{ width: '6px', height: '6px', backgroundColor: '#d69e2e', borderRadius: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSimulationExample;`}
instructions={[
"Use deleteLetters() to simulate typing corrections and natural conversation flow",
"Implement multiple user personas with consistent color coding for easy identification", 
"Add pauseFor() delays to simulate natural conversation timing and reading rhythm",
"Include emojis and rich content like ASCII tables for realistic team communication",
"Create interactive header and footer elements with live activity indicators"
]}
/>

## Use Cases

- **Team Communication**: Demonstrate collaboration tools and team chat platforms like Slack or Discord
- **Customer Support**: Showcase support chat interfaces and helpdesk systems with agent interactions
- **Social Platforms**: Prototype messaging features for social applications and community tools
- **Educational Tools**: Teach communication patterns and team dynamics in professional environments
- **Product Demos**: Demonstrate real-time messaging capabilities and collaborative workflows