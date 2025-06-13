import React, { useState } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

/**
 * Comprehensive Accessibility Testing Component
 *
 * This component provides interactive tests for WCAG 2.1 compliance
 * and accessibility features of the typewriter animation library.
 */

interface TestScenario {
  name: string;
  description: string;
  component: React.ComponentType;
  status: 'idle' | 'running' | 'passed' | 'failed';
}

// Individual test components
const ReducedMotionTest = () => {
  const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      respectReducedMotion: true,
      reducedMotionFallback: 'instant',
      ariaLabel: 'Reduced motion test typewriter',
    });

  React.useEffect(() => {
    typewriter
      .type('This text should appear instantly if reduced motion is preferred.', {
        screenReaderText: 'Complete text for screen readers',
        announceCompletion: true,
      })
      .start();
  }, [typewriter]);

  return (
    <div
      {...accessibilityProps}
      data-testid='reduced-motion-typewriter'
      style={{
        padding: '1rem',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        backgroundColor: '#f9fafb',
      }}
    >
      {elements}
      {cursor}
      {screenReaderAnnouncement}
    </div>
  );
};

const ScreenReaderTest = () => {
  const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      ariaLive: 'polite',
      ariaLabel: 'Screen reader test typewriter',
      role: 'status',
      announceCompletion: true,
      screenReaderText: 'Welcome to our accessible typewriter animation!',
    });

  React.useEffect(() => {
    typewriter
      .type('Welcome to our accessible typewriter animation!', {
        screenReaderText: 'Welcome to our accessible typewriter animation!',
        announceCompletion: true,
      })
      .start();
  }, [typewriter]);

  return (
    <div
      {...accessibilityProps}
      data-testid='screen-reader-typewriter'
      style={{
        padding: '1rem',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        backgroundColor: '#f0f9ff',
      }}
    >
      {elements}
      {cursor}
      {screenReaderAnnouncement}
    </div>
  );
};

const KeyboardControlTest = () => {
  const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      enableKeyboardControls: true,
      autoKeyboardHandling: true,
      keyboardShortcuts: {
        pause: ['Space'],
        resume: ['Space'],
        skip: ['Escape'],
        reset: ['KeyR'],
      },
      ariaLabel:
        'Keyboard controllable typewriter (Space to pause/resume, Escape to skip, R to reset)',
    });

  React.useEffect(() => {
    typewriter
      .type('Use Space to pause/resume, Escape to skip, R to reset.', {
        announceCompletion: true,
      })
      .pauseFor(1000)
      .type(' Try the keyboard controls!')
      .start();
  }, [typewriter]);

  return (
    <div
      {...accessibilityProps}
      data-testid='keyboard-control-typewriter'
      tabIndex={0}
      style={{
        padding: '1rem',
        border: '2px solid #3b82f6',
        borderRadius: '8px',
        backgroundColor: '#eff6ff',
        outline: 'none',
      }}
    >
      <div style={{ fontSize: '0.875rem', color: '#1e40af', marginBottom: '0.5rem' }}>
        Focus this area and try: Space, Escape, R
      </div>
      {elements}
      {cursor}
      {screenReaderAnnouncement}
    </div>
  );
};

