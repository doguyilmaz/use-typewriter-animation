---
title: Looping Animation
description: Create continuous animations that loop indefinitely for dynamic content
---

import ExamplePage from '@site/src/components/ExamplePage';
import { LoopingExample } from '@site/src/components/LiveExample';

<ExamplePage
  title="Looping Animation"
  description="Create continuous animations that loop indefinitely. Perfect for hero sections, landing pages, or dynamic content that needs to cycle through different messages automatically."
  component={LoopingExample}
  difficulty="Beginner"
  features={["Continuous looping", "Auto-repeat", "Delete operations", "Multiple messages"]}
  code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function LoopingAnimation() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    loop: true,
  });

  useEffect(() => {
    typewriter
      .type('Frontend Developer')
      .pauseFor(2000)
      .deleteAll()
      .type('React Enthusiast')
      .pauseFor(2000)
      .deleteAll()
      .type('TypeScript Lover')
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div 
        style={{
          fontSize: '1.3rem',
          fontFamily: 'monospace',
          color: 'var(--ifm-color-content)',
          textAlign: 'center',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
}

export default LoopingAnimation;`}
/>