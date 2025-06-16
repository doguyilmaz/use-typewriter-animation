import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const DataVisualization: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 25,
    cursorStyle: 'bar',
    cursorColor: '#059669',
  });

  const [chartType, setChartType] = useState('bar');
  const [isLoading, setIsLoading] = useState(false);
  const [dataPoint, setDataPoint] = useState(85);

  const chartTypes = ['bar', 'line', 'pie', 'scatter'];

  useEffect(() => {
    typewriter
      .colorize('#059669')
      .type('📊 BUSINESS ANALYTICS DASHBOARD')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#3b82f6')
      .type('📈 SALES PERFORMANCE')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('Q1 Revenue: $2.4M (+12%)')
      .newLine()
      .type('Q2 Revenue: $2.8M (+15%)')
      .newLine()
      .type('Q3 Revenue: $3.1M (+18%)')
      .newLine()
      .type('Q4 Revenue: $3.5M (+22%)')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#f59e0b')
      .type('🎯 KEY METRICS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#10b981')
      .type('Customer Satisfaction: ')
      .colorize('#1f2937')
      .type(`${dataPoint}%`)
      .newLine()
      .colorize('#10b981')
      .type('Conversion Rate: ')
      .colorize('#1f2937')
      .type('4.2%')
      .newLine()
      .colorize('#10b981')
      .type('Avg Order Value: ')
      .colorize('#1f2937')
      .type('$127.50')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#8b5cf6')
      .type(`📊 Chart Type: ${chartType.toUpperCase()}`)
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type(isLoading ? '⏳ Loading data...' : '✅ Data updated')
      .start();
  }, [chartType, isLoading, dataPoint]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartType(chartTypes[Math.floor(Math.random() * chartTypes.length)]);
      setIsLoading(Math.random() > 0.7);
      setDataPoint(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 10)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid var(--ifm-color-success)',
          position: 'relative',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default DataVisualization;