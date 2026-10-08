import { transformAsync } from '@babel/core';
import { defineConfig, type Plugin, type ViteUserConfig } from 'vitest/config';

/** Compiles `src` with React Compiler and fails on any bailout (`REACT_COMPILER=1`). */
const reactCompiler = (): Plugin => ({
  name: 'react-compiler',
  enforce: 'pre',
  async transform(code, id) {
    if (!/\/src\/.*\.tsx?$/.test(id)) return null;
    const result = await transformAsync(code, {
      filename: id,
      babelrc: false,
      configFile: false,
      sourceMaps: true,
      parserOpts: { plugins: ['typescript', 'jsx'] },
      plugins: [['babel-plugin-react-compiler', { panicThreshold: 'all_errors' }]],
    });
    return result?.code ? { code: result.code, map: result.map ?? null } : null;
  },
});

const config: ViteUserConfig = defineConfig({
  plugins: process.env.REACT_COMPILER ? [reactCompiler()] : [],
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.{ts,tsx}'],
    coverage: {
      include: ['src'],
      // The React 18 branch of the <style> props is covered by the React 18 CI job.
      thresholds: { lines: 100, functions: 100, statements: 100, branches: 99 },
    },
  },
});

export default config;
