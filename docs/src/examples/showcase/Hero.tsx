import { useTypewriter } from 'use-typewriter-animation';
import styles from './Hero.module.css';

const ROLES = ['websites', 'mobile apps', 'design systems', 'developer tools'];
const SEQUENCE = ROLES.flatMap((role) => [role, 1800]);

export default function Hero() {
  const { typewriter, state, elements, cursor } = useTypewriter({
    sequence: SEQUENCE,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 35,
    cursorColor: '#f43f5e',
  });
  const paused = state.status === 'paused';

  return (
    <section className={styles.hero}>
      <p className={styles.badge}>
        <span className={styles.dot} /> Available for new projects
      </p>
      <h2 className={styles.title}>
        <span className={styles.srOnly}>I build {ROLES.join(', ')}.</span>
        <span aria-hidden='true'>
          I build
          <br />
          <span className={styles.role}>
            {elements}
            {cursor}
          </span>
        </span>
      </h2>
      <button
        type='button'
        className={styles.toggle}
        onClick={() => (paused ? typewriter.resume() : typewriter.pause())}
      >
        {paused ? 'Play animation' : 'Pause animation'}
      </button>
      <p className={styles.lead}>
        Independent engineer. I help small teams ship fast, accessible interfaces.
      </p>
      <div className={styles.actions}>
        <button type='button' className={styles.primary}>
          See my work
        </button>
        <button type='button' className={styles.secondary}>
          Get in touch
        </button>
      </div>
    </section>
  );
}
