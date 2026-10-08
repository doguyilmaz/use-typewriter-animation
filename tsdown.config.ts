import { defineConfig, type UserConfig } from 'tsdown';

const config: UserConfig = defineConfig({
  entry: 'src/index.ts',
  format: ['esm', 'cjs'],
  platform: 'neutral',
  target: 'es2020',
  minify: true,
  dts: true,
  publint: true,
  attw: { profile: 'node16', level: 'error' },
  // The entry's 'use client' is kept at the top of each output file.
  inputOptions: { checks: { moduleLevelDirective: false } },
});

export default config;
