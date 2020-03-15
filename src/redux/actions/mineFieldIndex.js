import C from './mineFieldActions';

export function startGame() {
    return {
        type: C.START_GAME
    }
}

export function toggleCell(indexX, indexY) {
    return {
        type: C.TOGGLE_CELL,
        payload: {
            indexX,
            indexY
        }
    }
}

export function markCell(indexX, indexY) {
    return {
        type: C.MARK_CELL,
        payload: {
            indexX, 
            indexY
        }
    }
}

export function gameLost() {
    return {
        type: C.GAME_LOST
    }
}