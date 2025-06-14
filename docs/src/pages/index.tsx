import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 50,
    cursorStyle: 'bar',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('Modern React')
      .pauseFor(500)
      .colorize('#3b82f6')
      .type(' Typewriter Hook')
      .pauseFor(1000)
      .newLine()
      .colorize('#10b981')
      .type('✨ TypeScript • Performance • Accessibility')
      .start();
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <style>{keyframes}</style>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.typewriterDemo}>
          {elements}
          {cursor}
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/installation">
            Get Started - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/examples/basic/simple-typewriter">
            View Examples
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Modern, performant React hook for creating typewriter animation effects with full TypeScript support">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>🎯 Modern React</h3>
                  <p>
                    Built for React 16.8+ with full React 19 support. Zero dependencies,
                    5KB gzipped bundle size.
                  </p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>🔧 TypeScript First</h3>
                  <p>
                    Complete type safety with IntelliSense support. 
                    Fully typed API with comprehensive documentation.
                  </p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>♿ Accessibility</h3>
                  <p>
                    WCAG 2.1 AA compliant with screen reader support,
                    reduced motion respect, and keyboard navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}