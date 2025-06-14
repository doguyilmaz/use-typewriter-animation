# Scientific Calculator Demo

This example creates an advanced scientific calculator with complex mathematical operations, step-by-step solutions, and mathematical notation display.

## Live Demo

```tsx live
function ScientificCalculatorDemo() {
  const [currentOperation, setCurrentOperation] = useState('Integration');
  const [result, setResult] = useState(42.7589);
  const [mode, setMode] = useState('Radians');
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 40,
    cursorStyle: 'bar',
    cursorColor: '#dc2626',
  });

  useEffect(() => {
    typewriter
      .colorize('#dc2626')
      .type('🧮 SCIENTIFIC CALCULATOR 🧮')
      .colorize('#374151')
      .newLine()
      .type('══════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('📐 Basic Operations:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('Input: ')
      .colorize('#374151')
      .type('sqrt(144) + 2^3 - 5!')
      .newLine()
      .newLine()
      .colorize('#f59e0b')
      .type('🔍 Step-by-step solution:')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 1: ')
      .colorize('#8b5cf6')
      .type('sqrt(144)')
      .colorize('#374151')
      .type(' = ')
      .colorize('#10b981')
      .type('12')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 2: ')
      .colorize('#8b5cf6')
      .type('2^3')
      .colorize('#374151')
      .type(' = ')
      .colorize('#10b981')
      .type('8')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 3: ')
      .colorize('#8b5cf6')
      .type('5!')
      .colorize('#374151')
      .type(' = 5×4×3×2×1 = ')
      .colorize('#10b981')
      .type('120')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 4: ')
      .colorize('#374151')
      .type('12 + 8 - 120 = ')
      .colorize('#dc2626')
      .type('-100')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#059669')
      .type('📊 Trigonometric Functions:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('Mode: ')
      .colorize('#3b82f6')
      .type('Radians')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#8b5cf6')
      .type('sin(π/2)')
      .colorize('#374151')
      .type(' = ')
      .colorize('#10b981')
      .type('1.0000')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('cos(π)')
      .colorize('#374151')
      .type('   = ')
      .colorize('#dc2626')
      .type('-1.0000')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('tan(π/4)')
      .colorize('#374151')
      .type(' = ')
      .colorize('#10b981')
      .type('1.0000')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#f59e0b')
      .type('🔄 Converting to degrees:')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('sin(90°)')
      .colorize('#374151')
      .type(' = ')
      .colorize('#10b981')
      .type('1.0000')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('cos(180°)')
      .colorize('#374151')
      .type(' = ')
      .colorize('#dc2626')
      .type('-1.0000')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#7c3aed')
      .type('∫ Calculus Operations:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('Derivative: ')
      .colorize('#8b5cf6')
      .type('d/dx(x³ + 2x² - 5x + 1)')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Result:     ')
      .colorize('#10b981')
      .type('3x² + 4x - 5')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('Integral:   ')
      .colorize('#8b5cf6')
      .type('∫(2x + 3)dx')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Result:     ')
      .colorize('#10b981')
      .type('x² + 3x + C')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('Definite:   ')
      .colorize('#8b5cf6')
      .type('∫₀² (x² + 1)dx')
      .colorize('#374151')
      .newLine()
      .colorize('#f59e0b')
      .type('Solving:    ')
      .colorize('#374151')
      .type('[x³/3 + x]₀²')
      .newLine()
      .colorize('#f59e0b')
      .type('           ')
      .colorize('#374151')
      .type('= (8/3 + 2) - (0 + 0)')
      .newLine()
      .colorize('#6b7280')
      .type('Result:     ')
      .colorize('#10b981')
      .type('4.6667')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1500)
      .colorize('#dc2626')
      .type('🔬 Advanced Functions:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#8b5cf6')
      .type('Matrix Operations:')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('A = [1 2]    B = [5 6]')
      .newLine()
      .colorize('#6b7280')
      .type('    [3 4]        [7 8]')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('A × B = ')
      .colorize('#10b981')
      .type('[19 22]')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('        ')
      .colorize('#10b981')
      .type('[43 50]')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#8b5cf6')
      .type('Statistical Functions:')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Data: ')
      .colorize('#374151')
      .type('[12, 15, 18, 20, 22, 25, 28]')
      .newLine()
      .newLine()
      .colorize('#059669')
      .type('📈 Mean:     ')
      .colorize('#374151')
      .type('20.0')
      .newLine()
      .colorize('#3b82f6')
      .type('📊 Median:   ')
      .colorize('#374151')
      .type('20.0')
      .newLine()
      .colorize('#f59e0b')
      .type('📉 Std Dev:  ')
      .colorize('#374151')
      .type('5.477')
      .newLine()
      .colorize('#8b5cf6')
      .type('📋 Variance: ')
      .colorize('#374151')
      .type('30.0')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('🧬 Complex Numbers:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('z₁ = ')
      .colorize('#8b5cf6')
      .type('3 + 4i')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('z₂ = ')
      .colorize('#8b5cf6')
      .type('1 - 2i')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('z₁ + z₂ = ')
      .colorize('#10b981')
      .type('4 + 2i')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('z₁ × z₂ = ')
      .colorize('#10b981')
      .type('11 - 2i')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('|z₁|    = ')
      .colorize('#10b981')
      .type('5.0')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('arg(z₁) = ')
      .colorize('#10b981')
      .type('53.13°')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#ef4444')
      .type('⚡ Performance Stats:')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Calculations/sec: ')
      .colorize('#10b981')
      .type('1,847,592')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Precision:        ')
      .colorize('#10b981')
      .type('15 decimal places')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Memory usage:     ')
      .colorize('#f59e0b')
      .type('2.3 MB')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Functions loaded: ')
      .colorize('#3b82f6')
      .type('247')
      .start();
  }, []);

  // Simulate calculator operations
  useEffect(() => {
    const operations = ['Integration', 'Differentiation', 'Matrix Calc', 'Statistics', 'Trigonometry'];
    const modes = ['Radians', 'Degrees', 'Gradians'];
    
    const interval = setInterval(() => {
      setCurrentOperation(operations[Math.floor(Math.random() * operations.length)]);
      setResult(Math.random() * 1000);
      setMode(modes[Math.floor(Math.random() * modes.length)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes calculate-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          
          @keyframes equation-flow {
            0% { opacity: 0; transform: translateX(-10px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes result-highlight {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(220, 38, 38, 0.1); }
          }
          
          .calculator-display {
            animation: calculate-pulse 3s ease-in-out infinite;
          }
          
          .equation-line {
            animation: equation-flow 0.5s ease-out;
          }
          
          .result-value {
            animation: result-highlight 2s ease-in-out infinite;
          }
        `}
      </style>
      <div
        className="calculator-display"
        style={{
          fontFamily: '"Computer Modern", "Latin Modern Math", "STIX Math", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.4',
          padding: '2.5rem',
          backgroundColor: '#1f2937',
          border: '2px solid #dc2626',
          borderRadius: '16px',
          minHeight: '550px',
          color: '#f9fafb',
          boxShadow: '0 25px 50px rgba(220, 38, 38, 0.2)',
          position: 'relative',
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#374151',
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #4b5563',
          }}
        >
          <div
            style={{
              fontSize: '1.2rem',
            }}
          >
            🧮
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{currentOperation}</span>
            <span 
              className="result-value"
              style={{ fontSize: '0.9rem', fontWeight: '600', color: '#dc2626' }}
            >
              {result.toFixed(3)}
            </span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: '20px',
            backgroundColor: mode === 'Radians' ? '#10b981' : mode === 'Degrees' ? '#3b82f6' : '#8b5cf6',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '8px',
            fontSize: '0.7rem',
            fontWeight: '600',
          }}
        >
          {mode}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(55, 65, 81, 0.9)',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #4b5563',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Functions</div>
              <div style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: '600' }}>247</div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Precision</div>
              <div style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: '600' }}>15 digits</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#dc2626', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: '#f59e0b', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '16px',
            fontSize: '0.7rem',
            color: '#dc2626',
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            padding: '4px 8px',
            borderRadius: '6px',
            fontWeight: '600',
          }}
        >
          🔬 SCIENTIFIC
        </div>

        <div style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Complete Mathematical Operations**: Basic arithmetic through advanced calculus
