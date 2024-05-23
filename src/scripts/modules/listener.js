import moveMatrixElements from "./moveMatrixElements";
import $ from 'jquery';
import 'jquery-touchswipe';
import initGame from "./init-game";
import createBox from "./createBox";
import {resetMatrix} from "./matrix";

const listeners = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
}

export default function listener() {
  document.addEventListener("keydown", (event) => {
    moveMatrixElements(listeners[event.keyCode]);
  });
  $("#app").swipe({
    swipe: function (event, direction) {
      moveMatrixElements(direction);
    }
  });
  document.querySelector('#save_option').addEventListener("click", () => {
    saveOptions();
  })
  mobileMenuClick();
}

function saveOptions() {
  const options = {};
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    if (input.id === 'name') {
      localStorage.setItem('name', input.value);
    } else if(input.id === 'boxSize' || input.id === 'borderWidth') {
      options[input.id] = input.value + 'px';
    } else {
      options[input.id] = input.value;
    }
  })
  localStorage.setItem('options', JSON.stringify(options));
  document.querySelector('#app').innerHTML = '';
  resetMatrix();
  initGame();
  createBox();
  createBox();
}

function mobileMenuClick() {
  const maine = document.querySelector(".maine");
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((menuItem, i) => {
    menuItem.addEventListener("click", () => {
      menuItems.forEach(item => item.classList.remove('active'));
      menuItem.classList.add('active');
      maine.style.cssText = `--left:${i + 1}`;
    })
  })
}