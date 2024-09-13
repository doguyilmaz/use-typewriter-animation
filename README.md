# use-typewriter-animation

`use-typewriter-animation` is a lightweight React hook that provides an intuitive way to create dynamic typewriter animations. It allows you to animate typing, deleting, and customizing text with various options like speed, color, highlights, and cursor styles.

## Features

- Customizable typing and deleting speeds for precise control over the animation.
- Support for text styling, including colorization and highlight transitions.
- Looping functionality for continuous typewriter animations.
- Flexible cursor styles with adjustable blink speed and color (block, underline, bar).
- Seamless integration with React using an intuitive hook-based API.
- Supports wrapping text in any HTML element (`<div>`, `<h1>`, `<p>`, etc.).
- Smooth text transitions for highlights and text effects.

## Installation

You can install the package via npm, Yarn, or Bun:

```bash
# Using npm
npm install use-typewriter-animation

# Using Yarn
yarn add use-typewriter-animation

# Using Bun
bun add use-typewriter-animation
```

## Usage

Here’s a simple example of how to use the `useTypewriter` hook in your React project:

```tsx
import React from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const MyTypewriterComponent = () => {
  const { ref, typewriter } = useTypewriter({
    typeSpeed: 50,
    deleteSpeed: 30,
    loop: true,
    cursorStyle: 'bar',
    cursorBlinkSpeed: 700,
    cursorColor: 'red',
  });

  React.useEffect(() => {
    typewriter
      .on('typeStart', () => console.log('Typing started!'))
      .on('typeEnd', () => console.log('Typing finished!'))
      .type('Hello, ')
      .colorize('red')
      .type('this will be red.', { speed: 80 })
      .pauseFor(500)
      .deleteLetters(5)
      .colorize('blue')
      .type(" Now it's blue!", { speed: 100 })
      .highlight(0, 5, { color: 'black', background: 'yellow' })
      .start();
  }, [typewriter]);

  // You can replace the <div> below with any HTML element like <h1>, <span>, <p>, etc.
  return <div ref={ref} />;
};

export default MyTypewriterComponent;
```

### Important Note:

You can replace the `<div ref={ref} />` with any other HTML element, such as:

- `<h1 ref={ref} />` for headings
- `<p ref={ref} />` for paragraphs
- `<span ref={ref} />` for inline elements

This allows for more flexibility in how you display the typewriter animation within your UI.

## API Reference

### `useTypewriter(options?: TypewriterBaseOptions)`

This hook returns a reference to the DOM element and an instance of the typewriter controller.

- **Arguments**:

  - `options`: A configuration object for customizing the typewriter animation. Available options:
    - `loop` (boolean): Whether the animation should loop. Default: `false`.
    - `typeSpeed` (number): Typing speed in milliseconds. Default: `30`.
    - `deleteSpeed` (number): Deleting speed in milliseconds. Default: `30`.
    - `cursorStyle` (string): The style of the cursor (`block`, `underline`, `bar`). Default: `bar`.
    - `cursorBlinkSpeed` (number): The speed of cursor blinking in milliseconds. Default: `500`.
    - `cursorColor` (string): Color of the cursor. Default: `black`.

- **Returns**:
  - `ref`: A `React.RefObject` to attach to the DOM element where the typewriter effect should render.
  - `typewriter`: An instance of `TypewriterBaseType` with the following methods.

### Methods on `typewriter`

- **`type(text: string, options?: { speed?: number })`**: Types the specified text at the given speed.
- **`deleteLetters(count: number)`**: Deletes the specified number of letters from the end of the text.
- **`deleteWords(count: number)`**: Deletes the specified number of words from the end of the text.
- **`deleteAll()`**: Deletes all the text currently rendered.
- **`pauseFor(duration: number)`**: Pauses the animation for the specified duration (in milliseconds).
- **`colorize(color: string)`**: Changes the color of the text being typed after the current cursor position.
- **`highlight(start: number, length: number, style: { color?: string; background?: string })`**: Highlights a portion of text with the specified color and/or background.
- **`highlightWords(count: number, from: 'start' | 'end', style: { color?: string; background?: string })`**: Highlights the specified number of words from either the start or the end of the text.
- **`newLine()`**: Inserts a new line (`<br>`) at the current position.
- **`on(event: 'typeStart' | 'typeEnd', callback: () => void)`**: Adds event listeners for when typing starts or ends.
- **`start()`**: Begins the typewriter animation.
- **`stop()`**: Stops the typewriter animation.
- **`unmount()`**: Removes the cursor and resets the state.

## Example

```tsx
import React from 'react';
import { useTypewriter } from 'use-typewriter-animation';

const ExampleComponent = () => {
  const { ref, typewriter } = useTypewriter({
    loop: false,
    typeSpeed: 100,
    cursorStyle: 'block',
  });

  React.useEffect(() => {
    typewriter
      .type('Hello World!')
      .pauseFor(500)
      .deleteAll()
      .type('Welcome to the Typewriter Hook!')
      .start();
  }, [typewriter]);

  return <div ref={ref}></div>;
};

export default ExampleComponent;
```

## Options Table

| Option             | Type    | Description                                       | Default |
| ------------------ | ------- | ------------------------------------------------- | ------- |
| `loop`             | boolean | Whether the animation should loop.                | `false` |
| `typeSpeed`        | number  | Speed of typing in milliseconds.                  | `30`    |
| `deleteSpeed`      | number  | Speed of deleting in milliseconds.                | `30`    |
| `cursorStyle`      | string  | Style of the cursor (`block`, `underline`, `bar`) | `bar`   |
| `cursorBlinkSpeed` | number  | Speed of cursor blinking in milliseconds.         | `500`   |
| `cursorColor`      | string  | Color of the cursor.                              | `black` |

## Building the Project

To build the project, use the following commands:

```bash
# Clean the build directory
npm run clean

# Build the project
npm run build

# Build the TypeScript declaration files
npm run types

# Format the source code
npm run format

# Run tests
npm run test
```

## Development

During development, use the `watch` script to recompile TypeScript files automatically:

```bash
npm run watch
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/doguyilmaz/use-typewriter-animation/blob/main/LICENSE) file for more information.

## Contributing

Contributions are welcome! Please open issues or submit pull requests on the [GitHub repository](https://github.com/doguyilmaz/use-typewriter-animation).
