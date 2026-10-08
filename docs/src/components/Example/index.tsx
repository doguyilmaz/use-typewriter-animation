import CodeBlock from '@theme/CodeBlock';
import { type ReactNode, useId, useState } from 'react';
import styles from './styles.module.css';

export interface ExampleFile {
  name: string;
  /** The file's contents, imported with raw-loader. */
  source: string;
}

interface ExampleProps {
  /** The running example. Its source is in `files`. */
  children: ReactNode;
  files: ExampleFile[];
  /** `showcase` gives the preview more room and centers it. */
  variant?: 'basic' | 'showcase';
}

const languageOf = (name: string) => (name.endsWith('.css') ? 'css' : 'tsx');

/** Renders an example above the exact files it is built from. */
export default function Example({ children, files, variant = 'basic' }: ExampleProps) {
  const id = useId();
  const [run, setRun] = useState(0);
  const [active, setActive] = useState(0);
  const file = files[active] ?? files[0];

  return (
    <figure className={`${styles.example} ${styles[variant]}`}>
      <div key={run} className={styles.preview}>
        {children}
      </div>
      <div className={styles.toolbar}>
        <div role='tablist' aria-label='Source files' className={styles.tabs}>
          {files.map((entry, index) => (
            <button
              key={entry.name}
              id={`${id}-tab-${index}`}
              type='button'
              role='tab'
              aria-selected={index === active}
              aria-controls={`${id}-panel`}
              className={styles.tab}
              onClick={() => setActive(index)}
            >
              {entry.name}
            </button>
          ))}
        </div>
        <button
          type='button'
          className={styles.replay}
          onClick={() => setRun((count) => count + 1)}
        >
          <svg viewBox='0 0 16 16' aria-hidden='true' width='14' height='14'>
            <path
              d='M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2v3.5H10'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Replay
        </button>
      </div>
      {file && (
        <div
          id={`${id}-panel`}
          role='tabpanel'
          aria-labelledby={`${id}-tab-${active}`}
          className={styles.code}
        >
          <CodeBlock language={languageOf(file.name)}>{file.source}</CodeBlock>
        </div>
      )}
    </figure>
  );
}
