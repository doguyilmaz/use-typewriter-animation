# Password Generator Demo

This example simulates a secure password generator with real-time strength analysis, character masking, and security recommendations.

## Live Demo

```tsx live
function PasswordGeneratorDemo() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [strength, setStrength] = useState('Medium');
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 30,
    cursorStyle: 'block',
    cursorColor: '#dc2626',
  });

  useEffect(() => {
    typewriter
      .colorize('#dc2626')
      .type('🔐 SECURE PASSWORD GENERATOR 🔐')
      .colorize('#374151')
      .newLine()
      .type('════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('⚙️  Configuration:')
      .colorize('#374151')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Length: 16 characters')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include uppercase (A-Z)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include lowercase (a-z)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include numbers (0-9)')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Include symbols (!@#$%)')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#fbbf24')
      .type('🔄 Generating password...')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#6b7280')
      .type('Step 1: ')
      .colorize('#374151')
      .type('Random seed: ')
      .colorize('#3b82f6')
      .type('x7B9')
      .pauseFor(300)
      .type('mK2e')
      .pauseFor(300)
      .type('9Qw!')
      .colorize('#374151')
      .newLine()
      .colorize('#6b7280')
      .type('Step 2: ')
      .colorize('#374151')
      .type('Entropy mixing...')
      .newLine()
      .colorize('#6b7280')
      .type('Step 3: ')
      .colorize('#374151')
      .type('Character selection...')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#dc2626')
      .type('🎯 Generated Password:')
      .colorize('#374151')
      .newLine()
      .colorize('#374151')
      .type('▶ ')
      .colorize('#1f2937')
      .type('P')
      .pauseFor(100)
      .type('4')
      .pauseFor(100)
      .type('s')
      .pauseFor(100)
      .type('S')
      .pauseFor(100)
      .type('w')
      .pauseFor(100)
      .type('0')
      .pauseFor(100)
      .type('r')
      .pauseFor(100)
      .type('D')
      .pauseFor(100)
      .type('!')
      .pauseFor(100)
      .type('X')
      .pauseFor(100)
      .type('q')
      .pauseFor(100)
      .type('8')
      .pauseFor(100)
      .type('z')
      .pauseFor(100)
      .type('M')
      .pauseFor(100)
      .type('#')
      .pauseFor(100)
      .type('9')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#059669')
      .type('📊 Security Analysis:')
      .colorize('#374151')
      .newLine()
      .colorize('#dc2626')
      .type('🔴 Strength: ')
      .colorize('#10b981')
      .type('VERY STRONG')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('🧮 Entropy: ')
      .colorize('#374151')
      .type('95.2 bits')
      .newLine()
      .colorize('#8b5cf6')
      .type('⏱️  Crack Time: ')
      .colorize('#dc2626')
      .type('34 trillion years')
      .colorize('#374151')
      .newLine()
      .colorize('#f59e0b')
      .type('🔢 Combinations: ')
      .colorize('#374151')
      .type('2.8 × 10²³')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('💡 Security Tips:')
      .colorize('#374151')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Never reuse this password')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Store in password manager')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('Enable 2FA when possible')
      .newLine()
      .colorize('#dc2626')
      .type('⚠️  ')
      .colorize('#374151')
      .type('Don\'t share via email/text')
      .start();
  }, []);

  // Simulate password generation process
  useEffect(() => {
    const strengths = ['Weak', 'Medium', 'Strong', 'Very Strong'];
    const interval = setInterval(() => {
      setIsGenerating(prev => !prev);
      setStrength(strengths[Math.floor(Math.random() * strengths.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes security-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3); }
            50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.6); }
          }
          
          @keyframes generate {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
          }
          
          @keyframes strength-bar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          
          .security-indicator {
            position: relative;
            overflow: hidden;
          }
          
          .security-indicator::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: security-scan 2s infinite;
          }
          
          @keyframes security-scan {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}
      </style>
      <div
        style={{
          fontFamily: '"Source Code Pro", "Consolas", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.5',
          padding: '2.5rem',
          backgroundColor: '#1f2937',
          border: '2px solid #dc2626',
          borderRadius: '12px',
          minHeight: '420px',
          color: '#f9fafb',
          animation: 'security-pulse 3s ease-in-out infinite',
          position: 'relative',
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
            border: '1px solid #dc2626',
          }}
        >
          <span
            style={{
              fontSize: '1.2rem',
              animation: isGenerating ? 'generate 1s linear infinite' : 'none',
            }}
          >
            🔄
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Strength</span>
            <span 
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: '600', 
                color: strength === 'Very Strong' ? '#10b981' : 
                       strength === 'Strong' ? '#3b82f6' :
                       strength === 'Medium' ? '#f59e0b' : '#dc2626'
              }}
            >
              {strength}
            </span>
          </div>
        </div>

        <div
          className="security-indicator"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            backgroundColor: '#374151',
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #dc2626, #f59e0b, #10b981)',
              animation: 'strength-bar 4s ease-in-out infinite',
            }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            display: 'flex',
            gap: '8px',
          }}
        >
          <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
          <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }} />
          <div style={{ width: '8px', height: '8px', backgroundColor: '#dc2626', borderRadius: '50%' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            fontSize: '0.7rem',
            color: '#6b7280',
            backgroundColor: 'rgba(55, 65, 81, 0.8)',
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          🔒 Secure Generation
        </div>

        <div style={{ whiteSpace: 'pre-wrap' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Password Configuration**: Length and character type settings
- **Generation Process**: Step-by-step password creation simulation
- **Real-time Analysis**: Security strength and entropy calculations
- **Character-by-character Reveal**: Dramatic password typing effect
- **Security Metrics**: Crack time, combinations, and entropy display
- **Best Practices**: Security tips and recommendations
- **Visual Indicators**: Animated strength meters and status lights

## Security Elements

1. **Configuration Options**: Password length and character types
2. **Generation Steps**: Random seed, entropy mixing, character selection
3. **Password Reveal**: Character-by-character dramatic typing
4. **Security Analysis**: Strength, entropy, and crack time calculations
5. **Safety Guidelines**: Best practices for password security

## Interactive Features

- **Live Strength Meter**: Dynamic security strength updates
- **Generation Animation**: Rotating icons during password creation
- **Scanning Effect**: Security scan animation across interface
- **Status Indicators**: Multi-colored security status lights
- **Progress Bar**: Animated strength level visualization

## Visual Design

- **Dark Security Theme**: Professional cybersecurity aesthetics
- **Red Alert Colors**: Security-focused color scheme
- **Monospace Typography**: Code-like font for technical feel
- **Glowing Effects**: Security pulse animation around border
- **Matrix-style Elements**: Green text on dark background

## Use Cases

- **Security Applications**: Password generation and management tools
- **Developer Tools**: API key and token generation
- **Educational Platforms**: Teach password security concepts
- **Banking/Finance**: Secure credential generation
- **Corporate Security**: Employee password policy demonstrations