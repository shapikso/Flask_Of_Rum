import {shuffleArray} from "./shuffle-array";
import {symbols, symbolsArray, SymbolsTypes} from "../cards/cards";
import {SCROLL_ANIMATION_DEBOUNCE, SCROLL_ANIMATION_TIME} from "../constant/lines";

export const getNextSpinCards = (lineElement: Element | null): [string[], HTMLDivElement[]] | undefined => {
    if(!lineElement) return;
    const lineElements = shuffleArray(symbolsArray);
    const symbolsElements = lineElements.map((item) => {
        const element = document.createElement("div");
        const imgElement = document.createElement("img");
        element.className = 'symbol';
        imgElement.src = symbols[item as SymbolsTypes].source;
        element.appendChild(imgElement);
        return element;
    })

    lineElement.append(...symbolsElements);
    const lastElements = symbolsElements.slice(-3);
    const lastLineElements = lineElements.slice(-3);
    (lineElement as HTMLDivElement).style.transition = "transform 2s ease-in-out";
    (lineElement as HTMLDivElement).style.transform = "translateY(-7325px)";
    setTimeout(() => {
        (lineElement as HTMLDivElement).style.transition = "";
        (lineElement as HTMLDivElement).replaceChildren(...lastElements);
        (lineElement as HTMLDivElement).style.transform = "translateY(0)";
    }, SCROLL_ANIMATION_TIME);
    return [lastLineElements, lastElements];
}
