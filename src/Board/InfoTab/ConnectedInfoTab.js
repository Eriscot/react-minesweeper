import { connect } from 'react-redux';
import InfoTabComponent from './InfoTabComponent';

const mapStateToProps = state => {
    return {
        minesLeft: state.mines - state.cellsMarked,
        time: state.time
    };
}

const ConnectedInfoTab = connect(
    mapStateToProps,
    null
)(InfoTabComponent)

export default ConnectedInfoTab;