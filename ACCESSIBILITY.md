# Accessibility Guide

## Overview

The use-typewriter-animation library is designed with accessibility-first principles, ensuring WCAG 2.1 AA compliance and providing an inclusive experience for all users, including those using assistive technologies.

## 🎯 Accessibility Features

### ✅ Screen Reader Support
- **ARIA live regions** for real-time announcements
- **Screen reader-only content** for full context
- **Progressive announcements** during typing
- **Completion announcements** when animation finishes

### ✅ Reduced Motion Support
- **Automatic detection** of `prefers-reduced-motion` preference
- **Instant text display** for users who prefer reduced motion
- **Dynamic preference changes** - responds to real-time changes
- **Cursor animation respect** - disables blinking when needed

### ✅ Keyboard Navigation
- **Configurable keyboard shortcuts** for full control
- **Pause/Resume** functionality (default: Space bar)
- **Skip animation** (default: Escape)
- **Reset animation** (default: R key)
- **Focus management** for better keyboard navigation

### ✅ ARIA Compliance
- **Comprehensive ARIA attributes** (live, label, describedby, role)
- **Semantic roles** (status, log, alert, marquee)
- **Busy state indicators** during active animations
- **Atomic announcements** for complete context

### ✅ High Contrast Support
- **System color respect** - uses `currentColor` for better contrast
- **Non-color-dependent indicators** for state changes
- **Border and background transparency** for theme compatibility

## 🚀 Quick Start (Accessible)

### Basic Accessible Implementation

```tsx
import { useTypewriter } from 'use-typewriter-animation';

function AccessibleTypewriter() {
  const { 
    typewriter, 
    elements, 
    cursor, 
    accessibilityProps, 
    screenReaderAnnouncement 
  } = useTypewriter({
    // Basic accessibility settings
    ariaLabel: 'Welcome message typewriter',
    respectReducedMotion: true,
    announceCompletion: true,
  });

  useEffect(() => {
    typewriter
      .type('Welcome to our accessible website!', {
        screenReaderText: 'Welcome to our accessible website!',
        announceCompletion: true,
      })
      .start();
  }, [typewriter]);

  return (
    <div {...accessibilityProps}>
      {elements}
      {cursor}
      {screenReaderAnnouncement}
    </div>
  );
}
```

### Full Accessibility Configuration

```tsx
function FullyAccessibleTypewriter() {
  const { 
    typewriter, 
    elements, 
    cursor, 
    accessibilityProps, 
    screenReaderAnnouncement 
  } = useTypewriter({
    // ARIA Configuration
    ariaLive: 'polite',
    ariaLabel: 'Product announcement typewriter',
    role: 'status',
    
    // Reduced Motion Support
    respectReducedMotion: true,
    reducedMotionFallback: 'instant',
    
    // Keyboard Controls
    enableKeyboardControls: true,
    autoKeyboardHandling: true,
    keyboardShortcuts: {
      pause: ['Space', ' '],
      resume: ['Space', ' '],
      skip: ['Escape', 'Enter'],
      reset: ['KeyR', 'r'],
    },
    
    // Screen Reader Optimizations
    announceCompletion: true,
    screenReaderText: 'New product launch: Revolutionary AI Assistant now available!',
    
    // Visual Accessibility
    cursorColor: 'currentColor',
  });

  useEffect(() => {
    typewriter
      .type('🎉 New Product Launch: ', {
        announceCompletion: false,
      })
      .pauseFor(500)
      .type('Revolutionary AI Assistant', {
        announceCompletion: false,
      })
      .pauseFor(500)
      .type(' now available!', {
        announceCompletion: true,
      })
      .start();
  }, [typewriter]);

  return (
    <div 
      {...accessibilityProps}
      tabIndex={0} // Make focusable for keyboard navigation
      style={{
        padding: '1rem',
        border: '2px solid currentColor',
        borderRadius: '4px',
        backgroundColor: 'transparent',
      }}
    >
      <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', opacity: 0.7 }}>
        Keyboard controls: Space (pause/resume), Escape (skip), R (reset)
      </div>
      {elements}
      {cursor}
      {screenReaderAnnouncement}
    </div>
  );
}
```

## 📋 Accessibility Options Reference

