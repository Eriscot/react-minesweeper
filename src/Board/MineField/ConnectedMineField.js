import { connect } from 'react-redux';
import MineField from './MineField';

const mapStateToProps = state => {
    return {
        mineField: state.mineField
    };
};

// const mapDispatchToProps = dispatch => {
//     return {

//     };
// };

const ConnectedMineField = connect(
    mapStateToProps,
    null
    // mapDispatchToProps
)(MineField);

export default ConnectedMineField;