import React, { Component } from 'react';
import face from '../../../assets/face.png';
import faceClicked from '../../../assets/faceClicked.png';
import ButtonComponent from './Button/ButtonComponent';

class PlayButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            condition: face
        }

        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
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
                <ButtonComponent 
                    condition={this.state.condition} 
                    onMouseDown={this.handleOnMouseDown} 
                    onMouseUp={this.handleOnMouseUp} 
                    />
            </section>
        );
    }
}

export default PlayButton;