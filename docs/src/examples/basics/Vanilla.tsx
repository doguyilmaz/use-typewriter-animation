import { useEffect, useRef } from 'react';
import { createTypewriter } from 'use-typewriter-animation';

// createTypewriter has no React in it. Here it writes straight into a DOM node.
export default function Vanilla() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typewriter = createTypewriter({ typeSpeed: 40 });
    const unsubscribe = typewriter.subscribe(() => {
      if (ref.current) ref.current.textContent = typewriter.getState().text;
    });
    typewriter.type('No React state involved: the engine writes to textContent.').start();
    return () => {
      unsubscribe();
      typewriter.reset();
    };
  }, []);

  return <p ref={ref} />;
}
