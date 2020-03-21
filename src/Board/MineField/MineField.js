import React, { Component } from 'react';
import './MineField.css';
import ConnectedCell from './Cell/ConnectedCell';

class MineField extends Component {
    render() {
        const mineField = [];
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                mineField.push(<ConnectedCell key={'' + i + j} coordX={i} coordY={j}/>)
            }
            mineField.push(<div className='break' />);
        }
        return (
            <div id='MineField'>
                {mineField}
            </div>
        );
    }
}

export default MineField;