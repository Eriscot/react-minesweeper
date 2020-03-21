import C from '../actions/mineFieldActions';
import Cell from '../../Models/Cell';

const initialState = {
    mineField: generateField(10),
    minesLeft: 10,
    minesMarked: 0,
    gameIsOn: false,
    time: 0
};

function generateField(amount) {
    const mineField = [];
    for(let row = 0; row < 10; row++) {
        for(let column = 0; column < 10; column++) {
            let isMine = false;
            if(amount) {
                isMine = Math.random() < 0.1 ? (amount--, true) : false;
            }
            mineField.push(new Cell(isMine, row, column));

        }
    }
    // while(amount) {
    //     mineField.forEach(element => {
    //         if(!element.isMine) {
    //             element.isMine = Math.random < 0.1 ? (amount--, true) : false;
    //         }
    //         return element;
    //     });
    // }
    return mineField;
}

function minesNearby(mineField, cell) {
    let amount = 0;
    for(let row = Math.max(cell.coordX - 1, 0); row <= Math.min(cell.coordX + 1, 9); row++) {
        for(let column = Math.max(cell.coordY - 1, 0); column <= Math.min(cell.coordY + 1, 9); column++) {
            if(mineField[row * 10 + column].isMine) {
                amount++;
            }
        }
    }
    return amount;
}

function revealMinesOnClick(mineField, rowOfCell, columnOfCell) {
    let newMineField = [...mineField];
    let clickedCell = newMineField[rowOfCell* 10 + columnOfCell];
    clickedCell.minesNearby = minesNearby(newMineField, clickedCell);
    clickedCell.unhide();
    if(clickedCell.minesNearby === 0) {
        for(let row = Math.max(rowOfCell - 1, 0); row <= Math.min(rowOfCell + 1, 9); row++) {
            for(let column = Math.max(columnOfCell - 1, 0); column <= Math.min(columnOfCell + 1, 9); column++) {
                if(newMineField[row * 10 + column].isHidden) {
                    newMineField = [...revealMinesOnClick(newMineField, row, column)];
                }
            }
        }
    }
    return newMineField;
}

function revealAllMines(mineField) {
    const newMineField = mineField.map(cell => {
        if(cell.isMine) {
            cell.unhide();
        }
        return cell;
    });
    return newMineField;
}

function markedToggle(mineField, indexX, indexY) {
    const newMineField = mineField.map(cell => {
        if(cell.coordX === indexX && cell.coordY === indexY) {
            cell.toggleMarked()
            return cell;
        }
        return cell;
    });
    return newMineField;
}

const minesweeperReducer = (state = initialState, action) => {
    switch(action.type) {
        case C.NEW_GAME:
            return Object.assign({}, state, {
                mineField: generateField(10),
                minesLeft: 10,
                gameIsOn: false
            })
        case C.START_GAME:
            return Object.assign({}, state, {
                gameIsOn: true
            });
        case C.TOGGLE_CELL:
            return Object.assign({}, state, {
                mineField: revealMinesOnClick(state.mineField, action.payload.indexX, action.payload.indexY)
            });
        case C.MARKED_TOGGLE: 
            let inc = 0;
            if(state.mineField[action.payload.indexX * 10 + action.payload.indexY].isMine){
                inc = -1;
                if(state.mineField[action.payload.indexX * 10 + action.payload.indexY].isMarked) {
                    inc = 1;
                }
            }
            return Object.assign({}, state, {
                mineField: markedToggle(state.mineField, action.payload.indexX, action.payload.indexY),
                minesLeft: state.minesLeft + inc
            });
        case C.GAME_IS_OVER:
            return Object.assign({}, state, {
                mineField: revealAllMines(state.mineField)
            });
        default:
            return state;
    }
}

export default minesweeperReducer;