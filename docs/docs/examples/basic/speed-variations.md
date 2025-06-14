---
sidebar_position: 3
title: Speed Variations
description: Dynamic typing speed control for dramatic effects and emphasis
tags: [speed, timing, dramatic, effects, pacing]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { SpeedVariationsExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={SpeedVariationsExample}
difficulty="Beginner"
description="Master dynamic typing speed control for dramatic effects, creating emphasis through variable pacing and strategic timing. Perfect for storytelling, presentations, and creating engaging content with natural rhythm."
tags={["Speed control", "Dramatic effects", "Variable pacing", "Timing control", "Emphasis techniques"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const SpeedVariationsExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 100,
    cursorStyle: 'block',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('The quick brown fox...', { speed: 30 })
      .pauseFor(800)
      .newLine()
      .type('JUMPS!', { speed: 5 })
      .pauseFor(500)
      .newLine()
      .type('...and lands gracefully', { speed: 80 })
      .pauseFor(1000)
      .newLine()
      .newLine()
      .type('🐌 Slow typing creates suspense...', { speed: 150 })
      .pauseFor(1200)
      .newLine()
      .type('⚡ FAST TYPING CREATES EXCITEMENT!', { speed: 10 })
      .pauseFor(800)
      .newLine()
      .type('🎯 Normal speed for readability.', { speed: 50 })
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          padding: '2.5rem',
          backgroundColor: '#f8fafc',
          border: '2px solid #3b82f6',
          borderRadius: '16px',
          minHeight: '300px',
          color: '#1e293b',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default SpeedVariationsExample;`}
instructions={[
"Use speed parameter in type() method to override default typeSpeed for individual segments",
"Apply very slow speeds (100-200ms) for suspense and dramatic emphasis",
"Use fast speeds (5-20ms) for excitement, urgency, or action sequences",
"Combine different speeds strategically to match content emotion and importance",
"Include pauseFor() between speed changes to let the effect register with users"
]}
/>

## Use Cases

- **Presentations**: Emphasize key points with speed changes for maximum impact
- **Storytelling**: Build tension and release with strategic pacing variations
- **Marketing Content**: Create urgency with fast typing for calls-to-action
- **Educational Tools**: Slow down for complex concepts, speed up for familiar content
- **Creative Writing**: Match typing rhythm to narrative mood and story beats