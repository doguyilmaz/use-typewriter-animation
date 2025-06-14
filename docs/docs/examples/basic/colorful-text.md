---
title: Colorful Text
description: Add visual appeal with colorized text segments for dynamic styling
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ColorfulExample } from '@site/src/components/LiveExample';

<ExamplePage
title="Colorful Text Animation"
description="Add visual appeal to your typewriter animations with colorized text segments. Great for highlighting important words, creating rainbow effects, or drawing attention to specific parts of your message."
component={ColorfulExample}
difficulty="Beginner"
features={["Text colorization", "Multiple colors", "Dynamic styling", "Color transitions"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function ColorfulText() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
  });

  useEffect(() => {
    typewriter
      .type('This is ')
      .colorize('#3b82f6')
      .type('blue text')
      .colorize('')
      .type(' and ')
      .colorize('#10b981')
      .type('green text')
      .colorize('')
      .type(' and ')
      .colorize('#ef4444')
      .type('red text!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div 
        style={{ 
          fontSize: '1.2rem', 
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

export default ColorfulText;`}
/>
