type QueueCallback = () => Promise<void>;

export type TypewriterBaseOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  color?: string;
  // cursor?: boolean;
};

export type TypewriterBaseType = {
  type: (text: string) => TypewriterBaseType;
  deleteLetters: (letterCount: number) => TypewriterBaseType;
  deleteWords: (wordCount: number) => TypewriterBaseType;
  deleteAll: () => TypewriterBaseType;
  pauseFor: (duration: number) => TypewriterBaseType;
  colorize: (color: string) => TypewriterBaseType;
  start: () => Promise<void>;
};

function TypewriterBase() {
  // const intervals = new Map<string, number>(); // make interval map
  const QUEUE = [] as QueueCallback[];
  let ELEMENT = document.createElement('div') as HTMLElement;
  let TYPE_SPEED = 30;
  let DELETE_SPEED = 30;
  let LOOP = false;

  const addQueue = function (callback: (resolve: () => void) => void) {
    QUEUE.push(() => new Promise(callback));
  };

  const deleteAllInner = async (resolve?: () => void) => {
    const interval = setInterval(() => {
      ELEMENT.innerText = ELEMENT.innerText.substring(0, ELEMENT.innerText.length - 1);
      if (!ELEMENT.innerText.length) {
        if (resolve) resolve();
        clearInterval(interval);
      }
    }, DELETE_SPEED);
  };

  const unmount = () => {
    QUEUE.length = 0;
    ELEMENT.innerText = '';
  };

  const configure = (element: HTMLElement, options: TypewriterBaseOptions = {}) => {
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
        let i = 0;
        const interval = setInterval(() => {
          ELEMENT.append(text[i]);
          i++;
          if (i >= text.length) {
            resolve();
            clearInterval(interval);
          }
        }, TYPE_SPEED);
      });
      return this;
    },

    deleteLetters: function (letterCount: number) {
      addQueue((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
          ELEMENT.innerText = ELEMENT.innerText.substring(0, ELEMENT.innerText.length - 1);
          i++;
          if (i >= letterCount) {
            resolve();
            clearInterval(interval);
          }
        }, DELETE_SPEED);
      });
      return this;
    },

    deleteWords: function (wordCount: number) {
      addQueue((resolve) => {
        const words = ELEMENT.innerText.split(' ');
        if (!words.length) return;
        if (words.length < wordCount) {
          deleteAllInner(resolve);
          return;
        }

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
        ELEMENT.style.color = color;
        resolve();
      });
      return this;
    },
    start: async function () {
      if (!ELEMENT) if (!QUEUE.length) return;
      for (let callback of QUEUE) await callback();
      if (LOOP) {
        await deleteAllInner();
        this.start();
      }
    },
  };

  return { ...TypewriterBase, unmount, configure };
}

export default TypewriterBase;
