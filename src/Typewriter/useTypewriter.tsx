import { useEffect, useRef } from 'react';
import TypewriterBase, { TypewriterBaseOptions, TypewriterBaseType } from './TypewriterBase';

export const useTypewriter = (
  options?: TypewriterBaseOptions
): { ref: React.RefObject<HTMLDivElement>; typewriter: TypewriterBaseType } => {
  const ref = useRef<HTMLDivElement>(null);
  const typewriter = TypewriterBase();

  useEffect(() => {
    if (!ref.current) {
      console.error('Element ref is not initialized!');
      return;
    }

    typewriter.configure(ref.current, options);

    return () => {
      typewriter.unmount();
    };
  }, [options]);

  return { ref, typewriter };
};
