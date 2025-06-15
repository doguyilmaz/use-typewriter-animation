---
sidebar_position: 8
title: Multi-line Poetry
description: Elegant typography with poetic timing, centered layouts, and literary aesthetics for artistic content
tags: [poetry, multi-line, typography, literary, artistic]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { MultiLinePoetry } from '@site/src/examples/basic';

<ExamplePage
component={MultiLinePoetry}
difficulty="Beginner"
description="Master elegant multi-line text layouts with poetic timing and beautiful typography for artistic content presentation. Perfect for literary websites, creative portfolios, and brand storytelling with emotional impact."
tags={["Poetic timing", "Literary typography", "Multi-line layout", "Artistic content", "Creative presentation"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const MultiLinePoetryExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#db2777',
  });

  useEffect(() => {
    typewriter
      .colorize('#db2777')
      .type('✨ Code & Dreams ✨')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .type('In lines of code we weave our dreams,')
      .newLine()
      .pauseFor(600)
      .type('Where logic meets creative schemes.')
      .newLine()
      .newLine()
      .pauseFor(400)
      .colorize('#7c3aed')
      .type('Functions dance and variables sing,')
      .newLine()
      .colorize('#374151')
      .pauseFor(600)
      .colorize('#059669')
      .type('While loops and arrays take wing.')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .type('Each ')
      .colorize('#dc2626')
      .type('semicolon')
      .colorize('#374151')
      .type(' a pause in thought,')
      .newLine()
      .pauseFor(500)
      .type('Each ')
      .colorize('#0ea5e9')
      .type('function')
      .colorize('#374151')
      .type(' a lesson taught.')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .type('From ')
      .colorize('#f59e0b')
      .type('bugs')
      .colorize('#374151')
      .type(' we learn to ')
      .colorize('#10b981')
      .type('grow')
      .colorize('#374151')
      .type(',')
      .newLine()
      .pauseFor(700)
      .type('In every error, ')
      .colorize('#8b5cf6')
      .type('wisdom')
      .colorize('#374151')
      .type(' we sow.')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .type('        ')
      .colorize('#6b7280')
      .type('~ A Developer\\'s Heart')
      .colorize('#374151')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Crimson Text", "Georgia", serif',
          fontSize: '1.15rem',
          lineHeight: '2',
          padding: '3rem',
          backgroundColor: '#fdf2f8',
          border: '3px solid #f9a8d4',
          borderRadius: '20px',
          minHeight: '300px',
          boxShadow: '0 20px 40px rgba(219, 39, 119, 0.1)',
          position: 'relative',
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: '#db2777',
            borderRadius: '2px',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '20px',
            fontSize: '2rem',
            color: '#f9a8d4',
            opacity: '0.3',
          }}
        >
          "
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '20px',
            fontSize: '2rem',
            color: '#f9a8d4',
            opacity: '0.3',
            transform: 'rotate(180deg)',
          }}
        >
          "
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            color: '#374151',
            whiteSpace: 'pre-wrap',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default MultiLinePoetryExample;`}
instructions={[
"Use newLine() method to create proper line breaks for poetic structure",
"Add strategic pauseFor() delays between stanzas and lines for natural reading rhythm",
"Apply colorize() to highlight technical terms and emotional keywords",
"Use serif fonts and centered text alignment for literary aesthetic appeal",
"Include decorative elements like quote marks and accent lines for visual poetry"
]}
/>

## Use Cases

- **Literary Websites**: Present poetry and prose with elegant typography and timing
- **About Pages**: Personal or company narratives with artistic flair and emotional impact
- **Educational Content**: Make learning materials more engaging with poetic presentations
- **Brand Storytelling**: Narrative marketing that connects emotionally with audiences
- **Creative Portfolios**: Showcase writing and creative work with professional typography