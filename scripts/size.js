// Prints the compressed size of the build and fails when it exceeds the budget.
import { readFileSync } from 'node:fs';
import { brotliCompressSync, gzipSync } from 'node:zlib';

const BUDGET = 3000; // bytes, gzip

let failed = false;
for (const file of ['dist/index.js', 'dist/index.cjs']) {
  const source = readFileSync(file);
  const gzip = gzipSync(source, { level: 9 }).length;
  const brotli = brotliCompressSync(source).length;
  console.log(`${file}: ${source.length} B min, ${gzip} B gzip, ${brotli} B brotli`);
  if (gzip > BUDGET) {
    console.error(`${file} is over the ${BUDGET} B gzip budget`);
    failed = true;
  }
}
process.exitCode = failed ? 1 : 0;
