---
sidebar_position: 3
title: Chat Simulation
description: Create a realistic chat interface with multiple users
tags: [chat, conversation, messaging]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ChatExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={ChatExample}
difficulty="Intermediate"
description="Build realistic chat interfaces with multiple users and natural conversation flow. Ideal for messaging apps, customer support demos, or social platform prototypes."
tags={["Chat interface", "Multi-user", "Messaging", "Color coding", "Realistic delays"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const ChatExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
  });

  useEffect(() => {
    typewriter
      .colorize('#3b82f6')
      .type('Alice: ')
      .colorize('')
      .type('Hey everyone! 👋')
      .newLine()
      .pauseFor(1000)
      .colorize('#10b981')
      .type('Bob: ')
      .colorize('')
      .type('Hi Alice! How are you doing?')
      .newLine()
      .pauseFor(1200)
      .colorize('#ef4444')
      .type('Charlie: ')
      .colorize('')
      .type('Great to see you all here!')
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('Alice: ')
      .colorize('')
      .type("I'm working on some cool React projects 🚀")
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '12px',
          padding: '1.5rem',
          maxWidth: '100%',
          width: '100%',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          whiteSpace: 'pre-line',
          lineHeight: '1.6',
          color: 'var(--ifm-color-content)',
          boxSizing: 'border-box',
          minHeight: '250px',
          height: '250px',
          overflow: 'auto',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        <div
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}
        >
          💬 Team Chat
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default ChatExample;`}
/>
