import './style.css';
import Typewriter from './Typewriter';

const typewriter = new Typewriter(document.querySelector('.whitespace')!, { loop: true });

typewriter.type('Hello my name is Rudy!').pauseFor(3000).deleteAll().type('wqvrqwrq qwrvqwrvqw \n\nfsafsdaf').pauseFor(2000).deleteLetters(5).start();

// const app = document.querySelector<HTMLDivElement>('#app')!;

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;
