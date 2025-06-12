import { type BuildOptions, build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

// Shared build config for both CommonJS and ESM formats
const sharedConfig: BuildOptions = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true, // Enable source maps for better debugging
  treeShaking: true,
  metafile: true, // Generate build metadata for analysis
  plugins: [
    nodeExternalsPlugin({
      packagePath: './package.json',
      allowWorkspaces: true,
    }),
  ],
  target: ['es2020'], // Target ES2020 for better compatibility
  platform: 'neutral', // Neutral platform for isomorphic code
  legalComments: 'none', // Remove legal comments to reduce bundle size
  logLevel: 'info',
};

// Build configurations
const builds: BuildOptions[] = [
  // CommonJS build
  {
    ...sharedConfig,
    outdir: './dist/cjs',
    format: 'cjs',
    outExtension: { '.js': '.js' },
    banner: {
      js: '"use strict";',
    },
  },
  // ESM build
  {
    ...sharedConfig,
    outdir: './dist/esm',
    format: 'esm',
    outExtension: { '.js': '.mjs' },
    splitting: false, // Disable code splitting for library builds
  },
];

// Execute all builds
Promise.all(
  builds.map(async (config) => {
    try {
      const result = await build(config);
      console.log(`✅ Built ${config.format?.toUpperCase()} format successfully`);
      return result;
    } catch (error) {
      console.error(`❌ Failed to build ${config.format?.toUpperCase()} format:`, error);
      throw error;
    }
  })
).catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
