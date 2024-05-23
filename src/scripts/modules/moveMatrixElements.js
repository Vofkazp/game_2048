import getMatrix, {resetMatrix} from "./matrix";
import createBox from "./createBox";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import gameOver from "./gameOver";
import saveStatistic from "./statistic";
let countSteep = 0;

export default function moveMatrixElements(moveDirection) {
  const matrix = getMatrix();
  const oldMatrix = cloneDeep(matrix);
  if (moveDirection === "left") {
    for (let index = 1; index < matrix.length; index++) {
      matrix.forEach(matrixLine => {
        const box = matrixLine[index];
        if (box) {
          box.move(moveDirection);
        }
      });
    }
  } else if (moveDirection === "right") {
    for (let index = matrix.length - 2; index > -1; index--) {
      matrix.forEach(matrixLine => {
        const box = matrixLine[index];
        if (box) {
          box.move(moveDirection);
        }
      });
    }
  } else if (moveDirection === "up") {
    matrix.forEach(matrixLine => {
      matrixLine.forEach(box => {
        if (box) {
          box.move(moveDirection);
        }
      })
    })
  } else if (moveDirection === "down") {
    for (let index = matrix.length - 2; index > -1; index--) {
      matrix[index].forEach(box => {
        if (box) {
          box.move(moveDirection);
        }
      });
    }
  }
  const isSameMatrix = isEqual(oldMatrix, matrix);
  if (!isSameMatrix) {
    countSteep++;
    saveStatistic(countSteep);
    createBox();
    if (gameOver(matrix)) {
      const errorDiv = document.createElement("div");
      errorDiv.innerHTML = "<p>GAME OVER</p><button onclick='resetGame()' class='reset'>Начать с начала</button>";
      errorDiv.classList.add("game-over");
      document.getElementById("app").appendChild(errorDiv);
    }
  }
}

function resetGame() {
  resetMatrix();
  createBox();
  createBox();
  document.querySelector('.game-over').remove();
}

window.resetGame = resetGame;