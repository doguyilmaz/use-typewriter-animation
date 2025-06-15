import React, { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const AccessibilityShowcase: React.FC = () => {
  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      respectReducedMotion: true,
      ariaLabel: 'Accessibility demonstration',
      announceCompletion: true,
      typeSpeed: 60,
      cursorColor: '#0066cc',
    });

  useEffect(() => {
    typewriter
      .type('♿ Fully accessible animation')
      .pauseFor(1000)
      .newLine()
      .type('✅ WCAG 2.1 AA compliant')
      .newLine()
      .type('🔊 Screen reader support')
      .newLine()
      .type('⌨️ Keyboard navigation')
      .newLine()
      .type('🎯 Respects reduced motion preferences')
      .newLine()
      .type('📢 Announces completion to assistive tech')
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        style={{
          fontSize: '1.2rem',
          fontFamily: 'system-ui, sans-serif',
          whiteSpace: 'pre-line',
          padding: '2rem',
          border: '2px solid var(--ifm-color-primary)',
          borderRadius: '12px',
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-color-content)',
          lineHeight: '1.6',
          minHeight: '300px',
          width: '100%',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'auto',
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--ifm-color-primary-darker)';
          e.currentTarget.style.boxShadow = '0 0 0 3px var(--ifm-color-primary-lightest)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
};

export default AccessibilityShowcase;