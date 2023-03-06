import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

esbuild
  .build({
    entryPoints: [
      './src/index.ts',
      './src/Typewriter/TypewriterBase.ts',
      './src/Typewriter/useTypewriter.tsx',
    ],
    outdir: './dist',
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    format: 'cjs',
    sourcemap: false,
    target: 'node16',
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
