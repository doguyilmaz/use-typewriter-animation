import { Typewriter } from 'use-typewriter-animation';

export default function Loop() {
  return (
    <Typewriter
      as='p'
      sequence={['I like cats', 1500, 'I like dogs', 1500, 'I like ducks', 1500]}
      loop
    />
  );
}
