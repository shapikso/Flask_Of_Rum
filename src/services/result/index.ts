import {symbols, SymbolsTypes} from "../../cards/cards";
import {MIN_WIN_COUNT, TWinCount, winId} from "../../constant/win";
import {WinLines, WinLinesDataInterface, WinLinesDataInterfaceMod} from "../winLines";

export class CheckResults extends WinLines {

    private betValue: number = 0;

    constructor() {
        super();
    }

    private countTheWinning = () => {
        return this.winLines.reduce((acc, winLine) => {
            return acc + (winLine.win * this.betValue);
        }, 0)
    }

    public checkWinCount = (array: SymbolsTypes[]): number => {
        if (array.length === 0) return 0; // Handle empty array

        const noRumItems = array.filter(item => item !== SymbolsTypes.RUM);

        const firstItem = noRumItems.length ? noRumItems[0] : SymbolsTypes.RUM;
        let count = 0;

        for (const item of array) {
            if (item === firstItem || item === SymbolsTypes.RUM) {
                count++;
            } else {
                break;
            }
        }

        return count;
    }

    public checkWinLines = async (linesData: WinLinesDataInterface[]) => {
        const winLines = linesData.reduce((acc, line) => {
            const count = this.checkWinCount(line.lineData);

            const noRumItems = line.lineData.filter(item => item !== SymbolsTypes.RUM);
            const winSymbol = noRumItems.length ? noRumItems[0] : SymbolsTypes.RUM;

            return count >= MIN_WIN_COUNT
                ? [
                    ...acc,
                    {
                        ...line,
                        win: symbols[winSymbol].winFactor[winId[(count as TWinCount)]],
                        count: count,
                    }]
                : [...acc]
        },[] as WinLinesDataInterfaceMod[]);

        if (!winLines.length) return 0;

        this.setWinLines(winLines);
        await this.showWinLines();
        return this.countTheWinning();
    }

    protected setBetValue = (betValue: number) => {
        this.betValue = betValue;
    }
}