### ARIA Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ariaLive` | `'polite' \| 'assertive' \| 'off'` | `'polite'` | Controls how screen readers announce content |
| `ariaLabel` | `string` | `undefined` | Provides accessible name for the component |
| `ariaDescribedBy` | `string` | `undefined` | References elements that describe the component |
| `role` | `'status' \| 'log' \| 'alert' \| 'marquee'` | `'status'` | Semantic role for the component |

### Screen Reader Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `screenReaderText` | `string` | `undefined` | Full text provided to screen readers when complete |
| `announceCompletion` | `boolean` | `false` | Whether to announce when typing is complete |

### Reduced Motion Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `respectReducedMotion` | `boolean` | `true` | Whether to respect user's motion preferences |
| `reducedMotionFallback` | `'instant' \| 'none'` | `'instant'` | How to handle animation when motion is reduced |

### Keyboard Navigation Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableKeyboardControls` | `boolean` | `false` | Enable keyboard control functionality |
| `autoKeyboardHandling` | `boolean` | `false` | Automatically handle keyboard events |
| `keyboardShortcuts` | `object` | See below | Custom keyboard shortcuts |
| `manageFocus` | `boolean` | `false` | Manage focus during animations |
| `focusOnComplete` | `boolean` | `false` | Focus component when animation completes |

#### Default Keyboard Shortcuts

```typescript
{
  pause: ['Space', ' '],
  resume: ['Space', ' '],
  skip: ['Escape', 'Enter'],
  reset: ['KeyR', 'r'],
}
```

## 🎛️ Accessibility Props Usage

The `accessibilityProps` object contains all necessary ARIA attributes:

```tsx
const { accessibilityProps } = useTypewriter({
  ariaLabel: 'Status updates',
  ariaLive: 'polite',
  role: 'status',
});

// Apply to your container
<div {...accessibilityProps}>
  {/* Your typewriter content */}
</div>

// Results in:
<div 
  aria-label="Status updates"
  aria-live="polite"
  role="status"
  aria-busy={true} // Dynamic based on typing state
>
  {/* Your typewriter content */}
</div>
```

## 🔊 Screen Reader Announcements

The library provides multiple levels of screen reader support:

### 1. Progressive Announcements
Text is announced as it's being typed (configurable via `ariaLive`).

### 2. Completion Announcements
Full context is provided when animation completes.

### 3. Status Announcements
Current state (typing, paused, completed) is announced.

### 4. Keyboard Control Instructions
When keyboard controls are enabled, instructions are provided.

## ⌨️ Keyboard Navigation

### Default Controls

| Key | Action | Description |
|-----|--------|-------------|
| **Space** | Pause/Resume | Toggle animation playback |
| **Escape** | Skip | Skip to end of current animation |
| **R** | Reset | Reset animation to beginning |

### Custom Keyboard Shortcuts

```tsx
const { typewriter } = useTypewriter({
  enableKeyboardControls: true,
  autoKeyboardHandling: true,
  keyboardShortcuts: {
    pause: ['KeyP', 'p'],
    resume: ['KeyP', 'p'],
    skip: ['KeyS', 's'],
    reset: ['KeyR', 'r'],
  },
});
```

### Manual Keyboard Handling

```tsx
const { typewriter } = useTypewriter({
  enableKeyboardControls: true,
  autoKeyboardHandling: false, // Handle manually
});

useEffect(() => {
  const handleKeyDown = (event) => {
    switch (event.key) {
      case ' ':
        event.preventDefault();
        if (typewriter.isPaused()) {
          typewriter.resume();
        } else {
          typewriter.pause();
        }
        break;
      case 'Escape':
        event.preventDefault();
        typewriter.skip();
        break;
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [typewriter]);
```

## 🎨 Reduced Motion Support

### Automatic Detection

The library automatically detects the user's `prefers-reduced-motion` preference:

```tsx
const { typewriter } = useTypewriter({
  respectReducedMotion: true, // Default: true
  reducedMotionFallback: 'instant', // Show text immediately
});
```

### Manual Control

```tsx
const { typewriter } = useTypewriter({
  respectReducedMotion: false, // Ignore user preference
});
```

### Dynamic Changes

The library responds to real-time changes in motion preferences:

```tsx
// User changes system preference while page is open
// Library automatically adjusts behavior
```

## 🧪 Testing Accessibility

### Using the Built-in Test Utilities

