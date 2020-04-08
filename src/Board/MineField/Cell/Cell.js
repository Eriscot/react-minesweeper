import React, { Component } from 'react';

import { C } from './imgCompute';
import CellComponent from './CellComponent';

class Cell extends Component {
    constructor(props) {
        super(props);

        this.handleOnContextMenu = this.handleOnContextMenu.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(event) {
        event.preventDefault();
        if(this.props.gameIsOn && !this.props.timeIsOn) this.props.startTimer();
        if(this.props.gameIsOn) {
            if(!this.props.cell.isMarked) {
                if(!this.props.cell.isMine) {
                    this.props.toggleCell(this.props.cell);
                } else {
                    alert('You lost!');
                    this.props.gameIsOver();
                }
            }
        }
    }

    handleOnContextMenu(event) {
        event.preventDefault();
        if(this.props.cell.isHidden) {
            this.props.markedToggle(this.props.cell);
        }
    }


    render() {
        let value;
        if(this.props.cell.isMarked) {
            value = C.tileMarked;
        } else if(this.props.cell.isHidden) {
            value = C.tileHidden;
        } else {
            if(this.props.cell.minesNearby) {
                value = C['tile' + this.props.cell.minesNearby];
            } else {
                value = C.tileClicked;
            }
            if(this.props.cell.isMine) {
                value = C.tileMine;
            }
        }
        return (
            <CellComponent 
                value={value} 
                handleOnContextMenu={this.handleOnContextMenu}
                handleOnClick={this.handleOnClick}
            />
        );
    }
}

export default Cell;