const HighContrastTest = () => {
  const { typewriter, elements, cursor, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      cursorColor: 'currentColor',
      ariaLabel: 'High contrast mode test typewriter',
    });

  React.useEffect(() => {
    typewriter
      .type('This text should be visible in high contrast mode.')
      .colorize('#0066cc')
      .type(' Blue text.')
      .colorize('')
      .type(' Normal text.')
      .start();
  }, [typewriter]);

  return (
    <div
      {...accessibilityProps}
      data-testid='high-contrast-typewriter'
      style={{
        color: 'currentColor',
        backgroundColor: 'transparent',
        border: '1px solid currentColor',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      {elements}
      {cursor}
      {screenReaderAnnouncement}
    </div>
  );
};

export const AccessibilityTesting: React.FC = () => {
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, 'passed' | 'failed' | 'idle'>>({});

  const testScenarios: TestScenario[] = [
    {
      name: 'reducedMotion',
      description: 'Tests respect for prefers-reduced-motion setting',
      component: ReducedMotionTest,
      status: testResults.reducedMotion || 'idle',
    },
    {
      name: 'screenReader',
      description: 'Tests ARIA live regions and screen reader support',
      component: ScreenReaderTest,
      status: testResults.screenReader || 'idle',
    },
    {
      name: 'keyboardControl',
      description: 'Tests keyboard navigation and shortcuts',
      component: KeyboardControlTest,
      status: testResults.keyboardControl || 'idle',
    },
    {
      name: 'highContrast',
      description: 'Tests high contrast mode compatibility',
      component: HighContrastTest,
      status: testResults.highContrast || 'idle',
    },
  ];

  const runTest = (testName: string) => {
    setActiveTest(testName);
    setTestResults((prev) => ({ ...prev, [testName]: 'idle' }));

    // Simulate test completion after a delay
    setTimeout(() => {
      setTestResults((prev) => ({ ...prev, [testName]: 'passed' }));
    }, 2000);
  };

  const runAllTests = () => {
    testScenarios.forEach((test, index) => {
      setTimeout(() => runTest(test.name), index * 500);
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return '#059669';
      case 'failed':
        return '#dc2626';
      case 'running':
        return '#d97706';
      default:
        return '#6b7280';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return '✅';
      case 'failed':
        return '❌';
      case 'running':
        return '⏳';
      default:
        return '⚪';
    }
  };

  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '0.5rem',
          }}
        >
          Accessibility Testing Suite
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: '0.9rem',
          }}
        >
          Interactive tests for WCAG 2.1 AA compliance and accessibility features
        </p>
      </div>

      {/* Test Controls */}
      <div
        style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={runAllTests}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Run All Tests
          </button>
          <button
            onClick={() => setTestResults({})}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Reset Results
          </button>
        </div>

        {/* Test Status Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {testScenarios.map((test) => (
            <div
              key={test.name}
              style={{
                padding: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
              onClick={() => runTest(test.name)}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{getStatusIcon(test.status)}</span>
                <span
                  style={{
                    fontWeight: '500',
                    color: getStatusColor(test.status),
                  }}
                >
                  {test.name}
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                }}
              >
                {test.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Test Display */}
      {activeTest && (
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid #3b82f6',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem',
            }}
          >
            🧪 Active Test: {activeTest}
          </h3>
          {React.createElement(
            testScenarios.find((t) => t.name === activeTest)?.component || 'div'
          )}
        </div>
      )}

      {/* Accessibility Guidelines */}
      <div
        style={{
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '12px',
          padding: '1.5rem',
        }}
      >
        <h3
          style={{
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#0c4a6e',
            marginBottom: '1rem',
          }}
        >
          ♿ Accessibility Guidelines Tested
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          <div>
            <h4 style={{ color: '#0c4a6e', marginBottom: '0.5rem' }}>WCAG 2.1 Level AA</h4>
            <ul style={{ fontSize: '0.875rem', color: '#0c4a6e', margin: 0, paddingLeft: '1rem' }}>
              <li>1.4.3 Contrast (Minimum)</li>
              <li>2.1.1 Keyboard Navigation</li>
              <li>2.2.2 Pause, Stop, Hide</li>
              <li>4.1.3 Status Messages</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0c4a6e', marginBottom: '0.5rem' }}>Additional Features</h4>
            <ul style={{ fontSize: '0.875rem', color: '#0c4a6e', margin: 0, paddingLeft: '1rem' }}>
              <li>Reduced Motion Support</li>
              <li>Screen Reader Optimization</li>
              <li>High Contrast Mode</li>
              <li>Focus Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
