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
      padding: '3rem 1rem',
      maxWidth: '1600px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '4rem',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      color: 'var(--ifm-color-content)',
      letterSpacing: '-0.05em',
      background: 'linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-darker))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: 'var(--ifm-color-content-secondary)',
      lineHeight: '1.7',
      maxWidth: '900px',
      margin: '0 auto',
      fontWeight: '400',
    },
    sectionTitle: {
      fontSize: '2.25rem',
      fontWeight: '700',
      marginBottom: '3rem',
      color: 'var(--ifm-color-content)',
      textAlign: 'center' as const,
      letterSpacing: '-0.025em',
    },
    ctaSection: {
      marginTop: '6rem',
      padding: '4rem 2rem',
      backgroundColor: 'var(--ifm-color-emphasis-100)',
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '20px',
      textAlign: 'center' as const,
      background: 'linear-gradient(135deg, var(--ifm-color-emphasis-100), var(--ifm-color-emphasis-200))',
      maxWidth: '1200px',
      margin: '6rem auto 0 auto',
    },
    ctaTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      color: 'var(--ifm-color-content)',
      letterSpacing: '-0.025em',
    },
    ctaDescription: {
      fontSize: '1.2rem',
      color: 'var(--ifm-color-content-secondary)',
      marginBottom: '3rem',
      lineHeight: '1.7',
      maxWidth: '600px',
      margin: '0 auto 3rem auto',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap' as const,
      justifyContent: 'center',
    },
    button: {
      padding: '1rem 2rem',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
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
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
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
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
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
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
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
