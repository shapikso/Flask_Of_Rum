import {LINES, WIN_LINES} from "../selectors";

export const linesElements  = [LINES.FIRST_LINE,LINES.SECOND_LINE,LINES.THIRD_LINE,LINES.FOURTH_LINE,LINES.FIFTH_LINE];

export const winLines = [
    {
        color: '#f1011c',
        items: [[1,0],[1,1],[1,2],[1,3],[1,4]],
        element: WIN_LINES.WIN_LINE_ONE,
    },
    {
        color: '#59ff00',
        items: [[0,0],[0,1],[0,2],[0,3],[0,4]],
        element: WIN_LINES.WIN_LINE_TWO,
    },
    {
        color: '#3981ff',
        items: [[2,0],[2,1],[2,2],[2,3],[2,4]],
        element: WIN_LINES.WIN_LINE_THREE,
    },
    {
        color: '#fdff00',
        items: [[0,0],[1,1],[2,2],[1,3],[0,4]],
        element: WIN_LINES.WIN_LINE_FOUR,
    },
    {
        color: '#f30cff',
        items: [[2,0],[1,1],[0,2],[1,3],[2,4]],
        element: WIN_LINES.WIN_LINE_FIVE,
    },
    {
        color: '#61fffe',
        items: [[1,0],[2,1],[2,2],[2,3],[1,4]],
        element: WIN_LINES.WIN_LINE_SIX,
    },
    {
        color: '#f48016',
        items: [[1,0],[0,1],[0,2],[0,3],[1,4]],
        element: WIN_LINES.WIN_LINE_SEVEN,
    },
    {
        color: '#5bff7c',
        items: [[2,0],[2,1],[1,2],[0,3],[0,4]],
        element: WIN_LINES.WIN_LINE_EIGHT,
    },
    {
        color: '#7e0bff',
        items: [[0,0],[0,1],[1,2],[2,3],[2,4]],
        element: WIN_LINES.WIN_LINE_NINE,
    },
];
export const SCROLL_ANIMATION_TIME = 2000;
export const SCROLL_ANIMATION_TIME_INTERVAL = 2500;
export const SCROLL_ANIMATION_DEBOUNCE = 50;
