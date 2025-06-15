# Examples Structure

This directory contains well-organized, individual example components for the typewriter animation library.

## Directory Structure

```
examples/
├── basic/                      # Simple, beginner-friendly examples
│   ├── SimpleTypewriter.tsx    # Basic typing animation
│   ├── ColorfulText.tsx        # Text with color effects
│   ├── LoopingAnimation.tsx    # Continuous looping
│   ├── SpeedVariations.tsx     # Different typing speeds
│   ├── MultiLinePoetry.tsx     # Multi-line text with styling
│   └── index.ts                # Exports for basic examples
│
├── intermediate/               # More complex examples
│   ├── LoadingStates.tsx       # Loading sequences with progress
│   ├── KeyboardControls.tsx    # Interactive keyboard controls
│   ├── ChatSimulation.tsx      # Simulated chat interface
│   └── index.ts                # Exports for intermediate examples
│
├── advanced/                   # Complex, feature-rich examples
│   ├── HeroSection.tsx         # Hero section with gradients
│   ├── CodeEditor.tsx          # Syntax-highlighted code typing
│   ├── AccessibilityShowcase.tsx # Accessibility features demo
│   └── index.ts                # Exports for advanced examples
│
└── index.ts                    # Main exports file
```

## Usage

### Import individual components:
```typescript
import { SimpleTypewriter } from '../examples/basic/SimpleTypewriter';
import { LoadingStates } from '../examples/intermediate/LoadingStates';
import { HeroSection } from '../examples/advanced/HeroSection';
```

### Import by category:
```typescript
import { Basic, Intermediate, Advanced } from '../examples';
// Use as: <Basic.SimpleTypewriter />, <Intermediate.LoadingStates />, etc.
```

### Import all:
```typescript
import * from '../examples';
```

## Benefits of This Structure

1. **Easy to find**: Examples are categorized by difficulty level
2. **Easy to maintain**: Each example is in its own file
3. **Easy to debug**: Isolated components are simpler to troubleshoot
4. **Easy to extend**: Add new examples without touching existing ones
5. **Clean imports**: Well-organized export structure
6. **Reusable**: Components can be easily copied to other projects

## File Naming Convention

- Use PascalCase for component files (e.g., `SimpleTypewriter.tsx`)
- Use descriptive names that clearly indicate the example's purpose
- Group related examples in the same directory level