# Data Visualization Demo

This example creates an advanced data visualization dashboard with animated charts, real-time metrics, and interactive data presentation.

## Live Demo

```tsx live
function DataVisualizationDemo() {
  const [currentMetric, setCurrentMetric] = useState('Revenue');
  const [dataPoint, setDataPoint] = useState(85);
  const [trend, setTrend] = useState('up');
  
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 45,
    cursorStyle: 'block',
    cursorColor: '#059669',
  });

  useEffect(() => {
    typewriter
      .colorize('#059669')
      .type('📊 DATA VISUALIZATION DASHBOARD 📊')
      .colorize('#374151')
      .newLine()
      .type('═══════════════════════════════════════════')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#3b82f6')
      .type('📈 Key Performance Indicators')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#059669')
      .type('Revenue Growth: ')
      .colorize('#374151')
      .type('$1,247,830 ')
      .colorize('#10b981')
      .type('↗ +12.3%')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('Active Users:   ')
      .colorize('#374151')
      .type('45,892 ')
      .colorize('#10b981')
      .type('↗ +8.7%')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('Conversion:     ')
      .colorize('#374151')
      .type('3.42% ')
      .colorize('#ef4444')
      .type('↘ -2.1%')
      .colorize('#374151')
      .newLine()
      .colorize('#f59e0b')
      .type('Retention:      ')
      .colorize('#374151')
      .type('78.9% ')
      .colorize('#10b981')
      .type('↗ +5.2%')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#6366f1')
      .type('📊 Monthly Revenue Chart')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#6b7280')
      .type('$120K ┤')
      .newLine()
      .type('      │     ╭─╮')
      .newLine()
      .type('$100K ┤   ╭─╯ ╰─╮')
      .newLine()
      .type('      │ ╭─╯     ╰╮')
      .newLine()
      .type(' $80K ┤╭╯        ╰─╮')
      .newLine()
      .type('      ││           ╰─╮')
      .newLine()
      .type(' $60K ┤╯             ╰─')
      .newLine()
      .type('      └┬┬┬┬┬┬┬┬┬┬┬┬┬')
      .newLine()
      .type('       JFMAMJJASOND')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#dc2626')
      .type('🎯 Real-time Analytics')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#059669')
      .type('Live Visitors: ')
      .colorize('#374151')
      .type('1,247 ')
      .colorize('#6b7280')
      .type('[████████████████████░] 87%')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('Page Views:    ')
      .colorize('#374151')
      .type('18,392 ')
      .colorize('#6b7280')
      .type('[███████████████░░░░░] 72%')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('Bounce Rate:   ')
      .colorize('#374151')
      .type('34.2% ')
      .colorize('#6b7280')
      .type('[██████░░░░░░░░░░░░░░░] 31%')
      .colorize('#374151')
      .newLine()
      .colorize('#f59e0b')
      .type('Avg. Session:  ')
      .colorize('#374151')
      .type('4m 23s ')
      .colorize('#6b7280')
      .type('[███████████████████░] 94%')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1000)
      .colorize('#dc2626')
      .type('🌍 Geographic Distribution')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#3b82f6')
      .type('🇺🇸 United States  ')
      .colorize('#374151')
      .type('42.3% ')
      .colorize('#6b7280')
      .type('████████████████████████████')
      .colorize('#374151')
      .newLine()
      .colorize('#059669')
      .type('🇬🇧 United Kingdom ')
      .colorize('#374151')
      .type('18.7% ')
      .colorize('#6b7280')
      .type('████████████░░░░░░░░░░░░░░░░')
      .colorize('#374151')
      .newLine()
      .colorize('#f59e0b')
      .type('🇩🇪 Germany        ')
      .colorize('#374151')
      .type('12.1% ')
      .colorize('#6b7280')
      .type('████████░░░░░░░░░░░░░░░░░░░░')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('🇫🇷 France         ')
      .colorize('#374151')
      .type('9.4%  ')
      .colorize('#6b7280')
      .type('██████░░░░░░░░░░░░░░░░░░░░░░')
      .colorize('#374151')
      .newLine()
      .colorize('#06b6d4')
      .type('🇯🇵 Japan          ')
      .colorize('#374151')
      .type('7.8%  ')
      .colorize('#6b7280')
      .type('█████░░░░░░░░░░░░░░░░░░░░░░░')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(1200)
      .colorize('#10b981')
      .type('⚡ Performance Metrics')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#059669')
      .type('✓ Page Load Speed:  ')
      .colorize('#374151')
      .type('1.2s ')
      .colorize('#10b981')
      .type('(Excellent)')
      .colorize('#374151')
      .newLine()
      .colorize('#3b82f6')
      .type('✓ Core Web Vitals: ')
      .colorize('#374151')
      .type('95/100 ')
      .colorize('#10b981')
      .type('(Good)')
      .colorize('#374151')
      .newLine()
      .colorize('#8b5cf6')
      .type('✓ SEO Score:       ')
      .colorize('#374151')
      .type('98/100 ')
      .colorize('#10b981')
      .type('(Excellent)')
      .colorize('#374151')
      .newLine()
      .colorize('#f59e0b')
      .type('⚠ Mobile Speed:    ')
      .colorize('#374151')
      .type('78/100 ')
      .colorize('#f59e0b')
      .type('(Needs Work)')
      .colorize('#374151')
      .newLine()
      .newLine()
      .pauseFor(800)
      .colorize('#dc2626')
      .type('🔍 Insights & Recommendations')
      .colorize('#374151')
      .newLine()
      .newLine()
      .colorize('#10b981')
      .type('• Revenue growth is accelerating')
      .newLine()
      .colorize('#3b82f6')
      .type('• User engagement increased by 15%')
      .newLine()
      .colorize('#f59e0b')
      .type('• Mobile performance needs optimization')
      .newLine()
      .colorize('#8b5cf6')
      .type('• European market shows strong potential')
      .start();
  }, []);

  // Simulate data updates
  useEffect(() => {
    const metrics = ['Revenue', 'Users', 'Conversion', 'Retention', 'Traffic'];
    const trends = ['up', 'down', 'stable'];
    
    const interval = setInterval(() => {
      setCurrentMetric(metrics[Math.floor(Math.random() * metrics.length)]);
      setDataPoint(Math.floor(Math.random() * 40) + 60); // 60-100
      setTrend(trends[Math.floor(Math.random() * trends.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {keyframes}
        {`
          @keyframes data-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes chart-animate {
            0% { width: 0%; }
            100% { width: var(--chart-width); }
          }
          
          @keyframes metric-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(5, 150, 105, 0.3); }
            50% { box-shadow: 0 0 30px rgba(5, 150, 105, 0.6); }
          }
          
          .chart-bar {
            animation: chart-animate 2s ease-out;
          }
          
          .trend-indicator {
            animation: data-pulse 2s ease-in-out infinite;
          }
        `}
      </style>
      <div
        style={{
          fontFamily: '"Roboto Mono", "Courier New", monospace',
          fontSize: '0.85rem',
          lineHeight: '1.4',
          padding: '2.5rem',
          backgroundColor: '#f8fafc',
          border: '2px solid #059669',
          borderRadius: '16px',
          minHeight: '500px',
          boxShadow: '0 25px 50px rgba(5, 150, 105, 0.15)',
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)',
          animation: 'metric-glow 4s ease-in-out infinite',
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
          <div
            className="trend-indicator"
            style={{
              fontSize: '1.2rem',
              color: trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#6b7280',
            }}
          >
            {trend === 'up' ? '📈' : trend === 'down' ? '📉' : '📊'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>{currentMetric}</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#059669' }}>
              {dataPoint}%
            </span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div style={{ width: '40px', height: '4px', backgroundColor: '#10b981', borderRadius: '2px' }} />
          <div style={{ width: '30px', height: '4px', backgroundColor: '#3b82f6', borderRadius: '2px' }} />
          <div style={{ width: '35px', height: '4px', backgroundColor: '#8b5cf6', borderRadius: '2px' }} />
          <div style={{ width: '25px', height: '4px', backgroundColor: '#f59e0b', borderRadius: '2px' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
            📊 Live Data • Updated {Math.floor(Math.random() * 60)}s ago
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: '#8b5cf6', borderRadius: '50%' }} />
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '16px',
            fontSize: '0.7rem',
            color: '#059669',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
            padding: '4px 8px',
            borderRadius: '6px',
            fontWeight: '600',
          }}
        >
          ⚡ REAL-TIME
        </div>

        <div style={{ color: '#374151', whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
          {elements}
          {cursor}
        </div>
      </div>
    </>
  );
}
```

