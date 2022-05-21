type TypewriterOptions = {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
};

type QueueCallback = () => Promise<void>;

class Typewriter {
  #queue: QueueCallback[] = [];
  element: HTMLElement;
  loop: boolean;
  typeSpeed: number;
  deleteSpeed: number;

  constructor(parent: HTMLElement, { loop = false, typeSpeed = 100, deleteSpeed = 100 }: TypewriterOptions = {}) {
    this.element = document.createElement('div');
    this.loop = loop;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    parent.append(this.element);
  }

  #addQueue(callback: (resolve: () => void) => void) {
    this.#queue.push(() => new Promise(callback));
  }

  type(text: string) {
    this.#addQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.append(text[i]);
        i++;
        if (i >= text.length) {
          resolve();
          clearInterval(interval);
        }
      }, this.typeSpeed);
    });
    return this;
  }

  deleteLetters(letterCount: number) {
    this.#addQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1);
        i++;
        if (i >= letterCount) {
          resolve();
          clearInterval(interval);
        }
      }, this.deleteSpeed);
    });
    return this;
  }

  deleteWords(wordCount: number) {
    console.log(wordCount);

    return this;
  }

  deleteAll(deleteSpeed = this.deleteSpeed) {
    console.log(deleteSpeed);

    return this;
  }

  pauseFor(duration: number) {
    console.log(duration);

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
    return this;
  }
}

export default Typewriter;
