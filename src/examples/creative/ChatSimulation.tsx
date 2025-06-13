import React, { useEffect, useState } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

interface Message {
  id: number;
  user: string;
  avatar: string;
  isTyping: boolean;
  content: string;
}

export const ChatSimulation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState(0);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#10b981',
  });

  const chatMessages = [
    { user: 'Alex', avatar: '👨‍💻', content: 'Hey! Have you tried the new typewriter library?' },
    { user: 'Sarah', avatar: '👩‍🎨', content: 'Not yet! What makes it special?' },
    {
      user: 'Alex',
      avatar: '👨‍💻',
      content:
        'It has amazing features like accessibility support, keyboard controls, and React 19 compatibility! 🚀',
    },
    { user: 'Sarah', avatar: '👩‍🎨', content: 'Wow, that sounds awesome! Show me how it works 😍' },
    { user: 'Alex', avatar: '👨‍💻', content: 'Check this out... *starts typing animation* ✨' },
  ];

  useEffect(() => {
    const simulateChat = async () => {
      for (let i = 0; i < chatMessages.length; i++) {
        const msg = chatMessages[i];

        // Add message with typing indicator
        setMessages((prev) => [
          ...prev,
          {
            id: i,
            user: msg.user,
            avatar: msg.avatar,
            isTyping: true,
            content: '',
          },
        ]);

        // Wait a bit to simulate typing delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Start typing the message
        setCurrentMessage(i);
        typewriter.deleteAll().type(msg.content).start();

        // Wait for typing to complete (estimate based on content length)
        await new Promise((resolve) => setTimeout(resolve, msg.content.length * 50 + 1000));

        // Update message to show final content
        setMessages((prev) =>
          prev.map((m) => (m.id === i ? { ...m, isTyping: false, content: msg.content } : m))
        );

        // Wait before next message
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
    };

    simulateChat();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          maxWidth: '400px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Chat header */}
        <div
          style={{
            backgroundColor: '#f9fafb',
            padding: '16px 20px',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
            }}
          >
            💬
          </div>
          <div>
            <div style={{ fontWeight: '600', color: '#111827' }}>Dev Team Chat</div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>2 members online</div>
          </div>
        </div>

        {/* Messages */}
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
          {messages.map((message, index) => (
            <div
              key={message.id}
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  flexShrink: 0,
                }}
              >
                {message.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '4px',
                  }}
                >
                  {message.user}
                </div>
                <div
                  style={{
                    backgroundColor: message.user === 'Alex' ? '#dbeafe' : '#f3f4f6',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    maxWidth: '280px',
                    fontSize: '15px',
                    lineHeight: '1.4',
                    color: '#111827',
                  }}
                >
                  {message.isTyping && index === currentMessage ? (
                    <div style={{ minHeight: '20px' }}>
                      {elements}
                      {cursor}
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div
          style={{
            backgroundColor: '#f9fafb',
            borderTop: '1px solid #e5e7eb',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              border: '1px solid #d1d5db',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '14px',
              color: '#9ca3af',
            }}
          >
            Type a message...
          </div>
          <button
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
};