## Key Features

- **Comprehensive KPIs**: Revenue, users, conversion, and retention metrics
- **ASCII Chart Visualization**: Creative text-based chart representation
- **Real-time Analytics**: Live visitor data with progress bars
- **Geographic Distribution**: Country-based user analytics with flags
- **Performance Metrics**: Technical performance indicators
- **Trend Analysis**: Data trends with visual indicators
- **Actionable Insights**: Business recommendations based on data

## Data Visualization Elements

1. **Key Performance Indicators**: Critical business metrics with trends
2. **ASCII Charts**: Creative text-based data visualization
3. **Progress Bars**: Visual representation of percentages and ratios
4. **Geographic Data**: Country-specific analytics with cultural context
5. **Performance Monitoring**: Technical metrics and scoring
6. **Insight Generation**: Automated recommendations and analysis

## Interactive Features

- **Live Data Updates**: Simulated real-time metric changes
- **Trend Indicators**: Dynamic trend direction and status
- **Visual Animations**: Pulsing and scaling effects for emphasis
- **Status Lights**: Multi-colored indicators for different data types
- **Progress Visualization**: Animated bars and percentage displays

## Advanced Analytics

- **Multi-dimensional Data**: Revenue, user behavior, and technical metrics
- **Comparative Analysis**: Trend comparisons and historical data
- **Geographic Insights**: International market analysis
- **Performance Optimization**: Technical recommendation system
- **Business Intelligence**: Actionable insights and recommendations

## Use Cases

- **Business Dashboards**: Executive and management reporting interfaces
- **Analytics Platforms**: Data visualization and business intelligence tools
- **Performance Monitoring**: System and application performance tracking
- **Marketing Analytics**: Campaign performance and user engagement metrics
- **Financial Reporting**: Revenue tracking and financial analysis tools