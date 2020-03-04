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
        for(let columnCount = 0; columnCount < 10; columnCount++) {
            mineField.push(new Cell(rowCount, columnCount));
        }
    }
    for(let rowCount = 0; rowCount < 10; rowCount++) {
        for(let columnCount = 0; columnCount < 10; columnCount++) {
            const Cell = mineField[rowCount * 10 + columnCount];
            if(!Cell.getIsMine){
                for(let step = 0; step < steps.length; step++) {
                    const [ x, y ] = steps[step]; 
                    const checkCell = mineField[(rowCount + x) * 10 + (columnCount + y)];
                    if((rowCount + x) >= 0 && (rowCount + x) < 10 
                        && (columnCount + y) >= 0 && (columnCount + y) < 10
                        && checkCell.getIsMine){
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
                mineField: state.map(element => {
                    if(element.getCoordX === action.payload.coordX && 
                        element.getCoordY === action.payload.coordY) {
                            element.isHidden = !element.getIsHidden;
                        }
                    return element;
                })
            });
        default:
            return state;
    }
}

export default minesweeperReducer;