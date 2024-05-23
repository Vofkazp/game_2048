import '../scss/style.scss';
import createBox from "./modules/createBox";
import listener from "./modules/listener";
import initGame from "./modules/init-game";

function startGame() {
  initGame();
  listener();
  createBox();
  createBox();
}

startGame();