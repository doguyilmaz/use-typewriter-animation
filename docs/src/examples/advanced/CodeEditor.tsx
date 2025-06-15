import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const CodeEditor: React.FC = () => {
  const [editorTheme, setEditorTheme] = useState('VS Code Dark');
  const [currentLine, setCurrentLine] = useState(1);
  const [activeFile, setActiveFile] = useState('App.tsx');

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 45,
    cursorStyle: 'bar',
    cursorColor: '#007acc',
  });

  useEffect(() => {
    typewriter
      .colorize('#6a9955')
      .type('// Real-time React application with TypeScript')
      .colorize('#d4d4d4')
      .newLine()
      .colorize('#c586c0')
      .type('import')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#9cdcfe')
      .type('React')
      .colorize('#d4d4d4')
      .type(', { ')
      .colorize('#9cdcfe')
      .type('useState')
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('useEffect')
      .colorize('#d4d4d4')
      .type(' } ')
      .colorize('#c586c0')
      .type('from')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#ce9178')
      .type("'react'")
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .colorize('#c586c0')
      .type('import')
      .colorize('#d4d4d4')
      .type(' { ')
      .colorize('#9cdcfe')
      .type('useTypewriter')
      .colorize('#d4d4d4')
      .type(' } ')
      .colorize('#c586c0')
      .type('from')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#ce9178')
      .type("'use-typewriter-animation'")
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .newLine()
      .colorize('#6a9955')
      .type('// Interface definition for type safety')
      .colorize('#d4d4d4')
      .newLine()
      .colorize('#569cd6')
      .type('interface')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#4ec9b0')
      .type('User')
      .colorize('#d4d4d4')
      .type(' {')
      .newLine()
      .type('  ')
      .colorize('#9cdcfe')
      .type('id')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('number')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('  ')
      .colorize('#9cdcfe')
      .type('name')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('string')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('  ')
      .colorize('#9cdcfe')
      .type('email')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('string')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('}')
      .newLine()
      .newLine()
      .colorize('#6a9955')
      .type('// Functional component with hooks')
      .colorize('#d4d4d4')
      .newLine()
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#dcdcaa')
      .type('MyComponent')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#4ec9b0')
      .type('React')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#4ec9b0')
      .type('FC')
      .colorize('#d4d4d4')
      .type(' = () => {')
      .newLine()
      .type('  ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' { ')
      .colorize('#9cdcfe')
      .type('typewriter')
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('elements')
      .colorize('#d4d4d4')
      .type(' } = ')
      .colorize('#dcdcaa')
      .type('useTypewriter')
      .colorize('#d4d4d4')
      .type('();')
      .newLine()
      .newLine()
      .type('  ')
      .colorize('#c586c0')
      .type('return')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#808080')
      .type('<')
      .colorize('#569cd6')
      .type('div')
      .colorize('#808080')
      .type('>')
      .colorize('#d4d4d4')
      .type('{')
      .colorize('#9cdcfe')
      .type('elements')
      .colorize('#d4d4d4')
      .type('}')
      .colorize('#808080')
      .type('</')
      .colorize('#569cd6')
      .type('div')
      .colorize('#808080')
      .type('>')
      .colorize('#d4d4d4')
      .type(';')
      .newLine()
      .type('};')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.4',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #333333',
          minHeight: '500px',
          whiteSpace: 'pre-wrap',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Editor Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #333333',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                backgroundColor: '#007acc',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: '600',
              }}
            >
              {activeFile}
            </div>
            <span style={{ fontSize: '0.7rem', color: '#888888' }}>
              Line {currentLine}
            </span>
          </div>
          <div
            style={{
              fontSize: '0.7rem',
              color: '#888888',
            }}
          >
            {editorTheme}
          </div>
        </div>

        {/* Code Content */}
        <div style={{ minHeight: '400px' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default CodeEditor;