---
sidebar_position: 2
title: Code Editor
description: Simulate a code editor with syntax highlighting
tags: [editor, syntax, highlighting]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { CodeEditorExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={CodeEditorExample}
difficulty="Intermediate"
description="Simulate a realistic code editor with syntax highlighting and proper indentation. Great for coding tutorials, documentation, or showcasing programming concepts with visual appeal."
tags={["Syntax highlighting", "Code editor", "Programming", "Color coding", "Editor simulation"]}
code={`import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const CodeEditorExample: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
  });

  useEffect(() => {
    typewriter
      .colorize('#ff79c6')
      .type('function')
      .colorize('#ffffff')
      .type(' ')
      .colorize('#50fa7b')
      .type('greetUser')
      .colorize('#ffffff')
      .type('(')
      .colorize('#ffb86c')
      .type('name')
      .colorize('#ffffff')
      .type(') {')
      .newLine()
      .type('  ')
      .colorize('#ff79c6')
      .type('const')
      .colorize('#ffffff')
      .type(' ')
      .colorize('#8be9fd')
      .type('message')
      .colorize('#ffffff')
      .type(' = ')
      .colorize('#f1fa8c')
      .type('\`Hello, \${name}!\`')
      .colorize('#ffffff')
      .type(';')
      .newLine()
      .newLine()
      .type('  ')
      .colorize('#8be9fd')
      .type('console')
      .colorize('#ffffff')
      .type('.')
      .colorize('#50fa7b')
      .type('log')
      .colorize('#ffffff')
      .type('(')
      .colorize('#8be9fd')
      .type('message')
      .colorize('#ffffff')
      .type(');')
      .newLine()
      .type('}')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: '#282a36',
          color: '#f8f8f2',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '0.9rem',
          padding: '1.5rem',
          borderRadius: '8px',
          whiteSpace: 'pre',
          border: '1px solid #44475a',
          lineHeight: '1.5',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
          minHeight: '250px',
          height: '250px',
        }}
      >
        <div
          style={{
            color: '#6272a4',
            marginBottom: '1rem',
            fontSize: '0.8rem',
            borderBottom: '1px solid #44475a',
            paddingBottom: '0.5rem',
          }}
        >
          📝 editor.js - JavaScript
        </div>
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default CodeEditorExample;`}
/>
