import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { CodeBlock } from './shared/CodeBlock';
import { commonStyles, createDifficultyStyle, createToggleButtonStyle } from './shared/styles';

interface ExamplePageProps {
  title?: string;
  description?: string;
  component: React.ComponentType;
  code: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'Beginner' | 'Intermediate' | 'Advanced';
  tags?: string[];
  features?: string[];
  instructions?: string[];
  liveComponent?: React.ReactNode;
  sourceCode?: string;
  showTitle?: boolean;
}

export const ExamplePage: React.FC<ExamplePageProps> = ({
  title,
  description,
  component: Component,
  code,
  difficulty = 'beginner',
  tags = [],
  features = [],
  instructions = [],
  liveComponent,
  sourceCode,
  showTitle = false,
}) => {
  const [view, setView] = useState<'live' | 'code'>('live');
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const difficultyConfig = {
    beginner: {
      label: 'Beginner',
      color: isDark ? '#22c55e' : '#16a34a',
      bg: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(22, 163, 58, 0.1)',
    },
    intermediate: {
      label: 'Intermediate',
      color: isDark ? '#f59e0b' : '#d97706',
      bg: isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(217, 119, 6, 0.1)',
    },
    advanced: {
      label: 'Advanced',
      color: isDark ? '#ef4444' : '#dc2626',
      bg: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(220, 38, 38, 0.1)',
    },
  };

  const normalizedDifficulty = difficulty.toLowerCase() as keyof typeof difficultyConfig;
  const currentDifficulty = difficultyConfig[normalizedDifficulty] || difficultyConfig.beginner;
  const allTags = [...tags, ...features];
  const displayCode = sourceCode || code;
  const LiveComponent = liveComponent || <Component />;

  return (
    <div style={commonStyles.container} className='typewriter-example-container'>
      {/* Description */}
      {description && (
        <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--ifm-color-content-secondary)',
              lineHeight: '1.6',
              margin: '0 0 1.5rem',
            }}
          >
            {description}
          </p>
        </div>
      )}

      {/* Meta info */}
      {(allTags.length > 0 || difficulty) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div style={createDifficultyStyle(currentDifficulty.color, currentDifficulty.bg)}>
            {currentDifficulty.label}
          </div>

          {allTags.length > 0 && (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {allTags.map((tag, index) => (
                <span key={index} style={commonStyles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Toggle Controls */}
      <div
        style={{
          ...commonStyles.flexEnd,
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            // border: '1px solid var(--ifm-color-emphasis-200)',
          }}
        >
          <button onClick={() => setView('live')} style={createToggleButtonStyle(view === 'live')}>
            Live
          </button>
          <button onClick={() => setView('code')} style={createToggleButtonStyle(view === 'code')}>
            Code
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          ...commonStyles.card,
          marginBottom: '2rem',
        }}
      >
        {view === 'live' ? (
          <div
            style={{
              ...commonStyles.flexCenter,
              // padding: '3rem',
              minHeight: '300px',
            }}
            className='typewriter-demo-area'
          >
            <div className='typewriter-content'>{LiveComponent}</div>
          </div>
        ) : (
          <CodeBlock language='tsx' title={`${title?.replace(/\s+/g, '') || 'Example'}.tsx`}>
            {displayCode}
          </CodeBlock>
        )}
      </div>

      {/* Instructions */}
      {instructions.length > 0 && (
        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
            // border: `1px solid ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
            borderRadius: '12px',
          }}
        >
          <h3
            style={{
              margin: '0 0 1rem 0',
              color: isDark ? '#60a5fa' : '#2563eb',
              fontSize: '1.1rem',
              fontWeight: '600',
            }}
          >
            💡 Implementation Tips
          </h3>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.5rem',
              color: 'var(--ifm-color-content)',
            }}
          >
            {instructions.map((instruction, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '0.5rem',
                  lineHeight: '1.5',
                }}
              >
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExamplePage;
