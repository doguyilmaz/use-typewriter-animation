type QueueCallback = () => Promise<void>;

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
  highlight: (
    start: number,
    length: number,
    style: { color?: string; background?: string }
  ) => TypewriterBaseType;
  highlightWords: (
    wordCount: number,
    from: 'start' | 'end',
    style: { color?: string; background?: string }
  ) => TypewriterBaseType;
  newLine: () => TypewriterBaseType;
  on: (event: 'typeStart' | 'typeEnd', callback: () => void) => TypewriterBaseType;
  start: () => Promise<void>;
  stop: () => void;
  unmount: () => void;
};

function injectCursorStyles() {
  if (document.getElementById('typewriter-cursor-styles')) return;

  const style = document.createElement('style');
  style.id = 'typewriter-cursor-styles';
  style.textContent = `
    .typewriter-cursor {
      display: inline-block;
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

function TypewriterBase(): TypewriterBaseType & {
  configure: (element: HTMLElement, options?: TypewriterBaseOptions) => TypewriterBaseType;
} {
  const QUEUE = [] as QueueCallback[];
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

  const addQueue = (callback: (resolve: () => void) => void) => {
    QUEUE.push(() => new Promise<void>(callback));
  };

  const configure = (element: HTMLElement, options: TypewriterBaseOptions = {}) => {
    ELEMENT = element;
    TYPE_SPEED = options.typeSpeed || TYPE_SPEED;
    DELETE_SPEED = options.deleteSpeed || DELETE_SPEED;
    LOOP = options.loop || LOOP;

    injectCursorStyles();

    if (!CURSOR) {
      CURSOR = document.createElement('span');
      CURSOR.classList.add('typewriter-cursor');

      // Default bar style
      CURSOR.innerHTML = '|';
      CURSOR.style.animationDuration = `${options.cursorBlinkSpeed || 500}ms`;
      CURSOR.style.color = options.cursorColor || 'black';
      const cursorWidth =
        typeof options.cursorWidth === 'number' ? options.cursorWidth + 'px' : options.cursorWidth;

      // Apply cursor styles based on the provided cursorStyle option
      switch (options.cursorStyle) {
        case 'block':
          CURSOR.innerHTML = ''; // Clear any existing inner content
          CURSOR.style.display = 'inline-block';
          CURSOR.style.width = cursorWidth || '0.6em'; // Allow user-defined width
          CURSOR.style.height = '1em'; // Full height of the text
          CURSOR.style.backgroundColor = options.cursorColor || 'black';
          break;

        case 'underline':
          CURSOR.innerHTML = ''; // Clear any existing inner content
          CURSOR.style.display = 'inline-block';
          CURSOR.style.width = cursorWidth || '1ch'; // Allow user-defined width
          CURSOR.style.borderBottom = `2px solid ${options.cursorColor || 'black'}`;
          break;

        case 'bar':
        default:
          CURSOR.innerHTML = '|'; // Default bar style with blinking
          CURSOR.style.display = 'inline';
          CURSOR.style.width = cursorWidth || 'auto'; // For bar style, usually no need for custom width
          break;
      }

      ELEMENT.appendChild(CURSOR);
    }

    return TypewriterBase;
  };

  const unmount = () => {
    QUEUE.length = 0;
    if (activeInterval) clearInterval(activeInterval);
    ELEMENT.innerHTML = '';
    EVENTS.typeStart = [];
    EVENTS.typeEnd = [];
    if (CURSOR) CURSOR.remove();
    CURSOR = null;
  };

  const TypewriterBase: TypewriterBaseType = {
    type: function (text: string, options = {}) {
      addQueue((resolve) => {
        if (!isRunning) {
          EVENTS.typeStart.forEach((callback) => callback());
          isRunning = true;
        }
        let i = 0;
        const speed = options.speed || TYPE_SPEED;
        activeInterval = window.setInterval(() => {
          const span = document.createElement('span');
          if (CURRENT_COLOR) span.style.color = CURRENT_COLOR;
          span.textContent = text[i];
          ELEMENT.insertBefore(span, CURSOR);
          i++;
          if (i >= text.length) {
            clearInterval(activeInterval!);
            resolve();
          }
        }, speed);
      });
      return this;
    },

    deleteLetters: function (letterCount: number) {
      addQueue((resolve) => {
        const totalCharacters = ELEMENT.innerText.length;
        if (letterCount >= totalCharacters) {
          letterCount = totalCharacters;
        }

        let i = 0;
        activeInterval = window.setInterval(() => {
          const lastNode = ELEMENT.childNodes[ELEMENT.childNodes.length - 2];
          if (lastNode && lastNode !== CURSOR) {
            ELEMENT.removeChild(lastNode);
          }
          i++;
          if (i >= letterCount || ELEMENT.innerText.length === 0) {
            clearInterval(activeInterval!);
            resolve();
          }
        }, DELETE_SPEED);
      });
      return this;
    },

    deleteWords: function (wordCount: number) {
      addQueue((resolve) => {
        const words = ELEMENT.innerText.trim().split(/\s+/); // Split the text into words
        if (wordCount >= words.length) {
          wordCount = words.length; // Delete all words
        }
        const charsToRemove = words.slice(-wordCount).join(' ').length;
        this.deleteLetters(charsToRemove).start().then(resolve);
      });
      return this;
    },
    deleteAll: function () {
      addQueue((resolve) => {
        const totalCharacters = ELEMENT.innerText.length;
        this.deleteLetters(totalCharacters);
        resolve();
      });
      return this;
    },

    pauseFor: function (duration: number) {
      addQueue((resolve) => setTimeout(resolve, duration));
      return this;
    },

    colorize: function (color: string) {
      addQueue((resolve) => {
        CURRENT_COLOR = color;
        resolve();
      });
      return this;
    },

    highlight: function (
      start: number,
      length: number,
      style: { color?: string; background?: string }
    ) {
      addQueue((resolve) => {
        const totalCharacters = ELEMENT.innerText.length;
        if (start + length > totalCharacters) {
          length = totalCharacters - start; // Highlight only up to the end of the text
        }
        const textNodes = Array.from(ELEMENT.childNodes) as HTMLElement[];
        for (let i = start; i < start + length && i < textNodes.length; i++) {
          if (style.color) textNodes[i].style.color = style.color;
          if (style.background) textNodes[i].style.backgroundColor = style.background;
        }

        resolve();
      });
      return this;
    },

    highlightWords: function (
      wordCount: number,
      from: 'start' | 'end',
      style: { color?: string; background?: string }
    ) {
      addQueue((resolve) => {
        const words = ELEMENT.innerText.trim().split(/\s+/);

        if (wordCount >= words.length) {
          wordCount = words.length;
        }

        let startIndex: number;
        let endIndex: number;

        if (from === 'start') {
          startIndex = 0;
          endIndex = wordCount;
        } else {
          startIndex = words.length - wordCount;
          endIndex = words.length;
        }

        let currentCharIndex = 0;
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          const wordLength = word.length;
          if (i >= startIndex && i < endIndex) {
            this.highlight(currentCharIndex, wordLength, style);
          }
          currentCharIndex += wordLength + 1;
        }

        resolve();
      });
      return this;
    },

    newLine: function () {
      addQueue((resolve) => {
        // Create a new <br> element for the new line
        const br = document.createElement('br');
        ELEMENT.insertBefore(br, CURSOR); // Insert the new line before the cursor
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
      for (let callback of QUEUE) {
        await callback();
      }
      if (LOOP) {
        this.start();
      } else {
        EVENTS.typeEnd.forEach((callback) => callback());
        isRunning = false;
      }
    },

    stop: function () {
      QUEUE.length = 0;
      if (activeInterval) clearInterval(activeInterval);
      isRunning = false;
    },

    unmount,
  };

  return { ...TypewriterBase, configure };
}

export default TypewriterBase;
