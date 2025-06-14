---
sidebar_position: 1
title: Keyboard Controls
description: Interactive typewriter with keyboard shortcuts
tags: [interactive, keyboard, controls, accessibility]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { KeyboardControlsExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={KeyboardControlsExample}
difficulty="Intermediate"
description="Build fully interactive typewriter experiences with keyboard shortcuts and accessibility features. Essential for creating user-controlled animations with proper focus management and ARIA support."
tags={["Keyboard shortcuts", "Interactive controls", "ARIA support", "Focus management", "Accessible navigation"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const KeyboardControlsExample: React.FC = () => {
  const [controlsVisible, setControlsVisible] = useState(true);

  const {
    typewriter,
    elements,
    cursor,
    keyframes,
    accessibilityProps,
    screenReaderAnnouncement,
  } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'bar',
    cursorColor: '#8b5cf6',
    ariaLabel: 'Interactive typewriter with keyboard controls',
    respectReducedMotion: true,
  });

  useEffect(() => {
    typewriter
      .type('🎮 Interactive Typewriter Demo')
      .pauseFor(1000)
      .type('\\n\\nYou can control this animation:')
      .pauseFor(500)
      .type('\\n• Press SPACE to pause/resume')
      .pauseFor(500)
      .type('\\n• Press ESCAPE to skip to end')
      .pauseFor(500)
      .type('\\n• Press R to reset animation')
      .pauseFor(1000)
      .type('\\n\\nTry it out! 🚀')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        style={{
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '12px',
          border: '2px solid var(--ifm-color-emphasis-300)',
          padding: '2rem',
          color: 'var(--ifm-color-content)',
          fontSize: '16px',
          lineHeight: '1.6',
          minHeight: '350px',
          height: '350px',
          whiteSpace: 'pre-wrap',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
        onFocus={() => setControlsVisible(true)}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
};

export default KeyboardControlsExample;`}
instructions={[
"Focus the container element to enable keyboard controls",
"Use SPACE to pause/resume the animation",
"Press ESCAPE to skip to the end",
"Press R to reset the animation from the beginning",
"Proper ARIA attributes ensure screen reader compatibility"
]}
/>
