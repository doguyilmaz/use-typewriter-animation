import React from 'react';
import Layout from '@theme/Layout';
import { LiveExample } from '../components/LiveExample';
import {
  SimpleTypewriter,
  ColorfulText,
  LoopingAnimation,
} from '../examples/basic';

const examples = [
  {
    title: 'Simple Typewriter',
    component: SimpleTypewriter,
    description: 'Basic typewriter animation with typing and deleting',
    code: `import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function SimpleExample() {
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

export default SimpleExample;`,
  },
  {
    title: 'Colorful Text',
    component: ColorfulText,
    description: 'Add visual appeal with colorized text segments',
    code: `import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function ColorfulExample() {
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

export default ColorfulExample;`,
  },
  {
    title: 'Looping Animation',
    component: LoopingAnimation,
    description: 'Create continuous animations that loop indefinitely',
    code: `import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

function LoopingExample() {
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

export default LoopingExample;`,
  },
];

export default function Examples(): JSX.Element {
  const styles = {
    container: {
      padding: '2rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'var(--ifm-color-content)',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: 'var(--ifm-color-content-secondary)',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: 'var(--ifm-color-content)',
      textAlign: 'center' as const,
    },
    ctaSection: {
      marginTop: '4rem',
      padding: '3rem 2rem',
      backgroundColor: 'var(--ifm-color-emphasis-100)',
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '16px',
      textAlign: 'center' as const,
    },
    ctaTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'var(--ifm-color-content)',
    },
    ctaDescription: {
      fontSize: '1rem',
      color: 'var(--ifm-color-content-secondary)',
      marginBottom: '2rem',
      lineHeight: '1.6',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap' as const,
      justifyContent: 'center',
    },
    button: {
      padding: '0.75rem 1.5rem',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'all 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  };

  return (
    <Layout title='Examples' description='Live examples of use-typewriter-animation in action'>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Live Examples</h1>
          <p style={styles.subtitle}>
            Interactive examples of <code>use-typewriter-animation</code> showing different features
            and use cases. Each example includes the complete source code that you can copy to your
            project.
          </p>
        </div>

        {/* Examples Section */}
        <section>
          <h2 style={styles.sectionTitle}>Basic Examples</h2>
          {examples.map((example, index) => (
            <LiveExample
              key={index}
              title={example.title}
              component={example.component}
              code={example.code}
              description={example.description}
            />
          ))}
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
          <p style={styles.ctaDescription}>
            These examples are just the beginning! Check out our comprehensive documentation for
            more advanced features and detailed guides.
          </p>
          <div style={styles.buttonContainer}>
            <a
              href='/use-typewriter-animation/docs/getting-started/installation'
              style={{
                ...styles.button,
                backgroundColor: '#22c55e',
              }}
            >
              📦 Installation Guide
            </a>
            <a
              href='/use-typewriter-animation/docs/examples/basic/simple-typewriter'
              style={{
                ...styles.button,
                backgroundColor: '#3b82f6',
              }}
            >
              📚 More Examples
            </a>
            <a
              href='/use-typewriter-animation/docs/api/use-typewriter'
              style={{
                ...styles.button,
                backgroundColor: '#8b5cf6',
              }}
            >
              🔧 API Reference
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
