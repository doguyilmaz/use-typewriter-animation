import { useEffect, useRef } from 'react';
import TypewriterBase, { TypewriterBaseOptions } from './TypewriterBase';

const useTypewriter = (options?: TypewriterBaseOptions) => {
  const elemRef = useRef<HTMLDivElement>(null);
  const twRef = useRef<TypewriterBase | null>(null);

  useEffect(() => {
    twRef.current = new TypewriterBase(elemRef.current!, {
      loop: false,
      deleteSpeed: 30,
      typeSpeed: 30,
      color: '#000',
      ...options,
    });

    // twRef.current.start();

    return () => {
      unmount();
    };
  }, []);

  const start = async () => {
    // if (!elemRef.current) throw new Error('Element ref is not initialized!');
    // if (!twRef.current) throw new Error('Typewriter is not initialized!');
    // await twRef.current.start();
  };

  // const setup = (ref: HTMLDivElement) => {
  //   // setTypewriter(
  //   //   new TypewriterBase(ref, {
  //   //     loop: false,
  //   //     deleteSpeed: 30,
  //   //     typeSpeed: 30,
  //   //     color: '#000',
  //   //     ...options,
  //   //   })
  //   // );
  // };

  const unmount = () => {
    console.log('unmount:useTypewriter');
    if (!elemRef.current) throw new Error('Parent ref is not initialized!');
    if (!twRef.current) throw new Error('Typewriter is not initialized!');
    twRef.current.unmount();
  };

  return { ref: elemRef, typewriter: twRef.current, start, setup: () => {}, unmount };
};

export default useTypewriter;
