import React, { Component } from 'react';
import MinesLeft from './Counter/MinesLeft/MinesLeft';
import './InfoTab.css'
import ConnectedPlayButton from './PlayButton/ConnectedPlayButton';
import ConnectedTimeCounter from './Counter/TimeCounter/ConnectedTimeCounter';

class InfoTabComponent extends Component {
    render() {
        return (
            <div id='InfoTab'>
                <MinesLeft value={this.props.minesLeft}/>
                <ConnectedPlayButton />
                <ConnectedTimeCounter />
            </div>
        );
    }
}

export default InfoTabComponent;