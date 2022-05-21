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
    parent.append(this.element);
    this.loop = loop;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
  }

  type(text: string) {
    this.#queue.push(
      () =>
        new Promise((resolve) => {
          let i = 0;
          const interval = setInterval(() => {
            this.element.append(text[i]);
            i++;
            if (i >= text.length) {
              resolve();
              clearInterval(interval);
            }
          }, this.typeSpeed);
        })
    );

    return this;
  }

  // ts-disable
  deleterLetters(letterCount: number) {
    console.log(letterCount);
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
