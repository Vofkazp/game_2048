import moveMatrixElements from "./moveMatrixElements";
import $ from 'jquery';
import 'jquery-touchswipe';

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
}