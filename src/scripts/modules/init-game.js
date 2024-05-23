import getMatrix from "./matrix";
import {property} from "./property";
import {renderStatistic} from "./statistic";

export default function initGame() {
  const matrix = getMatrix();
  const app = document.getElementById('app');
  let options = JSON.parse(localStorage.getItem("options"));
  let string = '';
  if (!options) options = property;
  let boxSize = +options['boxSize'].replace('px', '');
  const borderWidth = +options['borderWidth'].replace('px', '');
  const count = +options['count'];
  const width = document.body.offsetWidth;
  const height = document.querySelector('.section-game').offsetHeight;
  const block = (boxSize * count + borderWidth * 2);
  if (width < block) {
    boxSize = width / count - borderWidth * 2;
  } else if (height < block) {
    boxSize = height / count - borderWidth * 2;
  }
  for (const key in options) {
    if (key === 'boxSize') {
      string += `--${key}: ${boxSize}px; `;
    } else {
      string += `--${key}: ${options[key]}; `;
    }
  }
  document.body.style.cssText = string;
  matrix.forEach(matrixLine => {
    matrixLine.forEach(() => {
      const div = document.createElement('div');
      div.classList.add('box');
      app.appendChild(div);
    })
  })
  initForm();
  renderStatistic();
}

function initForm() {
  const options = JSON.parse(localStorage.getItem("options"));
  const name = localStorage.getItem('name');
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    if (input.id === 'name') {
      if (name) input.value = name;
    } else {
      if (options) {
        if (input.id === 'boxSize' || input.id === 'borderWidth') {
          input.value = options[input.id].replace('px', '');
        } else {
          input.value = options[input.id];
        }
      }
    }
  })
}