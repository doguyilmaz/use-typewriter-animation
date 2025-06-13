# useTypewriter Hook

The core hook that provides typewriter animation functionality with full TypeScript support and accessibility features.

## Basic Usage

```tsx
import { useTypewriter } from 'use-typewriter-animation';

function MyComponent() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'bar',
  });

  useEffect(() => {
    typewriter.type('Hello, World!').pauseFor(1000).deleteLetters(6).type('React!').start();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div>
        {elements}
        {cursor}
      </div>
    </>
  );
}
```

## Hook Signature

```tsx
function useTypewriter(options?: UseTypewriterOptions): UseTypewriterReturn;
```

## Options (UseTypewriterOptions)

### Visual Settings

| Option             | Type                              | Default   | Description                                  |
| ------------------ | --------------------------------- | --------- | -------------------------------------------- |
| `typeSpeed`        | `number`                          | `30`      | Typing speed in milliseconds per character   |
| `deleteSpeed`      | `number`                          | `30`      | Deleting speed in milliseconds per character |
| `loop`             | `boolean`                         | `false`   | Whether animation should loop continuously   |
| `cursorStyle`      | `'bar' \| 'block' \| 'underline'` | `'bar'`   | Visual style of the cursor                   |
| `cursorColor`      | `string`                          | `'black'` | CSS color value for the cursor               |
| `cursorBlinkSpeed` | `number`                          | `500`     | Cursor blink speed in milliseconds           |
| `enableCursor`     | `boolean`                         | `true`    | Whether to show the cursor                   |

### Accessibility Settings

| Option                   | Type                               | Default     | Description                               |
| ------------------------ | ---------------------------------- | ----------- | ----------------------------------------- |
| `ariaLive`               | `'polite' \| 'assertive' \| 'off'` | `'polite'`  | ARIA live region type                     |
| `ariaLabel`              | `string`                           | `undefined` | ARIA label for the typewriter             |
| `role`                   | `'status' \| 'log' \| 'alert'`     | `'status'`  | ARIA role for the container               |
| `respectReducedMotion`   | `boolean`                          | `true`      | Honor `prefers-reduced-motion` setting    |
| `reducedMotionFallback`  | `'instant' \| 'slow'`              | `'instant'` | Behavior when reduced motion is preferred |
| `enableKeyboardControls` | `boolean`                          | `false`     | Enable keyboard shortcuts                 |
| `autoKeyboardHandling`   | `boolean`                          | `false`     | Automatically handle keyboard events      |
| `announceCompletion`     | `boolean`                          | `false`     | Announce when typing completes            |
| `screenReaderText`       | `string`                           | `undefined` | Alternative text for screen readers       |

### Performance Settings

| Option                 | Type      | Default | Description                               |
| ---------------------- | --------- | ------- | ----------------------------------------- |
| `enableVirtualization` | `boolean` | `false` | Enable virtualization for long text       |
| `maxVisibleSegments`   | `number`  | `100`   | Maximum visible segments when virtualized |

### Keyboard Controls

| Option              | Type                | Default   | Description               |
| ------------------- | ------------------- | --------- | ------------------------- |
| `keyboardShortcuts` | `KeyboardShortcuts` | See below | Custom keyboard shortcuts |

#### Default Keyboard Shortcuts

```tsx
{
  pause: ['Space', ' '],
  resume: ['Space', ' '],
  skip: ['Escape', 'Enter'],
  reset: ['KeyR']
}
```

## Return Value (UseTypewriterReturn)

| Property                   | Type                      | Description                        |
| -------------------------- | ------------------------- | ---------------------------------- |
| `typewriter`               | `TypewriterBaseType`      | Control methods for the typewriter |
| `state`                    | `TypewriterState`         | Current state of the typewriter    |
| `elements`                 | `JSX.Element[]`           | Rendered text segments             |
| `cursor`                   | `JSX.Element \| null`     | Cursor element                     |
| `styles`                   | `typeof typewriterStyles` | CSS-in-JS styles                   |
| `keyframes`                | `string`                  | CSS keyframes for animations       |
| `metrics`                  | `PerformanceMetrics`      | Performance metrics                |
| `accessibilityProps`       | `AriaAttributes`          | ARIA attributes for container      |
| `screenReaderAnnouncement` | `JSX.Element`             | Screen reader content              |

## Typewriter Control Methods

### Text Operations

#### `type(text: string, options?: TypeOptions)`

Types the specified text with optional configuration.

```tsx
typewriter.type('Hello, World!', {
  speed: 80,
  screenReaderText: 'Hello, World!',
  announceCompletion: true,
});
```

**TypeOptions:**

- `speed?: number` - Override default typing speed
- `screenReaderText?: string` - Alternative text for screen readers
- `announceCompletion?: boolean` - Whether to announce completion

#### `deleteLetters(count: number)`

Deletes the specified number of characters from the end.

```tsx
typewriter.deleteLetters(5); // Delete last 5 characters
```

#### `deleteWords(count: number)`

Deletes the specified number of words from the end.

```tsx
typewriter.deleteWords(2); // Delete last 2 words
```

#### `deleteAll()`

Deletes all text.

```tsx
typewriter.deleteAll();
```

### Styling Operations

#### `colorize(color: string)`

Changes the color for subsequent text.

```tsx
typewriter
  .type('This is ')
  .colorize('red')
  .type('red text')
  .colorize('') // Reset to default
  .type(' and this is normal');
```

