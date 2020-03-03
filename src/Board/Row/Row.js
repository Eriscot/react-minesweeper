import React, { Component } from 'react';
import Cell from './Cell/Cell';

class Row extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let row = [];
        for(let i = 0; i < 10; i++) {
            row.concat(<Cell />);
        }
        return (
            <tr>
                {row}
            </tr>
        );
    }
}

export default Row;