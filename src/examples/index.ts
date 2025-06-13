// Basic Examples
export { SimpleTypewriter } from './basic/SimpleTypewriter';
export { ColorfulText } from './basic/ColorfulText';
export { LoopingAnimation } from './basic/LoopingAnimation';
export { ComprehensiveBasic } from './basic/ComprehensiveBasic';

// Interactive Examples
export { KeyboardControls } from './interactive/KeyboardControls';

// Creative Examples
export { TerminalSimulation } from './creative/TerminalSimulation';
export { CodeEditor } from './creative/CodeEditor';
export { ChatSimulation } from './creative/ChatSimulation';
export { StorytellingDemo } from './creative/StorytellingDemo';
export { LoadingStates } from './creative/LoadingStates';

// Advanced Examples
export { HeroSection } from './advanced/HeroSection';

// Accessibility Examples
export { AccessibilityShowcase } from './accessibility/AccessibilityShowcase';

// Performance Examples
export { VirtualizationDemo } from './performance/VirtualizationDemo';

// Example categories for documentation
export const exampleCategories = {
  basic: [
    {
      name: 'SimpleTypewriter',
      title: 'Simple Typewriter',
      description: 'Basic typewriter animation with clean styling',
      component: 'SimpleTypewriter',
      features: ['Basic typing', 'Clean UI', 'Simple setup'],
    },
    {
      name: 'ColorfulText',
      title: 'Colorful Text',
      description: 'Demonstrate colorized text with different colors and styles',
      component: 'ColorfulText',
      features: ['Text colorization', 'Dynamic colors', 'Modern styling'],
    },
    {
      name: 'LoopingAnimation',
      title: 'Looping Animation',
      description: 'Continuous loop with delete/type cycles',
      component: 'LoopingAnimation',
      features: ['Loop mode', 'Delete operations', 'Gradient background'],
    },
    {
      name: 'ComprehensiveBasic',
      title: 'Comprehensive Basic',
      description: 'All-in-one example demonstrating multiple features together',
      component: 'ComprehensiveBasic',
      features: [
        'Text colorization',
        'Delete operations',
        'Accessibility',
        'Keyboard controls',
        'Performance metrics',
      ],
    },
  ],
  interactive: [
    {
      name: 'KeyboardControls',
      title: 'Keyboard Controls',
      description: 'Interactive typewriter with keyboard shortcuts and status indicators',
      component: 'KeyboardControls',
      features: ['Keyboard shortcuts', 'Status tracking', 'Interactive UI'],
    },
  ],
  creative: [
    {
      name: 'TerminalSimulation',
      title: 'Terminal Simulation',
      description: 'Realistic terminal/command line simulation with colored output',
      component: 'TerminalSimulation',
      features: ['Terminal UI', 'Command simulation', 'Real-time clock'],
    },
    {
      name: 'CodeEditor',
      title: 'Code Editor',
      description: 'Simulate code typing with syntax highlighting',
      component: 'CodeEditor',
      features: ['Syntax highlighting', 'Line numbers', 'Editor theme'],
    },
    {
      name: 'ChatSimulation',
      title: 'Chat Simulation',
      description: 'Real-time chat interface with multiple participants',
      component: 'ChatSimulation',
      features: ['Chat UI', 'Multiple users', 'Typing indicators'],
    },
    {
      name: 'StorytellingDemo',
      title: 'Storytelling Demo',
      description: 'Multi-scene narrative with dynamic backgrounds and emotional flow',
      component: 'StorytellingDemo',
      features: ['Scene transitions', 'Dynamic backgrounds', 'Narrative flow'],
    },
    {
      name: 'LoadingStates',
      title: 'Loading States',
      description: 'Realistic loading sequences with progress indicators',
      component: 'LoadingStates',
      features: ['Loading sequences', 'Progress bars', 'State management'],
    },
  ],
  advanced: [
    {
      name: 'HeroSection',
      title: 'Hero Section',
      description: 'Modern landing page hero with feature cards and animations',
      component: 'HeroSection',
      features: ['Landing page design', 'Feature showcases', 'Modern UI'],
    },
  ],
  accessibility: [
    {
      name: 'AccessibilityShowcase',
      title: 'Accessibility Showcase',
      description: 'Comprehensive demonstration of WCAG 2.1 AA compliance features',
      component: 'AccessibilityShowcase',
      features: ['ARIA support', 'Keyboard navigation', 'Screen reader support'],
    },
  ],
  performance: [
    {
      name: 'VirtualizationDemo',
      title: 'Virtualization Demo',
      description: 'Performance optimization with long text sequences and metrics',
      component: 'VirtualizationDemo',
      features: ['Virtualization', 'Performance metrics', 'Long text handling'],
    },
  ],
};

// Get all examples as flat array
export const allExamples = Object.values(exampleCategories).flat();

// Get examples by category
export const getExamplesByCategory = (category: keyof typeof exampleCategories) => {
  return exampleCategories[category] || [];
};

// Get example by name
export const getExampleByName = (name: string) => {
  return allExamples.find((example) => example.name === name);
};
