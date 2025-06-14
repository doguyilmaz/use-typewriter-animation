---
sidebar_position: 4
title: Comprehensive Basic
description: A complete showcase of basic features and accessibility
tags: [basic, accessibility, keyboard, comprehensive]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ComprehensiveBasicExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={ComprehensiveBasicExample}
difficulty="Intermediate"
description="A comprehensive demonstration of essential typewriter features including colorization, deletion, and full accessibility support. Perfect for learning advanced techniques while maintaining inclusive design."
tags={["Text colorization", "Delete operations", "Accessibility", "Keyboard controls", "Screen reader support"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const ComprehensiveBasicExample: React.FC = () => {
  const { 
    typewriter, 
    elements, 
    cursor, 
    keyframes, 
    accessibilityProps, 
    screenReaderAnnouncement 
  } = useTypewriter({
    typeSpeed: 50,
    loop: false,
    cursorStyle: 'bar',
    cursorBlinkSpeed: 500,
    cursorColor: 'currentColor',
    enableCursor: true,
    ariaLabel: 'Comprehensive typewriter animation demonstration',
    ariaLive: 'polite',
    respectReducedMotion: true,
    announceCompletion: true,
  });

  useEffect(() => {
    typewriter
      .type('Hello, ', {
        screenReaderText: 'Hello,',
        announceCompletion: false,
      })
      .colorize('#ef4444')
      .type('this will be red.', {
        speed: 80,
        screenReaderText: 'this will be red.',
        announceCompletion: false,
      })
      .pauseFor(500)
      .deleteLetters(5)
      .colorize('#3b82f6')
      .type(" Now it's blue!", {
        speed: 100,
        screenReaderText: "Now it's blue!",
        announceCompletion: true,
      })
      .pauseFor(800)
      .type('\\n\\n✨ This example showcases:')
      .pauseFor(400)
      .type('\\n• Text colorization')
      .pauseFor(300)
      .type('\\n• Delete operations')
      .pauseFor(300)
      .type('\\n• Accessibility features')
      .pauseFor(300)
      .type('\\n• Keyboard controls')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '1.5rem',
          border: '2px solid var(--ifm-color-emphasis-300)',
          borderRadius: '12px',
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-color-content)',
          minHeight: '280px',
          height: '280px',
          fontSize: '18px',
          lineHeight: '1.6',
          outline: 'none',
          whiteSpace: 'pre-line',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
        }}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
};

export default ComprehensiveBasicExample;`}
instructions={[
"Focus on the container and make it keyboard accessible",
"Use proper ARIA attributes for screen readers",
"Implement colorization with modern color palette",
"Add delete operations to show text manipulation",
"Configure announcements for completion events"
]}
/>
