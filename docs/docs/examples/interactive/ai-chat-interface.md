---
sidebar_position: 3
title: AI Chat Interface
description: Interactive AI chatbot interface with message history and typing indicators
tags: [AI, chatbot, conversation, messaging, interface]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { AIChatInterfaceExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={AIChatInterfaceExample}
difficulty="Advanced"
description="Build a sophisticated AI chat interface with conversation management, typing indicators, and intelligent responses. Perfect for customer service, AI assistants, and interactive chatbot implementations."
tags={["AI chatbot", "Conversation interface", "Message system", "Interactive chat", "Customer service"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const AIChatInterfaceExample: React.FC = () => {
const [isTyping, setIsTyping] = useState(false);
const [messageCount, setMessageCount] = useState(0);
const [userStatus, setUserStatus] = useState('online');

const { typewriter, elements, cursor, keyframes } = useTypewriter({
typeSpeed: 30,
cursorStyle: 'line',
cursorColor: '#10b981',
});

const conversations = [
{ user: 'Hello! Can you help me with my account?', ai: 'Of course! I\\'d be happy to help you with your account. What specific issue are you experiencing?' },
{ user: 'I forgot my password and can\\'t log in', ai: 'No problem! I can help you reset your password. Let me guide you through the process step by step.' },
{ user: 'Thank you, that would be great!', ai: 'Perfect! I\\'ve sent a password reset link to your email. Please check your inbox and follow the instructions.' },
];

useEffect(() => {
typewriter
.colorize('#3b82f6')
.type('💬 AI CHAT INTERFACE 💬')
.colorize('#1f2937')
.newLine()
.type('═══════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(600)
.colorize('#10b981')
.type('🤖 AI Assistant: ')
.colorize('#6b7280')
.type('Online')
.colorize('#374151')
.type(' | ')
.colorize('#3b82f6')
.type('ChatBot v3.0')
.colorize('#374151')
.type(' | ')
.colorize('#8b5cf6')
.type('Response Time: <1s')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#fbbf24')
.type('💼 Welcome to Customer Support!')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('I\\'m here to help you 24/7. How can I assist you today?')
.colorize('#1f2937')
.newLine()
.type('──────────────────────────────────────────')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#3b82f6')
.type('👤 User: ')
.colorize('#1f2937')
.type('Hello! Can you help me with my account?')
.newLine()
.colorize('#6b7280')
.type(' ⏰ 2:34 PM • Delivered ✓')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#8b5cf6')
.type('🤖 AI is typing...')
.pauseFor(1500)
.deleteLine()
.colorize('#10b981')
.type('🤖 AI Assistant: ')
.colorize('#1f2937')
.type('Of course! I\\'d be happy to help you with your account.')
.pauseFor(400)
.type(' What specific issue are you experiencing?')
.newLine()
.colorize('#6b7280')
.type(' ⏰ 2:34 PM • Read ✓✓')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#3b82f6')
.type('👤 User: ')
.colorize('#1f2937')
.type('I forgot my password and can\\'t log in')
.newLine()
.colorize('#6b7280')
.type(' ⏰ 2:35 PM • Delivered ✓')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#8b5cf6')
.type('🤖 Analyzing issue...')
.pauseFor(1200)
.deleteLine()
.colorize('#10b981')
.type('🤖 AI Assistant: ')
.colorize('#1f2937')
.type('No problem! I can help you reset your password.')
.pauseFor(300)
.type(' Let me guide you through the process step by step.')
.newLine()
.colorize('#6b7280')
.type(' ⏰ 2:35 PM • Read ✓✓')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#f59e0b')
.type('🔧 Suggested Actions:')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Reset Password')
.colorize('#6b7280')
.type(' (Recommended)')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Contact Support')
.colorize('#6b7280')
.type(' (If issues persist)')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Security Check')
.colorize('#6b7280')
.type(' (Account verification)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#3b82f6')
.type('👤 User: ')
.colorize('#1f2937')
.type('Thank you, that would be great!')
.newLine()
.colorize('#6b7280')
.type(' ⏰ 2:36 PM • Delivered ✓')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#8b5cf6')
.type('🤖 Processing request...')
.pauseFor(1500)
.deleteLine()
.colorize('#10b981')
.type('🤖 AI Assistant: ')
.colorize('#1f2937')
.type('Perfect! I\\'ve sent a password reset link to your email.')
.pauseFor(400)
.type(' Please check your inbox and follow the instructions.')
.newLine()
.colorize('#6b7280')
.type(' ⏰ 2:36 PM • Read ✓✓')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#22c55e')
.type('✅ Email sent to: john.doe@example.com')
.colorize('#1f2937')
.newLine()
.colorize('#fbbf24')
.type('🔒 Security tip: The link expires in 15 minutes')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#ec4899')
.type('📊 Chat Statistics:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('Messages: 6 | Response time: 0.8s avg')
.newLine()
.type('User satisfaction: Excellent ⭐⭐⭐⭐⭐')
.newLine()
.type('Issue resolved: ✅ Password reset initiated')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#10b981')
.type('💡 Is there anything else I can help you with today?')
.start();
}, []);

// Simulate chat activity
useEffect(() => {
const interval = setInterval(() => {
setIsTyping(prev => !prev);
setMessageCount(prev => prev + 1);
const statuses = ['online', 'typing', 'away'];
setUserStatus(statuses[Math.floor(Math.random() * statuses.length)]);
}, 3000);

    return () => clearInterval(interval);

}, []);

return (
<>
<style>
{keyframes}
{\`
@keyframes typing-dots {
0%, 20% { opacity: 0; }
50% { opacity: 1; }
100% { opacity: 0; }
}

          @keyframes message-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }

          @keyframes online-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }

          .typing-indicator {
            display: flex;
            gap: 4px;
            align-items: center;
          }

          .typing-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #8b5cf6;
            animation: typing-dots 1.5s infinite;
          }

          .typing-dot:nth-child(2) { animation-delay: 0.2s; }
          .typing-dot:nth-child(3) { animation-delay: 0.4s; }

          .message-bubble {
            animation: message-bounce 0.5s ease-out;
          }

          .online-indicator {
            animation: online-pulse 2s infinite;
          }
        \`}
      </style>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #e5e7eb',
          position: 'relative',
          background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Chat header */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '60px',
            backgroundColor: '#3b82f6',
            borderRadius: '16px 16px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            color: 'white',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '1rem' }}>AI Assistant</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                {isTyping ? 'Typing...' : 'Online'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: userStatus === 'online' ? '#22c55e' : userStatus === 'typing' ? '#fbbf24' : '#6b7280',
              }}
              className={userStatus === 'online' ? 'online-indicator' : ''}
            />
            <span style={{ fontSize: '0.8rem' }}>
              {messageCount} messages
            </span>
          </div>
        </div>

        {/* Typing indicator */}
        {isTyping && (
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#f3f4f6',
              padding: '8px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              color: '#6b7280',
            }}
          >
            <span>AI is typing</span>
            <div className="typing-indicator">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          </div>
        )}

        {/* Quick actions */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '8px',
          }}
        >
          {['👍', '❓', '📞'].map((emoji, i) => (
            <div
              key={i}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              className="message-bubble"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Message status */}
        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: '1rem',
            fontSize: '0.7rem',
            color: '#6b7280',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '4px 8px',
            borderRadius: '8px',
          }}
        >
          Last seen: now
        </div>

        {/* Main content */}
        <div style={{ whiteSpace: 'pre-line', paddingTop: '70px' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>

);
};

export default AIChatInterfaceExample;`}
instructions={[
"Create realistic chat conversation flow with message delivery states",
"Implement AI typing indicators and response processing animations",
"Add comprehensive chat statistics and user activity tracking",
"Include suggested actions and smart response recommendations",
"Design modern chat interface with status indicators and quick actions"
]}
/>

## Use Cases

- **Customer Service**: Automated support chatbots and help desk interfaces
- **E-commerce Platforms**: Shopping assistants and product recommendation systems
- **Educational Tools**: AI tutors and interactive learning companions
- **Healthcare Applications**: Medical chatbots and patient assistance systems
- **Business Applications**: Lead generation bots and appointment scheduling systems
