# Type Definitions

Complete TypeScript type definitions for `use-typewriter-animation`. This library is built with TypeScript-first design and provides comprehensive type safety.

## Core Types

### UseTypewriterOptions

Main configuration interface for the hook:

```tsx
interface UseTypewriterOptions {
  // Visual Settings
  typeSpeed?: number;
  deleteSpeed?: number;
  loop?: boolean;
  cursorStyle?: CursorStyle;
  cursorColor?: string;
  cursorBlinkSpeed?: number;
  enableCursor?: boolean;

  // Accessibility Settings
  ariaLive?: AriaLive;
  ariaLabel?: string;
  role?: AriaRole;
  respectReducedMotion?: boolean;
  reducedMotionFallback?: ReducedMotionFallback;
  enableKeyboardControls?: boolean;
  autoKeyboardHandling?: boolean;
  announceCompletion?: boolean;
  screenReaderText?: string;
  keyboardShortcuts?: KeyboardShortcuts;

  // Performance Settings
  enableVirtualization?: boolean;
  maxVisibleSegments?: number;
}
```

### UseTypewriterReturn

Return type of the `useTypewriter` hook:

```tsx
interface UseTypewriterReturn {
  typewriter: TypewriterBaseType;
  state: TypewriterState;
  elements: JSX.Element[];
  cursor: JSX.Element | null;
  styles: typeof typewriterStyles;
  keyframes: string;
  metrics: PerformanceMetrics;
  accessibilityProps: AriaAttributes;
  screenReaderAnnouncement: JSX.Element;
}
```

## Typewriter Control Types

### TypewriterBaseType

Main control interface for typewriter operations:

```tsx
interface TypewriterBaseType {
  // Text Operations
  type(text: string, options?: TypeOptions): TypewriterBaseType;
  deleteLetters(count: number): TypewriterBaseType;
  deleteWords(count: number): TypewriterBaseType;
  deleteAll(): TypewriterBaseType;

  // Styling Operations
  colorize(color: string): TypewriterBaseType;
  highlight(start: number, length: number, style: HighlightStyle): TypewriterBaseType;

  // Flow Control
  pauseFor(duration: number): TypewriterBaseType;
  newLine(): TypewriterBaseType;

  // Animation Control
  start(): TypewriterBaseType;
  stop(): TypewriterBaseType;
  pause(): TypewriterBaseType;
  resume(): TypewriterBaseType;
  skip(): TypewriterBaseType;
  reset(): TypewriterBaseType;
  isPaused(): boolean;

  // Event Handling
  on(event: TypewriterEvent, callback: EventCallback): TypewriterBaseType;
}
```

### TypeOptions

Options for the `type` method:

```tsx
interface TypeOptions {
  speed?: number;
  screenReaderText?: string;
  announceCompletion?: boolean;
}
```

### HighlightStyle

Styling options for text highlighting:

```tsx
interface HighlightStyle {
  color?: string;
  background?: string;
  fontWeight?: string;
  textDecoration?: string;
  fontSize?: string;
  fontStyle?: string;
  textShadow?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
}
```

## State and Data Types

### TypewriterState

Current state of the typewriter:

```tsx
interface TypewriterState {
  isRunning: boolean;
  isPaused: boolean;
  currentText: string;
  segments: TextSegment[];
  currentSegmentIndex: number;
  reducedMotion: boolean;
  totalCharacters: number;
  completedCharacters: number;
  progress: number; // 0-1
}
```

### TextSegment

Individual text segment with styling:

```tsx
interface TextSegment {
  id: string;
  text: string;
  style?: SegmentStyle;
  isVisible: boolean;
  timestamp: number;
  type: SegmentType;
}
```

### SegmentStyle

Styling for individual text segments:

```tsx
interface SegmentStyle {
  color?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textShadow?: string;
  opacity?: number;
  transform?: string;
}
```

### PerformanceMetrics

Performance monitoring data:

```tsx
interface PerformanceMetrics {
  totalSegments: number;
  visibleSegments: number;
  isVirtualized: boolean;
  renderTime: number;
  memoryUsage: number;
  animationFrameRate: number;
  lastUpdateTime: number;
  averageTypeSpeed: number;
  totalAnimationTime: number;
}
```

