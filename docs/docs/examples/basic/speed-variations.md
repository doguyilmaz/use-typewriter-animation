# Speed Variations Demo

This example demonstrates how to create dramatic effects using different typing speeds within a single animation sequence.

## Live Demo

```tsx live
function SpeedVariationsDemo() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 100,
    cursorStyle: 'block',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('The quick brown fox...', { speed: 30 })
      .pauseFor(800)
      .newLine()
      .type('JUMPS!', { speed: 5 })
      .pauseFor(500)
      .newLine()
      .type('...and lands gracefully', { speed: 80 })
      .pauseFor(1000)
      .newLine()
      .newLine()
      .type('🐌 Slow typing creates suspense...', { speed: 150 })
      .pauseFor(1200)
      .newLine()
      .type('⚡ FAST TYPING CREATES EXCITEMENT!', { speed: 10 })
      .pauseFor(800)
      .newLine()
      .type('🎯 Normal speed for readability.', { speed: 50 })
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          border: '2px solid #e2e8f0',
          borderRadius: '12px',
          minHeight: '200px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            marginBottom: '1rem',
            fontSize: '0.9rem',
            color: '#64748b',
            fontWeight: '500',
          }}
        >
          📈 Speed Variations Demo
        </div>
        <div style={{ color: '#1e293b' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Variable Speed Control**: Each text segment uses different typing speeds
- **Dramatic Timing**: Combines slow suspense with fast excitement
- **Visual Hierarchy**: Speed changes emphasize different content types
- **Smooth Transitions**: Natural pauses between speed changes

## Speed Guidelines

- **Very Slow (100-200ms)**: For emphasis and suspense
- **Fast (5-20ms)**: For excitement and energy
- **Normal (40-80ms)**: For comfortable reading
- **Custom speeds**: Match content emotion and importance

## Use Cases

- **Presentations**: Emphasize key points with speed changes
- **Storytelling**: Build tension and release with pacing
- **UI Animations**: Guide user attention through speed variation
- **Educational Content**: Slow for complex concepts, fast for simple ones