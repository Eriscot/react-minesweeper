import React, { Component } from 'react';
import './MineField.css';

class MineField extends Component {
    render() {
        let array = [];
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                array.push(new ());
            }
        }
        return (
            <div id='MineField'>                 
            </div>
        );
    }
}

export default MineField;