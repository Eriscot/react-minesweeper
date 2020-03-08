import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cell.css';
import { toggleCell } from '../../../redux/actions/mineFieldIndex';

class Cell extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.cell.getIsHidden);
        this.state = {
            contain: this.props.cell.getIsMine ? 'Mine' : this.props.cell.getIsHidden.toString()
        };

        this.onRightClickHandler = this.onRightClickHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onRightClickHandler(event) {
        event.preventDefault();
    }

    onClickHandler(event) {
        event.preventDefault();
        if(this.props.cell.getIsMine) {
            alert('The game is over!');
        } else {
            this.props.toggleCell(this.props.cell.getCoordX, this.props.cell.getCoordY);
        }
    }

    render() {
        return (
            <td onClick={this.onClickHandler} onContextMenu={this.onRightClickHandler}>{this.state.contain}</td>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCell:(indexX, indexY) => dispatch(toggleCell(indexX, indexY))
    }
}

export default connect(
    null,
    mapDispatchToProps 
)(Cell);