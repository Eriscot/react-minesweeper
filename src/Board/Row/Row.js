import React, { Component } from 'react';
import Cell from './Cell/Cell';

class Row extends Component {
    render() {
        console.log('Row render');
        let row = [];
        for(let i = 0; i < 10; i++) {
            row.push(<Cell key={Math.random() * 1000000000} cell={this.props.cellRow[i]}/>)
        }
        return (
            <tr>
                {row}
            </tr>  
        );
    }
}

export default Row;