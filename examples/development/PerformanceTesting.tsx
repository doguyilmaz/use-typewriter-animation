import { useState, useCallback } from 'react';
import { useTypewriter } from '../src/Typewriter/useTypewriter';

interface PerformanceTestingProps {
  textLength?: number;
  virtualizationEnabled?: boolean;
}

export const PerformanceTesting: React.FC<PerformanceTestingProps> = ({
  textLength = 1000,
  virtualizationEnabled = true,
}) => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [testResults, setTestResults] = useState<
    Array<{
      length: number;
      duration: number;
      virtualized: boolean;
    }>
  >([]);

  const { typewriter, elements, cursor, keyframes, metrics } = useTypewriter({
    typeSpeed: 1, // Fast typing for testing
    enableVirtualization: virtualizationEnabled,
    maxVisibleSegments: 50,
    enableCursor: true,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  const runPerformanceTest = useCallback(() => {
    setStartTime(Date.now());
    setEndTime(null);

    // Generate long text for performance testing
    const longText = Array.from({ length: textLength }, (_, i) => `Word${i} `).join('');

    typewriter
      .on('start', () => {
        console.log('🚀 Performance test started');
        setStartTime(Date.now());
      })
      .on('end', () => {
        const endTime = Date.now();
        setEndTime(endTime);
        const duration = startTime ? endTime - startTime : 0;

        setTestResults((prev) => [
          ...prev,
          {
            length: textLength,
            duration,
            virtualized: virtualizationEnabled,
          },
        ]);

        console.log(`✅ Performance test completed in ${duration}ms`);
      })
      .deleteAll()
      .type(longText)
      .start();
  }, [typewriter, textLength, virtualizationEnabled, startTime]);

  const runBenchmarkSuite = useCallback(() => {
    const tests = [
      { length: 100, virtualized: false },
      { length: 100, virtualized: true },
      { length: 500, virtualized: false },
      { length: 500, virtualized: true },
      { length: 1000, virtualized: false },
      { length: 1000, virtualized: true },
      { length: 2000, virtualized: true },
    ];

    setTestResults([]);
    // Note: In a real implementation, you'd run these sequentially
    console.log('🧪 Benchmark suite would run:', tests);
  }, []);

  const duration = startTime && endTime ? endTime - startTime : null;
  const averageDuration =
    testResults.length > 0
      ? testResults.reduce((sum, result) => sum + result.duration, 0) / testResults.length
      : 0;

  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        maxWidth: '800px',
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
          Performance Testing
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: '0.9rem',
          }}
        >
          Test typewriter performance with different text lengths and virtualization settings
        </p>
      </div>

      {/* Controls */}
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Text Length: {textLength} characters
            </label>
            <input
              type='range'
              min='100'
              max='5000'
              step='100'
              value={textLength}
              onChange={(e) => {
                // In a real implementation, you'd update textLength
                console.log('Text length:', e.target.value);
              }}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type='checkbox'
              id='virtualization'
              checked={virtualizationEnabled}
              onChange={(e) => {
                // In a real implementation, you'd update virtualizationEnabled
                console.log('Virtualization:', e.target.checked);
              }}
            />
            <label htmlFor='virtualization' style={{ fontWeight: '500' }}>
              Enable Virtualization
            </label>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={runPerformanceTest}
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
            Run Single Test ({textLength} chars)
          </button>
          <button
            onClick={runBenchmarkSuite}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Run Benchmark Suite
          </button>
        </div>

        {duration && (
          <div
            style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: '#dcfce7',
              border: '1px solid #16a34a',
              borderRadius: '8px',
              color: '#15803d',
              fontWeight: '500',
            }}
          >
            ✅ Test completed in {duration}ms
          </div>
        )}
      </div>

      {/* Performance Metrics */}
      <div
        style={{
          backgroundColor: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <h3
          style={{
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem',
          }}
        >
          📊 Real-time Metrics
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Segments</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937' }}>
              {metrics.totalSegments}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Visible Segments</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937' }}>
              {metrics.visibleSegments}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Virtualized</div>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: metrics.isVirtualized ? '#059669' : '#dc2626',
              }}
            >
              {metrics.isVirtualized ? 'Yes' : 'No'}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Optimization</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937' }}>
              {metrics.isVirtualized
                ? `${((1 - metrics.visibleSegments / metrics.totalSegments) * 100).toFixed(1)}%`
                : 'None'}
            </div>
          </div>
        </div>
      </div>

      {/* Typewriter Display */}
      <div
        style={{
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          minHeight: '200px',
          backgroundColor: '#ffffff',
          fontSize: '16px',
          lineHeight: '1.6',
          fontFamily: 'ui-monospace, monospace',
          overflow: 'auto',
          maxHeight: '300px',
        }}
      >
        {elements}
        {cursor}
      </div>

      {/* Test Results History */}
      {testResults.length > 0 && (
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
            📈 Test Results History
          </h3>
          <div style={{ fontSize: '0.875rem', color: '#0c4a6e', marginBottom: '1rem' }}>
            Average Duration: {averageDuration.toFixed(1)}ms
          </div>
          <div style={{ maxHeight: '200px', overflow: 'auto' }}>
            {testResults.map((result, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem',
                  borderBottom: '1px solid #bae6fd',
                  fontSize: '0.875rem',
                  color: '#0c4a6e',
                }}
              >
                <span>{result.length} chars</span>
                <span>{result.virtualized ? 'Virtualized' : 'Standard'}</span>
                <span>{result.duration}ms</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
