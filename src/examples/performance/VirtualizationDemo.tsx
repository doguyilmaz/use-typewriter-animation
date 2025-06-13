import { useEffect } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const VirtualizationDemo = () => {
  const { typewriter, elements, cursor, keyframes, metrics } = useTypewriter({
    typeSpeed: 20,
    cursorStyle: 'bar',
    cursorColor: '#f59e0b',
    enableVirtualization: true,
    maxVisibleSegments: 50,
  });

  useEffect(() => {
    const longText = `
Performance Demo: Virtualized Rendering

This demonstration shows how the typewriter handles extremely long text sequences efficiently through virtualization.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.

The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.

This is just a fraction of what the typewriter can handle. With virtualization enabled, only the visible segments are rendered, ensuring smooth performance even with thousands of characters!

🚀 Performance features:
- Virtualized rendering for memory efficiency
- Batched DOM updates
- React.memo optimizations  
- Hardware-accelerated CSS
- Smart segment grouping

The typewriter maintains 60fps even with massive text sequences thanks to these optimizations.
`;

    typewriter.colorize('#f59e0b').type('⚡ ').colorize('#1f2937').type(longText.trim()).start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            Performance & Virtualization Demo
          </h1>
          <p
            style={{
              color: '#6b7280',
              fontSize: '1.1rem',
            }}
          >
            Handling long text sequences with optimal performance
          </p>
        </div>

        {/* Metrics panel */}
        <div
          style={{
            backgroundColor: '#f9fafb',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            📊 Performance Metrics
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#3b82f6',
                }}
              >
                {metrics.totalSegments}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontWeight: '500',
                }}
              >
                Total Segments
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#10b981',
                }}
              >
                {metrics.visibleSegments}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontWeight: '500',
                }}
              >
                Rendered Segments
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: metrics.isVirtualized ? '#f59e0b' : '#6b7280',
                }}
              >
                {metrics.isVirtualized ? 'ON' : 'OFF'}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontWeight: '500',
                }}
              >
                Virtualization
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#8b5cf6',
                }}
              >
                {Math.round((metrics.visibleSegments / Math.max(metrics.totalSegments, 1)) * 100)}%
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontWeight: '500',
                }}
              >
                Efficiency
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '2rem',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#1f2937',
            minHeight: '400px',
            maxHeight: '600px',
            overflowY: 'auto',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          {elements}
          {cursor}
        </div>

        {/* Performance tips */}
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
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#0c4a6e',
              marginBottom: '1rem',
            }}
          >
            🚀 Performance Optimizations
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              display: 'grid',
              gap: '0.5rem',
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Virtualized rendering for long text sequences
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Intelligent segment grouping reduces DOM nodes
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> React.memo prevents unnecessary re-renders
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Batched state updates for smooth animations
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Hardware-accelerated CSS with will-change
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0c4a6e' }}>
              <span>✓</span> Memory-safe cleanup and timeout management
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
