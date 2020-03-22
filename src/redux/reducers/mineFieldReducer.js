import C from '../actions/mineFieldActions';
import Cell from '../../Models/Cell';

const initialState = {
    mineField: generateField(10),
    minesLeft: 10,
    minesMarked: 0,
    gameIsOn: true,
    timeIsOn: false,
    time: 0
};

function generateField(amount) {
    const mineField = {};
    for(let row = 0; row < 10; row++) {
        for(let column = 0; column < 10; column++) {
            const generatedCell = new Cell(row, column);
            mineField[generatedCell.id] = generatedCell;
        }
    }
    while(amount) {
        const coordX = Math.floor(Math.random() * 10);
        const coordY = Math.floor(Math.random() * 10);
        if(!mineField['' + coordX + coordY].isMine) {
            mineField['' + coordX + coordY].isMine = true;
            amount--;
        }
    }
    return mineField;
}

function minesNearby(mineField, cell) {
    let amount = 0;
    for(let row = Math.max(cell.coordX - 1, 0); row <= Math.min(cell.coordX + 1, 9); row++) {
        for(let column = Math.max(cell.coordY - 1, 0); column <= Math.min(cell.coordY + 1, 9); column++) {
            if(mineField['' + row + column].isMine) {
                amount++;
            }
        }
    }
    return amount;
}

function revealMinesOnClick(mineField, cell) {
    let newMineField = {...mineField};
    const newCell = Object.assign(Object.create(Object.getPrototypeOf(cell)), cell); 
    newCell.minesNearby = minesNearby(newMineField, newCell);
    newCell.unhide();
    newMineField[newCell.id] = newCell;
    if(newCell.minesNearby === 0) {
        for(let row = Math.max(newCell.coordX - 1, 0); row <= Math.min(newCell.coordX + 1, 9); row++) {
            for(let column = Math.max(newCell.coordY - 1, 0); column <= Math.min(newCell.coordY + 1, 9); column++) {
                let checkCell = Object.assign(Object.create(newMineField['' + row + column]), newMineField['' + row + column]);
                if(checkCell.isHidden) {
                    newMineField = {...revealMinesOnClick(newMineField, checkCell)};
                }
            }
        }
    }
    return newMineField;
}

function revealAllMines(mineField) {
    const newMineField = {};
    for(let cell in mineField) {
        let newCell = Object.assign(Object.create(Object.getPrototypeOf(mineField[cell])), mineField[cell]); 
        if(newCell.isMine) {
            newCell.unhide();
        }
        debugger;
        newMineField[newCell.id] = newCell;
    }
    console.log(newMineField);
    return newMineField;
}

function markedToggle(mineField, cell) {
    const newMineField = {...mineField};
    const newCell = Object.assign(Object.create(Object.getPrototypeOf(cell)), cell); 
    newCell.toggleMarked();
    newMineField[newCell.id] = newCell;
    return newMineField;
}

const minesweeperReducer = (state = initialState, action) => {
    switch(action.type) {
        case C.NEW_GAME:
            return Object.assign({}, state, {
                mineField: generateField(10),
                minesLeft: 10,
                gameIsOn: true,
                timeIsOn: false,
                time: 0
            });
        case C.START_TIMER: 
            return Object.assign({}, state, {
                timeIsOn: true
            })
        case C.TOGGLE_CELL:
            return Object.assign({}, state, {
                mineField: revealMinesOnClick(state.mineField, action.payload.cell)
            });
        case C.MARKED_TOGGLE: 
            let inc = 0;
            if(action.payload.cell.isMine){
                inc = -1;
                if(action.payload.cell.isMarked) {
                    inc = 1;
                }
            }
            return Object.assign({}, state, {
                mineField: markedToggle(state.mineField, action.payload.cell),
                minesLeft: state.minesLeft + inc
            });
        case C.GAME_IS_OVER:
            return Object.assign({}, state, {
                mineField: revealAllMines(state.mineField),
                gameIsOn: false, 
                timeIsOn: false
            });
        case C.TIME_TICK: 
            return Object.assign({}, state, {
                time: state.time + 1
            });
        default:
            return state;
    }
}

export default minesweeperReducer;