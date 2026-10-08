import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { transformAsync } from '@babel/core';
import { expect, it } from 'vitest';

it('compiles every component and hook with React Compiler, without bailouts', {
  timeout: 30_000,
}, async () => {
  const file = resolve('src/react.tsx');
  const events: { kind: string; fnName?: string | null }[] = [];
  const result = await transformAsync(readFileSync(file, 'utf8'), {
    filename: file,
    babelrc: false,
    configFile: false,
    parserOpts: { plugins: ['typescript', 'jsx'] },
    plugins: [
      [
        'babel-plugin-react-compiler',
        {
          panicThreshold: 'all_errors',
          logger: {
            logEvent: (_: string | null, event: (typeof events)[number]) => events.push(event),
          },
        },
      ],
    ],
  });

  const compiled = events.filter((event) => event.kind === 'CompileSuccess').map((e) => e.fnName);
  const problems = events.filter((event) => /Error|Skip|Diagnostic/.test(event.kind));
  expect(problems).toEqual([]);
  expect(compiled.sort()).toEqual(['Typewriter', 'useTypewriter']);
  expect(result?.code).toContain('react/compiler-runtime');
});
