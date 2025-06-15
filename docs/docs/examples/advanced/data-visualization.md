---
sidebar_position: 7
title: Data Visualization Dashboard
description: Interactive business analytics dashboard with real-time metrics visualization
tags: [data, analytics, dashboard, charts, business intelligence]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { DataVisualization } from '@site/src/examples/advanced';

<ExamplePage
component={DataVisualization}
difficulty="Advanced"
description="Create a sophisticated business analytics dashboard with real-time data visualization, dynamic chart types, and interactive metrics display. Perfect for business intelligence applications, data monitoring systems, and executive dashboards."
tags={["Data visualization", "Business analytics", "Real-time dashboard", "Chart display", "Metrics tracking"]}
code={`import React, { useEffect, useState } from 'react';
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
      .type(\`\${dataPoint}%\`)
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
      .type(\`📊 Chart Type: \${chartType.toUpperCase()}\`)
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
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200)',
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

export default DataVisualization;`}
instructions={[
"Implement dynamic chart type rotation to showcase different data visualization methods",
"Use statistical terminology and real business metrics for authentic dashboard experience",
"Apply color coding to differentiate between different chart types and data categories", 
"Include loading states and data refresh indicators for realistic dashboard behavior",
"Structure data presentation with clear headers and progress indicators for professional UX"
]}
/>

## Use Cases

- **Business Intelligence Dashboards**: Create executive reporting tools with animated KPI reveals and data insights
- **Financial Analytics Platforms**: Build trading dashboards and investment portfolio tracking interfaces
- **Marketing Campaign Analytics**: Display real-time campaign performance metrics and conversion data
- **E-commerce Analytics**: Showcase sales performance, inventory levels, and customer behavior insights
- **SaaS Application Metrics**: Present user engagement, subscription metrics, and product usage analytics