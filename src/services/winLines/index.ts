import {SymbolsTypes} from "../../cards/cards";

export interface WinLinesDataInterface {
    color: string ;
    element: Element | null;
    lineData: SymbolsTypes[];
    lineLinksData: HTMLDivElement[];
}

export interface WinLinesDataInterfaceMod extends WinLinesDataInterface {
    count: number;
    win: number;
}

export class WinLines {
    protected winLines: WinLinesDataInterfaceMod[] = [];

    protected hideWinLines = () => {
        this.winLines.forEach(line => {
                this.winLines.forEach(line => {
                    (line.element as HTMLDivElement).style.display = 'none';
                    line.lineLinksData.slice(0, line.count).forEach( itemLink => {
                        itemLink.style.background = 'transparent';
                        itemLink.style.outline = 'none';
                    });
                })
            }
        );
        this.setWinLines([]);
    }

    protected showWinLines = async () => {
        this.winLines.forEach(line => {
            (line.element as HTMLDivElement).style.display = 'block';
            line.lineLinksData.slice(0, line.count).forEach( itemLink => {
                itemLink.style.background = line.color;
                itemLink.style.outline = `5px solid ${line.color}`;
            });
        })
    }

    public setWinLines = (winLines: WinLinesDataInterfaceMod[]) => {
        this.winLines = winLines;
    }

    public getWinLines = () => {
        return this.winLines;
    }
}
