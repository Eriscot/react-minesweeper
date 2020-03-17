import C from '../actions/mineFieldActions';
import { Cell } from '../../Models/Cell'

const initialState = {
    mineField: []
};

function generateField() {
    const mineField = [];
    for(let row = 0; row < 10; row++) {
        let rowArray = [];
        for(let column = 0; column < 10; column++) {
            rowArray.push(new Cell(row, column));
        }
        mineField.push(rowArray);
    }
    return mineField;
}

function minesNearby(mineField, cell) {
    let amount = 0;
    for(let row = Math.max(cell.coordX - 1, 0); row <= Math.min(cell.coordX + 1, 9); row++) {
        for(let column = Math.max(cell.coordY - 1, 0); column <= Math.min(cell.coordY + 1, 9); column++) {
            if(mineField[row][column].isMine) {
                amount++;
            }
        }
    }
    return amount;
}

function revealMinesOnClick(mineField, rowOfCell, columnOfCell) {
    let newMineField = [...mineField];
    let clickedCell = newMineField[rowOfCell][columnOfCell];
    clickedCell.minesNearby = minesNearby(newMineField, clickedCell);
    clickedCell.unhide();
    if(clickedCell.minesNearby === 0) {
        for(let row = Math.max(rowOfCell - 1, 0); row <= Math.min(rowOfCell + 1, 9); row++) {
            for(let column = Math.max(columnOfCell - 1, 0); column <= Math.min(columnOfCell + 1, 9); column++) {
                if(newMineField[row][column].isHidden) {
                    newMineField = [...revealMinesOnClick(newMineField, row, column)];
                }
            }
        }
    }
    return newMineField;
}

function revealAllMines(mineField) {
    const newMineField = mineField.map(row => {
        return row.map(cell => {
            cell.minesNearby = minesNearby(mineField, cell);
            cell.unhide();
            return cell;
        });
    });
    return newMineField;
}

function minesAmount(mineField) {
    let amount = 0;
    mineField.forEach(row => {
        row.forEach(cell => {
            if(cell.isMine) {
                amount++;
            }
        });
    });
    return amount;
}

function markedToggle(mineField, indexX, indexY) {
    const newMineField = mineField.map(row => {
        return row.map(cell => {
            if(cell.coordX === indexX && cell.coordY === indexY) {
                cell.toggleMarked()
                return cell;
            }
            return cell;
        })
    });
    console.log(newMineField);
    return newMineField;
}

const minesweeperReducer = (state = initialState, action) => {
    switch(action.type) {
        case C.START_GAME:
            let mineField = generateField();
            return Object.assign({}, state, {
                mineField,
                minesLeft: minesAmount(mineField)
            });
        case C.TOGGLE_CELL:
            return Object.assign({}, state, {
                mineField: revealMinesOnClick(state.mineField, action.payload.indexX, action.payload.indexY)
            });
        case C.MARKED_TOGGLE: 
            let inc = 0;
            if(state.mineField[action.payload.indexX][action.payload.indexY].isMine){
                inc = -1;
                if(state.mineField[action.payload.indexX][action.payload.indexY].isMarked) {
                    inc = 1;
                }
            }
            return Object.assign({}, state, {
                mineField: markedToggle(state.mineField, action.payload.indexX, action.payload.indexY),
                minesLeft: state.minesLeft + inc
            });
        case C.GAME_WON:
        case C.GAME_LOST:
            console.log('test');
            return Object.assign({}, state, {
                mineField: revealAllMines(state.mineField)
            });
        default:
            return state;
    }
}

export default minesweeperReducer;