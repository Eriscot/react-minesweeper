import React, { Component } from 'react';
import Cell from './Cell/Cell';
import TableRow from '@material-ui/core/TableRow';

class Row extends Component {
    render() {
        console.log('Row render');
        let row = [];
        for(let i = 0; i < 10; i++) {
            row.push(<Cell key={i} indexX={this.props.indexX} indexY={i}/>)
        }
        return (
            <TableRow>
                {row}
            </TableRow>
        );
    }
}

export default Row;