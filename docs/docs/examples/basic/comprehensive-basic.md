---
sidebar_position: 7
title: Comprehensive Basic
description: Complete showcase of accessibility features with screen reader support and WCAG compliance
tags: [accessibility, comprehensive, wcag, screen-reader, complete]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ComprehensiveBasicExample } from '@site/src/examples/basic';

<ExamplePage
component={ComprehensiveBasicExample}
difficulty="Beginner"
description="Master comprehensive typewriter animations with full accessibility support including screen reader announcements, WCAG 2.1 AA compliance, and keyboard navigation. Perfect for production applications requiring inclusive design."
tags={["Accessibility", "Screen readers", "WCAG compliance", "Keyboard navigation", "Inclusive design"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const ComprehensiveBasicExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
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
      .type("Now it's blue!", {
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
"Include accessibilityProps in your container div for proper ARIA attributes",
"Add screenReaderText to type() calls for better screen reader experience",
"Use announceCompletion flag to control when screen readers announce text",
"Set respectReducedMotion: true to honor user's motion preferences",
"Make components keyboard accessible with proper tabIndex and focus management"
]}
/>

## Use Cases

- **Production Applications**: Enterprise applications requiring full accessibility compliance
- **Educational Platforms**: Learning tools that must be inclusive for all users
- **Government Websites**: Public services requiring WCAG 2.1 AA compliance
- **Healthcare Systems**: Medical applications with strict accessibility requirements
- **Corporate Intranets**: Internal tools supporting diverse user needs and abilities