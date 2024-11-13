import '../styles/index.scss';
import '../styles/global.scss';
import {BUTTONS} from "./selectors";
import {Game} from "./services/game";
import Bet from "./services/bet";
const game = new Game();

const onStartClick = async () => {
    (BUTTONS.START_BUTTON as HTMLButtonElement).disabled = true;
    await game.spinOne();
    (BUTTONS.START_BUTTON as HTMLButtonElement).disabled = false;
}

BUTTONS.START_BUTTON?.addEventListener('click', () => {(async () => {
    await onStartClick();
})()});

BUTTONS.AUTO_BUTTON?.addEventListener('click', () => {(async () => {
    if (game.loop) {
        game.stopLoop();
        return;
    }
    await game.startLoop();
})()});

BUTTONS.MAX_BUTTON?.addEventListener('click', () => {
    Bet.setMaxBet();
});

BUTTONS.MINUS_BUTTON?.addEventListener('click', () => {
    Bet.decreaseBet();
});

BUTTONS.PLUS_BUTTON?.addEventListener('click', () => {
    Bet.increaseBet();
});



