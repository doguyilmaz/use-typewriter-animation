import { Typewriter } from 'use-typewriter-animation';

export default function Cursors() {
  return (
    <>
      <p>
        <Typewriter sequence={['bar']} cursorStyle='bar' />
      </p>
      <p>
        <Typewriter sequence={['block']} cursorStyle='block' />
      </p>
      <p>
        <Typewriter sequence={['underline']} cursorStyle='underline' />
      </p>
      <p>
        <Typewriter
          sequence={['custom']}
          cursorChar='●'
          cursorColor='#e11d48'
          cursorBlinkSpeed={600}
        />
      </p>
      <p>
        <Typewriter sequence={['no cursor']} enableCursor={false} />
      </p>
    </>
  );
}
