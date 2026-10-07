import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import { Typewriter } from 'use-typewriter-animation';

const FEATURES = [
  ['About 2.7 kB', 'A component, a hook and a framework-agnostic engine. No dependencies.'],
  ['One render per change', 'Text is stored as styled runs and read through useSyncExternalStore.'],
  ['Unicode-aware', 'Emoji, flags and accented letters are typed and deleted whole.'],
  ['React 18 and 19', 'Compiles with React Compiler. Safe with StrictMode, SSR and RSC.'],
];

export default function Home() {
  return (
    <Layout description='Typewriter animations for React 18 and 19.'>
      <main className='container home'>
        <h1 className='home__title'>
          <span className='sr-only'>Typewriter animations for React</span>
          <Typewriter
            aria-hidden
            sequence={[
              'Typewriter animations for React',
              2000,
              'Typewriter animations in 2.7 kB',
              2000,
              'Typewriter animations that respect reduced motion',
              2000,
            ]}
            typeSpeed={50}
            loop
          />
        </h1>
        <CodeBlock language='bash' className='home__install'>
          npm install use-typewriter-animation
        </CodeBlock>
        <div className='home__actions'>
          <Link className='button button--primary button--lg' to='/docs/intro'>
            Get started
          </Link>
          <Link className='button button--secondary button--lg' to='/docs/examples/rotating-words'>
            Examples
          </Link>
        </div>
        <ul className='home__features'>
          {FEATURES.map(([title, text]) => (
            <li key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
