---
sidebar_position: 4
title: Loading States
description: Realistic loading sequences with progress tracking, terminal-style feedback, and async operation visualization
tags: [loading, progress, terminal, async, system]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { LoadingStatesExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={LoadingStatesExample}
difficulty="Intermediate"
description="Create realistic loading sequences with progress tracking, terminal-style feedback, and engaging async operation visualization. Perfect for developer tools, system administration interfaces, and user onboarding."
tags={["Progress tracking", "System loading", "Terminal interface", "Step-by-step progress", "Development tools"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const LoadingStatesExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loadingSpeed, setLoadingSpeed] = useState('Normal');
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 25,
    cursorStyle: 'block',
    cursorColor: '#22c55e',
  });

  useEffect(() => {
    typewriter
      .colorize('#22c55e')
      .type('⚡ SYSTEM INITIALIZATION ⚡')
      .colorize('#f8fafc')
      .newLine()
      .type('════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#64748b')
      .type('Starting application bootstrap...')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#3b82f6')
      .type('[1/8] ')
      .colorize('#f8fafc')
      .type('Loading configuration files... ')
      .pauseFor(1000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      config.json, env.local, package.json')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[2/8] ')
      .colorize('#f8fafc')
      .type('Initializing database connection... ')
      .pauseFor(1500)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      PostgreSQL v14.2 on port 5432')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[3/8] ')
      .colorize('#f8fafc')
      .type('Loading dependencies... ')
      .pauseFor(2000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      react@18.2.0, typescript@4.9.5, tailwind@3.2.4')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[4/8] ')
      .colorize('#f8fafc')
      .type('Setting up API routes... ')
      .pauseFor(1200)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      /api/auth, /api/users, /api/data, /api/uploads')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[5/8] ')
      .colorize('#f8fafc')
      .type('Compiling TypeScript... ')
      .pauseFor(1800)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      47 files compiled, 0 errors, 2 warnings')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[6/8] ')
      .colorize('#f8fafc')
      .type('Starting development server... ')
      .pauseFor(1000)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      Server running on http://localhost:3000')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[7/8] ')
      .colorize('#f8fafc')
      .type('Running security checks... ')
      .pauseFor(1400)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('      No vulnerabilities found, all packages secure')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('[8/8] ')
      .colorize('#f8fafc')
      .type('Finalizing startup... ')
      .pauseFor(800)
      .colorize('#22c55e')
      .type('✓ DONE')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('📊 Performance Metrics:')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('├─ Startup time: ')
      .colorize('#22c55e')
      .type('2.34s')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('├─ Memory usage: ')
      .colorize('#22c55e')
      .type('89.2MB')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('├─ Bundle size: ')
      .colorize('#22c55e')
      .type('1.8MB')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('└─ Dependencies: ')
      .colorize('#22c55e')
      .type('247 packages')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('🎉 APPLICATION READY!')
      .colorize('#f8fafc')
      .newLine()
      .newLine()
      .colorize('#64748b')
      .type('→ Local:   ')
      .colorize('#3b82f6')
      .type('http://localhost:3000')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('→ Network: ')
      .colorize('#3b82f6')
      .type('http://192.168.1.100:3000')
      .colorize('#f8fafc')
      .newLine()
      .colorize('#64748b')
      .type('→ Press Ctrl+C to stop the server')
      .start();
  }, []);

  // Simulate loading progress
  useEffect(() => {
    const speeds = ['Fast', 'Normal', 'Slow'];
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev % 8) + 1);
      setProgress(prev => (prev + Math.floor(Math.random() * 15) + 5) % 100);
      setLoadingSpeed(speeds[Math.floor(Math.random() * speeds.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {\`
          @keyframes loading-pulse {
            0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.3); }
            50% { box-shadow: 0 0 50px rgba(34, 197, 94, 0.6); }
          }
          
          @keyframes progress-fill {
            0% { width: 0%; }
            100% { width: var(--progress-width); }
          }
          
          @keyframes step-glow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          
          .loading-container {
            animation: loading-pulse 4s ease-in-out infinite;
          }
          
          .progress-bar {
            animation: progress-fill 2s ease-out;
          }
          
          .active-step {
            animation: step-glow 2s ease-in-out infinite;
          }
        \`}
      </style>
      <div
        className="loading-container"
        style={{
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          fontFamily: '"JetBrains Mono", "Consolas", "Monaco", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.5',
          borderRadius: '12px',
          minHeight: '400px',
          maxHeight: '500px',
          overflowY: 'auto',
          border: '2px solid #22c55e',
          position: 'relative',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}
      >
        {/* Loading Header */}
        <div
          style={{
            backgroundColor: '#22c55e',
            color: '#0f172a',
            padding: '12px 20px',
            borderRadius: '10px 10px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '1.1rem' }}>⚡</div>
            <div style={{ fontWeight: '600' }}>System Loader</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '0.8rem' }}>Step {currentStep}/8</div>
            <div style={{ fontSize: '0.8rem' }}>{loadingSpeed}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            backgroundColor: '#1e293b',
            padding: '12px 20px',
            borderBottom: '1px solid #334155',
            position: 'sticky',
            top: '48px',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Progress</span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{progress}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: '#334155',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <div
              className="progress-bar"
              style={{
                height: '100%',
                backgroundColor: '#22c55e',
                width: \`\${progress}%\`,
                transition: 'width 0.5s ease',
                borderRadius: '3px',
              }}
            />
          </div>
        </div>

        {/* Loading Content */}
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

        {/* Loading Footer */}
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: '#1e293b',
            borderTop: '1px solid #334155',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0 0 10px 10px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Loading dependencies...
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className={currentStep === i ? 'active-step' : ''}
                  style={{
                    width: '4px',
                    height: '4px',
                    backgroundColor: currentStep >= i ? '#22c55e' : '#475569',
                    borderRadius: '50%',
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              {Math.floor(Math.random() * 50) + 200}ms
            </div>
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingStatesExample;`}
instructions={[
"Create sequential step-by-step progress with numbered stages for clear process flow",
"Use colorize() to highlight different status types: blue for steps, green for success, gray for details",
"Add realistic pauseFor() delays that vary by operation complexity for authentic timing",
"Include performance metrics and system information to simulate real development tools",
"Implement interactive progress bars and status indicators for engaging visual feedback"
]}
/>

## Use Cases

- **Developer Tools**: Demonstrate build systems and development workflows with realistic loading sequences
- **System Administration**: Showcase server startup and monitoring interfaces for DevOps tools
- **User Onboarding**: Engaging loading screens for application initialization and setup processes
- **Educational Platforms**: Teach system processes and loading concepts with visual progress indicators
- **Product Demos**: Visualize complex background operations for technical and non-technical audiences