---
sidebar_position: 2
title: Colorful Text
description: Rainbow effects and vibrant color transitions using the colorize method
tags: [colorize, colors, rainbow, basic, effects]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ColorfulText } from '@site/src/examples/basic';

<ExamplePage
component={ColorfulText}
difficulty="Beginner"
description="Showcase rainbow effects and vibrant color transitions using the colorize() method for eye-catching text presentations. Perfect for creating engaging visual content and learning color management in typewriter animations."
tags={["Color effects", "Rainbow text", "Visual design", "Eye-catching", "Colorize method"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const ColorfulTextExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
  });

  useEffect(() => {
    typewriter
      .type('This is ')
      .colorize('#3b82f6')
      .type('blue text')
      .colorize('#374151')
      .type(', and this is ')
      .colorize('#ef4444')
      .type('red text')
      .colorize('#374151')
      .type('!')
      .newLine()
      .pauseFor(800)
      .type('Watch the ')
      .colorize('#f59e0b')
      .type('rainbow')
      .colorize('#10b981')
      .type(' effect')
      .colorize('#8b5cf6')
      .type(' as')
      .colorize('#ef4444')
      .type(' each')
      .colorize('#3b82f6')
      .type(' word')
      .colorize('#f59e0b')
      .type(' changes')
      .colorize('#10b981')
      .type(' color')
      .colorize('#374151')
      .type('!')
      .newLine()
      .pauseFor(1000)
      .type('🌈 Beautiful, accessible, and smooth!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", sans-serif',
          fontSize: '1.2rem',
          lineHeight: '1.7',
          padding: '2.5rem',
          backgroundColor: '#ffffff',
          border: '2px solid #e5e7eb',
          borderRadius: '16px',
          minHeight: '250px',
          color: '#374151',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default ColorfulTextExample;`}
instructions={[
"Use colorize() method to change text color for individual segments",
"Reset to neutral colors between colorful text for better readability",
"Apply consistent color palette that works in both light and dark themes",
"Include pauseFor() to let users appreciate each color transition",
"Combine colors strategically to create rainbow or gradient effects"
]}
/>

## Use Cases

- **Marketing Content**: Eye-catching promotional text and call-to-action messages
- **Educational Tools**: Highlighting important concepts with color coding
- **Creative Portfolios**: Artistic text presentations and visual storytelling
- **Brand Showcases**: Demonstrating brand colors and visual identity
- **Interactive Learning**: Color-coded tutorials and step-by-step guides