import { Square } from './square/square';
import './app.scss';

export class App {
  static run() {
    const inputColor = document.querySelector('[type=color]') as HTMLInputElement;
    const inputSize = document.querySelector('[type=range]') as HTMLInputElement;
    const btSubmit = document.querySelector('button');

    btSubmit.addEventListener('click', () => {
      new Square(+inputSize.value, inputColor.value).render();
    });
  }
}