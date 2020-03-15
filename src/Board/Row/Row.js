import React, { Component } from 'react';
import Cell from './Cell/Cell';

class Row extends Component {
    render() {
        let row = [];
        for(let i = 0; i < 10; i++) {
            row.push(<Cell key={this.props.cellRow[i].id} cell={this.props.cellRow[i]}/>)
        }
        return (
            <tr>
                {row}
            </tr>  
        );
    }
}

export default Row;