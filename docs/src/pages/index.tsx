import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 80,
    cursorStyle: 'block',
    cursorColor: '#3b82f6',
  });

  useEffect(() => {
    typewriter
      .type('const ')
      .colorize('#c678dd')
      .type('hook')
      .colorize('#e06c75')
      .type(' = ')
      .colorize('#56b6c2')
      .type('useTypewriter')
      .colorize('#61dafb')
      .type('();')
      .pauseFor(1500)
      .newLine()
      .newLine()
      .colorize('#98c379')
      .type('// ✨ Modern • Fast • Accessible')
      .pauseFor(1000)
      .newLine()
      .colorize('#98c379')
      .type('// 🔥 TypeScript • React 19 • 5KB')
      .start();
  }, []);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <style>{keyframes}</style>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <Heading as="h1" className={styles.heroTitle}>
              <span className={styles.heroTitleMain}>use-typewriter-animation</span>
              <span className={styles.heroTitleSub}>Modern React Typewriter Hook</span>
            </Heading>
            <p className={styles.heroDescription}>
              Create stunning typewriter animations with full TypeScript support,
              accessibility features, and React 19 compatibility.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5KB</span>
                <span className={styles.statLabel}>Bundle Size</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>A11y</span>
                <span className={styles.statLabel}>WCAG 2.1</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>TS</span>
                <span className={styles.statLabel}>TypeScript</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.ctaButton)}
                to="/docs/getting-started/installation">
                🚀 Get Started
              </Link>
              <Link
                className={clsx('button button--outline button--lg', styles.secondaryButton)}
                to="/docs/examples/basic/simple-typewriter">
                🎭 View Examples
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.windowControl}></span>
                  <span className={styles.windowControl}></span>
                  <span className={styles.windowControl}></span>
                </div>
                <span className={styles.fileName}>demo.tsx</span>
              </div>
              <div className={styles.codeContent}>
                {elements}
                {cursor}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance with virtualization support. Hardware-accelerated animations for smooth experience.',
      highlight: '5KB gzipped'
    },
    {
      icon: '🔧',
      title: 'Developer Experience',
      description: 'Full TypeScript support with IntelliSense. Rich API with chainable methods and comprehensive documentation.',
      highlight: 'TypeScript'
    },
    {
      icon: '♿',
      title: 'Accessibility First',
      description: 'WCAG 2.1 AA compliant with screen reader support, keyboard navigation, and reduced motion respect.',
      highlight: 'WCAG 2.1'
    },
    {
      icon: '🎨',
      title: 'Highly Customizable',
      description: 'Rich styling options, color animations, cursor styles, and speed controls. Perfect for any design system.',
      highlight: 'Flexible'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Responsive design with touch support. Optimized for all screen sizes and devices.',
      highlight: 'Responsive'
    },
    {
      icon: '🚀',
      title: 'React 19 Ready',
      description: 'Built for modern React with concurrent features support. Compatible with React 16.8+.',
      highlight: 'React 19'
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose use-typewriter-animation?</h2>
          <p className={styles.sectionDescription}>
            The most complete typewriter animation library for React applications
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <span className={styles.featureHighlight}>{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  const { typewriter, elements, cursor, keyframes } = useTypewriter({
    typeSpeed: 60,
    cursorStyle: 'bar',
    cursorColor: 'var(--ifm-color-primary)',
  });

  useEffect(() => {
    typewriter
      .type('bun add use-typewriter-animation')
      .pauseFor(1000)
      .newLine()
      .newLine()
      .colorize('var(--syntax-keyword)')
      .type('import')
      .colorize('var(--syntax-default)')
      .type(' { ')
      .colorize('var(--syntax-variable)')
      .type('useTypewriter')
      .colorize('var(--syntax-default)')
      .type(' } ')
      .colorize('var(--syntax-keyword)')
      .type('from')
      .colorize('var(--syntax-default)')
      .type(' ')
      .colorize('var(--syntax-string)')
      .type('"use-typewriter-animation"')
      .colorize('var(--syntax-default)')
      .type(';')
      .pauseFor(800)
      .newLine()
      .newLine()
      .colorize('var(--syntax-keyword)')
      .type('const')
      .colorize('var(--syntax-default)')
      .type(' { ')
      .colorize('var(--syntax-variable)')
      .type('typewriter')
      .colorize('var(--syntax-default)')
      .type(', ')
      .colorize('var(--syntax-variable)')
      .type('elements')
      .colorize('var(--syntax-default)')
      .type(', ')
      .colorize('var(--syntax-variable)')
      .type('cursor')
      .colorize('var(--syntax-default)')
      .type(' } = ')
      .colorize('var(--syntax-function)')
      .type('useTypewriter')
      .colorize('var(--syntax-default)')
      .type('();')
      .start();
  }, []);

  return (
    <section className={styles.quickStart}>
      <style>{keyframes}</style>
      <div className="container">
        <div className={styles.quickStartContent}>
          <div className={styles.quickStartLeft}>
            <h2 className={styles.sectionTitle}>Get Started in Seconds</h2>
            <p className={styles.quickStartDescription}>
              Install the package and start creating beautiful typewriter animations immediately.
            </p>
            <div className={styles.quickStartFeatures}>
              <div className={styles.quickFeature}>
                <span className={styles.quickFeatureIcon}>📦</span>
                <span>Zero dependencies</span>
              </div>
              <div className={styles.quickFeature}>
                <span className={styles.quickFeatureIcon}>⚡</span>
                <span>5-minute setup</span>
              </div>
              <div className={styles.quickFeature}>
                <span className={styles.quickFeatureIcon}>🎯</span>
                <span>Production ready</span>
              </div>
            </div>
          </div>
          <div className={styles.quickStartRight}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalControls}>
                  <span className={styles.terminalControl}></span>
                  <span className={styles.terminalControl}></span>
                  <span className={styles.terminalControl}></span>
                </div>
                <span className={styles.terminalTitle}>Terminal</span>
              </div>
              <div className={styles.terminalContent}>
                <div className={styles.terminalPrompt}>$</div>
                <div className={styles.terminalText}>
                  {elements}
                  {cursor}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Modern, performant React hook for creating typewriter animation effects with full TypeScript support, accessibility features, and React 19 compatibility">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}