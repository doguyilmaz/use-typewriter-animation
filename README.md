# use-typewriter-animation

> An utility hook to create typewriter animation effect in React.

Requires `React >= 16`
</br>
</br>

## Install

```bash
yarn add use-typewriter-animation
```

</br>

## Usage

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

</br>

## Options

#### `options` accepts properties in the table below.

</br>

| property           |  type   |    \*    | default |
| ------------------ | :-----: | :------: | ------- |
| `loop`             | boolean | optional | false   |
| `typeSpeed (ms)`   | number  | optional | 30      |
| `deleteSpeed (ms)` | number  | optional | 30      |
| `color`            | string  | optional | #000    |

</br>

## Available actions

#### Can be used as chained but make sure to use `start` at last to trigger sequence.

</br>

| Function           | Purpose                                           |
| ------------------ | ------------------------------------------------- |
| `type("Example")`  | Types the given (Example) text.                   |
| `deleteLetters(5)` | Deletes the (5) letters from the end of text.     |
| `deleteWords(2)`   | Deletes the (2) words from the end of text.       |
| `deleteAll()`      | Deletes all the text.                             |
| `pauseFor(300)`    | Pauses (300ms) the typing for the specified time. |
| `colorize("red")`  | Changes the color (red) of the text.              |
| `start()`          | Triggers the sequence & starts the typing.        |

</br>

```ts
type TypewriterBaseType = {
  type: (text: string) => TypewriterBaseType;
  deleteLetters: (letterCount: number) => TypewriterBaseType;
  deleteWords: (wordCount: number) => TypewriterBaseType;
  deleteAll: () => TypewriterBaseType;
  pauseFor: (duration: number) => TypewriterBaseType;
  colorize: (color: string) => TypewriterBaseType;
  start: () => Promise<void>;
};
```

</br>

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

> License: MIT
