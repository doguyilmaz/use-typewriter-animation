import { useEffect, useRef } from 'react';
import TypewriterBase, { TypewriterBaseOptions } from './TypewriterBase';

const { unmount, configure, ...typewriter } = TypewriterBase();

const useTypewriter = (options?: TypewriterBaseOptions, disableUnmount = false) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) throw new Error('Element ref is not initialized!');
    configure(ref.current, options);

    return () => {
      if (disableUnmount) return;
      unmount();
    };
  }, []);

  return { ref, typewriter };
};

export default useTypewriter;
