import {symbols, SymbolsTypes} from "../cards/cards";
import {winId} from "../constant/win";
import {WinLinesDataInterface, WinLinesDataInterfaceMod} from "../services/winLines";


export const checkWinCount = (array: SymbolsTypes[]): number => {
    if (array.length === 0) return 0; // Handle empty array

    const noRumItems = array.filter(item => item !== SymbolsTypes.RUM)

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

export const checkWin = (linesData: WinLinesDataInterface[]) => {
    const winLines = linesData.reduce((acc, line) => {
        const count = checkWinCount(line.lineData);
        const winSymbol = line.lineData[0];
        return count > 2
            ? [
                ...acc,
                {
                    ...line,
                    win: symbols[winSymbol].winFactor[winId[(count as 3 | 4 | 5)]],
                    count: count,
                }]
            : [...acc]
    },[] as WinLinesDataInterfaceMod[]);
    setTimeout(() => {
        winLines.forEach(line => {(line.element as HTMLDivElement).style.display = 'block';})
    }, 2000);
}

