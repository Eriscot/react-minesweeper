import C from '../actions/mineFieldActions';
import Cell from '../../Models/Cell';

let mineField = generateField(10);

const initialState = {
    mineField,
    mines: 10,
    cellsMarked: 0,
    hiddenMines: hiddenMines(10),
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

function hiddenMines(mineField) {
    const hiddenMines = []
    for(let cell in mineField) {
        if(mineField[cell].isHidden) {
            hiddenMines.push(cell);
        }
    }
    return hiddenMines;
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
        newMineField[newCell.id] = newCell;
    }
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
    let mineField;
    switch(action.type) {
        case C.NEW_GAME:
            mineField = generateField(10) 
            return Object.assign({}, state, {
                mineField,
                hiddenMines: hiddenMines(mineField),
                mines: 10,
                cellsMarked: 0,
                gameIsOn: true,
                timeIsOn: false,
                time: 0
            });
        case C.START_TIMER: 
            return Object.assign({}, state, {
                timeIsOn: true
            })
        case C.TOGGLE_CELL:
            mineField = revealMinesOnClick(state.mineField, action.payload.cell);
            return Object.assign({}, state, {
                mineField,
                hiddenMines: hiddenMines(mineField),
            });
        case C.MARKED_TOGGLE: 
            let inc = 0;
            if(action.payload.cell.isMarked) {
                inc = 1;
            } else {
                inc = -1;
            }
            mineField = markedToggle(state.mineField, action.payload.cell)
            return Object.assign({}, state, {
                mineField,
                cellsMarked: state.cellsMarked - inc
            });
        case C.GAME_IS_OVER:
            mineField = revealAllMines(state.mineField);
            return Object.assign({}, state, {
                mineField,
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