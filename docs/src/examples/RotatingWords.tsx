import { Typewriter } from 'use-typewriter-animation';

export default function RotatingWords() {
  return (
    <Typewriter
      as='p'
      className='demo-title'
      sequence={['I build websites', 1500, 'I build apps', 1500, 'I build games', 1500]}
      typeSpeed={60}
      deleteSpeed={40}
      loop
    />
  );
}
