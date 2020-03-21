import { connect } from 'react-redux';
import Cell from './Cell';
import { toggleCell, gameIsOver, markedToggle } from '../../../redux/actions/mineFieldIndex';

const mapStateToProps = (state, ownProps) => {
    return {
        cell: state.mineField.find(
            element => element.coordX === ownProps.coordX && element.coordY === ownProps.coordY
        ),
        mineField: state.mineField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCell: (coordX, coordY) => dispatch(toggleCell(coordX, coordY)),
        gameIsOver: () => dispatch(gameIsOver()),
        markedToggle: (coordX, coordY) => dispatch(markedToggle(coordX, coordY))
    }
}

const ConnectedCell = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);

export default ConnectedCell;