import { useEffect, useRef, useState } from 'react';
import { type TypewriterInstance, useTypewriter } from 'use-typewriter-animation';
import styles from './AiChat.module.css';

const QUESTION = 'Can I type out a streamed model response with this?';
// Regenerate cycles through these, as a model would give a different answer.
const ANSWERS = [
  'Yes. Queue every chunk with type() as it arrives and call start(). ' +
    'Steps added while the typewriter runs are appended, and start() picks up again ' +
    'whenever it has caught up with the stream.\n\n' +
    'Keep typeSpeed low, around 10 ms, so the text stays close behind the network.',
  'You can. Call typewriter.type(chunk).start() for every chunk. ' +
    'While the typewriter is busy, start() does nothing; once it has caught up, the next ' +
    'call carries on from the new text.\n\n' +
    'To stop early, abort the request and call stop(): the text typed so far stays.',
];

type Phase = 'streaming' | 'stopped' | 'done';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Stands in for a model API: a short wait, then one word at a time. */
async function streamAnswer(typewriter: TypewriterInstance, answer: string, signal: AbortSignal) {
  await sleep(700);
  for (const word of answer.split(/(?<=\s)/)) {
    if (signal.aborted) return false;
    typewriter.type(word).start();
    await sleep(30 + Math.random() * 90);
  }
  return !signal.aborted;
}

export default function AiChat() {
  const [phase, setPhase] = useState<Phase>('streaming');
  const [attempt, setAttempt] = useState(0);
  const controller = useRef<AbortController | null>(null);
  const { typewriter, state, elements, cursor } = useTypewriter({
    typeSpeed: 10,
    cursorStyle: 'block',
  });

  useEffect(() => {
    const current = new AbortController();
    controller.current = current;
    const answer = ANSWERS[attempt % ANSWERS.length] as string;
    streamAnswer(typewriter, answer, current.signal).then((finished) => {
      if (finished) typewriter.call(() => setPhase('done')).start();
    });
    return () => current.abort();
  }, [typewriter, attempt]);

  const stop = () => {
    controller.current?.abort();
    typewriter.stop();
    setPhase('stopped');
  };

  const regenerate = () => {
    typewriter.reset();
    setPhase('streaming');
    setAttempt((count) => count + 1);
  };

  const streaming = phase === 'streaming';
  const thinking = streaming && state.text === '';

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <span className={styles.avatar} aria-hidden='true'>
          ✦
        </span>
        Assistant
      </div>
      <div className={styles.messages}>
        <p className={styles.user}>{QUESTION}</p>
        <div className={styles.assistant} aria-busy={streaming}>
          {thinking ? (
            <span className={styles.thinking} role='status'>
              <i />
              <i />
              <i />
              <span className={styles.srOnly}>Thinking…</span>
            </span>
          ) : (
            <>
              {elements}
              {streaming && cursor}
            </>
          )}
        </div>
        <p className={styles.srOnly} aria-live='polite'>
          {phase === 'done' && state.text}
        </p>
      </div>
      <div className={styles.footer}>
        <button type='button' className={styles.button} onClick={streaming ? stop : regenerate}>
          {streaming ? (
            <>
              <span className={styles.stopIcon} aria-hidden='true' /> Stop
            </>
          ) : (
            <>
              <span aria-hidden='true'>↻</span> Regenerate
            </>
          )}
        </button>
        {phase === 'stopped' && <span className={styles.note}>Stopped</span>}
      </div>
    </div>
  );
}
