type QueueCallback = () => Promise<void>;
type HighlightStyle = { background: string; color?: string };
type HighlightFrom = 'start' | 'end';
type TypeOnEvents = 'typeStart' | 'typeEnd';
type TypewriterConfigure = (element: HTMLElement, options?: TypewriterBaseOptions) => TypewriterBaseType;

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
	highlightWords: (wordCount: number, from: HighlightFrom, style: HighlightStyle) => TypewriterBaseType;
	newLine: () => TypewriterBaseType;
	on: (event: TypeOnEvents, callback: () => void) => TypewriterBaseType;
	start: () => Promise<void>;
	stop: () => void;
	unmount: () => void;
};

function injectGlobalStyles() {
	if (document.getElementById('typewriter-global-styles')) return;

	const style = document.createElement('style');
	style.id = 'typewriter-global-styles';
	style.textContent = `
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
  `;
	document.head.appendChild(style);
}

function TypewriterBase(): TypewriterBaseType & {
	configure: TypewriterConfigure;
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

	const configure: TypewriterConfigure = (element, options = {}) => {
		injectGlobalStyles(); // Inject global styles once

		ELEMENT = element;
		TYPE_SPEED = options.typeSpeed || TYPE_SPEED;
		DELETE_SPEED = options.deleteSpeed || DELETE_SPEED;
		LOOP = options.loop || LOOP;

		if (!CURSOR) {
			CURSOR = document.createElement('span');
			CURSOR.classList.add('typewriter-cursor');

			// Default bar style
			CURSOR.innerHTML = '|';
			CURSOR.style.animationDuration = `${options.cursorBlinkSpeed || 500}ms`;
			CURSOR.style.color = options.cursorColor || 'black';
			const cursorWidth = typeof options.cursorWidth === 'number' ? `${options.cursorWidth}px` : options.cursorWidth;

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
		type: function (text, options = {}) {
			addQueue((resolve) => {
				if (!isRunning) {
					for (const callback of EVENTS.typeStart) {
						callback();
					}
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
						clearInterval(activeInterval ?? undefined);
						resolve();
					}
				}, speed);
			});
			return this;
		},
		deleteLetters: function (letterCount) {
			addQueue((resolve) => {
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
			addQueue((resolve) => {
				const words = ELEMENT.innerText.trim().split(/\s+/); // Split the text into words
				const count = wordCount >= words.length ? words.length : wordCount;
				const charsToRemove = words.slice(-count).join(' ').length;
				this.deleteLetters(charsToRemove);
				resolve();
			});
			return this;
		},
		deleteAll: function () {
			addQueue((resolve) => {
				const totalCharacters = ELEMENT.innerText.length;
				this.deleteLetters(totalCharacters);
				CURRENT_COLOR = '';
				resolve();
			});
			return this;
		},
		pauseFor: function (duration) {
			addQueue((resolve) => setTimeout(resolve, duration));
			return this;
		},
		colorize: function (color) {
			addQueue((resolve) => {
				CURRENT_COLOR = color;
				resolve();
			});
			return this;
		},
		highlight: function (start, length, style) {
			addQueue((resolve) => {
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
			addQueue((resolve) => {
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
			addQueue((resolve) => {
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
			for (const callback of QUEUE) {
				await callback();
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
			QUEUE.length = 0;
			if (activeInterval) clearInterval(activeInterval);
			isRunning = false;
		},
		unmount,
	};

	return { ...TypewriterBase, configure };
}

export default TypewriterBase;
