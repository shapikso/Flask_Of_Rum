import {winLines} from "../constant/lines";
import {SymbolsTypes} from "../cards/cards";

export const getWinLinesData = (spinData: string[][]) => {
    const currentWinLinesData = winLines.map((winLine) => {
        return {
            color: winLine.color,
            element: winLine.element,
            lineData: winLine.items.map(([lineIndex,columnIndex]) => spinData[lineIndex][columnIndex]) as SymbolsTypes[]
        }
    })

    return currentWinLinesData;
}
