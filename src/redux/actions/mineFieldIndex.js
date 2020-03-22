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

export function toggleCell(cell) {
    return {
        type: C.TOGGLE_CELL,
        payload: {
            cell
        }
    }
}

export function markCell(cell) {
    return {
        type: C.MARK_CELL,
        payload: {
            cell
        }
    }
}

export function gameIsOver() {
    return {
        type: C.GAME_IS_OVER
    }
}

export function markedToggle(cell) {
    return {
        type: C.MARKED_TOGGLE,
        payload: {
            cell
        }
    }
}

export function timeTick() {
    return {
        type: C.TIME_TICK
    }
}

export function startTimer() {
    return{
        type: C.START_TIMER
    }
}