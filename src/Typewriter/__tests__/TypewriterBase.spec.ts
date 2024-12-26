import { expect, test, beforeEach, afterEach, mock } from 'bun:test';
import { TypewriterBase, environment } from '../TypewriterBase';

// Mock the environment
const mockEnvironment = {
  createElement: mock(() => ({
    innerHTML: '',
    appendChild: mock(() => {}),
    className: '',
  })),
  getElementById: mock(() => null),
  injectStyles: mock(() => {}),
  setInterval: mock((callback: () => void) => {
    callback(); // Immediately invoke the callback for testing
    return 'interval-id';
  }),
  clearInterval: mock(() => {}),
};

// Replace the real environment with the mock
Object.assign(environment, mockEnvironment);

let typewriter: ReturnType<typeof TypewriterBase>;
let element: any;

beforeEach(() => {
  element = environment.createElement('div');
  typewriter = TypewriterBase();
  typewriter.configure(element);
});

afterEach(() => {
  if (typewriter && typewriter.unmount) {
    typewriter.unmount();
  }
});

test('should type text correctly', async () => {
  await typewriter.type('Hello, World!');
  expect(element.innerHTML).toBe('Hello, World!');
});

test('should delete letters correctly', async () => {
  await typewriter.type('Hello, World!');
  await typewriter.deleteLetters(7);
  expect(element.innerHTML).toBe('Hello');
});

// Add more tests here...

test('should stop animation correctly', async () => {
  const typePromise = typewriter.type('This should be interrupted');
  typewriter.stop();
  await typePromise;
  expect(element.innerHTML.length).toBeLessThan('This should be interrupted'.length);
});
