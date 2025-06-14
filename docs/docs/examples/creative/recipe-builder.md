# Recipe Builder Demo

This example creates an interactive recipe builder that types out cooking instructions step-by-step with ingredients, timing, and cooking tips.

## Live Demo

```tsx live
function RecipeBuilderDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cookingTime, setCookingTime] = useState('0:00');
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'bar',
    cursorColor: '#f97316',
  });

  useEffect(() => {
    typewriter
      .colorize('#f97316')
      .type('👨‍🍳 RECIPE BUILDER 👩‍🍳')
      .colorize('#374151')
      .newLine()
      .type('▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#dc2626')
      .type('📋 Recipe: ')
      .colorize('#374151')
      .type('Perfect Chocolate Chip Cookies')
      .newLine()
      .colorize('#059669')
      .type('⏱️  Total Time: ')
      .colorize('#374151')
      .type('25 minutes')
      .newLine()
      .colorize('#3b82f6')
      .type('👥 Serves: ')
      .colorize('#374151')
      .type('24 cookies')
      .newLine()
      .colorize('#8b5cf6')
      .type('📊 Difficulty: ')
      .colorize('#fbbf24')
      .type('★★☆☆☆ Easy')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f97316')
      .type('🛒 Ingredients:')
      .colorize('#374151')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('2¼ cups all-purpose flour')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('1 cup butter, softened')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('¾ cup brown sugar')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('½ cup white sugar')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('2 large eggs')
      .newLine()
      .colorize('#059669')
      .type('✓ ')
      .colorize('#374151')
      .type('2 cups chocolate chips')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#f97316')
      .type('👨‍🍳 Instructions:')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('Step 1: ')
      .colorize('#374151')
      .type('Preheat oven to 375°F (190°C)')
      .newLine()
      .colorize('#6b7280')
      .type('💡 Tip: Use an oven thermometer for accuracy')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('Step 2: ')
      .colorize('#374151')
      .type('Mix dry ingredients in a bowl')
      .newLine()
      .colorize('#6b7280')
      .type('⚠️  Don\'t overmix - keeps cookies tender')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('Step 3: ')
      .colorize('#374151')
      .type('Cream butter and sugars (3-4 minutes)')
      .newLine()
      .colorize('#6b7280')
      .type('🥄 Should be light and fluffy')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('Step 4: ')
      .colorize('#374151')
      .type('Add eggs and vanilla, mix well')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#3b82f6')
      .type('Step 5: ')
      .colorize('#374151')
      .type('Gradually add flour mixture')
      .newLine()
      .newLine()
      .pauseFor(600)
      .colorize('#3b82f6')
      .type('Step 6: ')
      .colorize('#374151')
      .type('Fold in chocolate chips')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#dc2626')
      .type('🔥 Step 7: ')
      .colorize('#374151')
      .type('Bake for 9-11 minutes')
      .newLine()
      .colorize('#6b7280')
      .type('⏰ Golden edges = perfect doneness!')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#059669')
      .type('✨ Final Result: ')
      .colorize('#fbbf24')
      .type('24 delicious cookies! 🍪')
      .colorize('#374151')
      .start();
  }, []);

  // Simulate cooking timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev % 7) + 1);
      const minutes = Math.floor(Math.random() * 25);
      const seconds = Math.floor(Math.random() * 60);
      setCookingTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes steam {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
            50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
          }
          
          @keyframes bake {
            0%, 100% { background-color: #fed7aa; }
            50% { background-color: #fbbf24; }
          }
          
          @keyframes ingredient-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>
      <div
        style={{
          fontFamily: '"Comic Neue", "Comic Sans MS", cursive',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          padding: '2.5rem',
          backgroundColor: '#fef7ed',
          border: '3px solid #f97316',
          borderRadius: '20px',
          minHeight: '400px',
          boxShadow: '0 15px 35px rgba(249, 115, 22, 0.2)',
          position: 'relative',
          background: 'linear-gradient(135deg, #fef7ed 0%, #fff7ed 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span
            style={{
              fontSize: '1.2rem',
              animation: 'steam 2s ease-in-out infinite',
            }}
          >
            🔥
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>Timer</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f97316' }}>
              {cookingTime}
            </span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: '20px',
            backgroundColor: '#f97316',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            animation: currentStep <= 7 ? 'bake 3s ease-in-out infinite' : 'none',
          }}
        >
          Step {currentStep}/7
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            display: 'flex',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '1.5rem', animation: 'ingredient-pulse 2s infinite' }}>🥄</span>
          <span style={{ fontSize: '1.5rem', animation: 'ingredient-pulse 2s infinite 0.5s' }}>🥚</span>
          <span style={{ fontSize: '1.5rem', animation: 'ingredient-pulse 2s infinite 1s' }}>🍫</span>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            fontSize: '0.75rem',
            color: '#92400e',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          🍪 Recipe Progress: Active
        </div>

        <div style={{ color: '#374151', whiteSpace: 'pre-wrap' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Complete Recipe Format**: Ingredients, instructions, and tips
- **Step-by-step Instructions**: Clear, numbered cooking steps
- **Cooking Tips**: Professional advice for best results
- **Timing Information**: Total time, difficulty, and serving size
- **Visual Indicators**: Icons for different types of information
- **Real-time Timer**: Simulated cooking timer display
- **Progress Tracking**: Current step indication
- **Ingredient Checklist**: Visual checkmarks for ingredients

## Recipe Builder Elements

1. **Recipe Metadata**: Title, time, difficulty, servings
2. **Ingredient List**: Complete ingredient checklist
3. **Step Instructions**: Detailed cooking procedures
4. **Cooking Tips**: Professional advice and warnings
5. **Visual Cues**: Icons and colors for different information types
6. **Progress Tracking**: Step counter and timer

## Interactive Features

- **Live Timer**: Real-time cooking timer simulation
- **Step Progress**: Visual indication of current cooking step
- **Animated Ingredients**: Pulsing ingredient icons
- **Steam Effects**: Animated cooking indicators
- **Status Updates**: Active recipe progress display

## Visual Design

- **Warm Colors**: Orange and brown cooking-themed palette
- **Friendly Typography**: Comic-style font for approachable feel
- **Cooking Icons**: Emojis enhance visual understanding
- **Gradient Background**: Warm, kitchen-like atmosphere

## Use Cases

- **Cooking Websites**: Display recipes with engaging animations
- **Food Blogs**: Make recipe content more interactive
- **Cooking Apps**: Show step-by-step cooking guidance
- **Educational Platforms**: Teach cooking techniques
- **Restaurant Websites**: Showcase signature dish preparations