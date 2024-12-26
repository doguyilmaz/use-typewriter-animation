import { LinkedList } from './utils/LinkedList';

type HighlightStyle = { background: string; color?: string };
type HighlightFrom = 'start' | 'end';
type TypeOnEvents = 'typeStart' | 'typeEnd';
type TypewriterConfigure = (
  element: HTMLElement,
  options?: TypewriterBaseOptions
) => TypewriterBaseType;

export type TypewriterBaseOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  cursorStyle?: 'block' | 'underline' | 'bar';
  cursorBlinkSpeed?: number;
  cursorColor?: string;
  cursorWidth?: string | number;
};

export type TypewriterBaseType = {
  type: (text: string, options?: { speed?: number }) => TypewriterBaseType;
  deleteLetters: (letterCount: number) => TypewriterBaseType;
  deleteWords: (wordCount: number) => TypewriterBaseType;
  deleteAll: () => TypewriterBaseType;
  pauseFor: (duration: number) => TypewriterBaseType;
  colorize: (color: string) => TypewriterBaseType;
  highlight: (start: number, length: number, style: HighlightStyle) => TypewriterBaseType;
  highlightWords: (
    wordCount: number,
    from: HighlightFrom,
    style: HighlightStyle
  ) => TypewriterBaseType;
  newLine: () => TypewriterBaseType;
  on: (event: TypeOnEvents, callback: () => void) => TypewriterBaseType;
  start: () => Promise<void>;
  stop: () => void;
  unmount: () => void;
};

// Separate browser-specific operations
const browserOperations = {
  createElement: (tag: string): HTMLElement | null =>
    typeof document !== 'undefined' ? document.createElement(tag) : null,

  getElementById: (id: string): HTMLElement | null =>
    typeof document !== 'undefined' ? document.getElementById(id) : null,

  injectStyles: (styles: string) => {
    if (typeof document === 'undefined') return;
    if (document.getElementById('typewriter-global-styles')) return;
    const styleElement = document.createElement('style');
    styleElement.id = 'typewriter-global-styles';
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
  },
};

// Use these operations in your code
function injectGlobalStyles() {
  browserOperations.injectStyles(`
    .typewriter-cursor {
      display: inline-block;
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }

    .highlight-transition {
      transition: color 0.5s ease, background-color 0.5s ease;
    }
  `);
}

interface QueueItem {
  fn: (options?: any) => void;
  options?: any;
}

export const environment = {
  createElement: (tag: string): any =>
    typeof document !== 'undefined' ? document.createElement(tag) : {},
  getElementById: (id: string): any =>
    typeof document !== 'undefined' ? document.getElementById(id) : null,
  injectStyles: (styles: string) => {
    if (typeof document === 'undefined') return;
    if (document.getElementById('typewriter-global-styles')) return;
    const styleElement = document.createElement('style');
    styleElement.id = 'typewriter-global-styles';
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
  },
  setInterval: (callback: () => void, ms: number): any =>
    typeof window !== 'undefined' ? window.setInterval(callback, ms) : null,
  clearInterval: (id: any) => {
    if (typeof window !== 'undefined') {
      window.clearInterval(id);
    }
  },
};

