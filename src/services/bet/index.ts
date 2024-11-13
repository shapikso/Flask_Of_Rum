import {VALUES} from "../../selectors";
import {BETS, DEFAULT_BET_ID, MAX_BET_ID} from "../../constant/bet";

class Bet {
    private betValueHTML = VALUES.BET_VALUE;
    private betId = DEFAULT_BET_ID;

    private setBetValue = (bet: number) => {
        const currentBet = BETS[bet];
        if (!currentBet || !this.betValueHTML) return;
        this.betValueHTML.innerHTML = currentBet.toString();
        this.betId = bet;
    }

    public increaseBet = () => {
        this.setBetValue(this.betId + 1);
    };

    public decreaseBet = () => {
        this.setBetValue(this.betId - 1);
    };

    public setMaxBet = () => {
        this.setBetValue(MAX_BET_ID);
    };

    public getBetValue = () => {
        return BETS[this.betId];
    }
}

export default new Bet();
