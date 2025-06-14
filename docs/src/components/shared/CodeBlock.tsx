import React from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

// Shared CodeBlock component with fallback
let ThemeCodeBlock: React.ComponentType<any>;
try {
  ThemeCodeBlock = require('@theme/CodeBlock').default;
} catch {
  ThemeCodeBlock = ({ children, language, title }: CodeBlockProps) => (
    <div
      style={{
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        padding: '0',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid var(--ifm-color-emphasis-300)',
        fontSize: '0.875rem',
      }}
    >
      {title && (
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--ifm-color-emphasis-200)',
            borderBottom: '1px solid var(--ifm-color-emphasis-300)',
            fontWeight: '600',
            color: 'var(--ifm-color-content)',
            fontSize: '0.8rem',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {title}
        </div>
      )}
      <div style={{ padding: '1rem', overflow: 'auto' }}>
        <pre
          style={{
            margin: 0,
            fontFamily:
              'JetBrains Mono, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
            fontSize: '0.85rem',
            lineHeight: '1.5',
            color: 'var(--ifm-color-content)',
            whiteSpace: 'pre',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          <code style={{ color: 'inherit' }}>{children}</code>
        </pre>
      </div>
    </div>
  );
}

export const CodeBlock: React.FC<CodeBlockProps> = (props) => <ThemeCodeBlock {...props} />;
