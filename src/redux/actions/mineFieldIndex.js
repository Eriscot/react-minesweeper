import { START_GAME, TOGGLE_CELL, MARK_CELL, GAME_LOST } from './mineFieldActions';

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

export function gameLost() {
    return {
        type: GAME_LOST
    }
}