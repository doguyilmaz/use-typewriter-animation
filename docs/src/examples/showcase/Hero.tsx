import { Typewriter } from 'use-typewriter-animation';
import styles from './Hero.module.css';

const ROLES = ['websites', 'mobile apps', 'design systems', 'developer tools'];
const SEQUENCE = ROLES.flatMap((role) => [role, 1800]);

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.badge}>
        <span className={styles.dot} /> Available for new projects
      </p>
      <h1 className={styles.title}>
        {/* Screen readers get the whole sentence; the animation is decoration. */}
        <span className={styles.srOnly}>I build {ROLES.join(', ')}.</span>
        <span aria-hidden='true'>
          I build
          <br />
          <Typewriter
            className={styles.role}
            sequence={SEQUENCE}
            typeSpeed={70}
            deleteSpeed={35}
            cursorColor='#f43f5e'
            loop
          />
        </span>
      </h1>
      <p className={styles.lead}>
        Independent engineer. I help small teams ship fast, accessible interfaces.
      </p>
      <div className={styles.actions}>
        <a className={styles.primary} href='#work'>
          See my work
        </a>
        <a className={styles.secondary} href='#contact'>
          Get in touch
        </a>
      </div>
    </section>
  );
}
