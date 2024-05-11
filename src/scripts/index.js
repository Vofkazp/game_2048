import '../scss/style.scss';
import createBox from "./modules/createBox";
import listener from "./modules/listener";

function startGame() {
  listener();
  createBox();
  createBox();
}

startGame();