import { useEffect } from 'react';
import { type TypewriterInstance, useTypewriter } from 'use-typewriter-animation';
import styles from './Terminal.module.css';

const GREEN = '#4ade80';
const BLUE = '#60a5fa';
const DIM = '#a1a1aa';

/** Types a prompt and a command the way a person would, then prints its output at once. */
function run(typewriter: TypewriterInstance, command: string, output: string[] = []) {
  typewriter
    .colorize(GREEN)
    .type('➜ ', { speed: 0 })
    .colorize(BLUE)
    .type('my-app ', { speed: 0 })
    .colorize()
    .pauseFor(400)
    .type(command)
    .pauseFor(300)
    .newLine()
    .colorize(DIM);
  for (const line of output) typewriter.type(`${line}\n`, { speed: 0 }).pauseFor(120);
  typewriter.colorize();
}

export default function Terminal() {
  const { typewriter, elements, cursor } = useTypewriter({
    typeSpeed: 55,
    humanize: 0.6,
    cursorStyle: 'block',
  });

  useEffect(() => {
    run(typewriter, 'npm install use-typewriter-animation', ['added 1 package in 812ms']);
    run(typewriter, 'npm run dev', [
      '',
      '  VITE v8.3.3  ready in 240 ms',
      '',
      '  ➜  Local:   http://localhost:5173/',
    ]);
    typewriter
      .colorize(GREEN)
      .type('➜ ', { speed: 0 })
      .colorize(BLUE)
      .type('my-app ', { speed: 0 });
    typewriter.start();
  }, [typewriter]);

  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.lights} aria-hidden='true'>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.title}>zsh — my-app</span>
      </div>
      <pre className={styles.screen}>
        {elements}
        {cursor}
      </pre>
    </div>
  );
}