```tsx
import { AccessibilityTestUtils, AccessibilityTestHelpers } from 'use-typewriter-animation/test/AccessibilityTest';

// Test basic accessibility compliance
const auditResult = AccessibilityTestUtils.auditAccessibility(containerElement);
console.log(`Accessibility score: ${auditResult.percentage}%`);

// Test with Jest/Vitest
test('typewriter meets accessibility requirements', () => {
  const { container } = render(<MyTypewriterComponent />);
  AccessibilityTestHelpers.expectAccessibleTypewriter(container);
});

// Test keyboard navigation
test('keyboard navigation works', async () => {
  const { container } = render(<MyTypewriterComponent />);
  await AccessibilityTestHelpers.testKeyboardNavigation(container);
});
```

### Manual Testing Checklist

- [ ] Screen reader announces content appropriately
- [ ] Reduced motion preference is respected
- [ ] Keyboard navigation works as expected
- [ ] High contrast mode displays correctly
- [ ] Focus management is appropriate
- [ ] ARIA attributes are present and correct

## 🌟 Best Practices

### 1. Always Provide Context
```tsx
// ✅ Good: Descriptive aria-label
ariaLabel: "Product announcement typewriter"

// ❌ Bad: Generic or missing label
ariaLabel: "Typewriter"
```

### 2. Use Appropriate ARIA Live Regions
```tsx
// ✅ Good: Use 'polite' for most announcements
ariaLive: 'polite'

// ✅ Good: Use 'assertive' for urgent messages
ariaLive: 'assertive'

// ❌ Bad: Overusing 'assertive'
ariaLive: 'assertive' // for non-urgent content
```

### 3. Provide Full Context for Screen Readers
```tsx
// ✅ Good: Complete text for screen readers
screenReaderText: "Welcome to our accessible website! We're committed to inclusive design."

// ❌ Bad: Incomplete or missing context
screenReaderText: "Welcome"
```

### 4. Enable Keyboard Controls for Interactive Content
```tsx
// ✅ Good: Enable controls for long animations
enableKeyboardControls: true

// ✅ Good: Make container focusable
<div {...accessibilityProps} tabIndex={0}>
```

### 5. Respect User Preferences
```tsx
// ✅ Good: Always respect reduced motion
respectReducedMotion: true

// ✅ Good: Use system colors for high contrast
cursorColor: 'currentColor'
```

## 🔧 Troubleshooting

### Screen Reader Not Announcing Content

1. Check that `ariaLive` is not set to `'off'`
2. Ensure `screenReaderAnnouncement` element is rendered
3. Verify announcements are not empty
4. Test with different screen readers (NVDA, JAWS, VoiceOver)

### Reduced Motion Not Working

1. Check browser support for `prefers-reduced-motion`
2. Verify system settings have reduced motion enabled
3. Ensure `respectReducedMotion` is `true`
4. Test the `reducedMotionFallback` setting

### Keyboard Controls Not Responding

1. Verify `enableKeyboardControls` is `true`
2. Check that container is focusable (`tabIndex={0}`)
3. Ensure `autoKeyboardHandling` is enabled or manual handling is implemented
4. Test keyboard shortcut conflicts with browser/system shortcuts

## 📚 WCAG 2.1 Compliance

This library meets WCAG 2.1 AA standards:

- **1.4.3 Contrast (Minimum)**: Uses system colors for high contrast support
- **1.4.5 Images of Text**: Text-based animations, not image-based
- **2.1.1 Keyboard**: Full keyboard navigation support
- **2.2.2 Pause, Stop, Hide**: Keyboard controls for animation control
- **2.4.3 Focus Order**: Logical focus management
- **3.3.2 Labels or Instructions**: Clear keyboard control instructions
- **4.1.2 Name, Role, Value**: Comprehensive ARIA implementation
- **4.1.3 Status Messages**: Proper use of ARIA live regions

## 🤝 Contributing to Accessibility

We welcome contributions to improve accessibility! Please:

1. Test with real assistive technologies
2. Follow WCAG 2.1 guidelines
3. Include accessibility tests
4. Update documentation
5. Consider diverse user needs

## 📞 Support

For accessibility-related questions or issues:

1. Check this guide first
2. Test with the built-in accessibility utilities
3. Open an issue with detailed reproduction steps
4. Include information about assistive technologies used

---

**Remember**: Accessibility is not just compliance—it's about creating inclusive experiences for all users. Every user deserves equal access to your content! 🌟