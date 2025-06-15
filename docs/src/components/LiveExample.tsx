import React, { useState } from 'react';
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

export default LiveExample;
