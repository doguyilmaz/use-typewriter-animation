import { type BuildOptions, build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

// Shared build config for both CommonJS and ESM formats
const sharedConfig: BuildOptions = {
	entryPoints: ['./src/index.ts'], // Entry point for your library
	bundle: true,
	minify: true,
	sourcemap: false, // You can set to true if you want source maps
	treeShaking: true, // Tree shaking to remove unused code
	plugins: [nodeExternalsPlugin()],
	target: ['esnext'], // Targeting modern JavaScript
	platform: 'browser', // Target the browser environment
};

// Build for CommonJS format
build({
	...sharedConfig,
	outdir: './dist/cjs', // Output directory for CommonJS
	format: 'cjs', // CommonJS format
}).catch(() => process.exit(1));

// Build for ESModules format
build({
	...sharedConfig,
	outdir: './dist/esm', // Output directory for ESModules
	format: 'esm', // ESModules format
}).catch(() => process.exit(1));