#### `highlight(start: number, length: number, style: HighlightStyle)`

Highlights a portion of existing text.

```tsx
typewriter.type('Hello World').highlight(0, 5, {
  color: 'white',
  background: 'blue',
});
```

**HighlightStyle:**

```tsx
interface HighlightStyle {
  color?: string;
  background?: string;
  fontWeight?: string;
  textDecoration?: string;
}
```

### Flow Control

#### `pauseFor(duration: number)`

Pauses the animation for the specified duration in milliseconds.

```tsx
typewriter
  .type('Hello')
  .pauseFor(1000) // Wait 1 second
  .type(' World!');
```

#### `newLine()`

Inserts a line break.

```tsx
typewriter.type('First line').newLine().type('Second line');
```

### Animation Control

#### `start()`

Starts the typewriter animation.

```tsx
typewriter.type('Hello, World!').start();
```

#### `stop()`

Stops the animation and cleans up resources.

```tsx
typewriter.stop();
```

#### `pause()`

Pauses the current animation (keyboard control).

```tsx
typewriter.pause();
```

#### `resume()`

Resumes a paused animation (keyboard control).

```tsx
typewriter.resume();
```

#### `skip()`

Skips to the end of the current animation (keyboard control).

```tsx
typewriter.skip();
```

#### `reset()`

Resets the typewriter to its initial state (keyboard control).

```tsx
typewriter.reset();
```

#### `isPaused(): boolean`

Returns whether the animation is currently paused.

```tsx
const paused = typewriter.isPaused();
```

## Event Handling

### `on(event: string, callback: Function)`

Registers an event listener.

```tsx
typewriter
  .on('start', () => console.log('Animation started'))
  .on('end', () => console.log('Animation completed'))
  .on('loop', () => console.log('Loop iteration'))
  .on('pause', () => console.log('Animation paused'))
  .on('resume', () => console.log('Animation resumed'));
```

**Available Events:**

- `start` - Animation begins
- `end` - Animation completes
- `loop` - Loop iteration starts
- `pause` - Animation is paused
- `resume` - Animation is resumed
- `type` - Character is typed
- `delete` - Character is deleted

## State Management

### TypewriterState

```tsx
interface TypewriterState {
  isRunning: boolean;
  isPaused: boolean;
  currentText: string;
  segments: TextSegment[];
  currentSegmentIndex: number;
  reducedMotion: boolean;
}
```

### Performance Metrics

```tsx
interface PerformanceMetrics {
  totalSegments: number;
  visibleSegments: number;
  isVirtualized: boolean;
  renderTime: number;
  memoryUsage: number;
}
```

## Advanced Usage

### Chaining Operations

```tsx
useEffect(() => {
  typewriter
    .type('Welcome to ')
    .colorize('#3b82f6')
    .type('React')
    .colorize('')
    .type('!')
    .pauseFor(1000)
    .deleteLetters(1)
    .type(' with TypeScript!')
    .start();
}, []);
```

### Conditional Logic

```tsx
useEffect(() => {
  const greeting = new Date().getHours() < 12 ? 'Good morning' : 'Good evening';

  typewriter.type(greeting).pauseFor(500).type(', welcome to our app!').start();
}, []);
```

### Loop with Variations

```tsx
const messages = ['Hello!', 'Bonjour!', 'Hola!', 'こんにちは!'];

useEffect(() => {
  let index = 0;

  const typeMessage = () => {
    typewriter
      .deleteAll()
      .type(messages[index])
      .pauseFor(2000)
      .on('end', () => {
        index = (index + 1) % messages.length;
        setTimeout(typeMessage, 500);
      })
      .start();
  };

  typeMessage();
}, []);
```

## TypeScript Support

The hook is fully typed with comprehensive TypeScript definitions:

```tsx
import type {
  UseTypewriterOptions,
  UseTypewriterReturn,
  TypewriterState,
  PerformanceMetrics,
} from 'use-typewriter-animation';

const options: UseTypewriterOptions = {
  typeSpeed: 50,
  cursorStyle: 'bar',
  respectReducedMotion: true,
};

const { typewriter, elements, cursor, state, metrics }: UseTypewriterReturn =
  useTypewriter(options);
```

## Best Practices

### 1. Always Include Keyframes

```tsx
return (
  <>
    <style>{keyframes}</style> {/* Required for animations */}
    <div>
      {elements}
      {cursor}
    </div>
  </>
);
```

### 2. Use Accessibility Props

```tsx
<div
  {...accessibilityProps}
  tabIndex={0} // For keyboard controls
>
  {elements}
  {cursor}
  {screenReaderAnnouncement}
</div>
```

### 3. Handle Cleanup

```tsx
useEffect(() => {
  typewriter.type('Hello').start();

  return () => {
    typewriter.stop(); // Cleanup on unmount
  };
}, []);
```

### 4. Optimize for Performance

```tsx
const { typewriter } = useTypewriter({
  enableVirtualization: true, // For long text
  maxVisibleSegments: 50,
  respectReducedMotion: true,
});
```

## See Also

- [React 19 Features](./react-19.md) - Enhanced concurrent features
- [Server Components](./server-components.md) - SSR and RSC support
- [Accessibility Guide](../guides/accessibility.md) - WCAG compliance
- [Performance Guide](../guides/performance.md) - Optimization tips
