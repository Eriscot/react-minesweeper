import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contain: this.props.cell.getIsMine ? 'Mine' : this.props.cell.getMinesNearby
        };

        this.onRightClickHandler = this.onRightClickHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onRightClickHandler(event) {
        event.preventDefault();
    }

    onClickHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <td onClick={this.onClickHandler} onContextMenu={this.onRightClickHandler}>{this.state.contain}</td>
        );
    }
}

export default Cell;