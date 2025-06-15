---
sidebar_position: 1
title: Hero Section
description: Create an impressive hero section with gradient backgrounds
tags: [hero, landing, marketing]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { HeroSection } from '@site/src/examples/advanced';

<ExamplePage
component={HeroSection}
difficulty="Intermediate"
tags={["Hero sections", "Gradients", "Landing pages", "Typography", "Marketing"]}
description="Build captivating hero sections with animated text reveals and gradient backgrounds. Perfect for landing pages, marketing sites, and product showcases."
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const HeroExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorColor: '#ffffff',
  });

  useEffect(() => {
    typewriter
      .type('Build ')
      .colorize('#60a5fa')
      .type('Amazing')
      .colorize('#ffffff')
      .type(' React Apps')
      .newLine()
      .pauseFor(1000)
      .type('with ')
      .colorize('#34d399')
      .type('TypeScript')
      .colorize('#ffffff')
      .type(' & ')
      .colorize('#f87171')
      .type('Modern Tools')
      .pauseFor(2000)
      .newLine()
      .type('✨ Fast • Reliable • Scalable')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          paddingTop: '5rem',
          borderRadius: '16px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          minHeight: '400px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'system-ui, sans-serif',
            whiteSpace: 'pre-line',
            lineHeight: '1.2',
            minHeight: '300px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
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

export default HeroExample;`}
instructions={[
"Use contrasting colors against gradient backgrounds for better readability",
"Implement strategic pauses with pauseFor() to create dramatic timing effects",
"Apply colorize() to highlight key terms and create visual hierarchy",
"Position hero text in center-top for maximum visual impact",
"Include call-to-action elements that complement the animated text flow"
]}
/>

## Use Cases

- **Landing Pages**: Create compelling first impressions with animated value propositions and brand messaging
- **Product Launches**: Build excitement with dramatic reveals of product names and key features
- **Marketing Campaigns**: Capture attention with dynamic headlines and promotional content
- **Portfolio Websites**: Showcase personal or company branding with professional animated introductions
- **SaaS Applications**: Welcome users with engaging onboarding experiences and feature highlights
