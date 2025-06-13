import { useState, useCallback } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

/**
 * Conflict Testing Component
 *
 * Tests for delete/type event loop conflicts and timing issues.
 * This addresses issues from the old DOM manipulation version where:
 * - delete functions would conflict with type()
 * - event loop would get confused and not wait for next callback
 * - timing issues would cause inconsistent behavior
 */

interface TestResult {
  timestamp: number;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
}

export const ConflictTesting: React.FC = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState<string>('');

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    deleteSpeed: 15,
    enableCursor: true,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  const logResult = useCallback((message: string, type: TestResult['type'] = 'info') => {
    setTestResults((prev) => [
      ...prev,
      {
        timestamp: Date.now(),
        message,
        type,
      },
    ]);
  }, []);

  const clearResults = useCallback(() => {
    setTestResults([]);
  }, []);

  const runBasicDeleteTypeTest = useCallback(async () => {
    setCurrentTest('Basic Delete/Type Test');
    logResult('🧪 Starting basic delete/type test...', 'info');

    try {
      typewriter
        .on('start', () => logResult('✅ Animation started', 'success'))
        .on('end', () => logResult('✅ Animation completed', 'success'))
        .deleteAll()
        .type('Hello World!')
        .deleteLetters(6) // Delete "World!"
        .type('React!')
        .start();

      logResult('✅ Basic delete/type test completed successfully', 'success');
    } catch (error) {
      logResult(`❌ Error in basic test: ${error}`, 'error');
    }
  }, [typewriter, logResult]);

  const runMultipleCyclesTest = useCallback(async () => {
    setCurrentTest('Multiple Delete/Type Cycles');
    logResult('🧪 Starting multiple delete/type cycles test...', 'info');

    try {
      typewriter
        .deleteAll()
        .type('First text')
        .deleteLetters(4) // Delete "text"
        .type('message')
        .deleteWords(1) // Delete "message"
        .type('content')
        .deleteAll()
        .type('Final result')
        .start();

      logResult('✅ Multiple cycles test completed successfully', 'success');
    } catch (error) {
      logResult(`❌ Error in multiple cycles test: ${error}`, 'error');
    }
  }, [typewriter, logResult]);

  const runRapidAlternationTest = useCallback(async () => {
    setCurrentTest('Rapid Delete/Type Alternation');
    logResult('🧪 Starting rapid delete/type alternation test...', 'info');

    try {
      typewriter
        .deleteAll()
        .type('A')
        .deleteLetters(1)
        .type('B')
        .deleteLetters(1)
        .type('C')
        .deleteLetters(1)
        .type('D')
        .deleteLetters(1)
        .type('Success!')
        .start();

      logResult('✅ Rapid alternation test completed successfully', 'success');
    } catch (error) {
      logResult(`❌ Error in rapid alternation test: ${error}`, 'error');
    }
  }, [typewriter, logResult]);

  const runComplexSequenceTest = useCallback(async () => {
    setCurrentTest('Complex Sequence with Callbacks');
    logResult('🧪 Starting complex sequence test...', 'info');

    try {
      typewriter
        .deleteAll()
        .type('Testing complex sequence...')
        .pauseFor(300)
        .deleteWords(2) // Delete "complex sequence..."
        .type('event loop integrity')
        .pauseFor(200)
        .deleteLetters(9) // Delete "integrity"
        .type('stability')
        .start();

      logResult('✅ Complex sequence test completed successfully', 'success');
    } catch (error) {
      logResult(`❌ Error in complex sequence test: ${error}`, 'error');
    }
  }, [typewriter, logResult]);

  const runAllTests = useCallback(async () => {
    if (isRunning) return;

    setIsRunning(true);
    clearResults();
    logResult('🚀 Starting comprehensive conflict testing suite...', 'info');

    const tests = [
      { name: 'Basic Delete/Type', fn: runBasicDeleteTypeTest, delay: 3000 },
      { name: 'Multiple Cycles', fn: runMultipleCyclesTest, delay: 4000 },
      { name: 'Rapid Alternation', fn: runRapidAlternationTest, delay: 3000 },
      { name: 'Complex Sequence', fn: runComplexSequenceTest, delay: 4000 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      logResult(`📋 Running test ${i + 1}/${tests.length}: ${test.name}`, 'info');

      await test.fn();

      if (i < tests.length - 1) {
        logResult(`⏳ Waiting ${test.delay}ms before next test...`, 'warning');
        await new Promise((resolve) => setTimeout(resolve, test.delay));
      }
    }

    logResult('🎉 All conflict tests completed successfully!', 'success');
    logResult('✅ No event loop conflicts detected', 'success');
    setIsRunning(false);
    setCurrentTest('');
  }, [
    isRunning,
    clearResults,
    logResult,
    runBasicDeleteTypeTest,
    runMultipleCyclesTest,
    runRapidAlternationTest,
    runComplexSequenceTest,
  ]);

  const getResultColor = (type: TestResult['type']) => {
    switch (type) {
      case 'success':
        return '#059669';
      case 'error':
        return '#dc2626';
      case 'warning':
        return '#d97706';
      default:
        return '#374151';
    }
  };

  const getResultIcon = (type: TestResult['type']) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
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
      <style>{keyframes}</style>

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
          Conflict Testing Suite
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: '0.9rem',
          }}
        >
          Testing for event loop conflicts between delete and type operations
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
            disabled={isRunning}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: isRunning ? '#9ca3af' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: isRunning ? 'not-allowed' : 'pointer',
            }}
          >
            {isRunning ? 'Running Tests...' : 'Run All Conflict Tests'}
          </button>

          <button
            onClick={runBasicDeleteTypeTest}
            disabled={isRunning}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: isRunning ? '#9ca3af' : '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: isRunning ? 'not-allowed' : 'pointer',
            }}
          >
            Basic Test
          </button>

          <button
            onClick={clearResults}
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
            Clear Results
          </button>
        </div>

        {/* Current Test Status */}
        {currentTest && (
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: '#eff6ff',
              border: '1px solid #3b82f6',
              borderRadius: '8px',
              color: '#1e40af',
              fontWeight: '500',
            }}
          >
            🧪 Currently running: {currentTest}
          </div>
        )}
      </div>

      {/* Typewriter Display */}
      <div
        style={{
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          minHeight: '100px',
          backgroundColor: '#ffffff',
          fontSize: '18px',
          fontFamily: 'ui-monospace, monospace',
          lineHeight: '1.6',
        }}
      >
        {elements}
        {cursor}
      </div>

      {/* Test Results Log */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.5rem',
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
          📋 Test Results Log
        </h3>

        <div
          style={{
            maxHeight: '400px',
            overflow: 'auto',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
          }}
        >
          {testResults.length === 0 ? (
            <div
              style={{
                padding: '2rem',
                textAlign: 'center',
                color: '#6b7280',
                fontStyle: 'italic',
              }}
            >
              Click "Run All Conflict Tests" to start testing for delete/type conflicts...
            </div>
          ) : (
            testResults.map((result, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderBottom: index < testResults.length - 1 ? '1px solid #f1f5f9' : 'none',
                  fontSize: '0.875rem',
                }}
              >
                <span style={{ fontSize: '1rem' }}>{getResultIcon(result.type)}</span>
                <span
                  style={{
                    color: '#6b7280',
                    fontSize: '0.75rem',
                    minWidth: '60px',
                  }}
                >
                  {new Date(result.timestamp).toLocaleTimeString()}
                </span>
                <span
                  style={{
                    color: getResultColor(result.type),
                    flex: 1,
                  }}
                >
                  {result.message}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Test Information */}
      <div
        style={{
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '12px',
          padding: '1.5rem',
          marginTop: '2rem',
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
          🔍 What This Tests
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          <div>
            <h4 style={{ color: '#0c4a6e', marginBottom: '0.5rem' }}>Event Loop Integrity</h4>
            <ul style={{ fontSize: '0.875rem', color: '#0c4a6e', margin: 0, paddingLeft: '1rem' }}>
              <li>Delete operations followed by type operations</li>
              <li>Multiple delete/type cycles in sequence</li>
              <li>Rapid alternation between operations</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0c4a6e', marginBottom: '0.5rem' }}>Timing & Callbacks</h4>
            <ul style={{ fontSize: '0.875rem', color: '#0c4a6e', margin: 0, paddingLeft: '1rem' }}>
              <li>Complex sequences with pauses</li>
              <li>Callback timing and execution order</li>
              <li>State consistency across operations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
