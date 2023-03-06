# use-typewriter-animation

> An utility hook to create typewriter animation effect in React.

Requires `React >= 16`
</br>

## Install

```bash
yarn add use-typewriter-animation
```

### Usage

```tsx
const { ref, typewriter } = useTypewriter(options);
```

```tsx
typewriter
  .type('Hello my name is use-typewriter-animation!')
  .pauseFor(100)
  .deleteLetters(1)
  .colorize('red')
  .type('Dogu!')
  .start();
```

```tsx
<div ref={ref} />
```

### Options

`options` accepts properties in the table below.

| property           |  type   |    \*    | default |
| ------------------ | :-----: | :------: | ------- |
| `loop`             | boolean | optional | false   |
| `typeSpeed (ms)`   | number  | optional | 30      |
| `deleteSpeed (ms)` | number  | optional | 30      |
| `color`            | string  | optional | #000    |

## Example

```tsx
import { useEffect } from 'react';
import { useTypewriter } from './useTypewriter';

const Typewriter = () => {
  const { ref, typewriter } = useTypewriter();

  useEffect(() => {
    typewriter
      .type('Hello, this is use-typewriter-animation hook!')
      .pauseFor(300)
      .deleteAll()
      .type('cyan magenta \n\ndarkgray')
      .pauseFor(200)
      .deleteLetters(5)
      .colorize('red')
      .type('yellow black white turquoise green')
      .deleteWords(2)
      .start();
  }, []);

  return <div ref={ref} />;
};

export default Typewriter;
```
