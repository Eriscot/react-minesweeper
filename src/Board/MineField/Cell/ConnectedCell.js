import { connect } from 'react-redux';
import Cell from './Cell';
import { toggleCell, gameIsOver, markedToggle } from '../../../redux/actions/mineFieldIndex';

const mapStateToProps = (state, ownProps) => {
    return {
        cell: state.mineField['' + ownProps.coordX + ownProps.coordY],
        gameIsOn: state.gameIsOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCell: (cell) => dispatch(toggleCell(cell)),
        gameIsOver: () => dispatch(gameIsOver()),
        markedToggle: (cell) => dispatch(markedToggle(cell))
    }
}

const ConnectedCell = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);

export default ConnectedCell;