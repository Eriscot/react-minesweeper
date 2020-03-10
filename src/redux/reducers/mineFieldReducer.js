import { START_GAME, TOGGLE_CELL, GAME_LOST } from '../actions/mineFieldActions'
import { Cell } from '../../Models/Cell'

const initialState = {
    mineField: []
}

function generateField() {
    const mineField = []
    for(let row = 0; row < 10; row++) {
        mineField.push([]);
        for(let column = 0; column < 10; column++) {
            mineField[row].push(new Cell(row, column));
        }
    }
    for(let row = 0; row < 10; row++) {
        for(let column = 0; column < 10; column++) {
            minesNearby(mineField, row, column);
        }
    }
    return mineField;
}

function minesNearby(mineField, rowOfCell, columnOfCell) {
    const newMineField = [...mineField];
    let amount = 0;
    for(let row = Math.max(rowOfCell - 1, 0); row <= Math.min(rowOfCell + 1, 9); row++) {
        for(let column = Math.max(columnOfCell - 1, 0); column <= Math.min(columnOfCell + 1, 9); column++) {
            if(mineField[row][column].getIsMine) {
                amount++;
            }
        }
    }
    newMineField[rowOfCell][columnOfCell].setMinesNearby = amount;
    return newMineField;
}

function revealMinesOnClick(mineField, rowOfCell, columnOfCell) {
    let newMineField = [...mineField];
    newMineField[rowOfCell][columnOfCell].toggleHidden();
    if(mineField[rowOfCell][columnOfCell].getMinesNearby === 0) {
        for(let row = Math.max(rowOfCell - 1, 0); row <= Math.min(rowOfCell + 1, 9); row++) {
            for(let column = Math.max(columnOfCell - 1, 0); column <= Math.min(columnOfCell + 1, 9); column++) {
                if(mineField[row][column].getIsHidden) {
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
            cell.unhide();
            return cell;
        })
    });
    return newMineField;
}

const minesweeperReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GAME:
            return Object.assign({}, state, {
                mineField: generateField()
            });
        case TOGGLE_CELL:
            return Object.assign({}, state, {
                mineField: revealMinesOnClick(state.mineField, action.payload.indexX, action.payload.indexY)
            });
        case GAME_LOST:
            return Object.assign({}, state, {
                mineField: revealAllMines(state.mineField)
            });
        default:
            return state;
    }
}

export default minesweeperReducer;