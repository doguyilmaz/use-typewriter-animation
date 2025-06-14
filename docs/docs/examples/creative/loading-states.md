---
sidebar_position: 4
title: Loading States
description: Realistic loading sequences with progress tracking
tags: [loading, progress, terminal, async]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { LoadingStatesExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={LoadingStatesExample}
difficulty="Advanced"
description="Create engaging loading experiences with realistic progress tracking and terminal-style feedback. Perfect for onboarding flows, installation processes, or any async operation that needs visual feedback."
tags={["Loading sequences", "Progress bars", "State management", "Terminal UI", "Async operations"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const LoadingStatesExample: React.FC = () => {
  const [currentState, setCurrentState] = useState(0);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  const loadingStates = [
    { name: 'Initializing', color: '#6b7280', icon: '⚡' },
    { name: 'Connecting', color: '#3b82f6', icon: '🔗' },
    { name: 'Loading Data', color: '#f59e0b', icon: '📊' },
    { name: 'Processing', color: '#8b5cf6', icon: '⚙️' },
    { name: 'Finalizing', color: '#10b981', icon: '✨' },
    { name: 'Complete', color: '#059669', icon: '✅' },
  ];

  useEffect(() => {
    const runLoadingSequence = async () => {
      // Initialize
      setCurrentState(0);
      typewriter
        .colorize('#6b7280')
        .type('⚡ Initializing system...')
        .pauseFor(1000)
        .type('\\n')
        .colorize('#3b82f6')
        .type('▸ Loading use-typewriter-animation library')
        .pauseFor(800)
        .type('\\n')
        .colorize('#10b981')
        .type('✓ TypeScript definitions loaded')
        .pauseFor(600)
        .type('\\n')
        .colorize('#10b981')
        .type('✓ React hooks initialized')
        .pauseFor(1200)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Connecting
      setCurrentState(1);
      typewriter
        .colorize('#3b82f6')
        .type('🔗 Establishing connection...')
        .pauseFor(800)
        .type('\\n\\n')
        .colorize('#6b7280')
        .type('• Checking browser compatibility')
        .pauseFor(500)
        .type('\\n• Detecting accessibility preferences')
        .pauseFor(500)
        .type('\\n• Setting up event listeners')
        .pauseFor(700)
        .type('\\n\\n')
        .colorize('#10b981')
        .type('Connection established! 🎉')
        .pauseFor(1500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 4500));

      // Complete
      setCurrentState(5);
      typewriter
        .colorize('#059669')
        .type('✅ Setup Complete!')
        .pauseFor(1000)
        .type('\\n\\n')
        .colorize('#1f2937')
        .type('Welcome to ')
        .colorize('#3b82f6')
        .type('use-typewriter-animation')
        .colorize('#1f2937')
        .type('!')
        .pauseFor(800)
        .type('\\n\\nYour typewriter is now ready! ✨')
        .start();
    };

    runLoadingSequence();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        className="loading-example-container"
        style={{
          width: '100%',
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          padding: '2rem',
          boxSizing: 'border-box',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Progress bar and terminal content */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '2rem',
            border: '1px solid #d1d5db',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <span style={{ fontWeight: 'bold', color: '#374151' }}>
              {loadingStates[currentState]?.icon} {loadingStates[currentState]?.name}
            </span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              {Math.round(((currentState + 1) / loadingStates.length) * 100)}%
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: \`\${((currentState + 1) / loadingStates.length) * 100}%\`,
                height: '100%',
                backgroundColor: loadingStates[currentState]?.color || '#3b82f6',
                transition: 'width 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
        
        <div
          style={{
            backgroundColor: '#1f2937',
            color: '#f9fafb',
            padding: '1.5rem',
            borderRadius: '8px',
            fontFamily: 'JetBrains Mono, Monaco, monospace',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            minHeight: '200px',
            whiteSpace: 'pre-line',
            overflow: 'auto',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default LoadingStatesExample;`}
instructions={[
"Combine React state management with typewriter animations",
"Create realistic loading sequences with proper timing",
"Use async/await for coordinating multiple animation phases",
"Implement progress tracking with visual indicators",
"Style terminal-like interface with proper typography"
]}
/>
