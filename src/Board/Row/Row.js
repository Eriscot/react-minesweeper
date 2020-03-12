import React, { Component } from 'react';
import Cell from './Cell/Cell';
import TableRow from '@material-ui/core/TableRow';

class Row extends Component {

    render() {
        let row = [];
        for(let i = 0; i < 10; i++) {
            row.push(<Cell key={Math.random() * 1000000000} cell={this.props.cellRow[i]} />);
        }
        return (
            <TableRow>
                {row}
            </TableRow>
        );
    }
}

export default Row;