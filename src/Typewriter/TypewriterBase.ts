export type TypewriterBaseOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  color?: string;
  // cursor?: boolean;
};
type QueueCallback = () => Promise<void>;

// EXPORTS

type TypewriterBase = {
  ELEMENT: HTMLElement;
  TYPE_SPEED: number;
  DELETE_SPEED: number;
  LOOP: boolean;
  QUEUE: QueueCallback[];
  addQueue: (callback: (resolve: () => void) => void) => void;
  deleteAllInner: (resolve?: () => void) => Promise<TypewriterBase>;
  mount: (element: HTMLElement) => void;
  configure: (options: TypewriterBaseOptions) => TypewriterBase;
  type: (text: string) => TypewriterBase;
  deleteLetters: (letterCount: number) => TypewriterBase;
  deleteWords: (wordCount: number) => TypewriterBase;
  deleteAll: () => TypewriterBase;
  pauseFor: (duration: number) => TypewriterBase;
  colorize: (color: string) => TypewriterBase;
  start: () => Promise<void>;
  unmount: () => TypewriterBase;
};

const TypewriterBase: TypewriterBase = {
  ELEMENT: document.createElement('div')!,
  TYPE_SPEED: 30,
  DELETE_SPEED: 30,
  LOOP: false,
  QUEUE: [] as QueueCallback[],
  addQueue: function (callback: (resolve: () => void) => void) {
    this.QUEUE.push(() => new Promise(callback));
    return this;
  },

  deleteAllInner: async function (resolve?: () => void) {
    const interval = setInterval(() => {
      this.ELEMENT.innerText = this.ELEMENT.innerText.substring(
        0,
        this.ELEMENT.innerText.length - 1
      );
      if (!this.ELEMENT.innerText.length) {
        if (resolve) resolve();
        clearInterval(interval);
      }
    }, this.DELETE_SPEED);
    return this;
  },
  mount: function (element: HTMLElement) {
    this.ELEMENT = element;
  },
  unmount: function () {
    console.log('called');
    this.QUEUE.length = 0;
    this.ELEMENT.remove();
    return this;
  },
  configure: function (options: TypewriterBaseOptions) {
    this.TYPE_SPEED = options.typeSpeed || this.TYPE_SPEED;
    this.DELETE_SPEED = options.deleteSpeed || this.DELETE_SPEED;
    this.LOOP = options.loop || this.LOOP;
    if (options.color) this.ELEMENT.style.color = options.color;
    return this;
  },

  type: function (text: string) {
    console.log(text, 'here text');
    this.addQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.ELEMENT.append(text[i]);
        i++;
        if (i >= text.length) {
          resolve();
          clearInterval(interval);
        }
      }, this.TYPE_SPEED);
    });
    return this;
  },

  deleteLetters: function (letterCount: number) {
    this.addQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.ELEMENT.innerText = this.ELEMENT.innerText.substring(
          0,
          this.ELEMENT.innerText.length - 1
        );
        i++;
        if (i >= letterCount) {
          resolve();
          clearInterval(interval);
        }
      }, this.DELETE_SPEED);
    });
    return this;
  },

  deleteWords: function (wordCount: number) {
    this.addQueue((resolve) => {
      const words = this.ELEMENT.innerText.split(' ');
      if (!words.length) return;
      if (words.length < wordCount) {
        this.deleteAllInner(resolve);
        return;
      }

      const len = words.slice(words.length - wordCount).join(' ').length + 1;
      this.deleteLetters(len);
      resolve();
    });
    return this;
  },

  deleteAll: function () {
    this.addQueue((resolve) => this.deleteAllInner(resolve));
    return this;
  },

  pauseFor: function (duration: number) {
    this.addQueue((resolve) => setTimeout(resolve, duration));
    return this;
  },

  colorize: function (color: string) {
    this.addQueue((resolve) => {
      this.ELEMENT.style.color = color;
      resolve();
    });
    return this;
  },
  start: async function () {
    console.log('start');
    console.log(this.QUEUE, 'this.queue');

    if (!this.ELEMENT) if (!this.QUEUE.length) return;
    for (let callback of this.QUEUE) await callback();
    if (this.LOOP) {
      await this.deleteAllInner();
      this.start();
    }
  },

  // if (options) configure(options);
  // if (element) ELEMENT = element;

  // return {
  //   mount,
  //   configure,
  //   type,
  //   deleteLetters,
  //   deleteWords,
  //   deleteAll,
  //   pauseFor,
  //   colorize,
  //   start,
  //   unmount,
  // };
};

export default TypewriterBase;
export type TypewriterBaseType = TypewriterBase;

function makeFunc() {
  const name = 'Mozilla';
  const obj = {
    result: 0,
    addNumber: function (a: number, b: number) {
      this.result = a + b;
      return this;
    },

    multiplyNumber: function (a: number) {
      this.result = this.result * a;
      return this;
    },
  };

  function displayName() {
    console.log(name);
  }
  function displayName2() {
    console.log(name);
  }
  return { displayName, displayName2, obj };
}

// const myFunc = makeFunc();
// const bbb = myFunc.obj.addNumber(4, 5).multiplyNumber(3).result;
