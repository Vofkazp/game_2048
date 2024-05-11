import getMatrix, {
  addBoxToMatrix,
  changeMatrixBoxPosition,
  getEmptyCoordinates
} from "./matrix";
import generateRandom from "./generateRandom";
import findBoxVerticalPosition from "./findBoxVerticalPosition";
import findBoxHorizontalPosition from "./findBoxHorizontalPosition";

function getRandomBoxPosition() {
  const emptyCoordinates = getEmptyCoordinates();
  const randomCoordinateIndex = generateRandom(0, emptyCoordinates.length - 1);
  return emptyCoordinates[randomCoordinateIndex];
}

function createBoxElement() {
  const div = document.createElement("div");
  div.classList.add('content-box');
  return div;
}

class Box {
  constructor() {
    this.id = generateRandom(1, 999999999999);
    this.value = Math.random() > 0.75 ? 4 : 2;
    this.position = getRandomBoxPosition();
    this.box = createBoxElement();
  }

  getBoxPosition() {
    return this.position;
  }

  getValue() {
    return this.value;
  }

  setBoxPosition(newPosition) {
    this.position = newPosition;
  }

  setBoxValue() {
    this.box.innerHTML = this.value.toString();
  }

  mergeBoxValue() {
    this.value = this.value * 2;
    setTimeout(() => {
      this.setBoxValue();
    }, 200);
  }

  kill() {
    setTimeout(() => {
      this.box.remove();
    }, 200);
  }

  move(direction) {
    const matrix = getMatrix();
    const {x, y} = this.position;
    switch (direction) {
      case 'left':
        findBoxHorizontalPosition({
          matrix,
          x,
          y,
          box: this,
          startCondition: (x) => !x,
          endCondition: (currentX) => currentX > 0,
          changeMethod: (currentX) => currentX - 1
        });
        break;
      case 'right':
        findBoxHorizontalPosition({
          matrix,
          x,
          y,
          box: this,
          startCondition: (x) => x === 3,
          endCondition: (currentX) => currentX < 3,
          changeMethod: (currentX) => currentX + 1
        });
        break;
      case 'up':
        findBoxVerticalPosition({
          matrix,
          x,
          y,
          box: this,
          startCondition: (y) => !y,
          endCondition: (currentY) => currentY > 0,
          changeMethod: (currentY) => currentY - 1
        });
        break;
      case 'down':
        findBoxVerticalPosition({
          matrix,
          x,
          y,
          box: this,
          startCondition: (y) => y === 3,
          endCondition: (currentY) => currentY < 3,
          changeMethod: (currentY) => currentY + 1
        });
        break;
      default:
        break;
    }
    this.changeBoxPosition();
    changeMatrixBoxPosition(this);
  }

  changeBoxPosition() {
    this.box.style.left = this.position.x * 25 + '%';
    this.box.style.top = this.position.y * 25 + '%';
  }

  setBoxToScreen() {
    const app = document.getElementById('app');
    this.box.style.left = this.position.x * 25 + '%';
    this.box.style.top = this.position.y * 25 + '%';
    this.box.innerHTML = this.value.toString();
    addBoxToMatrix(this);
    app.appendChild(this.box);
  }
}

export default function createBox() {
  const newBox = new Box();
  newBox.setBoxToScreen();
  return newBox;
}