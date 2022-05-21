type TypewriterOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
};

type QueueCallback = () => Promise<void>;

class Typewriter {
  #queue: QueueCallback[] = [];
  #element: HTMLElement;
  #loop: boolean;
  #typeSpeed: number;
  #deleteSpeed: number;

  constructor(parent: HTMLElement, { loop = false, typeSpeed = 100, deleteSpeed = 100 }: TypewriterOptions = {}) {
    this.#element = document.createElement('div');
    parent.append(this.#element);
    this.#loop = loop;
    this.#typeSpeed = typeSpeed;
    this.#deleteSpeed = deleteSpeed;
  }

  #addQueue(callback: (resolve: () => void) => void) {
    this.#queue.push(() => new Promise(callback));
  }

  type(text: string) {
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
        this.#element.innerText = this.#element.innerText.substring(0, this.#element.innerText.length - 1);
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
    console.log(wordCount);

    return this;
  }

  deleteAll(deleteSpeed = this.#deleteSpeed) {
    this.#addQueue((resolve) => this.#deleteAllInner(deleteSpeed, resolve));
    return this;
  }

  async #deleteAllInner(deleteSpeed?: number, resolve?: () => void) {
    const interval = setInterval(() => {
      this.#element.innerText = this.#element.innerText.substring(0, this.#element.innerText.length - 1);
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

  changeColor(color: string) {
    console.log(color);

    return this;
  }

  rainbow() {
    return this;
  }

  async start() {
    for (let callback of this.#queue) await callback();
    if (this.#loop) {
      await this.#deleteAllInner();
      this.start();
    }
    return this;
  }
}

export default Typewriter;
