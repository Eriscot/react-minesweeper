import { START_GAME, TOGGLE_CELL, MARK_CELL } from './mineFieldActions';

export function startGame() {
    return {
        type: START_GAME
    }
}

export function toggleCell(indexX, indexY) {
    return {
        type: TOGGLE_CELL,
        payload: {
            indexX,
            indexY
        }
    }
}

export function markCell(indexX, indexY) {
    return {
        type: MARK_CELL,
        payload: {
            indexX, 
            indexY
        }
    }
}