// Loads the built package the way consumers do (ESM and CommonJS) and renders it on the server.
import { createRequire } from 'node:module';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

const require = createRequire(import.meta.url);
const esm = await import('../dist/index.js');
const cjs = require('../dist/index.cjs');

let failed = false;
const check = (name, ok) => {
  console.log(`${ok ? 'ok' : 'FAIL'} ${name}`);
  failed ||= !ok;
};

for (const [name, mod] of [
  ['esm', esm],
  ['cjs', cjs],
]) {
  check(
    `${name} exports`,
    ['Typewriter', 'createTypewriter', 'useTypewriter'].every(
      (key) => typeof mod[key] === 'function',
    ),
  );
  const html = renderToString(createElement(mod.Typewriter, { as: 'h1', sequence: ['Hi'] }));
  check(`${name} server render`, html.includes('<h1') && html.includes('uta-cursor'));
  const typewriter = mod.createTypewriter({ typeSpeed: 0 });
  typewriter.type('ok').start();
  check(`${name} engine`, typewriter.getState().text === 'ok');
}

const source = require('node:fs').readFileSync(
  new URL('../dist/index.js', import.meta.url),
  'utf8',
);
check("'use client' directive", source.startsWith('"use client"'));

process.exitCode = failed ? 1 : 0;
