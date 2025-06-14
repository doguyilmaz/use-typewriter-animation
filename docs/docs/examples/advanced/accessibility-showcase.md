---
sidebar_position: 2
title: Accessibility Showcase
description: Demonstrate WCAG-compliant typewriter animations
tags: [accessibility, a11y, wcag]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { AccessibilityExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={AccessibilityExample}
difficulty="Advanced"
tags={["WCAG 2.1 AA", "Screen reader", "ARIA labels", "Reduced motion", "Inclusive design"]}
description="Demonstrate fully accessible typewriter animations that comply with WCAG 2.1 AA standards. Essential for inclusive web development, this example shows screen reader support, reduced motion respect, and proper ARIA labeling."
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const AccessibilityExample: React.FC = () => {
  const { 
    typewriter, 
    elements, 
    cursor, 
    keyframes, 
    accessibilityProps, 
    screenReaderAnnouncement 
  } = useTypewriter({
    respectReducedMotion: true,
    ariaLabel: 'Accessibility demonstration',
    announceCompletion: true,
    typeSpeed: 60,
    cursorColor: '#0066cc',
  });

  useEffect(() => {
    typewriter
      .type('♿ Fully accessible animation')
      .pauseFor(1000)
      .newLine()
      .type('✅ WCAG 2.1 AA compliant')
      .newLine()
      .type('🔊 Screen reader support')
      .newLine()
      .type('⌨️ Keyboard navigation')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        style={{
          fontSize: '1.2rem',
          fontFamily: 'system-ui, sans-serif',
          whiteSpace: 'pre-line',
          padding: '2rem',
          border: '2px solid #3b82f6',
          borderRadius: '8px',
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '250px',
          height: '250px',
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

export default AccessibilityExample;`}
/>
