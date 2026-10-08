import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import { useTypewriter } from 'use-typewriter-animation';
import AiChat from '../examples/showcase/AiChat';
import CodeEditor from '../examples/showcase/CodeEditor';
import Search from '../examples/showcase/Search';
import Terminal from '../examples/showcase/Terminal';
import styles from './index.module.css';

const USES = ['hero sections', 'terminals', 'AI chat', 'search fields', 'code demos'];
const SEQUENCE = USES.flatMap((use) => [use, 1800]);

const SHOWCASE = [
  { title: 'Terminal', to: '/docs/showcase/terminal', Demo: Terminal },
  { title: 'AI chat', to: '/docs/showcase/ai-chat', Demo: AiChat },
  { title: 'Search placeholder', to: '/docs/showcase/search', Demo: Search },
];

const FEATURES = [
  [
    '2.8 kB, no dependencies',
    'An engine, a hook and a component. Bundlers drop what you do not use.',
  ],
  [
    'One render per change',
    'Text is kept as styled runs and read through useSyncExternalStore. Plain text is a single DOM node.',
  ],
  ['Unicode-aware', 'Emoji, flags and accented letters are typed and deleted as one character.'],
  [
    'StrictMode and SSR safe',
    'No double typing in development, no hydration mismatches, renders from Server Components.',
  ],
  [
    'React Compiler ready',
    'Compiles without bailouts. The test suite also runs against the compiled source.',
  ],
  [
    'Accessible defaults',
    'The cursor is hidden from screen readers and reduced motion turns typing into instant changes.',
  ],
];

const COMPONENT_CODE = `import { Typewriter } from 'use-typewriter-animation';

<Typewriter
  as='h1'
  sequence={['I build websites', 1500, 'I build apps', 1500]}
  loop
/>`;

const HOOK_CODE = `const { typewriter, elements, cursor } = useTypewriter();

useEffect(() => {
  typewriter.type('Hello, World!').pauseFor(800)
    .deleteWords(1).type('React!').start();
}, [typewriter]);

return <p>{elements}{cursor}</p>;`;

function Headline() {
  const { typewriter, state, elements, cursor } = useTypewriter({
    sequence: SEQUENCE,
    loop: true,
    typeSpeed: 65,
    deleteSpeed: 35,
  });
  const paused = state.status === 'paused';

  return (
    <>
      <h1 className={styles.title}>
        <span className='sr-only'>Typewriter effects for {USES.join(', ')}.</span>
        <span aria-hidden='true'>
          Typewriter effects
          <br />
          for{' '}
          <span className={styles.rotating}>
            {elements}
            {cursor}
          </span>
        </span>
      </h1>
      <button
        type='button'
        className={styles.toggle}
        onClick={() => (paused ? typewriter.resume() : typewriter.pause())}
      >
        {paused ? 'Play animation' : 'Pause animation'}
      </button>
    </>
  );
}

export default function Home() {
  return (
    <Layout
      title='Typewriter effects for React'
      description='Typewriter effects for React 18 and 19: a component, a hook and a 2.8 kB engine.'
    >
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>React 18 and 19 · 2.8 kB · no dependencies</p>
            <Headline />
            <p className={styles.lead}>
              A component for the common cases, a hook for full control and a tiny engine
              underneath. Built for React 18 and 19, StrictMode, SSR and React Compiler.
            </p>
            <div className={styles.actions}>
              <Link className='button button--primary button--lg' to='/docs/intro'>
                Get started
              </Link>
              <Link className='button button--secondary button--lg' to='/docs/showcase/hero'>
                Showcase
              </Link>
            </div>
            <CodeBlock language='bash' className={styles.install}>
              npm install use-typewriter-animation
            </CodeBlock>
          </div>
          <div className={styles.heroDemo}>
            <CodeEditor />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Copy-ready examples</h2>
          <p className={styles.subheading}>
            Each one is a single component and a CSS module. Open one to see the code.
          </p>
          <div className={styles.showcase}>
            {SHOWCASE.map(({ title, to, Demo }) => (
              <div key={to} className={styles.card}>
                <div className={styles.cardDemo}>
                  <Demo />
                </div>
                <Link to={to} className={styles.cardTitle}>
                  {title} <span aria-hidden='true'>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Two ways to use it</h2>
          <div className={styles.ways}>
            <div>
              <h3>A component with a sequence</h3>
              <CodeBlock language='tsx'>{COMPONENT_CODE}</CodeBlock>
            </div>
            <div>
              <h3>A hook with a chain of steps</h3>
              <CodeBlock language='tsx'>{HOOK_CODE}</CodeBlock>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <ul className={styles.features}>
            {FEATURES.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
