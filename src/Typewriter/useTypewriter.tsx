import { useEffect, useRef } from 'react';
import TypewriterBase, { TypewriterBaseOptions } from './TypewriterBase';

const useTypewriter = (options?: TypewriterBaseOptions) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const typewriter = useRef<TypewriterBase | null>(null);

  useEffect(() => {
    if (!parentRef.current) return;
    typewriter.current = new TypewriterBase(parentRef.current!, {
      loop: false,
      deleteSpeed: 30,
      typeSpeed: 30,
      color: '#000',
      ...options,
    });

    return () => {
      typewriter.current = null;
    };
  }, []);

  const start = async () => {
    await typewriter.current?.start();
    console.log('here');
    if (parentRef.current) console.log(parentRef || undefined, 'parentRef');
  };

  // if (!typewriter.current) throw new Error('Typewriter is not initialized!');

  return { ref: parentRef, typewriter: typewriter.current!, start };
};

export default useTypewriter;
