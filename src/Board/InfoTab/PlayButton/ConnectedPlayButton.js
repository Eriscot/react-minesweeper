import { connect } from 'react-redux';
import PlayButton from './PlayButton';
import { newGame } from '../../../redux/actions/mineFieldIndex';

const mapDispatchToProps = dispatch => {
    return {
        newGame: () => dispatch(newGame())
    };
}

const ConnectedPlayButton = connect(
    null,
    mapDispatchToProps
)(PlayButton)

export default ConnectedPlayButton;