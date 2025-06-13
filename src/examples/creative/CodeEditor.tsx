import React, { useEffect } from 'react';
import { useTypewriter } from '../../Typewriter/useTypewriter';

export const CodeEditor = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: '#ffffff',
    cursorBlinkSpeed: 500,
  });

  useEffect(() => {
    typewriter
      .colorize('#ff79c6') // Pink for keywords
      .type('import', { speed: 80 })
      .colorize('#f8f8f2') // White for normal text
      .type(' ')
      .colorize('#f1fa8c') // Yellow for strings
      .type('React', { speed: 60 })
      .colorize('#f8f8f2')
      .type(', ')
      .colorize('#f1fa8c')
      .type('{ useEffect }')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#ff79c6')
      .type('from')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#f1fa8c')
      .type("'react'")
      .colorize('#f8f8f2')
      .type(';\n')
      .colorize('#ff79c6')
      .type('import')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#f1fa8c')
      .type('{ useTypewriter }')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#ff79c6')
      .type('from')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#f1fa8c')
      .type("'use-typewriter-animation'")
      .colorize('#f8f8f2')
      .type(';\n\n')
      .pauseFor(500)
      .colorize('#ff79c6')
      .type('const', { speed: 50 })
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#50fa7b') // Green for function names
      .type('MyComponent')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#ff79c6')
      .type('=')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#8be9fd') // Cyan for parentheses
      .type('()')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#ff79c6')
      .type('=>')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#8be9fd')
      .type('{\n')
      .colorize('#f8f8f2')
      .type('  ')
      .colorize('#ff79c6')
      .type('const')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#8be9fd')
      .type('{ typewriter, elements, cursor }')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#ff79c6')
      .type('=')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#50fa7b')
      .type('useTypewriter')
      .colorize('#8be9fd')
      .type('({\n')
      .colorize('#f8f8f2')
      .type('    ')
      .colorize('#bd93f9') // Purple for properties
      .type('typeSpeed')
      .colorize('#f8f8f2')
      .type(': ')
      .colorize('#bd93f9')
      .type('50')
      .colorize('#f8f8f2')
      .type(',\n    ')
      .colorize('#bd93f9')
      .type('cursorStyle')
      .colorize('#f8f8f2')
      .type(': ')
      .colorize('#f1fa8c')
      .type("'bar'")
      .colorize('#f8f8f2')
      .type(',\n  ')
      .colorize('#8be9fd')
      .type('});\n\n')
      .pauseFor(800)
      .colorize('#f8f8f2')
      .type('  ')
      .colorize('#50fa7b')
      .type('useEffect')
      .colorize('#8be9fd')
      .type('(() => {\n')
      .colorize('#f8f8f2')
      .type('    ')
      .colorize('#bd93f9')
      .type('typewriter\n')
      .colorize('#f8f8f2')
      .type('      ')
      .colorize('#50fa7b')
      .type('.type')
      .colorize('#8be9fd')
      .type('(')
      .colorize('#f1fa8c')
      .type("'Hello, World! 🚀'")
      .colorize('#8be9fd')
      .type(')\n')
      .colorize('#f8f8f2')
      .type('      ')
      .colorize('#50fa7b')
      .type('.start')
      .colorize('#8be9fd')
      .type('();\n')
      .colorize('#f8f8f2')
      .type('  ')
      .colorize('#8be9fd')
      .type('}, []);\n\n')
      .colorize('#f8f8f2')
      .type('  ')
      .colorize('#ff79c6')
      .type('return')
      .colorize('#f8f8f2')
      .type(' ')
      .colorize('#8be9fd')
      .type('(\n')
      .colorize('#f8f8f2')
      .type('    ')
      .colorize('#8be9fd')
      .type('<')
      .colorize('#ff79c6')
      .type('div')
      .colorize('#8be9fd')
      .type('>\n')
      .colorize('#f8f8f2')
      .type('      ')
      .colorize('#8be9fd')
      .type('{')
      .colorize('#bd93f9')
      .type('elements')
      .colorize('#8be9fd')
      .type('}\n')
      .colorize('#f8f8f2')
      .type('      ')
      .colorize('#8be9fd')
      .type('{')
      .colorize('#bd93f9')
      .type('cursor')
      .colorize('#8be9fd')
      .type('}\n')
      .colorize('#f8f8f2')
      .type('    ')
      .colorize('#8be9fd')
      .type('</')
      .colorize('#ff79c6')
      .type('div')
      .colorize('#8be9fd')
      .type('>\n')
      .colorize('#f8f8f2')
      .type('  ')
      .colorize('#8be9fd')
      .type(');\n};\n\n')
      .colorize('#6272a4') // Comment color
      .type('// 🎉 Ready to create amazing typewriter animations!')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          fontFamily: 'JetBrains Mono, SF Mono, Monaco, monospace',
          backgroundColor: '#282a36', // Dracula theme background
          borderRadius: '12px',
          border: '1px solid #44475a',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          maxWidth: '900px',
        }}
      >
        {/* Editor header */}
        <div
          style={{
            backgroundColor: '#44475a',
            padding: '8px 16px',
            borderBottom: '1px solid #6272a4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ff5555',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#f1fa8c',
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#50fa7b',
                }}
              />
            </div>
            <span
              style={{
                color: '#f8f8f2',
                fontSize: '13px',
                fontWeight: '500',
              }}
            >
              MyComponent.tsx
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              color: '#6272a4',
              fontSize: '12px',
            }}
          >
            <span>TypeScript React</span>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#50fa7b',
              }}
            />
          </div>
        </div>

        {/* Line numbers and code */}
        <div style={{ display: 'flex' }}>
          {/* Line numbers */}
          <div
            style={{
              backgroundColor: '#44475a',
              padding: '16px 12px',
              color: '#6272a4',
              fontSize: '14px',
              lineHeight: '1.5',
              textAlign: 'right',
              userSelect: 'none',
              borderRight: '1px solid #6272a4',
            }}
          >
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i + 1}>{i + 1}</div>
            ))}
          </div>

          {/* Code content */}
          <div
            style={{
              padding: '16px 20px',
              color: '#f8f8f2',
              fontSize: '14px',
              lineHeight: '1.5',
              minHeight: '400px',
              flex: 1,
              whiteSpace: 'pre-wrap',
              fontWeight: '400',
            }}
          >
            {elements}
            {cursor}
          </div>
        </div>
      </div>
    </>
  );
};
