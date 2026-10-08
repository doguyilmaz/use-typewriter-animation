import { useState } from 'react';
import { Typewriter } from 'use-typewriter-animation';

export default function SequenceCallbacks() {
  const [passes, setPasses] = useState(0);

  return (
    <>
      <Typewriter
        as='p'
        sequence={[
          'One',
          600,
          'One, two',
          600,
          'One, two, three',
          1000,
          () => setPasses((n) => n + 1),
          '',
        ]}
        loop
      />
      <p>Finished {passes} times</p>
    </>
  );
}
