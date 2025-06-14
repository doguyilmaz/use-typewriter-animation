---
sidebar_position: 1
title: Terminal Simulation
description: Simulate a terminal interface with typewriter animations
tags: [terminal, simulation, advanced]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { TerminalExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={TerminalExample}
difficulty="Beginner"
description="Create authentic terminal experiences with command-line simulations. Perfect for developer portfolios, tutorials, or interactive demos that showcase CLI tools and terminal workflows."
tags={["Terminal", "Command line", "CLI simulation", "Real-time clock", "Developer tools"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const TerminalExample: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'block',
    cursorColor: '#00ff00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    typewriter
      .type('$ ')
      .colorize('#00ff00')
      .type('whoami')
      .pauseFor(1000)
      .newLine()
      .colorize('#ffffff')
      .type('developer')
      .newLine()
      .type('$ ')
      .colorize('#00ff00')
      .type('ls -la')
      .pauseFor(800)
      .newLine()
      .colorize('#ffffff')
      .type('drwxr-xr-x  projects/')
      .newLine()
      .type('-rw-r--r--  README.md')
      .newLine()
      .type('$ ')
      .colorize('#00ff00')
      .type('echo "Hello, World!"')
      .pauseFor(600)
      .newLine()
      .colorize('#ffffff')
      .type('Hello, World!')
      .start();

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#000',
          color: '#00ff00',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '0.9rem',
          padding: '1.5rem',
          borderRadius: '8px',
          minHeight: '200px',
          whiteSpace: 'pre-line',
          border: '2px solid #333',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
      >
        <div style={{ color: '#666', marginBottom: '0.5rem' }}>
          Terminal - {currentTime}
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default TerminalExample;`}
/>
