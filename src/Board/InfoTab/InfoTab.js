import React, { Component } from 'react';
import MinesLeft from './Counter/MinesLeft.js/MinesLeft';
import TimeCounter from './Counter/TimeCounter/TimeCounter';
import PlayButton from './PlayButton/PlayButton';
import './InfoTab.css'

class InfoTab extends Component {
    render() {
        return (
            <div id='InfoTab'>
                <MinesLeft value={10015}/>
                <PlayButton />
                <TimeCounter value={7}/>
            </div>
        );
    }
}

export default InfoTab;