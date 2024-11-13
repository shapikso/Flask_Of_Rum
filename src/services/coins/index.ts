import {DEFAULT_COINS_VALUE} from "../../constant/coins";
import {VALUES} from "../../selectors";
import Bet from "../../services/bet";

class Coins {
    private coinValueHTML = VALUES.COIN_VALUE;
    private coins = DEFAULT_COINS_VALUE;

    private setCoinValue = (coinValue: number) => {
        if (!this.coinValueHTML) return;
        this.coins = coinValue;
        this.coinValueHTML.innerHTML = coinValue.toString();
    }

    public increaseCoins = (coinValue: number) => {
        this.setCoinValue(this.coins + coinValue);
    };

    public decreaseCoins = () => {
        const betValue = Bet.getBetValue();
        const newCoinValue = this.coins - betValue;
        if (newCoinValue < 0) return
        this.setCoinValue(newCoinValue);
    };

    public getCoinsValue = () => {
        return this.coins;
    }
}

export default new Coins();
