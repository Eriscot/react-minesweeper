import React, { Component } from 'react';
import './Board.css';
import ConnectedInfoTab from './InfoTab/ConnectedInfoTab';
import ConnectedMineField from './MineField/ConnectedMineField';

class BoardComponent extends Component {

    render() {
        return (
            <div id='Board'>
                <ConnectedInfoTab />
                <ConnectedMineField />
            </div>
        );
    }
}

export default BoardComponent;