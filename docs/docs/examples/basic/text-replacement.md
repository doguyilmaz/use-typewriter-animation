# Text Replacement Demo

This example demonstrates sophisticated text replacement techniques using strategic deletion and retyping to create word substitution effects.

## Live Demo

```tsx live
function TextReplacementDemo() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'block',
    cursorColor: '#f59e0b',
  });

  useEffect(() => {
    typewriter
      .type('I am ')
      .colorize('#3b82f6')
      .type('happy')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(5)
      .colorize('#ef4444')
      .type('excited')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(7)
      .colorize('#10b981')
      .type('thrilled')
      .colorize('#374151')
      .type(' today!')
      .newLine()
      .newLine()
      .type('React is ')
      .colorize('#8b5cf6')
      .type('difficult')
      .colorize('#374151')
      .pauseFor(1200)
      .deleteLetters(9)
      .colorize('#059669')
      .type('amazing')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(7)
      .colorize('#dc2626')
      .type('powerful')
      .colorize('#374151')
      .pauseFor(1000)
      .deleteLetters(8)
      .colorize('#7c3aed')
      .type('fantastic')
      .colorize('#374151')
      .type('!')
      .newLine()
      .newLine()
      .type('Learning: ')
      .colorize('#6b7280')
      .type('JavaScript')
      .pauseFor(800)
      .deleteLetters(10)
      .colorize('#f59e0b')
      .type('TypeScript')
      .pauseFor(800)
      .deleteLetters(10)
      .colorize('#06b6d4')
      .type('React')
      .pauseFor(800)
      .deleteLetters(5)
      .colorize('#8b5cf6')
      .type('Next.js')
      .colorize('#374151')
      .newLine()
      .newLine()
      .type('Status: ')
      .colorize('#ef4444')
      .type('❌ Offline')
      .pauseFor(1500)
      .deleteLetters(10)
      .colorize('#f59e0b')
      .type('⏳ Connecting')
      .pauseFor(1500)
      .deleteLetters(13)
      .colorize('#10b981')
      .type('✅ Online')
      .colorize('#374151')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: '"SF Mono", "Monaco", "Inconsolata", monospace',
          fontSize: '1.1rem',
          lineHeight: '1.7',
          padding: '2.5rem',
          backgroundColor: '#fffbeb',
          border: '2px solid #fbbf24',
          borderRadius: '12px',
          minHeight: '220px',
          boxShadow: '0 10px 25px rgba(245, 158, 11, 0.1)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            fontSize: '0.75rem',
            color: '#92400e',
            fontWeight: '500',
            backgroundColor: '#fef3c7',
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          LIVE REPLACEMENT
        </div>
        <div
          style={{
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            color: '#92400e',
            fontWeight: '600',
          }}
        >
          🔄 Dynamic Text Replacement
        </div>
        <div style={{ color: '#374151' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Smart Word Replacement**: Delete exact number of characters and replace
- **Emotional Progression**: Words evolve from negative to positive
- **Status Updates**: Perfect for dynamic status indicators
- **Technology Stack**: Show progression through learning technologies
- **Visual Feedback**: Colors indicate different states and emotions

## Replacement Patterns

1. **Emotion Evolution**: happy → excited → thrilled
2. **Opinion Changes**: difficult → amazing → powerful → fantastic
3. **Technology Progression**: JavaScript → TypeScript → React → Next.js
4. **Status Updates**: Offline → Connecting → Online

## Technical Implementation

- Use `deleteLetters(n)` with exact character count
- Apply different colors to highlight the replacement
- Add appropriate pauses for readability
- Create logical word progression chains

## Use Cases

- **Dynamic Status Displays**: Connection states, loading progress
- **Sentiment Analysis**: Show changing opinions or emotions
- **Learning Progress**: Display skill development over time
- **Product Features**: Highlight different capabilities or benefits
- **User Onboarding**: Guide users through different concepts