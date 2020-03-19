import { connect } from 'react-redux';
import InfoTab from './InfoTab';

const mapStateToProps = state => {
    return {
        minesLeft: state.minesLeft,
        time: state.time
    };
}

const ConnectedInfoTab = connect(
    mapStateToProps,
    null
)(InfoTab)

export default ConnectedInfoTab;