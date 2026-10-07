import CodeBlock from '@theme/CodeBlock';
import { type ComponentType, useState } from 'react';

interface ExampleProps {
  component: ComponentType;
  /** The component's source file, imported with raw-loader. */
  source: string;
  file: string;
}

/** Renders an example and the exact source it runs. */
export default function Example({ component: Demo, source, file }: ExampleProps) {
  const [run, setRun] = useState(0);
  return (
    <section className='example'>
      <div className='example__demo'>
        <Demo key={run} />
      </div>
      <div className='example__bar'>
        <button
          type='button'
          className='button button--sm button--secondary'
          onClick={() => setRun((count) => count + 1)}
        >
          Replay
        </button>
      </div>
      <CodeBlock language='tsx' title={file}>
        {source}
      </CodeBlock>
    </section>
  );
}
