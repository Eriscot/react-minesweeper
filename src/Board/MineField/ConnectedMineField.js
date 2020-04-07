import { connect } from 'react-redux';
import { gameIsOver } from '../../redux/actions/mineFieldIndex';
import MineFieldComponent from './MineFieldComponent';

const mapStateToProps = state => {
    return {
        cellsLeft: state.hiddenMines.length,
        mines: state.mines
    }
}

const mapDispatchToProps = dispatch => {
    return {
        gameIsOver: () => dispatch(gameIsOver())
    }
}

const ConnectedMineField = connect(
    mapStateToProps,
    mapDispatchToProps
)(MineFieldComponent);

export default ConnectedMineField;