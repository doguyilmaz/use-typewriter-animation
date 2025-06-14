# Example Format Rules

## Standard Format for ALL Examples

Based on the **Storytelling Demo**, every example MUST follow this exact structure:

### 1. Frontmatter (Required)
```yaml
---
sidebar_position: [number]
title: [Example Name]
description: [Brief description for SEO/navigation]
tags: [array, of, relevant, tags]
---
```

### 2. Import Statements (Required)
```jsx
import ExamplePage from '@site/src/components/ExamplePage';
import { ExampleComponent } from '@site/src/components/[CategoryExamples]';
```

### 3. ExamplePage Component (Required)
```jsx
<ExamplePage
component={ExampleComponent}
difficulty="[Beginner|Intermediate|Advanced]"
description="[Detailed description explaining what the example does and when to use it]"
tags={["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]}
code={`[Complete React component code]`}
instructions={[
"Implementation tip 1",
"Implementation tip 2", 
"Implementation tip 3",
"Implementation tip 4",
"Implementation tip 5"
]}
/>
```

## Required Elements

### ✅ **Component Structure**
- Must use `ExamplePage` component wrapper
- Must import from appropriate category (BasicExamples, AdvancedExamples, etc.)
- Must include complete functional React component in `code` prop

### ✅ **Difficulty Chips** 
- **Beginner**: Simple, single-concept examples
- **Intermediate**: Multi-feature examples with moderate complexity
- **Advanced**: Complex examples with multiple concepts and interactions

### ✅ **Tags Array (5 tags exactly)**
- Descriptive tags that help users find the example
- Include technology tags (React, TypeScript, etc.)
- Include feature tags (animations, accessibility, etc.)
- Include use-case tags (education, portfolio, etc.)

### ✅ **Description**
- Clear explanation of what the example demonstrates
- When and why to use this pattern
- Target audience and use cases

### ✅ **Implementation Instructions (5 exactly)**
- Practical tips for implementing the pattern
- Best practices and gotchas
- Performance considerations
- Accessibility guidelines
- Extension ideas

### ✅ **Use Cases Section**
- Add use cases as additional content after instructions
- Real-world applications
- Industry-specific examples
- Practical scenarios

## Example Categories

### Component Import Paths:
- **Basic**: `@site/src/components/BasicExamples`
- **Creative**: `@site/src/components/AdvancedExamples` 
- **Interactive**: `@site/src/components/AdvancedExamples`
- **Advanced**: `@site/src/components/AdvancedExamples`
- **Performance**: `@site/src/components/AdvancedExamples`

## Styling Guidelines

### ✅ **Visual Consistency**
- Each category should have distinct but cohesive styling
- Use consistent color schemes within categories
- Maintain responsive design principles
- Include proper accessibility features

### ✅ **Interactive Elements**
- Include state management for dynamic examples
- Add visual feedback and animations
- Implement proper loading states
- Ensure keyboard navigation support

## Content Guidelines

### ✅ **Code Quality**
- Use TypeScript for type safety
- Follow React best practices
- Include proper error handling
- Implement accessibility features
- Add performance optimizations

### ✅ **Documentation**
- Clear, concise explanations
- Practical implementation guidance
- Real-world use case examples
- Progressive complexity

## DO NOT USE Live Demo Format

❌ **WRONG Format** (current new examples):
```markdown
# Example Title
Description here...

## Live Demo
\`\`\`tsx live
// code here
\`\`\`

## Key Features
...
```

✅ **CORRECT Format** (Storytelling Demo style):
```markdown
---
sidebar_position: 1
title: Example Title
description: Brief description
tags: [tag1, tag2, tag3, tag4, tag5]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { ExampleComponent } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={ExampleComponent}
difficulty="Advanced"
description="Detailed description..."
tags={["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]}
code={`complete component code`}
instructions={[
"Tip 1",
"Tip 2", 
"Tip 3",
"Tip 4",
"Tip 5"
]}
/>
```

## CRITICAL RULE

**ALWAYS** check this file FIRST before creating or modifying any example. Every example must follow this exact format for consistency and professionalism.