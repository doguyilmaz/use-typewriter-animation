import { useEffect, useRef } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export default function StartOnView() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { typewriter, elements, cursor } = useTypewriter({ typeSpeed: 40 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    typewriter.type('This started typing when it scrolled into view.');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        typewriter.start();
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [typewriter]);

  return (
    <p ref={ref}>
      {elements}
      {cursor}
    </p>
  );
}
