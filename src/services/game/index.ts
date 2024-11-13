import {
    linesElements,
    SCROLL_ANIMATION_DEBOUNCE, SCROLL_ANIMATION_TIME,
    winLines
} from "../../constant/lines";
import {getNextSpinCards} from "../../helpers/spin-card";
import {CheckResults} from "../result";
import {SymbolsTypes} from "../../cards/cards";
import Coins from "../../services/coins";
import Bet from "../../services/bet";

export class Game extends CheckResults{
    lineElements = linesElements;
    results: string[][] = [];
    resultsLinks: HTMLDivElement[][] = [];
    loop = false;

    constructor() {
        super();
    }

    getWinLinesData = () => {
        return winLines.map((winLine) => {
            return {
                color: winLine.color,
                element: winLine.element,
                lineData: winLine.items.map(([lineIndex,columnIndex]) => this.results[columnIndex][lineIndex]) as SymbolsTypes[],
                lineLinksData: winLine.items.map(([lineIndex,columnIndex]) => this.resultsLinks[columnIndex][lineIndex]) as HTMLDivElement[]
            }
        })
    }

    private checkWin = async () => {

        const winLinesData = this.getWinLinesData();
        const winAmount = await this.checkWinLines(winLinesData);

        if (!winAmount) return;

        if (this.loop) {
            this.loop = false;
        }
        Coins.increaseCoins(winAmount);
    }

    public spin = async () => {
        this.results = [];
        this.resultsLinks = [];
        Coins.decreaseCoins();
        this.setBetValue(Bet.getBetValue());
        this.hideWinLines();

        for (const element of this.lineElements) {
            const spinCardData = getNextSpinCards(element);
            if (!spinCardData) return;
            const [line, lineLinks] = spinCardData;
            this.results.push(line as string[]);
            this.resultsLinks.push(lineLinks as HTMLDivElement[]);
            await new Promise((resolve) => setTimeout(resolve, SCROLL_ANIMATION_DEBOUNCE));
        }
            await new Promise((resolve) => setTimeout(resolve, SCROLL_ANIMATION_TIME));

        await this.checkWin();
    }

    public spinLoop = async () => {
       if (!this.loop) return
       await this.spin();
       await this.spinLoop();
    }

    public startLoop = async () => {
       this.loop = true;
       await this.spinLoop();
    }

    public stopLoop = () => {
        if (!this.loop) return;
        this.loop = false;
    }

    public spinOne = async () => {
        if(this.loop) {
            this.loop = false;
            return;
        }
        await this.spin();

    }
}
