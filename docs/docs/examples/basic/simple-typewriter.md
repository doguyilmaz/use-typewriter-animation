---
title: Simple Typewriter
description: The most basic typewriter animation with typing and deleting
---

import ExamplePage from '@site/src/components/ExamplePage';
import { SimpleExample } from '@site/src/components/LiveExample';

<ExamplePage
title="Simple Typewriter Animation"
description="Learn the fundamentals of typewriter animations with this basic example. Perfect for getting started - shows typing, pausing, deleting, and retyping text with clean, readable code."
component={SimpleExample}
difficulty="Beginner"
features={["Basic typing", "Delete operations", "Pause timing", "Clean styling"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function SimpleTypewriter() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('Hello, World! 👋')
      .pauseFor(1000)
      .deleteLetters(9)
      .type('React!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div 
        style={{ 
          fontSize: '1.5rem', 
          fontFamily: 'monospace',
          color: 'var(--ifm-color-content)'
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
}

export default SimpleTypewriter;`}
/>
