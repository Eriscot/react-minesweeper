import React, { Component } from 'react';
import Row from './Row/Row';

class Board extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {};
    }

    render() {
        let board = []
        for(let i = 0; i < 10; i++) {
            board.concat(<Row />)
        }
        return (
            <div className="table-wrapper">
                <div>
                    <table>{this.state.board}</table>
                </div>
            </div>
        );
    }
}

export default Board;