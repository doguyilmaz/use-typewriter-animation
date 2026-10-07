import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const TEXT =
  'Animations that run for more than a few seconds should let people pause them. ' +
  'pause() keeps the remaining delay, resume() continues where it stopped, ' +
  'and skip() shows the final text at once.';

export default function Controls() {
  const { typewriter, state, elements, cursor } = useTypewriter({ typeSpeed: 35 });

  useEffect(() => {
    typewriter.type(TEXT).start();
  }, [typewriter]);

  const paused = state.status === 'paused';

  return (
    <div>
      <p className='demo-text'>
        {elements}
        {cursor}
      </p>
      <div className='demo-controls'>
        <button
          type='button'
          className='button button--sm button--primary'
          onClick={() => (paused ? typewriter.resume() : typewriter.pause())}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
        <button
          type='button'
          className='button button--sm button--secondary'
          onClick={() => typewriter.skip()}
        >
          Skip
        </button>
        <span>
          status: <code>{state.status}</code>
        </span>
      </div>
    </div>
  );
}
