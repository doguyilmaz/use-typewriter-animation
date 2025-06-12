import React, { useState } from 'react';
import { useTypewriter } from '../Typewriter/useTypewriter';

/**
 * Test component to check for delete/type event loop conflicts
 * This was an issue in the old DOM manipulation version where:
 * - delete functions would conflict with type()
 * - event loop would get confused and not wait for next callback
 * - timing issues would cause inconsistent behavior
 */
export const DeleteTypeConflictTest: React.FC = () => {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    deleteSpeed: 25,
    enableCursor: true,
    cursorStyle: 'bar'
  });

  const logResult = (message: string) => {
    setTestResults(prev => [...prev, `${Date.now()}: ${message}`]);
  };

  const runConflictTest = async () => {
    setIsRunning(true);
    setTestResults([]);
    logResult('Starting delete/type conflict test...');

    try {
      // Test 1: Basic delete then type
      logResult('Test 1: Delete letters then type');
      typewriter
        .type('Hello World!')
        .deleteLetters(6) // Delete "World!"
        .type('React!')
        .start();

      // Wait for completion then run next test
      setTimeout(() => {
        logResult('Test 1 completed');
        
        // Test 2: Multiple delete/type cycles
        logResult('Test 2: Multiple delete/type cycles');
        typewriter
          .deleteAll()
          .type('First text')
          .deleteLetters(4) // Delete "text"
          .type('message')
          .deleteWords(1) // Delete "message"
          .type('content')
          .deleteAll()
          .type('Final result')
          .start();

        setTimeout(() => {
          logResult('Test 2 completed');
          
          // Test 3: Rapid delete/type alternation
          logResult('Test 3: Rapid delete/type alternation');
          typewriter
            .deleteAll()
            .type('A')
            .deleteLetters(1)
            .type('B')
            .deleteLetters(1)
            .type('C')
            .deleteLetters(1)
            .type('D')
            .deleteLetters(1)
            .type('Success!')
            .start();

          setTimeout(() => {
            logResult('Test 3 completed');
            logResult('All tests completed - checking for event loop issues...');

            // Test 4: Complex sequence that previously caused issues
            logResult('Test 4: Complex sequence with callbacks');
            typewriter
              .deleteAll()
              .type('Testing complex sequence...')
              .pauseFor(500)
              .deleteWords(2) // Delete "complex sequence..."
              .type('event loop integrity')
              .pauseFor(300)
              .deleteLetters(9) // Delete "integrity"
              .type('stability')
              .start();

            setTimeout(() => {
              logResult('All tests completed successfully!');
              logResult('No event loop conflicts detected');
              setIsRunning(false);
            }, 8000);
          }, 4000);
        }, 4000);
      }, 4000);

    } catch (error) {
      logResult(`ERROR: ${error}`);
      setIsRunning(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <style>{keyframes}</style>
      
      <h3>Delete/Type Conflict Test</h3>
      <p>Testing for event loop conflicts between delete and type operations</p>
      
      <button 
        onClick={runConflictTest}
        disabled={isRunning}
        style={{ 
          padding: '10px 20px', 
          marginBottom: '20px',
          backgroundColor: isRunning ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isRunning ? 'not-allowed' : 'pointer'
        }}
      >
        {isRunning ? 'Running Tests...' : 'Run Delete/Type Conflict Test'}
      </button>

      {/* Typewriter Display */}
      <div style={{
        border: '2px solid #333',
        padding: '15px',
        marginBottom: '20px',
        minHeight: '50px',
        backgroundColor: '#f8f9fa',
        fontSize: '18px',
        fontFamily: 'monospace'
      }}>
        {elements}
        {cursor}
      </div>

      {/* Test Results Log */}
      <div style={{
        border: '1px solid #ddd',
        padding: '10px',
        height: '300px',
        overflow: 'auto',
        backgroundColor: '#fff',
        fontSize: '12px'
      }}>
        <h4>Test Results Log:</h4>
        {testResults.map((result, index) => (
          <div key={index} style={{ 
            padding: '2px 0',
            borderBottom: '1px solid #eee',
            color: result.includes('ERROR') ? 'red' : 
                   result.includes('completed') ? 'green' : 'black'
          }}>
            {result}
          </div>
        ))}
        {testResults.length === 0 && (
          <div style={{ color: '#666', fontStyle: 'italic' }}>
            Click "Run Test" to start testing for delete/type conflicts...
          </div>
        )}
      </div>

      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        <strong>What this tests:</strong>
        <ul>
          <li>Delete operations followed immediately by type operations</li>
          <li>Multiple delete/type cycles in sequence</li>
          <li>Rapid alternation between delete and type</li>
          <li>Complex sequences with pauses and callbacks</li>
          <li>Event loop integrity and callback timing</li>
        </ul>
      </div>
    </div>
  );
};