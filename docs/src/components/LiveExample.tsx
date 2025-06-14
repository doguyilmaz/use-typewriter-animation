import React, { useState, useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { CodeBlock } from './shared/CodeBlock';
import { commonStyles } from './shared/styles';

interface LiveExampleProps {
  title: string;
  code: string;
  component: React.ComponentType;
  description?: string;
}

export const LiveExample: React.FC<LiveExampleProps> = ({
  title,
  code,
  component: Component,
  description,
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      style={{
        ...commonStyles.card,
        margin: '2rem 0',
      }}
    >
      <div
        style={{
          ...commonStyles.flexBetween,
          padding: '1.5rem',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderBottom: '1px solid var(--ifm-color-emphasis-300)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1.3rem',
              fontWeight: '600',
              color: 'var(--ifm-color-content)',
            }}
          >
            {title}
          </h3>
          {description && (
            <p
              style={{
                margin: '0.5rem 0 0 0',
                fontSize: '1rem',
                color: 'var(--ifm-color-content-secondary)',
                lineHeight: '1.5',
              }}
            >
              {description}
            </p>
          )}
        </div>
        <button
          onClick={() => setShowCode(!showCode)}
          style={{
            ...commonStyles.button,
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            fontSize: '0.8rem',
            minWidth: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.25rem',
            marginLeft: 'auto',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          {showCode ? '👁️ Demo' : '📄 Code'}
        </button>
      </div>

      <div
        style={{
          ...commonStyles.flexCenter,
          padding: '3rem 2rem',
          minHeight: '200px',
        }}
      >
        <Component />
      </div>

      {showCode && (
        <div
          style={{
            borderTop: '1px solid var(--ifm-color-emphasis-300)',
          }}
        >
          <CodeBlock language='tsx' title='React Component'>
            {code}
          </CodeBlock>
        </div>
      )}
    </div>
  );
};

// Pre-built example components
export const SimpleExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter.type('Hello, World! 👋').pauseFor(1000).deleteLetters(9).type('React!').start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: 'var(--ifm-color-content)' }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export const ColorfulExample: React.FC = () => {
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
        style={{ fontSize: '1.2rem', fontFamily: 'monospace', color: 'var(--ifm-color-content)' }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export const LoopingExample: React.FC = () => {
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
};
