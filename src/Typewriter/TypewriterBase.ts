type QueueCallback = () => Promise<void>;

export type TypewriterBaseOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  color?: string;
  cursor?: boolean;
  onTypingComplete?: () => void;
  onDeleteComplete?: () => void;
};

export type TypewriterBaseType = {
  type: (text: string) => TypewriterBaseType;
  deleteLetters: (letterCount: number) => TypewriterBaseType;
  deleteWords: (wordCount: number) => TypewriterBaseType;
  deleteAll: () => TypewriterBaseType;
  pauseFor: (duration: number) => TypewriterBaseType;
  colorize: (color: string) => TypewriterBaseType;
  start: () => Promise<void>;
  stop: () => void;
};

function TypewriterBase() {
  const QUEUE = [] as QueueCallback[];
  let ELEMENT: HTMLElement;
  let TYPE_SPEED = 30;
  let DELETE_SPEED = 30;
  let LOOP = false;
  let CURRENT_COLOR = '';
  let stopLoop = false;
  let currentInterval: number | null = null; // Track the current interval

  const addQueue = (callback: (resolve: () => void) => void) => {
    QUEUE.push(() => new Promise(callback));
  };

  const clearCurrentInterval = () => {
    if (currentInterval !== null) {
      clearInterval(currentInterval);
      currentInterval = null;
    }
  };

  const deleteAllInner = async (resolve?: () => void) => {
    clearCurrentInterval();
    currentInterval = window.setInterval(() => {
      ELEMENT.innerText = ELEMENT.innerText.substring(0, ELEMENT.innerText.length - 1);
      if (!ELEMENT.innerText.length) {
        clearCurrentInterval();
        CURRENT_COLOR = ''; // Reset color after deletion
        if (resolve) resolve();
      }
    }, DELETE_SPEED);
  };

  const unmount = () => {
    console.log('Unmounting typewriter');
    QUEUE.length = 0;
    ELEMENT.innerText = '';
    clearCurrentInterval(); // Clean up any intervals when unmounting
  };

  const configure = (element: HTMLElement, options: TypewriterBaseOptions = {}) => {
    console.log('Configuring typewriter with options:', options);
    ELEMENT = element;
    TYPE_SPEED = options.typeSpeed || TYPE_SPEED;
    DELETE_SPEED = options.deleteSpeed || DELETE_SPEED;
    LOOP = options.loop || LOOP;
    if (options.color) ELEMENT.style.color = options.color;
    return TypewriterBase;
  };

  const TypewriterBase: TypewriterBaseType = {
    type: function (text: string) {
      addQueue((resolve) => {
        clearCurrentInterval(); // Clear any previous interval
        let i = 0;
        console.log('Typing text:', text);
        currentInterval = window.setInterval(() => {
          const span = document.createElement('span');
          if (CURRENT_COLOR) span.style.color = CURRENT_COLOR;
          span.textContent = text[i];
          ELEMENT.appendChild(span);
          i++;
          if (i >= text.length) {
            console.log('Finished typing text:', text);
            clearCurrentInterval(); // Stop the interval
            resolve();
          }
        }, TYPE_SPEED);
      });
      return this;
    },

    deleteLetters: function (letterCount: number) {
      addQueue((resolve) => {
        clearCurrentInterval(); // Clear any previous interval
        let i = 0;
        console.log('Deleting letters:', letterCount);
        currentInterval = window.setInterval(() => {
          ELEMENT.removeChild(ELEMENT.lastChild as Node);
          i++;
          if (i >= letterCount) {
            clearCurrentInterval(); // Stop the interval
            CURRENT_COLOR = ''; // Reset color after deletion
            resolve();
          }
        }, DELETE_SPEED);
      });
      return this;
    },

    deleteWords: function (wordCount: number) {
      addQueue((resolve) => {
        const words = ELEMENT.innerText.split(' ');
        if (!words.length) return;
        const len = words.slice(words.length - wordCount).join(' ').length + 1;
        this.deleteLetters(len);
        resolve();
      });
      return this;
    },

    deleteAll: function () {
      addQueue((resolve) => deleteAllInner(resolve));
      return this;
    },

    pauseFor: function (duration: number) {
      addQueue((resolve) => setTimeout(resolve, duration));
      return this;
    },

    colorize: function (color: string) {
      addQueue((resolve) => {
        console.log('Colorizing with:', color);
        CURRENT_COLOR = color;
        resolve();
      });
      return this;
    },

    start: async function () {
      if (!ELEMENT || !QUEUE.length) return;
      stopLoop = false;
      console.log('Starting typewriter...');
      do {
        for (let callback of QUEUE) {
          await callback();
          if (stopLoop) return;
        }
        if (LOOP) {
          await deleteAllInner();
        }
      } while (LOOP && !stopLoop);
    },

    stop: function () {
      stopLoop = true;
      clearCurrentInterval(); // Stop any active interval
    },
  };

  return { ...TypewriterBase, unmount, configure };
}

export default TypewriterBase;
