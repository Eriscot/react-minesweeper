import React, { Component } from 'react';

import imgCompute, { C } from './imgCompute';

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

    imgPicker(value) {
        return <img 
            src={imgCompute(value)} 
            alt=''
            onContextMenu={this.handleOnContextMenu}
            onClick={this.handleOnClick}
            />
    }

    render() {
        let content;
        if(this.props.cell.isMarked) {
            content = this.imgPicker(C.tileMarked);
        } else if(this.props.cell.isHidden) {
            content = this.imgPicker(C.tileHidden);
        } else {
            content = this.imgPicker(C['tile' + this.props.cell.minesNearby]);
            if(this.props.cell.isMine) {
                content = this.imgPicker(C.tileMine)
            }
        }
        return (content);
    }
}

export default Cell;