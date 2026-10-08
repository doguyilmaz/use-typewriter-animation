import { useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';
import styles from './Search.module.css';

const IDEAS = ['dark mode toggle', 'pricing table', 'onboarding checklist', 'date picker'];
const SEQUENCE = IDEAS.flatMap((idea) => [`Search for “${idea}”`, 1600]);

export default function Search() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  // No cursor: the text goes into the placeholder attribute.
  const { typewriter, state } = useTypewriter({
    sequence: SEQUENCE,
    typeSpeed: 45,
    deleteSpeed: 25,
    enableCursor: false,
    loop: true,
  });

  return (
    <search className={styles.search}>
      <svg className={styles.icon} viewBox='0 0 20 20' aria-hidden='true'>
        <circle cx='9' cy='9' r='6' fill='none' stroke='currentColor' strokeWidth='1.8' />
        <path d='m13.5 13.5 4 4' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
      <input
        className={styles.input}
        aria-label='Search components'
        value={query}
        placeholder={focused ? 'Search components…' : state.text}
        onChange={(event) => setQuery(event.target.value)}
        // Nothing animates while the field is focused, so pause instead of rendering for nothing.
        onFocus={() => {
          setFocused(true);
          typewriter.pause();
        }}
        onBlur={() => {
          setFocused(false);
          typewriter.resume();
        }}
      />
      <kbd className={styles.kbd}>⌘K</kbd>
    </search>
  );
}
