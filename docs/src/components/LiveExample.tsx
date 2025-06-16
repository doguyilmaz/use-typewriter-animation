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
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: '12px',
        backgroundColor: 'var(--ifm-background-surface-color)',
        overflow: 'hidden',
        margin: '3rem 0',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 2rem 1.5rem 2rem',
          backgroundColor: 'var(--ifm-color-emphasis-50)',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)',
        }}
      >
        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--ifm-color-content)',
              letterSpacing: '-0.025em',
            }}
          >
            {title}
          </h3>
          {description && (
            <p
              style={{
                margin: '0.75rem 0 0 0',
                fontSize: '1.1rem',
                color: 'var(--ifm-color-content-secondary)',
                lineHeight: '1.6',
                maxWidth: '600px',
              }}
            >
              {description}
            </p>
          )}
        </div>
        
        {/* Toggle Button */}
        <div style={{ marginLeft: '2rem' }}>
          <button
            onClick={() => setShowCode(!showCode)}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              backgroundColor: showCode ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)',
              color: showCode ? 'white' : 'var(--ifm-color-content)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            {showCode ? '👁️ Live Demo' : '📄 View Code'}
          </button>
        </div>
      </div>

      {/* Demo Area */}
      <div
        style={{
          padding: '2rem 0.5rem',
          minHeight: '240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--ifm-background-color)',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--ifm-color-emphasis-400) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            width: '100%',
            maxWidth: '850px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Component />
        </div>
      </div>

      {/* Code Block */}
      {showCode && (
        <div
          style={{
            borderTop: '1px solid var(--ifm-color-emphasis-200)',
            backgroundColor: 'var(--ifm-color-emphasis-50)',
          }}
        >
          <div style={{ padding: '1rem' }}>
            <CodeBlock language='tsx' title={`${title.replace(/\s+/g, '')}.tsx`}>
              {code}
            </CodeBlock>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveExample;
