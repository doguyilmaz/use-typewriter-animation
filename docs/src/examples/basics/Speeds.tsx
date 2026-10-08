import { Typewriter } from 'use-typewriter-animation';

const TEXT = 'The quick brown fox jumps over the lazy dog.';

export default function Speeds() {
  return (
    <>
      <p>
        <code>typeSpeed=100</code> <Typewriter sequence={[TEXT]} typeSpeed={100} />
      </p>
      <p>
        <code>typeSpeed=30</code> <Typewriter sequence={[TEXT]} typeSpeed={30} />
      </p>
      <p>
        <code>humanize=0.8</code> <Typewriter sequence={[TEXT]} typeSpeed={60} humanize={0.8} />
      </p>
    </>
  );
}
