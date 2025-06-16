import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const ScientificCalculator: React.FC = () => {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 35,
    cursorStyle: 'bar',
    cursorColor: '#7c3aed',
  });

  const [currentValue, setCurrentValue] = useState(42.75);
  const [calculationMode, setCalculationMode] = useState('scientific');
  const [memoryValue, setMemoryValue] = useState(3.14159);

  const modes = ['basic', 'scientific', 'programming', 'statistics'];

  useEffect(() => {
    typewriter
      .colorize('#7c3aed')
      .type('🧮 SCIENTIFIC CALCULATOR')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#10b981')
      .type('Display: ')
      .colorize('#374151')
      .type(currentValue.toString())
      .newLine()
      .colorize('#10b981')
      .type('Mode: ')
      .colorize('#374151')
      .type(calculationMode.toUpperCase())
      .newLine()
      .colorize('#10b981')
      .type('Memory: ')
      .colorize('#374151')
      .type(memoryValue.toFixed(5))
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('🔢 BASIC OPERATIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('[+] [-] [×] [÷] [=]')
      .newLine()
      .type('[√] [x²] [x³] [1/x]')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#f59e0b')
      .type('📐 SCIENTIFIC FUNCTIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('[sin] [cos] [tan] [log]')
      .newLine()
      .type('[ln] [e^x] [10^x] [π]')
      .newLine()
      .type('[deg] [rad] [C] [P]')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(700)
      .colorize('#dc2626')
      .type('💾 MEMORY FUNCTIONS')
      .colorize('#1f2937')
      .newLine()
      .colorize('#6b7280')
      .type('[MS] [MR] [MC] [M+] [M-]')
      .colorize('#1f2937')
      .newLine()
      .newLine()
      .pauseFor(500)
      .colorize('#8b5cf6')
      .type('Recent Calculation:')
      .colorize('#1f2937')
      .newLine()
      .colorize('#e5e7eb')
      .type('sin(45°) × π ≈ 2.2214')
      .start();
  }, [currentValue, calculationMode, memoryValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue(prev => Math.round((Math.random() * 1000 + prev * 0.1) * 100) / 100);
      const modes = ['basic', 'scientific', 'programming', 'statistics'];
      setCalculationMode(modes[Math.floor(Math.random() * modes.length)]);
      setMemoryValue(prev => Math.round((prev + (Math.random() - 0.5) * 100) * 100) / 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '400px',
          border: '2px solid var(--ifm-color-primary)',
          position: 'relative',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
        }}
      >
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
};

export default ScientificCalculator;