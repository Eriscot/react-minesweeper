import { connect } from 'react-redux';
import MineField from './MineField';
import { gameIsOver } from '../../redux/actions/mineFieldIndex';

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
)(MineField);

export default ConnectedMineField;