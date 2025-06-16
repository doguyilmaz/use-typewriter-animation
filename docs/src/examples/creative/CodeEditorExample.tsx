import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

const CodeEditorExample: React.FC = () => {
  const { colorMode } = useColorMode();
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
      .type(' ')
      .colorize('#9cdcfe')
      .type('axios')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#c586c0')
      .type('from')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#ce9178')
      .type("'axios'")
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
      .type('  ')
      .colorize('#9cdcfe')
      .type('isActive')
      .colorize('#569cd6')
      .type('?')
      .colorize('#d4d4d4')
      .type(': ')
      .colorize('#569cd6')
      .type('boolean')
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
      .type('UserDashboard')
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
      .type(' [')
      .colorize('#9cdcfe')
      .type('users')
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('setUsers')
      .colorize('#d4d4d4')
      .type('] = ')
      .colorize('#dcdcaa')
      .type('useState')
      .colorize('#d4d4d4')
      .type('<')
      .colorize('#4ec9b0')
      .type('User')
      .colorize('#d4d4d4')
      .type('[]>([]);')
      .newLine()
      .type('  ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' [')
      .colorize('#9cdcfe')
      .type('loading')
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('setLoading')
      .colorize('#d4d4d4')
      .type('] = ')
      .colorize('#dcdcaa')
      .type('useState')
      .colorize('#d4d4d4')
      .type('<')
      .colorize('#569cd6')
      .type('boolean')
      .colorize('#d4d4d4')
      .type('>(')
      .colorize('#569cd6')
      .type('false')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .newLine()
      .type('  ')
      .colorize('#6a9955')
      .type('// Async data fetching with error handling')
      .colorize('#d4d4d4')
      .newLine()
      .type('  ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#dcdcaa')
      .type('fetchUsers')
      .colorize('#d4d4d4')
      .type(' = ')
      .colorize('#569cd6')
      .type('async')
      .colorize('#d4d4d4')
      .type(' () => {')
      .newLine()
      .type('    ')
      .colorize('#dcdcaa')
      .type('setLoading')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#569cd6')
      .type('true')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    ')
      .colorize('#c586c0')
      .type('try')
      .colorize('#d4d4d4')
      .type(' {')
      .newLine()
      .type('      ')
      .colorize('#569cd6')
      .type('const')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#9cdcfe')
      .type('response')
      .colorize('#d4d4d4')
      .type(' = ')
      .colorize('#c586c0')
      .type('await')
      .colorize('#d4d4d4')
      .type(' ')
      .colorize('#9cdcfe')
      .type('axios')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#dcdcaa')
      .type('get')
      .colorize('#d4d4d4')
      .type('<')
      .colorize('#4ec9b0')
      .type('User')
      .colorize('#d4d4d4')
      .type('[]>(')
      .colorize('#ce9178')
      .type("'/api/users');")
      .colorize('#d4d4d4')
      .newLine()
      .type('      ')
      .colorize('#dcdcaa')
      .type('setUsers')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#9cdcfe')
      .type('response')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#9cdcfe')
      .type('data')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    } ')
      .colorize('#c586c0')
      .type('catch')
      .colorize('#d4d4d4')
      .type(' (')
      .colorize('#9cdcfe')
      .type('error')
      .colorize('#d4d4d4')
      .type(') {')
      .newLine()
      .type('      ')
      .colorize('#9cdcfe')
      .type('console')
      .colorize('#d4d4d4')
      .type('.')
      .colorize('#dcdcaa')
      .type('error')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#ce9178')
      .type("'Failed to fetch users:'")
      .colorize('#d4d4d4')
      .type(', ')
      .colorize('#9cdcfe')
      .type('error')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    } ')
      .colorize('#c586c0')
      .type('finally')
      .colorize('#d4d4d4')
      .type(' {')
      .newLine()
      .type('      ')
      .colorize('#dcdcaa')
      .type('setLoading')
      .colorize('#d4d4d4')
      .type('(')
      .colorize('#569cd6')
      .type('false')
      .colorize('#d4d4d4')
      .type(');')
      .newLine()
      .type('    }')
      .newLine()
      .type('  };')
      .newLine()
      .newLine()
      .type('  ')
      .colorize('#c586c0')
      .type('return')
      .colorize('#d4d4d4')
      .type(' <')
      .colorize('#4fc1ff')
      .type('div')
      .colorize('#d4d4d4')
      .type('>')
      .colorize('#9cdcfe')
      .type('Dashboard')
      .colorize('#d4d4d4')
      .type('</')
      .colorize('#4fc1ff')
      .type('div')
      .colorize('#d4d4d4')
      .type('>;')
      .newLine()
      .type('};')
      .start();
  }, []);

  // Simulate editor interactions
  useEffect(() => {
    const themes = ['VS Code Dark', 'Monokai Pro', 'Dracula', 'One Dark Pro'];
    const files = ['App.tsx', 'utils.ts', 'api.ts', 'types.d.ts', 'hooks.ts'];

    const interval = setInterval(() => {
      setEditorTheme(themes[Math.floor(Math.random() * themes.length)]);
      setCurrentLine(Math.floor(Math.random() * 45) + 1);
      setActiveFile(files[Math.floor(Math.random() * files.length)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes editor-glow {
            0%, 100% { 
              box-shadow: ${
                colorMode === 'dark'
                  ? '0 0 30px rgba(0, 122, 204, 0.3), 0 0 60px rgba(0, 122, 204, 0.1)'
                  : '0 0 30px rgba(0, 122, 204, 0.2), 0 8px 32px rgba(0, 0, 0, 0.1)'
              }; 
            }
            50% { 
              box-shadow: ${
                colorMode === 'dark'
                  ? '0 0 50px rgba(0, 122, 204, 0.4), 0 0 100px rgba(0, 122, 204, 0.2)'
                  : '0 0 50px rgba(0, 122, 204, 0.3), 0 8px 32px rgba(0, 0, 0, 0.15)'
              }; 
            }
          }
          
          @keyframes intellisense-popup {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes line-highlight {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(0, 122, 204, 0.1); }
          }
          
          .editor-container {
            animation: editor-glow 5s ease-in-out infinite;
          }
          
          .current-line {
            animation: line-highlight 3s ease-in-out infinite;
          }
          
          .intellisense-tooltip {
            animation: intellisense-popup 0.3s ease-out;
          }
        `}
      </style>
      <div
        className="editor-container"
        style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          fontFamily: '"Cascadia Code", "JetBrains Mono", "Fira Code", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.5',
          borderRadius: '8px',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          border: colorMode === 'dark' 
            ? '1px solid #3e3e42' 
            : '2px solid var(--ifm-color-emphasis-300)',
          position: 'relative',
          background: 'linear-gradient(135deg, #1e1e1e 0%, #252526 100%)',
          boxShadow: colorMode === 'dark'
            ? undefined
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Editor Tab Bar */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#2d2d30',
            borderBottom: '1px solid #3e3e42',
            padding: '0',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: activeFile === 'App.tsx' ? '#1e1e1e' : '#2d2d30',
              color: activeFile === 'App.tsx' ? '#ffffff' : '#cccccc',
              borderRight: '1px solid #3e3e42',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📄 {activeFile}
            {activeFile === 'App.tsx' && <span style={{ color: '#f48771' }}>●</span>}
          </div>
          <div
            style={{
              padding: '8px 16px',
              color: '#cccccc',
              borderRight: '1px solid #3e3e42',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📊 utils.ts
          </div>
          <div style={{ flex: 1 }} />
          <div
            style={{
              padding: '8px 16px',
              fontSize: '0.75rem',
              color: '#858585',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span>{editorTheme}</span>
            <span>Line {currentLine}</span>
            <span>TypeScript React</span>
          </div>
        </div>

        {/* Editor Content */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'auto',
            paddingBottom: '32px', // Space for status bar
          }}
        >
          {/* Line numbers */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '50px',
              backgroundColor: 'rgba(42, 42, 42, 0.6)',
              borderRight: '1px solid #3e3e42',
              padding: '16px 8px',
              fontSize: '0.75rem',
              color: '#858585',
              lineHeight: '1.5',
              overflow: 'hidden',
            }}
          >
            {Array.from({ length: 45 }, (_, i) => (
              <div
                key={i}
                className={currentLine === i + 1 ? 'current-line' : ''}
                style={{
                  height: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  fontWeight: currentLine === i + 1 ? '600' : '400',
                  color: currentLine === i + 1 ? '#ffffff' : '#858585',
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <div
            style={{
              marginLeft: '60px',
              padding: '16px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {elements}
            {cursor}
          </div>
        </div>

        {/* Status Bar - Fixed at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#007acc',
            color: '#ffffff',
            padding: '6px 16px',
            fontSize: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #3e3e42',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>⚙️ Git: main</span>
            <span>⚠️ 0 Problems</span>
            <span>📊 Live TypeScript</span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span>UTF-8</span>
            <span>LF</span>
            <span>Spaces: 2</span>
          </div>
        </div>

        {/* IntelliSense tooltip */}
        <div
          className="intellisense-tooltip"
          style={{
            position: 'absolute',
            top: '120px',
            left: '180px',
            backgroundColor: '#252526',
            border: '1px solid #3e3e42',
            borderRadius: '4px',
            padding: '8px 12px',
            fontSize: '0.8rem',
            color: '#cccccc',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 3,
          }}
        >
          💡 <strong>useState</strong>
          <div style={{ fontSize: '0.75rem', color: '#858585', marginTop: '4px' }}>
            Returns a stateful value and a function to update it
          </div>
        </div>
      </div>
    </>
  );
};

export { CodeEditorExample };
export default CodeEditorExample;
