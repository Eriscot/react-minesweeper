import { connect } from 'react-redux';
import InfoTab from './InfoTab';

const mapStateToProps = state => {
    return {
        minesLeft: state.mines - state.cellsMarked,
        time: state.time
    };
}

const ConnectedInfoTab = connect(
    mapStateToProps,
    null
)(InfoTab)

export default ConnectedInfoTab;