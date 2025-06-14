---
sidebar_position: 6
title: Password Generator
description: Secure password generator with real-time strength analysis and security recommendations
tags: [security, password, generator, analysis, cryptography]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { PasswordGeneratorExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={PasswordGeneratorExample}
difficulty="Advanced"
description="Create a comprehensive password generator with real-time strength analysis, character masking, and security recommendations. Perfect for security-focused applications, developer tools, and educational demonstrations about password security."
tags={["Password security", "Cryptography demo", "Real-time analysis", "Security recommendations", "Developer tools"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const PasswordGeneratorExample: React.FC = () => {
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
.type('⚙️ Configuration:')
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
.type('⏱️ Crack Time: ')
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
.type('⚠️ ')
.colorize('#374151')
.type('Don\\'t share via email/text')
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
{\`
@keyframes pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.5; }
}

          .generating {
            animation: pulse 2s infinite;
          }

          .strength-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 5px;
            animation: pulse 1s infinite;
          }
        \`}
      </style>
      <div
        style={{
          backgroundColor: '#0f172a',
          borderRadius: '12px',
          padding: '2rem',
          fontFamily: 'JetBrains Mono, Monaco, monospace',
          fontSize: '0.9rem',
          color: '#f8fafc',
          lineHeight: '1.5',
          minHeight: '600px',
          border: '1px solid #1e293b',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, #1e293b 0%, transparent 50%)',
            opacity: 0.3,
          }}
        />

        {/* Status indicators */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <div
            className={isGenerating ? 'generating' : ''}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              color: '#64748b',
            }}
          >
            <div
              className="strength-indicator"
              style={{
                backgroundColor:
                  strength === 'Weak' ? '#ef4444' :
                  strength === 'Medium' ? '#f59e0b' :
                  strength === 'Strong' ? '#3b82f6' : '#10b981'
              }}
            />
            Strength: {strength}
          </div>
        </div>

        {/* Main content */}
        <div style={{ position: 'relative', zIndex: 1, whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>

);
};

export default PasswordGeneratorExample;`}
instructions={[
"Implement secure random password generation with configurable complexity",
"Add real-time strength analysis using entropy calculations",
"Include visual security indicators and crack time estimates",
"Provide educational security tips and best practices",
"Design terminal-style interface with dynamic status updates"
]}
/>

## Use Cases

- **Security Training**: Educational demonstrations about password security
- **Developer Tools**: Integrated password generation in development environments
- **Corporate Security**: Employee password policy demonstrations
- **Banking/Finance**: Secure credential generation for financial applications
- **Cybersecurity**: Penetration testing and security audit tools

```

```
