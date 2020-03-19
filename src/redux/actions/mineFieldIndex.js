import C from './mineFieldActions';

export function newGame() {
    return {
        type: C.NEW_GAME
    }
}

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

export function gameIsOver() {
    return {
        type: C.GAME_IS_OVER
    }
}

export function markedToggle(indexX, indexY) {
    return {
        type: C.MARKED_TOGGLE,
        payload: {
            indexX,
            indexY
        }
    }
}