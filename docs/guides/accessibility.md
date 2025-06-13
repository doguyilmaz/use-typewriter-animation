# Accessibility Guide

`use-typewriter-animation` is built with accessibility as a first-class citizen, following WCAG 2.1 AA guidelines. This guide covers how to create inclusive typewriter animations.

## 🎯 Core Principles

### 1. **Perceivable**

- Provide text alternatives for animations
- Ensure sufficient color contrast
- Support screen readers with proper ARIA attributes

### 2. **Operable**

- Respect `prefers-reduced-motion` settings
- Provide keyboard controls
- Ensure animations don't cause seizures

### 3. **Understandable**

- Use clear, simple language
- Provide consistent behavior
- Announce important changes

### 4. **Robust**

- Work with assistive technologies
- Maintain compatibility across browsers
- Degrade gracefully

## ♿ Essential Accessibility Features

### Reduced Motion Support

Always respect user preferences for reduced motion:

```tsx
const { typewriter, elements, cursor, keyframes } = useTypewriter({
  respectReducedMotion: true, // Honor prefers-reduced-motion
  reducedMotionFallback: 'instant', // 'instant' | 'slow'
});
```

**How it works:**

- **Reduced Motion ON**: Text appears instantly or with slow animation
- **Reduced Motion OFF**: Normal typewriter animation

### ARIA Live Regions

Announce text changes to screen readers:

```tsx
const { typewriter, accessibilityProps } = useTypewriter({
  ariaLive: 'polite', // 'polite' | 'assertive' | 'off'
  ariaLabel: 'Status updates',
  role: 'status', // 'status' | 'log' | 'alert'
});

return (
  <div {...accessibilityProps}>
    {elements}
    {cursor}
  </div>
);
```

**ARIA Live Options:**

- `polite` - Announce when user is idle (default)
- `assertive` - Announce immediately
- `off` - Don't announce changes

### Screen Reader Support

Provide alternative text for screen readers:

```tsx
const { typewriter, elements, cursor, screenReaderAnnouncement } = useTypewriter({
  announceCompletion: true,
  screenReaderText: 'Alternative description for screen readers',
});

useEffect(() => {
  typewriter
    .type('Visual animation text', {
      screenReaderText: 'Screen reader friendly version',
      announceCompletion: true,
    })
    .start();
}, []);

return (
  <div>
    {elements}
    {cursor}
    {screenReaderAnnouncement}
  </div>
);
```

## 🎮 Keyboard Controls

Enable keyboard interaction for better accessibility:

```tsx
const { typewriter, elements, cursor } = useTypewriter({
  enableKeyboardControls: true,
  autoKeyboardHandling: true,
  keyboardShortcuts: {
    pause: ['Space'],
    resume: ['Space'],
    skip: ['Escape', 'Enter'],
    reset: ['KeyR'],
  },
});

return (
  <div
    tabIndex={0} // Make focusable
    role='application'
    aria-label='Interactive typewriter animation'
    onKeyDown={(e) => {
      // Custom keyboard handling if needed
      if (e.key === 'Enter') {
        typewriter.skip();
      }
    }}
  >
    {elements}
    {cursor}
  </div>
);
```

**Default Keyboard Shortcuts:**

- **Space**: Pause/Resume animation
- **Escape/Enter**: Skip to end
- **R**: Reset animation

## 🎨 Visual Accessibility

### Color Contrast

Ensure sufficient contrast ratios:

```tsx
// Good contrast examples
const highContrastStyles = {
  // WCAG AA: 4.5:1 ratio for normal text
  color: '#000000',
  backgroundColor: '#ffffff',

  // WCAG AAA: 7:1 ratio for enhanced contrast
  color: '#000000',
  backgroundColor: '#f8f9fa',
};

const { typewriter } = useTypewriter({
  cursorColor: '#000000', // High contrast cursor
});
```

### Focus Management

Provide clear focus indicators:

```tsx
const focusStyles = {
  outline: '2px solid #3b82f6',
  outlineOffset: '2px',
  borderRadius: '4px',
};

return (
  <div tabIndex={0} style={focusStyles} onFocus={() => console.log('Typewriter focused')}>
    {elements}
    {cursor}
  </div>
);
```

## 📢 Screen Reader Patterns

### Status Updates

