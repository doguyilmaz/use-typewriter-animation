---
sidebar_position: 1
title: Simple Typewriter
description: Basic typewriter effect with clean, professional styling
tags: [typewriter, basic, beginner, react, simple]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { SimpleTypewriter } from '@site/src/examples/basic';

<ExamplePage
component={SimpleTypewriter}
difficulty="Beginner"
description="Master the fundamentals of typewriter animations with this clean, minimalist example. Perfect for getting started with the library and understanding core concepts like typing speed, cursor styles, and basic text rendering."
tags={["Typewriter effect", "Basic animation", "Getting started", "Clean design", "Minimal setup"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const SimpleTypewriterExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('Hello, World!')
      .pauseFor(1000)
      .newLine()
      .type('Welcome to typewriter animations.')
      .pauseFor(800)
      .newLine()
      .type('This is a simple example to get you started.')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          padding: '2rem',
          backgroundColor: '#ffffff',
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          minHeight: '200px',
          color: '#1f2937',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default SimpleTypewriterExample;`}
instructions={[
"Start with basic typeSpeed and cursorStyle configuration",
"Use pauseFor() to add natural pauses between sentences",
"Include newLine() for proper text structure and readability",
"Apply clean, professional styling with subtle shadows",
"Always include keyframes style for proper cursor animation"
]}
/>

## Use Cases

- **Learning**: Perfect first example for understanding typewriter basics
- **Documentation**: Simple demos in technical documentation
- **Landing Pages**: Clean hero text animations for websites
- **Tutorials**: Step-by-step instruction display
- **Prototyping**: Quick mockups and proof-of-concepts