function TypewriterBase(): TypewriterBaseType & {
  configure: TypewriterConfigure;
} {
  const queue = new LinkedList<QueueItem>();

  const EVENTS: { typeStart: (() => void)[]; typeEnd: (() => void)[] } = {
    typeStart: [],
    typeEnd: [],
  };
  let ELEMENT: HTMLElement;
  let CURSOR: HTMLElement | null = null;
  let TYPE_SPEED = 30;
  let DELETE_SPEED = 30;
  let CURRENT_COLOR = '';
  let LOOP = false;
  let isRunning = false;
  let activeInterval: number | null = null;

  const addToQueue = (fn: QueueItem['fn'], options?: QueueItem['options']) => {
    queue.push({ fn, options });
    if (!isRunning) processQueue();
  };

  // Consider using requestAnimationFrame for smoother animations
  const processQueue = () => {
    if (queue.isEmpty()) {
      isRunning = false;
      return;
    }

    const item = queue.shift();
    if (item) {
      item.fn(item.options);
      requestAnimationFrame(processQueue);
    }
  };

  const configure: TypewriterConfigure = (element, options = {}) => {
    injectGlobalStyles(); // Inject global styles once

    ELEMENT = element;
    TYPE_SPEED = options.typeSpeed || TYPE_SPEED;
    DELETE_SPEED = options.deleteSpeed || DELETE_SPEED;
    LOOP = options.loop || LOOP;

    if (!CURSOR) {
      CURSOR = browserOperations.createElement('span');
      if (CURSOR) {
        CURSOR.className = 'typewriter-cursor';
        CURSOR.innerHTML = '|';
      }
    }

    return TypewriterBase;
  };

  const unmount = () => {
    queue.clear(); // Changed from QUEUE.length = 0
    if (activeInterval) clearInterval(activeInterval);
    ELEMENT.innerHTML = '';
    EVENTS.typeStart = [];
    EVENTS.typeEnd = [];
    if (CURSOR) CURSOR.remove();
    CURSOR = null;
  };

  const TypewriterBase: TypewriterBaseType = {
    type: function (text, options = {}) {
      addToQueue((resolve) => {
        if (!isRunning) {
          for (const callback of EVENTS.typeStart) {
            callback();
          }
          isRunning = true;
        }
        let i = 0;
        const speed = options.speed || TYPE_SPEED;
        activeInterval = environment.setInterval(() => {
          const span = document.createElement('span');
          if (CURRENT_COLOR) span.style.color = CURRENT_COLOR;
          span.textContent = text[i];
          ELEMENT.insertBefore(span, CURSOR);
          i++;
          if (i >= text.length) {
            clearInterval(activeInterval ?? undefined);
            resolve();
          }
        }, speed);
      });
      return this;
    },
    deleteLetters: function (letterCount) {
      addToQueue((resolve) => {
        const totalCharacters = ELEMENT.innerText.length;
        const count = letterCount >= totalCharacters ? totalCharacters : letterCount;
        let i = 0;
        const deleteInterval = () => {
          const lastNode = ELEMENT.childNodes[ELEMENT.childNodes.length - 2];
          if (lastNode && lastNode !== CURSOR) {
            ELEMENT.removeChild(lastNode);
          }
          i++;
          if (i >= count || ELEMENT.innerText.length === 0) {
            resolve();
          } else {
            setTimeout(deleteInterval, DELETE_SPEED);
          }
        };
        deleteInterval();
      });
      return this;
    },
    deleteWords: function (wordCount) {
      addToQueue((resolve) => {
        const words = ELEMENT.innerText.trim().split(/\s+/); // Split the text into words
        const count = wordCount >= words.length ? words.length : wordCount;
        const charsToRemove = words.slice(-count).join(' ').length;
        this.deleteLetters(charsToRemove);
        resolve();
      });
      return this;
    },
    deleteAll: function () {
      addToQueue((resolve) => {
        const totalCharacters = ELEMENT.innerText.length;
        this.deleteLetters(totalCharacters);
        CURRENT_COLOR = '';
        resolve();
      });
      return this;
    },
    pauseFor: function (duration) {
      addToQueue((resolve) => setTimeout(resolve, duration));
      return this;
    },
    colorize: function (color) {
      addToQueue((resolve) => {
        CURRENT_COLOR = color;
        resolve();
      });
      return this;
    },
    highlight: function (start, length, style) {
      addToQueue((resolve) => {
        const totalCharacters = ELEMENT.innerText.length;
        const chars = start + length > totalCharacters ? totalCharacters - start : length;
        const textNodes = Array.from(ELEMENT.childNodes) as HTMLElement[];
        for (let i = start; i < start + chars && i < textNodes.length; i++) {
          const node = textNodes[i];
          node.classList.add('highlight-transition'); // Apply transition class
          setTimeout(() => {
            if (style.color) node.style.color = style.color;
            if (style.background) node.style.backgroundColor = style.background;
          }, 10); // Trigger the transition
        }

        resolve();
      });
      return this;
    },
    highlightWords: function (wordCount, from, style) {
      addToQueue((resolve) => {
        const words = ELEMENT.innerText.trim().split(/\s+/);
        const count = wordCount >= words.length ? words.length : wordCount;

        let startIndex: number;
        let endIndex: number;

        if (from === 'start') {
          startIndex = 0;
          endIndex = count;
        } else {
          startIndex = words.length - count;
          endIndex = words.length;
        }

        let currentCharIndex = 0;
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          const wordLength = word.length;
          if (i >= startIndex && i < endIndex) {
            this.highlight(currentCharIndex, wordLength, style);
          }
          currentCharIndex += wordLength + 1; // +1 for the space between words
        }

        resolve();
      });
      return this;
    },
    newLine: function () {
      addToQueue((resolve) => {
        const br = document.createElement('br');
        ELEMENT.insertBefore(br, CURSOR);
        resolve();
      });
      return this;
    },
    on: function (event, callback) {
      if (EVENTS[event]) {
        EVENTS[event].push(callback);
      }
      return this;
    },
    start: async function () {
      isRunning = true;
      while (!queue.isEmpty()) {
        const item = queue.shift();
        if (item) {
          await new Promise<void>((resolve) => item.fn({ ...item.options, resolve }));
        }
      }
      if (LOOP) {
        this.start();
      } else {
        for (const callback of EVENTS.typeEnd) {
          callback();
        }
        isRunning = false;
      }
    },
    stop: () => {
      queue.clear(); // Changed from QUEUE.length = 0
      if (activeInterval) clearInterval(activeInterval);
      isRunning = false;
    },
    unmount,
  };

  return { ...TypewriterBase, configure };
}

export default TypewriterBase;

// Export for testing purposes
export { browserOperations };

export { TypewriterBase };
