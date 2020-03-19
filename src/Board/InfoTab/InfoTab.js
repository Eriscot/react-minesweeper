import React, { Component } from 'react';
import MinesLeft from './Counter/MinesLeft/MinesLeft';
import TimeCounter from './Counter/TimeCounter/TimeCounter';
import './InfoTab.css'
import ConnectedPlayButton from './PlayButton/ConnectedPlayButton';

class InfoTab extends Component {
    render() {
        console.log(this.props);
        return (
            <div id='InfoTab'>
                <MinesLeft value={this.props.minesLeft}/>
                <ConnectedPlayButton />
                <TimeCounter value={this.props.time}/>
            </div>
        );
    }
}

export default InfoTab;