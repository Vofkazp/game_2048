import {property} from "./property";

let options = JSON.parse(localStorage.getItem("options"));
const count = options ? options.count : property.count;
let matrix = Array.from({length: count}, () => Array.from({length: count}, () => 0));

export function getEmptyCoordinates() {
  return matrix.reduce((emptyCoordinates, matrixLine, y) => {
    matrixLine.forEach((element, x) => {
      if (!element) {
        emptyCoordinates.push({x, y});
      }
    });
    return emptyCoordinates;
  }, []);
}

export function resetMatrix() {
  matrix.forEach((matrixLine, matrixY) => {
    matrixLine.forEach((matrixElem, matrixX) => {
      if (matrixElem) {
        matrixElem.killNow();
        matrix[matrixY][matrixX] = 0;
      }
    });
  });
  let options = JSON.parse(localStorage.getItem("options"));
  const count = options ? options.count : property.count;
  matrix = Array.from({length: count}, () => Array.from({length: count}, () => 0));
}

export function addBoxToMatrix(box) {
  const {x, y} = box.getBoxPosition();
  matrix[y][x] = box;
}

export function changeMatrixBoxPosition(box) {
  const {id: boxId} = box;
  const {x, y} = box.getBoxPosition();
  let oldBoxPosition = null;
  matrix.forEach((matrixLine, matrixY) => {
    matrixLine.forEach((matrixElem, matrixX) => {
      if (matrixElem && matrixElem.id === boxId) {
        oldBoxPosition = {
          x: matrixX,
          y: matrixY
        }
      }
    })
  })
  if (oldBoxPosition && oldBoxPosition.x !== x || oldBoxPosition.y !== y) {
    matrix[y][x] = box;
    matrix[oldBoxPosition.y][oldBoxPosition.x] = 0;
  }
}

export default function getMatrix() {
  return matrix;
}

export function findMaxInMatrix() {
  let maxValue = -Infinity;
  for (let row of matrix) {
    for (let element of row) {
      if (element && element.value > maxValue) {
        maxValue = element.value;
      }
    }
  }
  return maxValue;
}