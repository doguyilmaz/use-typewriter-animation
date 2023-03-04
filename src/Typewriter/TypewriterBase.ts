export type TypewriterBaseOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  color?: string;
  cursor?: boolean;
};

type QueueCallback = () => Promise<void>;

class TypewriterBase {
  #queue: QueueCallback[] = [];
  #element: HTMLElement;
  #loop: boolean;
  #typeSpeed: number;
  #deleteSpeed: number;
  #color = '#000';
  #cursor = true;

  constructor(
    element: HTMLElement,
    { loop = false, typeSpeed = 100, deleteSpeed = 100, color, cursor }: TypewriterBaseOptions = {}
  ) {
    this.#loop = loop;
    this.#typeSpeed = typeSpeed;
    this.#deleteSpeed = deleteSpeed;
    this.#cursor = cursor || this.#cursor;
    this.#color = color || this.#color;
    // this.#setupElement;
    this.#element = element;
    this.#element.style.color = this.#color;
  }

  #addQueue(callback: (resolve: () => void) => void) {
    this.#queue.push(() => new Promise(callback));
  }

  type(text: string) {
    console.log(text, 'here text');
    this.#addQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.#element.append(text[i]);
        i++;
        if (i >= text.length) {
          resolve();
          clearInterval(interval);
        }
      }, this.#typeSpeed);
    });
    return this;
  }

  deleteLetters(letterCount: number) {
    this.#addQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.#element.innerText = this.#element.innerText.substring(
          0,
          this.#element.innerText.length - 1
        );
        i++;
        if (i >= letterCount) {
          resolve();
          clearInterval(interval);
        }
      }, this.#deleteSpeed);
    });
    return this;
  }

  deleteWords(wordCount: number) {
    this.#addQueue((resolve) => {
      const words = this.#element.innerText.split(' ');
      if (!words.length) return;
      if (words.length < wordCount) {
        this.#deleteAllInner(this.#deleteSpeed, resolve);
        return;
      }

      const len = words.slice(words.length - wordCount).join(' ').length + 1;
      this.deleteLetters(len);
      resolve();
    });

    return this;
  }

  deleteAll(deleteSpeed = this.#deleteSpeed) {
    this.#addQueue((resolve) => this.#deleteAllInner(deleteSpeed, resolve));
    return this;
  }

  async #deleteAllInner(deleteSpeed?: number, resolve?: () => void) {
    const interval = setInterval(() => {
      this.#element.innerText = this.#element.innerText.substring(
        0,
        this.#element.innerText.length - 1
      );
      if (!this.#element.innerText.length) {
        if (resolve) resolve();
        clearInterval(interval);
      }
    }, deleteSpeed);
    return this;
  }

  pauseFor(duration: number) {
    this.#addQueue((resolve) => setTimeout(resolve, duration));
    return this;
  }

  color(color: string) {
    this.#addQueue((resolve) => {
      this.#element.style.color = color;
      resolve();
    });
    return this;
  }

  rainbow() {
    return this;
  }

  async start() {
    console.log('start');
    console.log(this.#queue, 'queue');
    for (let callback of this.#queue) await callback();
    if (this.#loop) {
      await this.#deleteAllInner();
      this.start();
    }
    return this;
  }

  unmount() {
    console.log('called');
    this.#queue = [];
  }
}

export default TypewriterBase;
