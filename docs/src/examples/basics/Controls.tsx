import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const TEXT =
  'pause() freezes the animation and keeps the remaining delay. resume() continues it. ' +
  'skip() shows the final text at once. reset() clears everything.';

export default function Controls() {
  const { typewriter, state, elements, cursor } = useTypewriter({ typeSpeed: 40 });

  useEffect(() => {
    typewriter.type(TEXT).start();
  }, [typewriter]);

  const restart = () => {
    typewriter.reset().type(TEXT).start();
  };

  return (
    <>
      <p>
        {elements}
        {cursor}
      </p>
      <div>
        <button type='button' onClick={() => typewriter.pause()}>
          Pause
        </button>
        <button type='button' onClick={() => typewriter.resume()}>
          Resume
        </button>
        <button type='button' onClick={() => typewriter.skip()}>
          Skip
        </button>
        <button type='button' onClick={restart}>
          Restart
        </button>
        <code>{state.status}</code>
      </div>
    </>
  );
}