For status messages and notifications:

```tsx
function StatusTypewriter() {
  const { typewriter, elements, cursor, accessibilityProps } = useTypewriter({
    ariaLive: 'polite',
    role: 'status',
    ariaLabel: 'System status updates',
  });

  useEffect(() => {
    typewriter
      .type('System initializing...', {
        screenReaderText: 'System is initializing, please wait',
      })
      .pauseFor(2000)
      .deleteAll()
      .type('Ready!', {
        screenReaderText: 'System is ready for use',
        announceCompletion: true,
      })
      .start();
  }, []);

  return (
    <div {...accessibilityProps}>
      {elements}
      {cursor}
    </div>
  );
}
```

### Alert Messages

For important alerts:

```tsx
function AlertTypewriter() {
  const { typewriter, elements, cursor } = useTypewriter({
    ariaLive: 'assertive', // Immediate announcement
    role: 'alert',
    ariaLabel: 'Important system alert',
  });

  useEffect(() => {
    typewriter
      .type('⚠️ Connection lost', {
        screenReaderText: 'Warning: Connection to server has been lost',
        announceCompletion: true,
      })
      .start();
  }, []);

  return (
    <div role='alert' aria-live='assertive'>
      {elements}
      {cursor}
    </div>
  );
}
```

### Log Messages

For activity logs:

```tsx
function LogTypewriter() {
  const { typewriter, elements, cursor } = useTypewriter({
    ariaLive: 'polite',
    role: 'log',
    ariaLabel: 'Activity log',
  });

  const logMessages = ['User logged in', 'File uploaded successfully', 'Data synchronized'];

  useEffect(() => {
    logMessages.forEach((message, index) => {
      typewriter.type(`${new Date().toLocaleTimeString()}: ${message}`).newLine().pauseFor(1000);
    });

    typewriter.start();
  }, []);

  return (
    <div role='log' aria-live='polite' aria-label='Activity log'>
      {elements}
      {cursor}
    </div>
  );
}
```

## 🧪 Testing Accessibility

### Screen Reader Testing

Test with popular screen readers:

```tsx
// Test component with screen reader announcements
function TestableTypewriter() {
  const [testMode, setTestMode] = useState(false);

  const { typewriter, elements, cursor, screenReaderAnnouncement, accessibilityProps } =
    useTypewriter({
      respectReducedMotion: true,
      announceCompletion: true,
      ariaLabel: 'Test typewriter animation',
    });

  // Test different scenarios
  const runAccessibilityTest = () => {
    typewriter
      .type('Testing screen reader support', {
        screenReaderText: 'This is a test of screen reader compatibility',
        announceCompletion: true,
      })
      .pauseFor(1000)
      .deleteAll()
      .type('Test complete!', {
        announceCompletion: true,
      })
      .start();
  };

  return (
    <div>
      <button onClick={runAccessibilityTest}>Run Accessibility Test</button>

      <div {...accessibilityProps} tabIndex={0}>
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>

      {/* Debug info for testing */}
      {testMode && (
        <div aria-hidden='true'>
          <h3>Debug Info:</h3>
          <pre>{JSON.stringify(accessibilityProps, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
```

### Keyboard Navigation Testing

```tsx
function KeyboardTestTypewriter() {
  const [focused, setFocused] = useState(false);

  const { typewriter, elements, cursor } = useTypewriter({
    enableKeyboardControls: true,
    autoKeyboardHandling: true,
  });

  return (
    <div>
      <h3>Keyboard Controls Test</h3>
      <p>Focus the typewriter and try these keys:</p>
      <ul>
        <li>
          <kbd>Space</kbd> - Pause/Resume
        </li>
        <li>
          <kbd>Escape</kbd> - Skip to end
        </li>
        <li>
          <kbd>R</kbd> - Reset
        </li>
      </ul>

      <div
        tabIndex={0}
        role='application'
        aria-label='Keyboard controlled typewriter'
        style={{
          padding: '1rem',
          border: focused ? '2px solid #3b82f6' : '2px solid #ccc',
          borderRadius: '4px',
          outline: 'none',
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {elements}
        {cursor}
      </div>
    </div>
  );
}
```

## 🔧 Accessibility Configuration

### Complete Accessible Setup