## Enum Types

### CursorStyle

Available cursor styles:

```tsx
type CursorStyle = 'bar' | 'block' | 'underline';
```

### AriaLive

ARIA live region types:

```tsx
type AriaLive = 'polite' | 'assertive' | 'off';
```

### AriaRole

ARIA role types for typewriter container:

```tsx
type AriaRole = 'status' | 'log' | 'alert';
```

### ReducedMotionFallback

Behavior when reduced motion is preferred:

```tsx
type ReducedMotionFallback = 'instant' | 'slow';
```

### SegmentType

Types of text segments:

```tsx
type SegmentType = 'text' | 'newline' | 'pause' | 'delete' | 'highlight';
```

### TypewriterEvent

Available event types:

```tsx
type TypewriterEvent =
  | 'start'
  | 'end'
  | 'loop'
  | 'pause'
  | 'resume'
  | 'type'
  | 'delete'
  | 'segment-complete'
  | 'error';
```

## Accessibility Types

### KeyboardShortcuts

Keyboard shortcut configuration:

```tsx
interface KeyboardShortcuts {
  pause?: string[];
  resume?: string[];
  skip?: string[];
  reset?: string[];
  speedUp?: string[];
  slowDown?: string[];
}
```

### AriaAttributes

ARIA attributes for accessibility:

```tsx
interface AriaAttributes {
  'aria-live'?: AriaLive;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-busy'?: boolean;
  role?: AriaRole;
  tabIndex?: number;
}
```

## Event Types

### EventCallback

Callback function type for events:

```tsx
type EventCallback = (data?: EventData) => void;
```

### EventData

Data passed to event callbacks:

```tsx
interface EventData {
  type: TypewriterEvent;
  timestamp: number;
  currentText: string;
  progress: number;
  segment?: TextSegment;
  error?: Error;
}
```

## Style Types

### TypewriterStyles

CSS-in-JS styles object:

```tsx
interface TypewriterStyles {
  container: CSSProperties;
  text: CSSProperties;
  cursor: CSSProperties;
  segment: CSSProperties;
  highlight: CSSProperties;
}
```

## Utility Types

### DeepPartial

Make all properties optional recursively:

```tsx
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```

### RequiredKeys

Extract required keys from an interface:

```tsx
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
```

### OptionalKeys

Extract optional keys from an interface:

```tsx
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];
```

## Generic Types

### TypewriterConfig

Generic configuration type:

```tsx
type TypewriterConfig<T extends Record<string, any> = {}> = UseTypewriterOptions & T;
```

### TypewriterInstance

Generic typewriter instance:

```tsx
type TypewriterInstance<T extends Record<string, any> = {}> = TypewriterBaseType & T;
```

## React Types

### TypewriterComponent

React component type for typewriter:

```tsx
type TypewriterComponent = React.FC<{
  options?: UseTypewriterOptions;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}>;
```

### TypewriterRef

Ref type for imperative control:

```tsx
interface TypewriterRef {
  typewriter: TypewriterBaseType;
  state: TypewriterState;
  metrics: PerformanceMetrics;
}
```

## Advanced Types

### ConditionalTypes

Conditional types for advanced usage:

```tsx
// Type based on virtualization setting
type VirtualizedReturn<T extends boolean> = T extends true
  ? UseTypewriterReturn & { virtualizer: VirtualizerInstance }
  : UseTypewriterReturn;

// Type based on keyboard controls
type KeyboardReturn<T extends boolean> = T extends true
  ? UseTypewriterReturn & { keyboardHandler: KeyboardHandler }
  : UseTypewriterReturn;
```

### Template Literal Types

For type-safe event names:

```tsx
type EventName<T extends string> = `typewriter:${T}`;
type CustomEvent<T extends string> = EventName<T>;

// Usage
type StartEvent = CustomEvent<'start'>; // "typewriter:start"
type EndEvent = CustomEvent<'end'>; // "typewriter:end"
```

## Type Guards

### Runtime type checking utilities:

