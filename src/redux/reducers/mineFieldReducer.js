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
    console.log('Cell ', rowOfCell, columnOfCell, ' has ', clickedCell.minesNearby, ' mines');
    clickedCell.unhide();
    console.log(clickedCell.minesNearby === 0);
    if(clickedCell.minesNearby === 0) {
        // newMineField = newMineField.map((row, rowIndex) => {
        //     if(rowIndex >= Math.max(rowOfCell - 1, 0) && rowIndex <= Math.min(rowOfCell + 1, 9)) {
        //         return row.map((cell, columnIndex) => {
        //             if(columnIndex >= Math.max(columnOfCell - 1, 0) && columnIndex <= Math.min(columnOfCell + 1, 9)) {
        //                 console.log('Mine ' + rowOfCell + columnOfCell + ' revealed');
        //                 revealMinesOnClick(newMineField, rowIndex, columnIndex);
        //             }
        //             return cell;
        //         });
        //     }
        //     return row;
        // });
        for(let row = Math.max(rowOfCell - 1, 0); row <= Math.min(rowOfCell + 1, 9); row++) {
            for(let column = Math.max(columnOfCell - 1, 0); column <= Math.min(columnOfCell + 1, 9); column++) {
                console.log(row, column);
                if(newMineField[row][column].isHidden) {
                    console.log('Cell ', row, column, ' is about to unhide')
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

const minesweeperReducer = (state = initialState, action) => {
    switch(action.type) {
        case C.START_GAME:
            return Object.assign({}, state, {
                mineField: generateField()
            });
        case C.TOGGLE_CELL:
            return Object.assign({}, state, {
                mineField: revealMinesOnClick(state.mineField, action.payload.indexX, action.payload.indexY)
            });
        case C.GAME_LOST:
            return Object.assign({}, state, {
                mineField: revealAllMines(state.mineField)
            });
        default:
            return state;
    }
}

export default minesweeperReducer;