export enum SymbolsTypes {
    RUM='rum',
    TEN='ten',
    J='J',
    Q='Q',
    K='K',
    A='A',
    PARROT='parrot',
    SKULL='skull',
    TREASURE='treasure',
    CAPTAIN='captain'
}

type SymbolsInterface = {
    [key in SymbolsTypes] : {
        frequency: number;
        source: string;
        winFactor: number[];
    }
}

export const symbols: SymbolsInterface = {
    rum: {
        frequency: 1,
        source: '/static/symbols/SymbolRum.png',
        winFactor: [1, 20, 200]
    }, // 1 x flask of rum

    ten:      {
        frequency: 5,
        source: '/static/symbols/Symbol10.png',
        winFactor: [1, 5, 20]
    }, // 5 x 10

    J:        {
        frequency: 5,
        source: '/static/symbols/SymbolJ.png',
        winFactor: [1, 5, 20]
    }, // 5 x J

    Q:        {
        frequency: 5,
        source: '/static/symbols/SymbolQ.png',
        winFactor: [1, 5, 20]
    }, // 5 x Q

    K:        {
        frequency: 4,
        source: '/static/symbols/SymbolK.png',
        winFactor: [1, 8, 30]
    }, // 4 x K

    A:        {
        frequency: 4,
        source: '/static/symbols/SymbolA.png',
        winFactor: [1, 8, 30]
    }, // 4 x A

    parrot:   {
        frequency: 3,
        source: '/static/symbols/SymbolParrot.png',
        winFactor: [6, 20, 150]
    }, // 3 x parrot

    skull:    {
        frequency: 3,
        source: '/static/symbols/SymbolSkull.png',
        winFactor: [6, 20, 150]
    }, // 3 x skull

    treasure: {
        frequency: 2,
        source: '/static/symbols/SymbolTreasure.png',
        winFactor: [8, 80, 400]
    }, // 2 x treasure

    captain:  {
        frequency: 1,
        source: '/static/symbols/SymbolCaptain.png',
        winFactor: [20, 200, 1000]
    }  // 1 x captain
}

export const symbolsArray = Object.keys(symbols).reduce((acc, symbolName) => {
    const symbolsFrequencies = Array(symbols[symbolName as SymbolsTypes].frequency).fill(symbolName);
    return [...acc, ...symbolsFrequencies];
},[] as string[]);
