import getMatrix from "./matrix";
import createBox from "./createBox";

export default function moveMatrixElements(moveDirection) {
  const matrix = getMatrix();
  switch (moveDirection) {
    case "left":
      matrix.forEach(matrixLine => {
        matrixLine.forEach(box => {
          if (box) {
            box.move(moveDirection);
          }
        })
      });
      break;
    case "up":
      matrix.forEach(matrixLine => {
        matrixLine.forEach(box => {
          if (box) {
            box.move(moveDirection);
          }
        })
      });
      break;
    case "right":
      matrix.forEach(matrixLine => {
        for (let i = matrixLine.length - 1; i >= 0; i--) {
          const box = matrixLine[i];
          if (box) {
            box.move(moveDirection);
          }
        }
      });
      break;
    case "down":
      for (let i = matrix.length - 1; i >= 0; i--) {
        const matrixLine = matrix[i];
        matrixLine.forEach(box => {
          if (box) {
            box.move(moveDirection);
          }
        })
      }
      break;
    default:
      break;
  }
  setTimeout(() => {
    createBox()
  }, 200);
}