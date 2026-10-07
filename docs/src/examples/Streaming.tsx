import { useEffect } from 'react';
import { type TypewriterInstance, useTypewriter } from 'use-typewriter-animation';

const RESPONSE =
  'Steps can be queued while the typewriter is running, so text that arrives in chunks is ' +
  'typed in order as it comes in. When the typewriter catches up with the stream it waits, ' +
  'and the next start() continues from there.';

/** Stands in for a network stream: yields one word every 50–250 ms. */
async function* fakeStream(signal: AbortSignal) {
  for (const word of RESPONSE.split(/(?<= )/)) {
    await new Promise((resolve) => setTimeout(resolve, 50 + Math.random() * 200));
    if (signal.aborted) return;
    yield word;
  }
}

/** Queues every chunk as it arrives; start() continues whenever the typewriter has caught up. */
async function typeStream(typewriter: TypewriterInstance, signal: AbortSignal) {
  for await (const chunk of fakeStream(signal)) {
    typewriter.type(chunk).start();
  }
}

export default function Streaming() {
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 15 });

  useEffect(() => {
    const controller = new AbortController();
    typeStream(typewriter, controller.signal);
    return () => controller.abort();
  }, [typewriter]);

  return (
    <p className='demo-text'>
      {elements}
      {cursor}
    </p>
  );
}
