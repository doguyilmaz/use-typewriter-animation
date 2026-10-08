import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import styles from './CodeEditor.module.css';

const CODE = `import { Typewriter } from 'use-typewriter-animation';

export function Hero() {
  return (
    <Typewriter
      as='h1'
      sequence={['Hello', 1000, 'Hello, world']}
      loop
    />
  );
}`;

const COLORS: Record<string, string> = {
  string: '#98c379',
  keyword: '#c678dd',
  number: '#d19a66',
  tag: '#e06c75',
  attribute: '#d19a66',
  name: '#e5c07b',
};

// Just enough highlighting for this snippet. A line break and its indentation form one token,
// so they appear at once, like an editor that indents for you.
const TOKENS =
  /(?<indent>\n[ \t]*)|(?<string>'[^']*')|(?<keyword>\b(?:import|from|export|function|return)\b)|(?<number>\b\d+\b)|(?<tag><\/?[A-Za-z]+|\/?>)|(?<attribute>\b[a-z]+(?==))|(?<name>\b[A-Z]\w*)/g;

function tokenize(code: string) {
  const tokens: { text: string; kind?: string }[] = [];
  let end = 0;
  for (const match of code.matchAll(TOKENS)) {
    if (match.index > end) tokens.push({ text: code.slice(end, match.index) });
    const kind = Object.entries(match.groups ?? {}).find(([, value]) => value)?.[0];
    tokens.push({ text: match[0], kind });
    end = match.index + match[0].length;
  }
  if (end < code.length) tokens.push({ text: code.slice(end) });
  return tokens;
}

export default function CodeEditor() {
  const { typewriter, state, elements, cursor } = useTypewriter({ typeSpeed: 35, humanize: 0.5 });

  useEffect(() => {
    for (const { text, kind } of tokenize(CODE)) {
      if (kind === 'indent') typewriter.type(text, { speed: 0 }).pauseFor(120);
      else typewriter.colorize(kind && COLORS[kind]).type(text);
    }
    typewriter.colorize().start();
  }, [typewriter]);

  const lines = state.text.split('\n');
  const column = (lines[lines.length - 1]?.length ?? 0) + 1;

  return (
    <div className={styles.editor}>
      <div className={styles.tabs}>
        <span className={styles.tab}>Hero.tsx</span>
      </div>
      <div className={styles.body}>
        <pre className={styles.gutter} aria-hidden='true'>
          {lines.map((_, index) => index + 1).join('\n')}
        </pre>
        <pre className={styles.code}>
          {elements}
          {cursor}
        </pre>
      </div>
      <div className={styles.status}>
        <span>TypeScript JSX</span>
        <span>
          Ln {lines.length}, Col {column}
        </span>
      </div>
    </div>
  );
}
