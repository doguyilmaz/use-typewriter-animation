#!/usr/bin/env bun

import { execSync } from 'child_process';
import { readFileSync, statSync } from 'fs';
import { gzipSync } from 'zlib';

interface BundleMetrics {
  name: string;
  raw: number;
  gzipped: number;
  brotli?: number;
}

function getFileSize(path: string): number {
  try {
    return statSync(path).size;
  } catch {
    return 0;
  }
}

function getGzippedSize(path: string): number {
  try {
    const content = readFileSync(path);
    return gzipSync(content).length;
  } catch {
    return 0;
  }
}

function getBrotliSize(path: string): number {
  try {
    // Use system brotli if available
    const result = execSync(`brotli -c "${path}" | wc -c`, { encoding: 'utf8' });
    return parseInt(result.trim());
  } catch {
    return 0;
  }
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function analyzeBundles(): BundleMetrics[] {
  const bundles = [
    { name: 'ESM', path: 'dist/esm/index.mjs' },
    { name: 'CJS', path: 'dist/cjs/index.js' },
  ];

  return bundles.map((bundle) => ({
    name: bundle.name,
    raw: getFileSize(bundle.path),
    gzipped: getGzippedSize(bundle.path),
    brotli: getBrotliSize(bundle.path),
  }));
}

function printAnalysis(metrics: BundleMetrics[]) {
  console.log('\n📊 Bundle Size Analysis');
  console.log('========================\n');

  metrics.forEach((metric) => {
    console.log(`${metric.name} Bundle:`);
    console.log(`  Raw:     ${formatBytes(metric.raw)}`);
    console.log(`  Gzipped: ${formatBytes(metric.gzipped)}`);
    if (metric.brotli && metric.brotli > 0) {
      console.log(`  Brotli:  ${formatBytes(metric.brotli)}`);
    }
    console.log('');
  });

  // Summary
  const smallest = metrics.reduce((min, current) =>
    current.gzipped < min.gzipped ? current : min
  );

  console.log(`🎯 Recommended: ${smallest.name} (${formatBytes(smallest.gzipped)} gzipped)`);
  console.log('\n📝 Notes:');
  console.log('- Sizes measured after tree-shaking');
  console.log('- Gzipped sizes represent typical CDN compression');
  console.log('- Choose ESM for modern bundlers, CJS for legacy support');
}

// Run analysis
const metrics = analyzeBundles();
printAnalysis(metrics);

// Export for programmatic use
export { analyzeBundles, type BundleMetrics };
