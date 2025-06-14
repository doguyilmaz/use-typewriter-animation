---
sidebar_position: 4
title: Looping Animation
description: Continuous message rotation with infinite loops and automatic content cycling
tags: [loop, cycling, rotation, infinite, dynamic]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { LoopingAnimationExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={LoopingAnimationExample}
difficulty="Beginner"
description="Master continuous message rotation with infinite loops and automatic content cycling. Perfect for hero sections, rotating content displays, and dynamic presentations that keep users engaged with changing text."
tags={["Infinite loops", "Message cycling", "Dynamic content", "Auto-rotation", "Continuous animation"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const LoopingAnimationExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    loop: true,
    cursorStyle: 'block',
    cursorColor: '#10b981',
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
      .type('UI/UX Designer')
      .pauseFor(2000)
      .deleteAll()
      .type('Creative Coder')
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontSize: '1.8rem',
          fontFamily: '"Poppins", "Segoe UI", sans-serif',
          fontWeight: '600',
          color: '#1f2937',
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: '#f0fdf4',
          border: '3px solid #10b981',
          borderRadius: '20px',
          minHeight: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.75rem',
            color: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            padding: '4px 12px',
            borderRadius: '12px',
            fontWeight: '500',
          }}
        >
          🔄 INFINITE LOOP
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default LoopingAnimationExample;`}
instructions={[
"Set loop: true in useTypewriter options to enable infinite cycling through messages",
"Use deleteAll() method to clear text completely before typing new content",
"Add strategic pauseFor() delays to give users time to read each message",
"Design message sequences that flow naturally and maintain user engagement",
"Consider visual indicators like loop badges to communicate the infinite nature"
]}
/>

## Use Cases

- **Hero Sections**: Display multiple value propositions or role descriptions automatically
- **Landing Pages**: Cycle through key features and benefits to showcase variety
- **Portfolio Sites**: Rotate through different skills and expertise areas
- **Product Demos**: Highlight various product features with continuous animation
- **Personal Branding**: Show multiple professional identities and capabilities