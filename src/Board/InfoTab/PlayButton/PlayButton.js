import React, { Component } from 'react';
import Button from './Button/Button';
import face from '../../../assets/face.png';
import faceClicked from '../../../assets/faceClicked.png';

class PlayButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            condition: face
        }
    }

    handleOnMouseDown() {
        this.setState({
            condition: faceClicked
        })
    }

    handleOnMouseUp() {
        this.setState({
            condition: face
        });
        this.props.newGame();
    }

    render() {
        return (
            <section>
                <Button 
                    condition={this.state.condition} 
                    onMouseDown={() => this.handleOnMouseDown()} 
                    onMouseUp={() => this.handleOnMouseUp()} 
                    />
            </section>
        );
    }
}

export default PlayButton;