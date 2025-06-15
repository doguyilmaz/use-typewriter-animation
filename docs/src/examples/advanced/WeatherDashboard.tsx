import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export const WeatherDashboard: React.FC = () => {
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
      .type(`${currentTemp}°C / ${Math.round(currentTemp * 9/5 + 32)}°F`)
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
  }, [currentTemp, weatherIcon]);

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
      <style>{keyframes}</style>
      <div 
        style={{
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-color-content)',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          padding: '2rem',
          borderRadius: '12px',
          border: '2px solid var(--ifm-color-primary)',
          minHeight: '500px',
          whiteSpace: 'pre-line',
          boxShadow: '0 4px 12px var(--ifm-color-emphasis-200), 0 0 20px rgba(59, 130, 246, 0.1)',
        }}
      >
        {elements}
        {cursor}
      </div>
    </>
  );
};

export default WeatherDashboard;