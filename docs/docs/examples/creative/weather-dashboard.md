# Weather Dashboard Demo

This example creates a dynamic weather dashboard with animated weather data, forecasts, and atmospheric visual effects.

## Live Demo

```tsx live
function WeatherDashboardDemo() {
  const [currentTemp, setCurrentTemp] = useState(22);
  const [weatherIcon, setWeatherIcon] = useState('☀️');
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'block',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .colorize('#3b82f6')
      .type('🌤️  WEATHER DASHBOARD  🌤️')
      .colorize('#374151')
      .newLine()
      .type('═══════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#059669')
      .type('📍 Location: ')
      .colorize('#6b7280')
      .type('San Francisco, CA')
      .colorize('#374151')
      .newLine()
      .colorize('#059669')
      .type('🕒 Updated: ')
      .colorize('#6b7280')
      .type('Just now')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('Current Conditions:')
      .colorize('#374151')
      .newLine()
      .colorize('#ef4444')
      .type('🌡️  Temperature: ')
      .colorize('#374151')
      .type('22°C / 72°F')
      .newLine()
      .colorize('#3b82f6')
      .type('🌤️  Condition: ')
      .colorize('#374151')
      .type('Partly Cloudy')
      .newLine()
      .colorize('#06b6d4')
      .type('💧 Humidity: ')
      .colorize('#374151')
      .type('65%')
      .newLine()
      .colorize('#8b5cf6')
      .type('💨 Wind: ')
      .colorize('#374151')
      .type('12 km/h NW')
      .newLine()
      .colorize('#10b981')
      .type('👁️  Visibility: ')
      .colorize('#374151')
      .type('10 km')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#f59e0b')
      .type('5-Day Forecast:')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('Mon ☀️  25°/18°  ')
      .colorize('#059669')
      .type('Sunny')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('Tue 🌦️  20°/14°  ')
      .colorize('#ef4444')
      .type('Rainy')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('Wed ⛅ 23°/16°  ')
      .colorize('#6b7280')
      .type('Cloudy')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('Thu ☀️  26°/19°  ')
      .colorize('#059669')
      .type('Sunny')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('Fri 🌩️  21°/15°  ')
      .colorize('#fbbf24')
      .type('Storms')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#f59e0b')
      .type('Weather Alerts:')
      .colorize('#374151')
      .newLine()
      .colorize('#10b981')
      .type('✅ ')
      .colorize('#374151')
      .type('No active weather warnings')
      .newLine()
      .colorize('#3b82f6')
      .type('ℹ️  ')
      .colorize('#374151')
      .type('UV Index: Moderate (5/10)')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#8b5cf6')
      .type('🌅 Sunrise: ')
      .colorize('#374151')
      .type('6:47 AM')
      .newLine()
      .colorize('#f59e0b')
      .type('🌇 Sunset: ')
      .colorize('#374151')
      .type('7:23 PM')
      .start();
  }, []);

  // Simulate weather updates
  useEffect(() => {
    const weatherConditions = [
      { temp: 22, icon: '☀️' },
      { temp: 18, icon: '🌦️' },
      { temp: 25, icon: '🌤️' },
      { temp: 15, icon: '🌧️' },
      { temp: 28, icon: '☀️' },
    ];

    const interval = setInterval(() => {
      const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      setCurrentTemp(condition.temp);
      setWeatherIcon(condition.icon);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes weather-glow {
            0%, 100% { box-shadow: 0 15px 35px rgba(59, 130, 246, 0.2); }
            50% { box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          fontFamily: '"Roboto Mono", "Consolas", monospace',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          padding: '2.5rem',
          backgroundColor: '#f8fafc',
          border: '2px solid #3b82f6',
          borderRadius: '16px',
          minHeight: '380px',
          animation: 'weather-glow 3s ease-in-out infinite',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
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
              fontSize: '1.5rem',
              animation: 'float 2s ease-in-out infinite',
            }}
          >
            {weatherIcon}
          </span>
          <span
            style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#3b82f6',
            }}
          >
            {currentTemp}°C
          </span>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '20px',
            width: '40px',
            height: '40px',
            border: '3px solid #3b82f6',
            borderTop: '3px solid transparent',
            borderRadius: '50%',
            animation: 'rotate 3s linear infinite',
            opacity: '0.3',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            fontSize: '0.75rem',
            color: '#6b7280',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          🔄 Auto-refresh: ON
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

- **Real-time Weather Data**: Dynamic temperature and condition updates
- **Complete Forecast**: 5-day weather outlook with icons
- **Weather Alerts**: Safety warnings and UV index information
- **Atmospheric Data**: Humidity, wind, visibility measurements
- **Sunrise/Sunset Times**: Astronomical data display
- **Visual Indicators**: Animated weather icons and status lights
- **Auto-refresh Simulation**: Live data update indicators

## Weather Dashboard Elements

1. **Current Conditions**: Temperature, humidity, wind, visibility
2. **Weather Icons**: Emoji-based weather condition indicators
3. **Extended Forecast**: Multi-day weather predictions
4. **Alert System**: Weather warnings and safety information
5. **Astronomical Data**: Sunrise and sunset times
6. **Location Information**: Geographic and time-based data

## Interactive Features

- **Live Updates**: Simulated real-time weather changes
- **Floating Animations**: Weather icons with smooth movement
- **Glowing Effects**: Dynamic border lighting effects
- **Loading Indicators**: Rotating elements suggest active updates
- **Status Badges**: Auto-refresh and system status displays

## Visual Design

- **Weather-appropriate Colors**: Blues for sky, greens for conditions
- **Gradient Backgrounds**: Sky-like color transitions
- **Shadow Effects**: Atmospheric depth and dimension
- **Icon Animations**: Floating and rotating weather elements

## Use Cases

- **Weather Applications**: Showcase meteorological data presentation
- **Dashboard Interfaces**: Demonstrate data visualization techniques
- **IoT Projects**: Display sensor and environmental data
- **Travel Websites**: Show destination weather information
- **Smart Home Interfaces**: Environmental monitoring displays