- **Step-by-step Solutions**: Detailed solution breakdowns for complex problems
- **Trigonometric Functions**: Sin, cos, tan with radian/degree modes
- **Calculus Operations**: Derivatives, integrals, and definite integration
- **Matrix Mathematics**: Matrix multiplication and linear algebra
- **Statistical Analysis**: Mean, median, standard deviation, variance
- **Complex Numbers**: Full complex arithmetic with polar conversions
- **Scientific Notation**: High-precision mathematical calculations

## Mathematical Categories

1. **Basic Operations**: Arithmetic, powers, roots, factorials
2. **Trigonometry**: All trig functions with multiple angle units
3. **Calculus**: Derivatives, integrals, limits, and series
4. **Linear Algebra**: Matrix operations and vector mathematics
5. **Statistics**: Descriptive statistics and data analysis
6. **Complex Analysis**: Complex number operations and conversions

## Interactive Features

- **Live Calculations**: Real-time mathematical operation simulation
- **Mode Switching**: Dynamic angle unit and calculation mode changes
- **Result Highlighting**: Visual emphasis on calculation results
- **Performance Metrics**: System performance and capability displays
- **Function Counting**: Available mathematical function indicators

## Advanced Mathematics

- **Symbolic Computation**: Algebraic manipulation and simplification
- **Numerical Analysis**: High-precision floating-point calculations
- **Mathematical Notation**: Proper mathematical symbol display
- **Unit Conversions**: Automatic unit handling and conversion
- **Error Analysis**: Precision tracking and numerical stability

## Use Cases

- **Educational Software**: Mathematics learning and teaching platforms
- **Engineering Applications**: Scientific and technical calculation tools
- **Research Platforms**: Academic and scientific research interfaces
- **Financial Software**: Complex financial modeling and analysis
- **Scientific Instruments**: Data analysis and computational interfaces