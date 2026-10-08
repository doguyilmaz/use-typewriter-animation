import { useEffect, useState } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function Events() {
  const [log, setLog] = useState<string[]>([]);
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 50 });

  useEffect(() => {
    let active = true;
    const add = (entry: string) => {
      if (active) setLog((entries) => [...entries, entry]);
    };
    const onStart = () => add('start');
    const onEnd = () => add('end');
    typewriter.on('start', onStart);
    typewriter.on('end', onEnd);
    typewriter
      .type('Listen with on(), ')
      .call(() => add('call()'))
      .type('or await start().')
      .start()
      .then(() => add('promise resolved'));
    return () => {
      active = false;
      setLog([]);
      typewriter.off('start', onStart);
      typewriter.off('end', onEnd);
    };
  }, [typewriter]);

  return (
    <>
      <p>
        {elements}
        {cursor}
      </p>
      <p>
        <code>{log.join(' → ') || '…'}</code>
      </p>
    </>
  );
}
