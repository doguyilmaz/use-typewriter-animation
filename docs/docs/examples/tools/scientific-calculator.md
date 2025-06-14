---
sidebar_position: 1
title: Scientific Calculator
description: Advanced scientific calculator with mathematical functions and operations
tags: [calculator, mathematics, scientific, computation, tools]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ScientificCalculatorExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={ScientificCalculatorExample}
difficulty="Intermediate"
description="Build a comprehensive scientific calculator with advanced mathematical functions, memory operations, and calculation history. Perfect for educational applications, engineering tools, and mathematical computing interfaces."
tags={["Scientific calculator", "Mathematical operations", "Engineering tools", "Educational software", "Computation interface"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const ScientificCalculatorExample: React.FC = () => {
const [currentValue, setCurrentValue] = useState(0);
const [calculationMode, setCalculationMode] = useState('basic');
const [memoryValue, setMemoryValue] = useState(0);

const { typewriter, elements, cursor, keyframes } = useTypewriter({
typeSpeed: 22,
cursorStyle: 'block',
cursorColor: '#3b82f6',
});

const calculations = [
{ operation: 'sin(π/4)', result: '0.7071067812' },
{ operation: '√(144)', result: '12' },
{ operation: 'log₁₀(1000)', result: '3' },
{ operation: '2³ + 5²', result: '33' },
];

useEffect(() => {
typewriter
.colorize('#3b82f6')
.type('🔬 SCIENTIFIC CALCULATOR 🔬')
.colorize('#1f2937')
.newLine()
.type('═══════════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(600)
.colorize('#10b981')
.type('🖥️ Calculator Display:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('Model: SciCalc Pro X1 | Precision: 15 digits')
.colorize('#1f2937')
.newLine()
.type('┌──────────────────────────────────────────────┐')
.newLine()
.colorize('#3b82f6')
.type('│ 0 │')
.colorize('#1f2937')
.newLine()
.type('└──────────────────────────────────────────────┘')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#fbbf24')
.type('🧮 Mathematical Operations:')
.colorize('#1f2937')
.newLine()
.type('─────────────────────────────────────────────')
.newLine()
.pauseFor(600)
.colorize('#8b5cf6')
.type('📐 Trigonometric Functions:')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type(' sin(π/4) = ')
.colorize('#059669')
.type('0.7071067812')
.colorize('#6b7280')
.type(' (45° in radians)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type(' cos(π/3) = ')
.colorize('#059669')
.type('0.5')
.colorize('#6b7280')
.type(' (60° in radians)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type(' tan(π/4) = ')
.colorize('#059669')
.type('1')
.colorize('#6b7280')
.type(' (45° in radians)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#ec4899')
.type('📊 Logarithmic & Exponential:')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type(' log₁₀(1000) = ')
.colorize('#059669')
.type('3')
.colorize('#6b7280')
.type(' (common logarithm)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type(' ln(e²) = ')
.colorize('#059669')
.type('2')
.colorize('#6b7280')
.type(' (natural logarithm)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type(' e^3 = ')
.colorize('#059669')
.type('20.0855369232')
.colorize('#6b7280')
.type(' (exponential)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#f59e0b')
.type('🔢 Power & Root Operations:')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type(' 2³ = ')
.colorize('#059669')
.type('8')
.colorize('#6b7280')
.type(' (cube)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type(' √144 = ')
.colorize('#059669')
.type('12')
.colorize('#6b7280')
.type(' (square root)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type(' ∛27 = ')
.colorize('#059669')
.type('3')
.colorize('#6b7280')
.type(' (cube root)')
.colorize('#1f2937')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type(' 5! = ')
.colorize('#059669')
.type('120')
.colorize('#6b7280')
.type(' (factorial)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#22c55e')
.type('💾 Memory Operations:')
.colorize('#1f2937')
.newLine()
.type('─────────────────────────────────────────────')
.newLine()
.pauseFor(600)
.colorize('#10b981')
.type('M+ : ')
.colorize('#1f2937')
.type('Add to memory')
.colorize('#6b7280')
.type(' (Current: 0)')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('M- : ')
.colorize('#1f2937')
.type('Subtract from memory')
.colorize('#6b7280')
.type(' (Available)')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('MR : ')
.colorize('#1f2937')
.type('Recall memory')
.colorize('#6b7280')
.type(' (Empty)')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('MC : ')
.colorize('#1f2937')
.type('Clear memory')
.colorize('#6b7280')
.type(' (Ready)')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#8b5cf6')
.type('📋 Calculation History:')
.colorize('#1f2937')
.newLine()
.type('─────────────────────────────────────────────')
.newLine()
.pauseFor(400)
.colorize('#6b7280')
.type('1. ')
.colorize('#10b981')
.type('sin(π/4)')
.colorize('#6b7280')
.type(' = ')
.colorize('#059669')
.type('0.7071067812')
.colorize('#1f2937')
.newLine()
.pauseFor(300)
.colorize('#6b7280')
.type('2. ')
.colorize('#10b981')
.type('√(144)')
.colorize('#6b7280')
.type(' = ')
.colorize('#059669')
.type('12')
.colorize('#1f2937')
.newLine()
.pauseFor(300)
.colorize('#6b7280')
.type('3. ')
.colorize('#10b981')
.type('log₁₀(1000)')
.colorize('#6b7280')
.type(' = ')
.colorize('#059669')
.type('3')
.colorize('#1f2937')
.newLine()
.pauseFor(300)
.colorize('#6b7280')
.type('4. ')
.colorize('#10b981')
.type('2³ + 5²')
.colorize('#6b7280')
.type(' = ')
.colorize('#059669')
.type('33')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#3b82f6')
.type('⚙️ Calculator Settings:')
.colorize('#1f2937')
.newLine()
.colorize('#6b7280')
.type('• Angle Mode: Radians')
.newLine()
.type('• Display Format: Fixed (10 digits)')
.newLine()
.type('• Complex Numbers: Enabled')
.newLine()
.type('• Scientific Notation: Auto')
.colorize('#1f2937')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#ec4899')
.type('🎯 Advanced Features:')
.colorize('#1f2937')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Statistical functions (mean, std dev)')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Matrix operations and linear algebra')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Calculus operations (derivatives, integrals)')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#1f2937')
.type('Unit conversions and constants')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#fbbf24')
.type('🔬 Ready for scientific calculations!')
.start();
}, []);

// Simulate calculator activity
useEffect(() => {
const interval = setInterval(() => {
setCurrentValue(prev => Math.round((Math.random() _ 1000 + prev _ 0.1) _ 100) / 100);
const modes = ['basic', 'scientific', 'programming', 'statistics'];
setCalculationMode(modes[Math.floor(Math.random() _ modes.length)]);
setMemoryValue(prev => Math.round((prev + (Math.random() - 0.5) _ 100) _ 100) / 100);
}, 3000);

    return () => clearInterval(interval);

}, []);

return (
<>

<style>
{keyframes}
{\`
@keyframes display-update {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.02); }
}

          @keyframes button-press {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(0.95); }
          }

          @keyframes memory-indicator {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }

          @keyframes calculation-flash {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(59, 130, 246, 0.1); }
          }

          .calculator-display {
            animation: display-update 2s ease-in-out infinite;
          }

          .calculator-button {
            animation: button-press 0.2s ease-out;
          }

          .memory-active {
            animation: memory-indicator 2s infinite;
          }

          .calculation-highlight {
            animation: calculation-flash 1.5s ease-in-out infinite;
          }
        \`}
      </style>

      <div
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.9rem',
          color: '#1f2937',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #3b82f6',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)',
        }}
      >
        {/* Calculator display */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            right: '1rem',
            height: '60px',
            backgroundColor: '#1f2937',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 1rem',
            fontSize: '1.5rem',
            color: '#22c55e',
            fontFamily: 'monospace',
            border: '2px solid #374151',
          }}
          className="calculator-display"
        >
          {currentValue.toLocaleString()}
        </div>

        {/* Mode indicator */}
        <div
          style={{
            position: 'absolute',
            top: '5rem',
            right: '1rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            color: '#3b82f6',
            fontWeight: '600',
          }}
        >
          MODE: {calculationMode.toUpperCase()}
        </div>

        {/* Memory indicator */}
        <div
          style={{
            position: 'absolute',
            top: '5rem',
            left: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: memoryValue !== 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(107, 114, 128, 0.1)',
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            color: memoryValue !== 0 ? '#22c55e' : '#6b7280',
          }}
          className={memoryValue !== 0 ? 'memory-active' : ''}
        >
          <span>💾 M: {memoryValue}</span>
        </div>

        {/* Function buttons grid */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '6px',
            width: '200px',
          }}
        >
          {['sin', 'cos', 'tan', 'log', '√', 'x²', 'xʸ', '!', 'π', 'e', '(', ')'].map((func, i) => (
            <div
              key={i}
              style={{
                width: '45px',
                height: '35px',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              className="calculator-button"
            >
              {func}
            </div>
          ))}
        </div>

        {/* History indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            fontSize: '0.8rem',
            color: '#6b7280',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '8px 12px',
            borderRadius: '8px',
          }}
          className="calculation-highlight"
        >
          📊 {calculations.length} calculations in history
        </div>

        {/* Precision indicator */}
        <div
          style={{
            position: 'absolute',
            top: '8rem',
            right: '1rem',
            fontSize: '0.7rem',
            color: '#6b7280',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          Precision: 15 digits
        </div>

        {/* Main content */}
        <div style={{ whiteSpace: 'pre-line', paddingTop: '9rem' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>

);
};

export default ScientificCalculatorExample;`}
instructions={[
"Build comprehensive scientific calculator with advanced mathematical functions",
"Implement memory operations, calculation history, and multiple precision modes",
"Add trigonometric, logarithmic, and exponential function calculations",
"Include statistical functions, matrix operations, and unit conversions",
"Design professional calculator interface with interactive button grid and display"
]}
/>

## Use Cases

- **Educational Software**: Mathematics learning platforms and student calculation tools
- **Engineering Applications**: Scientific computing interfaces and technical calculations
- **Research Tools**: Data analysis platforms and scientific research applications
- **Financial Software**: Complex financial calculations and statistical analysis tools
- **Mobile Applications**: Scientific calculator apps and mathematical utility tools
