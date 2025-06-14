---
sidebar_position: 5
title: Storytelling Demo
description: Immersive narrative experience with scene transitions
tags: [storytelling, narrative, transitions, scenes]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { StorytellingDemoExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={StorytellingDemoExample}
difficulty="Advanced"
description="Craft immersive storytelling experiences with dynamic scene transitions and atmospheric backgrounds. Ideal for interactive narratives, product stories, or creative presentations that captivate audiences."
tags={["Scene transitions", "Narrative flow", "Background animations", "Color storytelling", "Interactive scenes"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const StorytellingDemoExample: React.FC = () => {
const [currentScene, setCurrentScene] = useState(0);

const { typewriter, elements, cursor, keyframes } = useTypewriter({
typeSpeed: 80,
cursorStyle: 'bar',
cursorColor: '#ffffff',
cursorBlinkSpeed: 600,
});

const scenes = [
{
title: 'Dawn',
background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
textColor: '#2d3748',
},
{
title: 'Day',
background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
textColor: '#ffffff',
},
{
title: 'Night',
background: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
textColor: '#ffffff',
},
];

useEffect(() => {
const tellStory = async () => {
// Scene 1: Dawn
setCurrentScene(0);
typewriter
.colorize('#e67e22')
.type('🌅 Chapter 1: The Beginning')
.pauseFor(1000)
.type('\\n\\n')
.colorize('#2d3748')
.type('Once upon a time, in a digital realm far beyond the screen, ')
.colorize('#e74c3c')
.type('a young developer')
.colorize('#2d3748')
.type(' discovered the power of typewriter animations...')
.pauseFor(2000)
.deleteAll()
.start();

      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Scene 2: Day
      setCurrentScene(1);
      typewriter
        .colorize('#0984e3')
        .type('☀️ Chapter 2: The Journey')
        .pauseFor(1000)
        .type('\\n\\n')
        .colorize('#ffffff')
        .type('Armed with ')
        .colorize('#00b894')
        .type('React')
        .colorize('#ffffff')
        .type(' and ')
        .colorize('#6c5ce7')
        .type('TypeScript')
        .colorize('#ffffff')
        .type(', our hero ventured forth to create something ')
        .colorize('#fdcb6e')
        .type('magical')
        .colorize('#ffffff')
        .type('.')
        .pauseFor(500)
        .type('\\n\\nThey learned about accessibility, performance, and elegance.')
        .pauseFor(2500)
        .deleteAll()
        .start();

      await new Promise((resolve) => setTimeout(resolve, 6000));

      // Scene 3: Night
      setCurrentScene(2);
      typewriter
        .colorize('#74b9ff')
        .type('🌟 Epilogue: The Legacy')
        .pauseFor(1000)
        .type('\\n\\n')
        .colorize('#ffffff')
        .type("Under the starlit sky, the developer's work lived on.")
        .pauseFor(800)
        .type('\\n\\nTheir typewriter library became a beacon of ')
        .colorize('#00b894')
        .type('accessibility')
        .colorize('#ffffff')
        .type(', ')
        .colorize('#fdcb6e')
        .type('performance')
        .colorize('#ffffff')
        .type(', and ')
        .colorize('#fd79a8')
        .type('beauty')
        .colorize('#ffffff')
        .type('.')
        .pauseFor(1000)
        .type('\\n\\nAnd they all typed happily ever after... ')
        .colorize('#e17055')
        .type('✨')
        .pauseFor(1500)
        .type('\\n\\n')
        .colorize('#ddd')
        .type('The End.')
        .start();
    };

    tellStory();

}, []);

return (
    <>
      <style>
        {keyframes}
        {\`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        \`}
      </style>
      <div
        style={{
          minHeight: '500px',
          background: scenes[currentScene]?.background || scenes[0].background,
          transition: 'all 2s ease-in-out',
          borderRadius: '12px',
          padding: '3rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontSize: '1.2rem',
            fontFamily: 'system-ui, sans-serif',
            color: scenes[currentScene]?.textColor || '#ffffff',
            whiteSpace: 'pre-line',
            lineHeight: '1.6',
            textAlign: 'center',
            maxWidth: '800px',
            width: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default StorytellingDemoExample;`}
instructions={[
"Coordinate scene transitions with React state",
"Use CSS transitions for smooth background changes",
"Implement progress indicators for narrative flow",
"Apply floating animations for visual interest",
"Structure storytelling with proper timing and pacing"
]}
/>