```tsx
// Check if value is TypewriterOptions
function isTypewriterOptions(value: any): value is UseTypewriterOptions {
  return typeof value === 'object' && value !== null;
}

// Check if value is TypewriterState
function isTypewriterState(value: any): value is TypewriterState {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.isRunning === 'boolean' &&
    typeof value.isPaused === 'boolean'
  );
}

// Check if value is TextSegment
function isTextSegment(value: any): value is TextSegment {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.id === 'string' &&
    typeof value.text === 'string'
  );
}
```

## Usage Examples

### Basic Usage with Types

```tsx
import { useTypewriter, UseTypewriterOptions, TypewriterState } from 'use-typewriter-animation';

function TypedTypewriter() {
  const options: UseTypewriterOptions = {
    typeSpeed: 50,
    cursorStyle: 'bar',
    respectReducedMotion: true,
  };

  const { typewriter, elements, cursor, state }: UseTypewriterReturn = useTypewriter(options);

  // Type-safe state access
  const isAnimating: boolean = state.isRunning;
  const progress: number = state.progress;

  useEffect(() => {
    typewriter
      .type('Hello, TypeScript!', {
        speed: 80,
        announceCompletion: true,
      })
      .start();
  }, []);

  return (
    <div>
      {elements}
      {cursor}
    </div>
  );
}
```

### Advanced Usage with Generics

```tsx
interface CustomTypewriterOptions extends UseTypewriterOptions {
  theme: 'dark' | 'light';
  customAnimation: boolean;
}

function CustomTypewriter() {
  const config: TypewriterConfig<CustomTypewriterOptions> = {
    typeSpeed: 60,
    theme: 'dark',
    customAnimation: true,
  };

  // Extract standard options
  const { theme, customAnimation, ...typewriterOptions } = config;

  const { typewriter, elements, cursor } = useTypewriter(typewriterOptions);

  return (
    <div className={`typewriter-${theme}`}>
      {elements}
      {cursor}
    </div>
  );
}
```

### Event Handling with Types

```tsx
function EventTypewriter() {
  const { typewriter, elements, cursor } = useTypewriter();

  useEffect(() => {
    const handleStart: EventCallback = (data) => {
      console.log('Started:', data?.timestamp);
    };

    const handleEnd: EventCallback = (data) => {
      console.log('Completed:', data?.currentText);
    };

    typewriter.on('start', handleStart).on('end', handleEnd).type('Type-safe events!').start();
  }, []);

  return (
    <div>
      {elements}
      {cursor}
    </div>
  );
}
```

## Type Exports

All types are exported from the main package:

```tsx
export type {
  // Core Types
  UseTypewriterOptions,
  UseTypewriterReturn,
  TypewriterBaseType,
  TypewriterState,

  // Configuration Types
  TypeOptions,
  HighlightStyle,
  KeyboardShortcuts,

  // Data Types
  TextSegment,
  SegmentStyle,
  PerformanceMetrics,

  // Enum Types
  CursorStyle,
  AriaLive,
  AriaRole,
  ReducedMotionFallback,
  SegmentType,
  TypewriterEvent,

  // Event Types
  EventCallback,
  EventData,

  // Accessibility Types
  AriaAttributes,

  // Style Types
  TypewriterStyles,

  // Utility Types
  DeepPartial,
  RequiredKeys,
  OptionalKeys,

  // Generic Types
  TypewriterConfig,
  TypewriterInstance,

  // React Types
  TypewriterComponent,
  TypewriterRef,
};
```

## Type-Safe Development

### IDE Support

The library provides excellent IDE support with:

- **IntelliSense**: Auto-completion for all options and methods
- **Type Checking**: Compile-time error detection
- **Documentation**: Inline JSDoc comments
- **Refactoring**: Safe renaming and restructuring

### Best Practices

1. **Always use TypeScript**: Take advantage of full type safety
2. **Import specific types**: Only import the types you need
3. **Use type guards**: Validate runtime data with type guards
4. **Leverage generics**: Create reusable, type-safe components
5. **Document custom types**: Add JSDoc comments to your interfaces

The comprehensive type system ensures you can build robust, maintainable typewriter animations with full confidence in type safety! 🎯
