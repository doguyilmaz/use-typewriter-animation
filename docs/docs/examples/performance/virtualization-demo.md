---
sidebar_position: 1
title: Virtualization Demo
description: High-performance rendering for long text sequences
tags: [performance, virtualization, optimization, metrics]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { VirtualizationDemoExample } from '@site/src/examples/performance';

<ExamplePage
component={VirtualizationDemoExample}
difficulty="Advanced"
description="Demonstrate high-performance typewriter animations with virtualized rendering and real-time metrics. Perfect for understanding optimization techniques and handling large text sequences efficiently."
tags={["Virtualized rendering", "Performance metrics", "Memory efficiency", "Long text handling", "DOM optimization"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const VirtualizationDemoExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes, metrics } = useTypewriter({
    typeSpeed: 20,
    cursorStyle: 'bar',
    cursorColor: '#f59e0b',
  });

  useEffect(() => {
    const longText = \`⚡ Performance Demo: Virtualized Rendering

This demonstration shows how the typewriter handles extremely long text sequences efficiently.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

🚀 Performance features:

- Virtualized rendering for memory efficiency
- Batched DOM updates
- React.memo optimizations
- Hardware-accelerated CSS
- Smart segment grouping

The typewriter maintains 60fps even with massive text sequences thanks to these optimizations.\`;

    typewriter.type(longText.trim()).start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div 
        style={{ 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Performance metrics display */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--ifm-color-content)', marginBottom: '1rem' }}>
            📊 Performance Metrics
          </h3>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '1rem' 
            }}
          >
            <div 
              style={{ 
                textAlign: 'center', 
                padding: '1rem', 
                border: '1px solid var(--ifm-color-emphasis-300)', 
                borderRadius: '8px',
                backgroundColor: 'var(--ifm-background-surface-color)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#3b82f6' }}>
                {metrics?.totalSegments || 0}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--ifm-color-content-secondary)' }}>
                Total Segments
              </div>
            </div>
            <div 
              style={{ 
                textAlign: 'center', 
                padding: '1rem', 
                border: '1px solid var(--ifm-color-emphasis-300)', 
                borderRadius: '8px',
                backgroundColor: 'var(--ifm-background-surface-color)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981' }}>
                {metrics?.visibleSegments || 0}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--ifm-color-content-secondary)' }}>
                Rendered Segments
              </div>
            </div>
            <div 
              style={{ 
                textAlign: 'center', 
                padding: '1rem', 
                border: '1px solid var(--ifm-color-emphasis-300)', 
                borderRadius: '8px',
                backgroundColor: 'var(--ifm-background-surface-color)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#8b5cf6' }}>
                {Math.round(((metrics?.visibleSegments || 0) / Math.max(metrics?.totalSegments || 1, 1)) * 100)}%
              </div>
              <div style={{ fontSize: '14px', color: 'var(--ifm-color-content-secondary)' }}>
                Efficiency
              </div>
            </div>
          </div>
        </div>

        {/* Text content area */}
        <div 
          style={{
            padding: '2rem',
            border: '2px solid var(--ifm-color-emphasis-300)',
            borderRadius: '12px',
            fontSize: '16px',
            lineHeight: '1.6',
            minHeight: '400px',
            maxHeight: '600px',
            overflowY: 'auto',
            whiteSpace: 'pre-wrap',
            backgroundColor: 'var(--ifm-background-surface-color)',
            color: 'var(--ifm-color-content)',
            width: '100%',
            boxSizing: 'border-box',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default VirtualizationDemoExample;`}
instructions={[
"Monitor the performance metrics in real-time during typing to understand optimization impact",
"Notice how only visible segments are rendered for memory efficiency and DOM optimization",
"Observe the efficiency percentage as content grows to see virtualization benefits",
"The component maintains smooth 60fps performance even with extremely long text sequences",
"Virtualization automatically activates when content exceeds threshold for seamless scaling"
]}
/>

## Use Cases

- **Documentation Platforms**: Handle large technical documents and API references with smooth scrolling and rendering
- **Code Repositories**: Display extensive codebases and file contents without performance degradation
- **Data Visualization**: Present large datasets and reports with typewriter effects while maintaining responsiveness
- **Educational Tools**: Create long-form tutorials and courses that remain performant across all devices
- **Content Management**: Build CMS interfaces that can handle lengthy articles and content with animated presentation
