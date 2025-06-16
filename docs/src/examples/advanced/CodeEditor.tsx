import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import { useColorMode } from '@docusaurus/theme-common';

export const CodeEditor: React.FC = () => {
  const { colorMode } = useColorMode();
  const [editorTheme, setEditorTheme] = useState('VS Code Dark');
  const [currentLine, setCurrentLine] = useState(1);
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 45,
    cursorStyle: 'bar',
    cursorColor: '#007acc',
  });

  const files = [
    { name: 'App.tsx', icon: '⚛️', active: true },
    { name: 'components/', icon: '📁', folder: true },
    { name: 'utils.ts', icon: '🔧', active: false },
    { name: 'types.d.ts', icon: '📋', active: false },
    { name: 'package.json', icon: '📦', active: false },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => Math.floor(Math.random() * 25) + 1);
      setEditorTheme(['VS Code Dark', 'GitHub Dark', 'One Dark Pro', 'Dracula'][Math.floor(Math.random() * 4)]);
      setSidebarOpen(prev => Math.random() > 0.3 ? prev : !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          .vscode-sidebar::-webkit-scrollbar {
            width: 8px;
          }
          
          .vscode-sidebar::-webkit-scrollbar-track {
            background: #252526;
          }
          
          .vscode-sidebar::-webkit-scrollbar-thumb {
            background: #424242;
            border-radius: 4px;
          }
          
          .vscode-sidebar::-webkit-scrollbar-thumb:hover {
            background: #4f4f4f;
          }
          
          .editor-content::-webkit-scrollbar {
            width: 12px;
          }
          
          .editor-content::-webkit-scrollbar-track {
            background: #1e1e1e;
          }
          
          .editor-content::-webkit-scrollbar-thumb {
            background: #424242;
            border-radius: 6px;
          }
          
          .editor-content::-webkit-scrollbar-thumb:hover {
            background: #4f4f4f;
          }
          
          @keyframes editorGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 122, 204, 0.1); }
            50% { box-shadow: 0 0 40px rgba(0, 122, 204, 0.2); }
          }
          
          .vscode-container {
            animation: editorGlow 5s ease-in-out infinite;
          }
        `}
      </style>
      
      {/* VS Code Style Container */}
      <div
        className="vscode-container"
        style={{
          display: 'flex',
          height: '500px',
          fontFamily: '"Cascadia Code", "JetBrains Mono", "Fira Code", monospace',
          fontSize: '13px',
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #3e3e42',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Activity Bar */}
        <div
          style={{
            width: '48px',
            backgroundColor: '#333333',
            borderRight: '1px solid #3e3e42',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px 0',
            gap: '8px',
          }}
        >
          {['📁', '🔍', '📋', '🐛', '⚙️'].map((icon, index) => (
            <div
              key={index}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                backgroundColor: index === 0 ? '#007acc' : 'transparent',
                color: index === 0 ? 'white' : '#cccccc',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div
            className="vscode-sidebar"
            style={{
              width: '240px',
              backgroundColor: '#252526',
              borderRight: '1px solid #3e3e42',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Sidebar Header */}
            <div
              style={{
                padding: '8px 16px',
                borderBottom: '1px solid #3e3e42',
                fontSize: '11px',
                color: '#cccccc',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Explorer
            </div>

            {/* File Tree */}
            <div style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
              <div style={{
                padding: '4px 16px',
                fontSize: '13px',
                color: '#cccccc',
                fontWeight: '600',
                marginBottom: '4px',
              }}>
                MY-PROJECT
              </div>
              
              {files.map((file, index) => (
                <div
                  key={index}
                  style={{
                    padding: '4px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: file.active ? '#ffffff' : '#cccccc',
                    backgroundColor: file.active ? '#094771' : 'transparent',
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  <span style={{ fontSize: '12px' }}>{file.icon}</span>
                  {file.name}
                  {file.active && (
                    <div style={{
                      marginLeft: 'auto',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Editor Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Tab Bar */}
          <div
            style={{
              display: 'flex',
              backgroundColor: '#2d2d30',
              borderBottom: '1px solid #3e3e42',
              minHeight: '35px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                backgroundColor: '#1e1e1e',
                borderRight: '1px solid #3e3e42',
                color: '#ffffff',
                fontSize: '13px',
                gap: '8px',
                minWidth: '120px',
              }}
            >
              ⚛️ {activeFile}
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#f48771',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
              }}>
                ×
              </div>
            </div>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                color: '#cccccc',
                fontSize: '13px',
                gap: '8px',
              }}
            >
              🔧 utils.ts
            </div>
          </div>

          {/* Editor Content */}
          <div style={{ flex: 1, display: 'flex' }}>
            {/* Line Numbers */}
            <div
              style={{
                width: '50px',
                backgroundColor: '#1e1e1e',
                borderRight: '1px solid #3e3e42',
                padding: '16px 8px',
                fontSize: '12px',
                color: '#858585',
                lineHeight: '1.4',
                textAlign: 'right',
              }}
            >
              {Array.from({ length: 25 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    height: '19px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    fontWeight: currentLine === i + 1 ? '600' : '400',
                    color: currentLine === i + 1 ? '#ffffff' : '#858585',
                    backgroundColor: currentLine === i + 1 ? 'rgba(0, 122, 204, 0.1)' : 'transparent',
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Code Area */}
            <div
              className="editor-content"
              style={{
                flex: 1,
                backgroundColor: '#1e1e1e',
                color: '#d4d4d4',
                padding: '16px',
                fontSize: '13px',
                lineHeight: '1.4',
                whiteSpace: 'pre-wrap',
                overflowY: 'auto',
                fontFamily: '"Cascadia Code", "JetBrains Mono", "Fira Code", monospace',
              }}
            >
              {elements}
              {cursor}
            </div>
          </div>

          {/* Status Bar */}
          <div
            style={{
              height: '22px',
              backgroundColor: '#007acc',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 12px',
              fontSize: '12px',
            }}
          >
            <div style={{ display: 'flex', gap: '16px' }}>
              <span>⚡ Git: main</span>
              <span>⚠️ 0 Problems</span>
              <span>🔥 TypeScript</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span>Ln {currentLine}, Col 1</span>
              <span>UTF-8</span>
              <span>LF</span>
              <span>{editorTheme}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;