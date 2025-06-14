---
sidebar_position: 7
title: Recipe Builder
description: Interactive recipe builder with ingredient tracking and cooking instructions
tags: [cooking, recipe, builder, interactive, food]
---

import ExamplePage from '@site/src/components/ExamplePage';
import { RecipeBuilderExample } from '@site/src/components/AdvancedExamples';

<ExamplePage
component={RecipeBuilderExample}
difficulty="Intermediate"
description="Build an interactive recipe creator with ingredient tracking, step-by-step cooking instructions, and nutritional information display. Perfect for cooking apps, food blogs, and culinary education platforms."
tags={["Recipe creation", "Cooking instructions", "Ingredient tracking", "Food apps", "Culinary education"]}
code={`import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const RecipeBuilderExample: React.FC = () => {
const [currentStep, setCurrentStep] = useState(1);
const [currentIngredient, setCurrentIngredient] = useState(0);

const { typewriter, elements, cursor, keyframes } = useTypewriter({
typeSpeed: 40,
cursorStyle: 'bar',
cursorColor: '#f59e0b',
});

const ingredients = [
{ name: 'Fresh Basil', amount: '2 cups', cost: '$3.50' },
{ name: 'Pine Nuts', amount: '1/2 cup', cost: '$8.99' },
{ name: 'Parmesan', amount: '1 cup grated', cost: '$12.00' },
{ name: 'Garlic', amount: '4 cloves', cost: '$1.25' },
];

useEffect(() => {
typewriter
.colorize('#10b981')
.type('👨‍🍳 RECIPE BUILDER PRO 👩‍🍳')
.colorize('#374151')
.newLine()
.type('══════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#3b82f6')
.type('📋 Creating: ')
.colorize('#10b981')
.type('Classic Basil Pesto')
.colorize('#374151')
.newLine()
.colorize('#6b7280')
.type('Prep Time: 15 min | Cook Time: 0 min | Serves: 4')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#f59e0b')
.type('🛒 INGREDIENTS CHECKLIST:')
.colorize('#374151')
.newLine()
.type('────────────────────────────────────────')
.newLine()
.pauseFor(600)
.colorize('#10b981')
.type('✓ ')
.colorize('#374151')
.type('Fresh Basil leaves - 2 cups')
.colorize('#6b7280')
.type(' ($3.50)')
.colorize('#374151')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type('✓ ')
.colorize('#374151')
.type('Pine nuts - 1/2 cup')
.colorize('#6b7280')
.type(' ($8.99)')
.colorize('#374151')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type('✓ ')
.colorize('#374151')
.type('Parmesan cheese, grated - 1 cup')
.colorize('#6b7280')
.type(' ($12.00)')
.colorize('#374151')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type('✓ ')
.colorize('#374151')
.type('Garlic cloves - 4 large')
.colorize('#6b7280')
.type(' ($1.25)')
.colorize('#374151')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type('✓ ')
.colorize('#374151')
.type('Extra virgin olive oil - 1/2 cup')
.colorize('#6b7280')
.type(' ($4.99)')
.colorize('#374151')
.newLine()
.pauseFor(400)
.colorize('#10b981')
.type('✓ ')
.colorize('#374151')
.type('Salt and pepper to taste')
.colorize('#6b7280')
.type(' ($0.50)')
.colorize('#374151')
.newLine()
.newLine()
.colorize('#dc2626')
.type('💰 Total Cost: $31.23')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1200)
.colorize('#8b5cf6')
.type('👨‍🍳 COOKING INSTRUCTIONS:')
.colorize('#374151')
.newLine()
.type('══════════════════════════════════════════')
.newLine()
.newLine()
.pauseFor(800)
.colorize('#f59e0b')
.type('[Step 1] ')
.colorize('#374151')
.type('Prepare the basil')
.newLine()
.colorize('#6b7280')
.type('• Wash and dry fresh basil leaves thoroughly')
.newLine()
.type('• Remove any thick stems')
.newLine()
.type('• Tear larger leaves into smaller pieces')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#f59e0b')
.type('[Step 2] ')
.colorize('#374151')
.type('Toast the pine nuts')
.newLine()
.colorize('#6b7280')
.type('• Heat a dry pan over medium heat')
.newLine()
.type('• Add pine nuts and toast for 2-3 minutes')
.newLine()
.type('• Stir frequently until golden brown')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#f59e0b')
.type('[Step 3] ')
.colorize('#374151')
.type('Process in food processor')
.newLine()
.colorize('#6b7280')
.type('• Add garlic and pulse until minced')
.newLine()
.type('• Add pine nuts and basil, pulse until chopped')
.newLine()
.type('• Slowly drizzle in olive oil while processing')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1000)
.colorize('#f59e0b')
.type('[Step 4] ')
.colorize('#374151')
.type('Final touches')
.newLine()
.colorize('#6b7280')
.type('• Stir in grated Parmesan cheese')
.newLine()
.type('• Season with salt and pepper')
.newLine()
.type('• Taste and adjust seasoning')
.colorize('#374151')
.newLine()
.newLine()
.pauseFor(1500)
.colorize('#10b981')
.type('🎉 RECIPE COMPLETE! 🎉')
.colorize('#374151')
.newLine()
.newLine()
.colorize('#3b82f6')
.type('💡 Chef\\'s Tips:')
.colorize('#374151')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Store in refrigerator for up to 1 week')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Freeze in ice cube trays for portion control')
.newLine()
.colorize('#10b981')
.type('• ')
.colorize('#374151')
.type('Add a splash of lemon juice to prevent browning')
.start();
}, []);

// Simulate cooking progress
useEffect(() => {
const interval = setInterval(() => {
setCurrentStep(prev => (prev % 4) + 1);
setCurrentIngredient(prev => (prev + 1) % ingredients.length);
}, 3000);

    return () => clearInterval(interval);

}, []);

return (
<>

<style>
{keyframes}
{\`
@keyframes steam {
0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
}

          @keyframes bubble {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          .cooking-step {
            animation: bubble 2s ease-in-out infinite;
          }

          .ingredient-highlight {
            animation: steam 3s ease-in-out infinite;
          }
        \`}
      </style>

      <div
        style={{
          backgroundColor: '#fef3c7',
          borderRadius: '16px',
          padding: '2.5rem',
          fontFamily: 'Georgia, serif',
          fontSize: '0.95rem',
          color: '#78350f',
          lineHeight: '1.6',
          minHeight: '500px',
          border: '2px solid #f59e0b',
          position: 'relative',
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        }}
      >
        {/* Kitchen decoration */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontSize: '2rem',
            animation: 'steam 4s ease-in-out infinite',
          }}
        >
          🍽️
        </div>

        {/* Current step indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}
        >
          <span className="cooking-step">Step {currentStep}</span>
        </div>

        {/* Ingredient spotlight */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(251, 191, 36, 0.2)',
            padding: '8px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
          }}
        >
          <span className="ingredient-highlight">🥄</span>
          <span>Now using: {ingredients[currentIngredient]?.name}</span>
        </div>

        {/* Main recipe content */}
        <div style={{ whiteSpace: 'pre-line' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>

);
};

export default RecipeBuilderExample;`}
instructions={[
"Structure recipes with clear ingredient lists and step-by-step instructions",
"Add cost calculation and nutritional information for meal planning",
"Include cooking tips and chef recommendations for better results",
"Implement progress tracking through cooking steps",
"Design warm, kitchen-inspired visual theme with food emojis"
]}
/>

## Use Cases

- **Cooking Apps**: Recipe creation and sharing platforms
- **Food Blogs**: Interactive recipe presentations
- **Culinary Education**: Step-by-step cooking instruction tools
- **Meal Planning**: Cost-effective recipe development
- **Restaurant Menus**: Digital recipe display systems
