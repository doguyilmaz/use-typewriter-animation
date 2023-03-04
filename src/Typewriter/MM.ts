import './style.css';
import Typewriter from './TypewriterBase';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.append('<h1>Hello Vite!</h1>');
// app.innerHTML = `
// <h1>Hello Vite!</h1>
// <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;

const typewriter = new Typewriter(document.querySelector('.whitespace')!, {
  loop: false,
  deleteSpeed: 30,
  typeSpeed: 30,
  color: '#000',
});

typewriter
  .type('Hello my name is Rudy!')
  .pauseFor(300)
  .deleteAll()
  .type('wqvrqwrq qwrvqwrvqw \n\nfsafsdaf')
  .pauseFor(200)
  .deleteLetters(5)
  .color('red')
  .type('asfafs Hsf mdsgy name b!')
  .deleteWords(6)
  .start();