```tsx
function FullyAccessibleTypewriter() {
  const { typewriter, elements, cursor, keyframes, accessibilityProps, screenReaderAnnouncement } =
    useTypewriter({
      // Motion preferences
      respectReducedMotion: true,
      reducedMotionFallback: 'instant',

      // ARIA configuration
      ariaLive: 'polite',
      ariaLabel: 'Welcome message animation',
      role: 'status',

      // Screen reader support
      announceCompletion: true,
      screenReaderText: 'Welcome to our accessible application',

      // Keyboard controls
      enableKeyboardControls: true,
      autoKeyboardHandling: true,

      // Visual accessibility
      cursorColor: '#000000', // High contrast
    });

  useEffect(() => {
    typewriter
      .type('Welcome to our app!', {
        screenReaderText: 'Welcome to our accessible application',
        announceCompletion: true,
      })
      .start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        {...accessibilityProps}
        tabIndex={0}
        style={{
          padding: '1rem',
          borderRadius: '4px',
          backgroundColor: '#f8f9fa',
          color: '#000000',
          fontSize: '1.2rem',
          lineHeight: 1.5,
          // Focus styles
          outline: 'none',
          boxShadow: 'inset 0 0 0 2px transparent',
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = 'inset 0 0 0 2px #3b82f6';
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = 'inset 0 0 0 2px transparent';
        }}
      >
        {elements}
        {cursor}
        {screenReaderAnnouncement}
      </div>
    </>
  );
}
```

## 📋 Accessibility Checklist

### ✅ WCAG 2.1 AA Compliance

- [ ] **Perceivable**

  - [ ] Text alternatives provided (`screenReaderText`)
  - [ ] Color contrast ratio ≥ 4.5:1
  - [ ] Content works without color alone
  - [ ] Text can be resized to 200%

- [ ] **Operable**

  - [ ] All functionality available via keyboard
  - [ ] No seizure-inducing content
  - [ ] Users can pause/stop animations
  - [ ] Respects `prefers-reduced-motion`

- [ ] **Understandable**

  - [ ] Text is readable and understandable
  - [ ] Content appears and operates predictably
  - [ ] Users are helped to avoid/correct mistakes

- [ ] **Robust**
  - [ ] Compatible with assistive technologies
  - [ ] Valid HTML/ARIA markup
  - [ ] Works across different browsers

### 🧪 Testing Checklist

- [ ] **Screen Reader Testing**

  - [ ] NVDA (Windows)
  - [ ] JAWS (Windows)
  - [ ] VoiceOver (macOS/iOS)
  - [ ] TalkBack (Android)

- [ ] **Keyboard Testing**

  - [ ] Tab navigation works
  - [ ] All controls accessible via keyboard
  - [ ] Focus indicators visible
  - [ ] No keyboard traps

- [ ] **Motion Testing**
  - [ ] Works with `prefers-reduced-motion: reduce`
  - [ ] Provides alternative for motion content
  - [ ] No auto-playing animations > 5 seconds

## 🚀 Best Practices

### 1. **Always Provide Alternatives**

```tsx
// Good - provides screen reader alternative
typewriter.type('🎉 Success!', {
  screenReaderText: 'Operation completed successfully',
});

// Bad - emoji without alternative
typewriter.type('🎉 Success!');
```

### 2. **Use Semantic HTML**

```tsx
// Good - semantic structure
<section aria-labelledby="welcome-heading">
  <h2 id="welcome-heading">Welcome</h2>
  <div {...accessibilityProps}>
    {elements}{cursor}
  </div>
</section>

// Bad - no semantic meaning
<div>
  <div>Welcome</div>
  <div>{elements}{cursor}</div>
</div>
```

### 3. **Test with Real Users**

- Include users with disabilities in testing
- Use actual assistive technologies
- Test in realistic scenarios
- Gather feedback and iterate

## 📚 Resources

### WCAG Guidelines

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Testing Tools

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

### Screen Readers

- [NVDA (Free)](https://www.nvaccess.org/download/)
- [VoiceOver (Built into macOS)](https://support.apple.com/guide/voiceover/)
- [JAWS (Commercial)](https://www.freedomscientific.com/products/software/jaws/)

Remember: Accessibility is not a feature—it's a fundamental requirement for inclusive web experiences! 🌟
