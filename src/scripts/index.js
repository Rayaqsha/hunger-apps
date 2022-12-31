import 'regenerator-runtime';
import '../styles/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navList'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#title').focus();
});
