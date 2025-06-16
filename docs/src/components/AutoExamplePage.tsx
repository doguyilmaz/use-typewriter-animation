import React from 'react';
import { ExamplePage } from './ExamplePage';

// Import raw source files - Webpack will handle these as strings
// Basic examples
import SpeedVariationsSource from '!!raw-loader!../examples/basic/SpeedVariationsExample.tsx';
import ColorfulTextSource from '!!raw-loader!../examples/basic/ColorfulText.tsx';
import MultiLinePoetrySource from '!!raw-loader!../examples/basic/MultiLinePoetry.tsx';
import SimpleTypewriterSource from '!!raw-loader!../examples/basic/SimpleTypewriter.tsx';
import TextReplacementSource from '!!raw-loader!../examples/basic/TextReplacementExample.tsx';
import CharacterEffectsSource from '!!raw-loader!../examples/basic/CharacterEffectsExample.tsx';
import ComprehensiveBasicSource from '!!raw-loader!../examples/basic/ComprehensiveBasicExample.tsx';
import LoopingAnimationSource from '!!raw-loader!../examples/basic/LoopingAnimation.tsx';

// Creative examples
import PasswordGeneratorSource from '!!raw-loader!../examples/creative/PasswordGeneratorExample.tsx';
import GlitchEffectSource from '!!raw-loader!../examples/creative/GlitchEffectExample.tsx';
import MusicPlayerSource from '!!raw-loader!../examples/creative/MusicPlayerExample.tsx';
import CodeEditorSource from '!!raw-loader!../examples/creative/CodeEditorExample.tsx';
import LoadingStatesSource from '!!raw-loader!../examples/creative/LoadingStatesExample.tsx';
import TerminalExampleSource from '!!raw-loader!../examples/creative/TerminalExample.tsx';
import RecipeBuilderSource from '!!raw-loader!../examples/creative/RecipeBuilderExample.tsx';
import StorytellingDemoSource from '!!raw-loader!../examples/creative/StorytellingDemoExample.tsx';

// Interactive examples
import VoiceCommandSource from '!!raw-loader!../examples/interactive/VoiceCommandExample.tsx';
import KeyboardControlsSource from '!!raw-loader!../examples/interactive/KeyboardControlsExample.tsx';

// Advanced examples
import HeroSectionSource from '!!raw-loader!../examples/advanced/HeroSection.tsx';
import AccessibilityShowcaseSource from '!!raw-loader!../examples/advanced/AccessibilityShowcase.tsx';
import WeatherDashboardSource from '!!raw-loader!../examples/advanced/WeatherDashboard.tsx';
import ScientificCalculatorSource from '!!raw-loader!../examples/advanced/ScientificCalculator.tsx';
import DataVisualizationSource from '!!raw-loader!../examples/advanced/DataVisualization.tsx';
import CodeReviewSimulatorSource from '!!raw-loader!../examples/advanced/CodeReviewSimulator.tsx';
import AIChatInterfaceSource from '!!raw-loader!../examples/advanced/AIChatInterface.tsx';
import ChatSimulationSource from '!!raw-loader!../examples/advanced/ChatSimulation.tsx';
import EcommerceCheckoutSource from '!!raw-loader!../examples/advanced/EcommerceCheckout.tsx';

// Performance examples
import VirtualizationSource from '!!raw-loader!../examples/performance/VirtualizationDemoExample.tsx';

// Map of example names to their source code
const sourceMappings: Record<string, string> = {
  // Basic examples
  SpeedVariationsExample: SpeedVariationsSource,
  ColorfulText: ColorfulTextSource,
  MultiLinePoetry: MultiLinePoetrySource,
  SimpleTypewriter: SimpleTypewriterSource,
  TextReplacementExample: TextReplacementSource,
  CharacterEffectsExample: CharacterEffectsSource,
  ComprehensiveBasicExample: ComprehensiveBasicSource,
  LoopingAnimation: LoopingAnimationSource,

  // Creative examples
  PasswordGeneratorExample: PasswordGeneratorSource,
  GlitchEffectExample: GlitchEffectSource,
  MusicPlayerExample: MusicPlayerSource,
  CodeEditorExample: CodeEditorSource,
  LoadingStatesExample: LoadingStatesSource,
  TerminalExample: TerminalExampleSource,
  RecipeBuilderExample: RecipeBuilderSource,
  StorytellingDemoExample: StorytellingDemoSource,

  // Interactive examples
  VoiceCommandExample: VoiceCommandSource,
  KeyboardControlsExample: KeyboardControlsSource,

  // Advanced examples
  HeroSection: HeroSectionSource,
  AccessibilityShowcase: AccessibilityShowcaseSource,
  WeatherDashboard: WeatherDashboardSource,
  ScientificCalculator: ScientificCalculatorSource,
  DataVisualization: DataVisualizationSource,
  CodeReviewSimulator: CodeReviewSimulatorSource,
  AIChatInterface: AIChatInterfaceSource,
  ChatSimulation: ChatSimulationSource,
  EcommerceCheckout: EcommerceCheckoutSource,

  // Performance examples
  VirtualizationDemoExample: VirtualizationSource,
};

interface AutoExamplePageProps {
  component: React.ComponentType;
  exampleName: string;
  title?: string;
  description?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'Beginner' | 'Intermediate' | 'Advanced';
  tags?: string[];
  features?: string[];
  instructions?: string[];
  liveComponent?: React.ReactNode;
  showTitle?: boolean;
}

export const AutoExamplePage: React.FC<AutoExamplePageProps> = ({ exampleName, ...props }) => {
  const sourceCode = sourceMappings[exampleName];

  if (!sourceCode) {
    console.warn(`Source code not found for example: ${exampleName}`);
  }

  // Clean up the source code by removing export statements
  const cleanedSource =
    sourceCode
      ?.replace(/export \{ \w+Example \};\s*\n?/g, '') // Remove named exports
      ?.replace(/export \{ \w+ \};\s*\n?/g, '') // Remove other named exports
      ?.replace(/export default \w+Example;\s*\n?$/g, '') // Remove default export at end
      ?.replace(/export default \w+;\s*\n?$/g, '') // Remove other default exports
      ?.trim() || `// Source code not available for ${exampleName}`;

  return <ExamplePage {...props} code={cleanedSource} />;
};

export default AutoExamplePage;
