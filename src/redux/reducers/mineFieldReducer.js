import { START_GAME, TOGGLE_CELL } from '../actions/mineFieldActions'
import { Cell } from '../../Models/Cell'

const initialState = {
    mineField: [],
}

const steps = [
    [-1, -1], [-1, 0], [-1, 1],
     [0, -1],           [0, 1],
     [1, -1],  [1, 0],  [1, 1]
];

function generateField() {
    const mineField = []
    for(let rowCount = 0; rowCount < 10; rowCount++) {
        mineField.push([]);
        for(let columnCount = 0; columnCount < 10; columnCount++) {
            mineField[rowCount].push(new Cell(rowCount, columnCount));
        }
    }
    for(let rowCount = 0; rowCount < 10; rowCount++) {
        for(let columnCount = 0; columnCount < 10; columnCount++) {
            const Cell = mineField[rowCount][columnCount];
            if(!Cell.getIsMine){
                for(let step = 0; step < steps.length; step++) {
                    const [ x, y ] = steps[step];
                    let checkCell;
                    if(mineField[rowCount + x] && (checkCell = mineField[rowCount + x][columnCount + y]) && checkCell.getIsMine){
                        Cell._minesNearby += 1;
                    }
                }
            }
        }
    }
    return mineField;
}

const minesweeperReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GAME:
            return Object.assign({}, state, {
                mineField: generateField()
            });
        case TOGGLE_CELL:
            return Object.assign({}, state, {
                mineField: state.mineField.map(row => {
                    return row.map(cell => {
                        if(cell.getCoordX === action.payload.indexX && 
                            cell.getCoordY === action.payload.indexY) {
                                cell.isHidden = !cell.getIsHidden;
                            }
                        return cell;
                    });
                })
            });
        default:
            return state;
    }
}

export default minesweeperReducer;