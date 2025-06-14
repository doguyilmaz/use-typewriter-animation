---
sidebar_position: 1
title: Data Visualization
description: Interactive data visualization with charts, graphs, and statistical displays
tags: [data, charts, visualization, analytics, dashboard]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { DataVisualizationExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={DataVisualizationExample}
difficulty="Intermediate"
description="Build comprehensive data visualization dashboards with dynamic charts, statistical analysis, and real-time data updates. Perfect for analytics platforms, business intelligence tools, and data-driven applications."
tags={["Data analytics", "Chart visualization", "Dashboard interface", "Statistical analysis", "Business intelligence"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const DataVisualizationExample: React.FC = () => {
const [dataPoint, setDataPoint] = useState(0);
const [chartType, setChartType] = useState('bar');
const [isLoading, setIsLoading] = useState(false);

const { typewriter, elements, cursor, keyframes } = useTypewriter({
typeSpeed: 25,
cursorStyle: 'block',
cursorColor: '#3b82f6',
});

const chartData = [
{ label: 'Q1 2024', value: 45, growth: '+12%' },
{ label: 'Q2 2024', value: 67, growth: '+23%' },
{ label: 'Q3 2024', value: 83, growth: '+18%' },
{ label: 'Q4 2024', value: 92, growth: '+9%' },
];

useEffect(() => {
typewriter
.colorize('#3b82f6')
.type('📊 DATA VISUALIZATION DASHBOARD 📊')
.colorize('#1f2937')
.newLine()
.type('═══════════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(600)
.colorize('#10b981')
.type('📈 Analytics Overview:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('Data Source: Sales Database | Last Updated: 2 min ago')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('Records: 1,247,893 | Time Range: 2024 Q1-Q4')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#f59e0b')
.type('📋 Key Performance Indicators:')
.colorize('#1f2937')
.newLine()
.type('─────────────────────────────────────────────')
.newLine()
.pauseFor(400)
.colorize('#22c55e')
.type('🎯 Total Revenue: ')
.colorize('#1f2937')
.type('$2,847,392')
.colorize('#10b981')
.type(' (+15.7%)')
.colorize('#1f2937')
.newLine()
.pauseFor(300)
.colorize('#3b82f6')
.type('👥 Active Users: ')
.colorize('#1f2937')
.type('124,567')
.colorize('#10b981')
.type(' (+8.2%)')
.colorize('#1f2937')
.newLine()
.pauseFor(300)
.colorize('#8b5cf6')
.type('🛒 Conversion Rate: ')
.colorize('#1f2937')
.type('4.87%')
.colorize('#10b981')
.type(' (+2.1%)')
.colorize('#1f2937')
.newLine()
.pauseFor(300)
.colorize('#ec4899')
.type('📦 Orders: ')
.colorize('#1f2937')
.type('8,934')
.colorize('#10b981')
.type(' (+23.4%)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#fbbf24')
.type('📊 Quarterly Performance Chart:')
.colorize('#1f2937')
.newLine()
.type('─────────────────────────────────────────────')
.newLine()
.pauseFor(600)
.colorize('#6b7280')
.type('Q1 2024 |')
.colorize('#3b82f6')
.type('████████████████████████████████████████████')
.colorize('#6b7280')
.type('| 45K')
.colorize('#10b981')
.type(' (+12%)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#6b7280')
.type('Q2 2024 |')
.colorize('#10b981')
.type('██████████████████████████████████████████████████████████████')
.colorize('#6b7280')
.type('| 67K')
.colorize('#10b981')
.type(' (+23%)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#6b7280')
.type('Q3 2024 |')
.colorize('#8b5cf6')
.type('████████████████████████████████████████████████████████████████████████████')
.colorize('#6b7280')
.type('| 83K')
.colorize('#10b981')
.type(' (+18%)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#6b7280')
.type('Q4 2024 |')
.colorize('#ec4899')
.type('████████████████████████████████████████████████████████████████████████████████████')
.colorize('#6b7280')
.type('| 92K')
.colorize('#10b981')
.type(' (+9%)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#f59e0b')
.type('🎯 Statistical Analysis:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('• Mean: 71.75K | Median: 75K | Mode: N/A')
.newLine()
.type('• Standard Deviation: 20.3K | Variance: 412.09')
.newLine()
.type('• Growth Trend: Positive (+15.5% YoY)')
.newLine()
.type('• Correlation Coefficient: 0.94 (Strong)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#3b82f6')
.type('📊 Top Performance Metrics:')
.colorize('#1f2937')
.newLine()
.type('─────────────────────────────────────────────')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type('🥇 Best Quarter: ')
.colorize('#1f2937')
.type('Q4 2024')
.colorize('#6b7280')
.type(' (92K units)')
.colorize('#1f2937')
.newLine()
.colorize('#fbbf24')
.type('🚀 Highest Growth: ')
.colorize('#1f2937')
.type('Q2 2024')
.colorize('#6b7280')
.type(' (+23% increase)')
.colorize('#1f2937')
.newLine()
.colorize('#8b5cf6')
.type('📈 Trend Direction: ')
.colorize('#22c55e')
.type('Upward')
.colorize('#6b7280')
.type(' (All quarters positive)')
.colorize('#1f2937')
.newLine()
.colorize('#ec4899')
.type('🎯 Forecast Q1 2025: ')
.colorize('#1f2937')
.type('98K')
.colorize('#6b7280')
.type(' (±5K confidence)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#10b981')
.type('💡 Data Insights:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('• Q2 shows exceptional growth spike')
.newLine()
.type('• Consistent upward trajectory maintained')
.newLine()
.type('• Strong seasonal performance in Q4')
.newLine()
.type('• Recommend increased investment for Q1 2025')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#fbbf24')
.type('🔄 Real-time Data Stream:')
.colorize('#1f2937')
.newLine()
.colorize('#22c55e')
.type('● ')
.colorize('#1f2937')
.type('Live data connection active')
.newLine()
.colorize('#22c55e')
.type('● ')
.colorize('#1f2937')
.type('Dashboard auto-refresh: 30s intervals')
.newLine()
.colorize('#22c55e')
.type('● ')
.colorize('#1f2937')
.type('Next update: 0:28 remaining')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#3b82f6')
.type('📊 Dashboard ready for analysis! 📊')
.start();
}, []);

// Simulate data updates
useEffect(() => {
const interval = setInterval(() => {
setDataPoint(prev => (prev + 1) % 100);
const chartTypes = ['bar', 'line', 'pie', 'scatter'];
setChartType(chartTypes[Math.floor(Math.random() * chartTypes.length)]);
setIsLoading(Math.random() > 0.7);
}, 2500);

    return () => clearInterval(interval);

}, []);

return (
<>
<style>
{keyframes}
{\`
@keyframes data-pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.7; }
}

          @keyframes chart-bar {
            0% { transform: scaleY(0); }
            100% { transform: scaleY(1); }
          }

          @keyframes loading-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes metric-update {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .data-point {
            animation: data-pulse 2s infinite;
          }

          .chart-bar {
            animation: chart-bar 1s ease-out;
            transform-origin: bottom;
          }

          .loading-indicator {
            animation: loading-spin 1s linear infinite;
          }

          .metric-highlight {
            animation: metric-update 2s ease-in-out infinite;
          }
        \`}
      </style>
      <div
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #3b82f6',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
        }}
      >
        {/* Live data indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
            className="data-point"
          />
          <span>Live Data</span>
        </div>

        {/* Chart type indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            padding: '8px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            color: '#3b82f6',
            fontWeight: '600',
          }}
        >
          📊 {chartType.toUpperCase()} CHART
        </div>

        {/* Mini chart visualization */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '4px',
            alignItems: 'end',
            height: '40px',
          }}
        >
          {chartData.map((item, i) => (
            <div
              key={i}
              className="chart-bar"
              style={{
                width: '12px',
                height: \`\${(item.value / 100) * 40}px\`,
                backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#ec4899'][i],
                borderRadius: '2px 2px 0 0',
                animationDelay: \`\${i * 0.2}s\`,
              }}
            />
          ))}
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(251, 191, 36, 0.1)',
              padding: '8px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              color: '#f59e0b',
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                border: '2px solid #f59e0b',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
              }}
              className="loading-indicator"
            />
            <span>Updating...</span>
          </div>
        )}

        {/* Data point counter */}
        <div
          style={{
            position: 'absolute',
            top: '4rem',
            right: '1rem',
            fontSize: '0.7rem',
            color: '#6b7280',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '4px 8px',
            borderRadius: '8px',
          }}
          className="metric-highlight"
        >
          Data Point: {dataPoint}
        </div>

        {/* Main content */}
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>

);
};

export default DataVisualizationExample;`}
instructions={[
"Build comprehensive data visualization with multiple chart types and KPIs",
"Implement real-time data updates with live indicators and refresh cycles",
"Add statistical analysis including mean, median, and trend calculations",
"Include interactive chart animations and data point visualizations",
"Design professional dashboard interface with performance metrics"
]}
/>

## Use Cases

- **Business Intelligence**: Executive dashboards and KPI monitoring systems
- **Financial Analytics**: Trading platforms and investment portfolio tracking
- **Marketing Analytics**: Campaign performance and customer behavior analysis
- **Operations Management**: Supply chain monitoring and performance dashboards
- **Scientific Research**: Data analysis tools and experiment result visualization
