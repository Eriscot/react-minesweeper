import { connect } from 'react-redux';
import TimeCounter from './TimeCounter';
import { timeTick } from '../../../../redux/actions/mineFieldIndex';

const mapStateToProps = state => {
    console.log(state);
    return {
        time: state.time,
        timeIsOn: state.timeIsOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        timeTick: () => dispatch(timeTick())
    }
}

const ConnectedTimeCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeCounter);

export default ConnectedTimeCounter;