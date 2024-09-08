import { useEffect, useRef } from 'react';
import TypewriterBase, { TypewriterBaseOptions } from './TypewriterBase';

const { configure, unmount, ...typewriter } = TypewriterBase();

export const useTypewriter = (options?: TypewriterBaseOptions) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      console.error('Typewriter element ref is not available');
      return;
    }

    // Initialize typewriter on the provided element
    configure(ref.current, options);

    // Clean up on unmount
    return () => {
      unmount();
    };
  }, [options]);

  return { ref, typewriter }; // Return ref and typewriter methods
};
