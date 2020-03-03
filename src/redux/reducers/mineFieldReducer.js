import { START_GAME, TOGGLE_CELL } from '../actions/mineFieldActions'
import { Cell } from '../../Models/Cell'

const initialState = {
    mineField: [],
}

function generateField() {
    const mineField = []
    for(let rowCount = 0; rowCount < 10; rowCount++) {
        for(let columnCount = 0; columnCount < 10; columnCount++) {
            mineField.concat(new Cell(rowCount, columnCount));
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