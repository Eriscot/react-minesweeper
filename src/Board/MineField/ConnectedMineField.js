import { connect } from 'react-redux';
import MineField from './MineField';
import { startTimer } from '../../redux/actions/mineFieldIndex';

const mapStateToProps = state => {
    return {
        gameIsOn: state.gameIsOn,
        timeIsOn: state.timeIsOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startTimer: () => dispatch(startTimer())
    };
};

const ConnectedMineField = connect(
    mapStateToProps,
    mapDispatchToProps
)(MineField);

export default ConnectedMineField;