import { useState } from 'react';
import { type CursorStyle, Typewriter } from 'use-typewriter-animation';

const CURSOR_STYLES: CursorStyle[] = ['bar', 'block', 'underline'];

export default function Playground() {
  const [typeSpeed, setTypeSpeed] = useState(60);
  const [humanize, setHumanize] = useState(0);
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>('bar');

  return (
    <div>
      <Typewriter
        as='p'
        className='demo-title'
        sequence={[
          'Change the speed',
          1200,
          'Change the cursor',
          1200,
          'Emoji stay whole 👩‍👩‍👧 🇹🇷',
          1500,
        ]}
        typeSpeed={typeSpeed}
        deleteSpeed={typeSpeed / 2}
        humanize={humanize}
        cursorStyle={cursorStyle}
        loop
      />
      <div className='demo-controls'>
        <label>
          Speed{' '}
          <input
            type='range'
            min={5}
            max={200}
            value={typeSpeed}
            onChange={(event) => setTypeSpeed(event.target.valueAsNumber)}
          />{' '}
          {typeSpeed} ms
        </label>
        <label>
          Humanize{' '}
          <input
            type='range'
            min={0}
            max={1}
            step={0.1}
            value={humanize}
            onChange={(event) => setHumanize(event.target.valueAsNumber)}
          />{' '}
          {humanize}
        </label>
        <label>
          Cursor{' '}
          <select
            value={cursorStyle}
            onChange={(event) => setCursorStyle(event.target.value as CursorStyle)}
          >
            {CURSOR_STYLES.map((style) => (
              <option key={style}>{style}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
