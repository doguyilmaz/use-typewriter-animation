import React, { useState, useCallback } from 'react';
import { useTypewriter } from '../Typewriter/useTypewriter';

interface PerformanceTestProps {
	textLength?: number;
	virtualizationEnabled?: boolean;
}

export const PerformanceTest: React.FC<PerformanceTestProps> = ({ 
	textLength = 1000,
	virtualizationEnabled = true 
}) => {
	const [startTime, setStartTime] = useState<number | null>(null);
	const [endTime, setEndTime] = useState<number | null>(null);

	const { typewriter, elements, cursor, keyframes, metrics } = useTypewriter({
		typeSpeed: 1, // Fast typing for testing
		enableVirtualization: virtualizationEnabled,
		maxVisibleSegments: 50,
		enableCursor: true,
		cursorStyle: 'bar',
	});

	const runPerformanceTest = useCallback(() => {
		setStartTime(Date.now());
		setEndTime(null);
		
		// Generate long text for performance testing
		const longText = Array.from({ length: textLength }, (_, i) => 
			`Word${i} `
		).join('');

		typewriter
			.on('start', () => console.log('Performance test started'))
			.on('end', () => {
				setEndTime(Date.now());
				console.log('Performance test completed');
			})
			.deleteAll()
			.type(longText)
			.start();
	}, [typewriter, textLength]);

	const duration = startTime && endTime ? endTime - startTime : null;

	return (
		<div style={{ padding: '20px', fontFamily: 'monospace' }}>
			<style>{keyframes}</style>
			
			<h3>Typewriter Performance Test</h3>
			
			<div style={{ marginBottom: '20px' }}>
				<button onClick={runPerformanceTest} style={{ padding: '10px 20px' }}>
					Start Performance Test ({textLength} characters)
				</button>
				{duration && (
					<span style={{ marginLeft: '10px', color: 'green' }}>
						✅ Completed in {duration}ms
					</span>
				)}
			</div>

			<div style={{ marginBottom: '20px', fontSize: '14px' }}>
				<strong>Performance Metrics:</strong>
				<div>📊 Total Segments: {metrics.totalSegments}</div>
				<div>👁️ Visible Segments: {metrics.visibleSegments}</div>
				<div>🚀 Virtualized: {metrics.isVirtualized ? 'Yes' : 'No'}</div>
				<div>📈 Optimization: {
					metrics.isVirtualized 
						? `${((1 - metrics.visibleSegments / metrics.totalSegments) * 100).toFixed(1)}% reduction`
						: 'No reduction needed'
				}</div>
			</div>

			<div style={{ 
				border: '1px solid #ccc', 
				padding: '10px', 
				height: '200px', 
				overflow: 'auto',
				backgroundColor: '#f9f9f9'
			}}>
				{elements}
				{cursor}
			</div>
		</div>
	);
};

export default PerformanceTest;