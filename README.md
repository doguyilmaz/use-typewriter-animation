# use-typewriter-animation

`use-typewriter-animation` is a React hook that provides an easy way to create typewriter animation effects. It allows you to animate typing, deleting, and customizing text with various options like speed, colorization, and cursor styles.

## Features

- Typewriter animation with customizable typing and deleting speeds.
- Supports multiple text styling options (color, highlight).
- Looping options for continuous animations.
- Customizable cursor styles (block, underline, bar).
- Easy integration with React using hooks.

## Installation

You can install the package via npm or Yarn:

```bash
# Using npm
npm install use-typewriter-animation

# Using Yarn
yarn add use-typewriter-animation

# Using Bun
bun add use-typewriter-animation
```

## Usage

Here's a simple example of how to use the `useTypewriter` hook in your React project:

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
      .highlight(0, 5, { color: 'black', background: 'white' })
      .start();
  }, [typewriter]);

  return <div ref={ref}></div>;
};

export default MyTypewriterComponent;
```

## API Reference

### `useTypewriter(options?: TypewriterBaseOptions)`

This hook provides access to a reference object and the typewriter instance. The typewriter instance exposes methods for controlling the animation.

- **Arguments**:

  - `options` (optional): A configuration object for the typewriter. The available options are:
    - `loop` (boolean): Whether the animation should loop. Default: `false`.
    - `typeSpeed` (number): Speed of typing in milliseconds. Default: `30`.
    - `deleteSpeed` (number): Speed of deleting text in milliseconds. Default: `30`.
    - `cursorStyle` (string): Style of the cursor (`block`, `underline`, `bar`). Default: `bar`.
    - `cursorBlinkSpeed` (number): Blink speed of the cursor in milliseconds. Default: `500`.
    - `cursorColor` (string): The color of the cursor. Default: `black`.

- **Returns**:
  - `ref`: A `React.RefObject` to attach to the DOM element where the animation should occur.
  - `typewriter`: An instance of `TypewriterBaseType` for controlling the animation.

### Methods on `typewriter`

- **`type(text: string, options?: { speed?: number })`**: Types the specified text.
- **`deleteLetters(count: number)`**: Deletes the specified number of letters.
- **`deleteWords(count: number)`**: Deletes the specified number of words.
- **`deleteAll()`**: Deletes all the text.
- **`pauseFor(duration: number)`**: Pauses the animation for the specified duration (in milliseconds).
- **`colorize(color: string)`**: Changes the text color after the current cursor position.
- **`highlight(start: number, length: number, style: { color?: string; background?: string })`**: Highlights a portion of text with the specified color and/or background.
- **`on(event: 'typeStart' | 'typeEnd', callback: () => void)`**: Adds a callback for when typing starts or ends.
- **`start()`**: Starts the typewriter animation.
- **`stop()`**: Stops the typewriter animation.
- **`unmount()`**: Cleans up the typewriter instance and removes the cursor.

## Building the Project

To build the project, you can use the following scripts:

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

# Publish the package
npm run release
```

## Development

To start development, use the `watch` script:

```bash
npm run watch
```

This will watch for changes in your TypeScript files and automatically recompile them.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/doguyilmaz/use-typewriter-animation/blob/main/LICENSE) file for more details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/doguyilmaz/use-typewriter-animation).
