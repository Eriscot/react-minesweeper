import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';


import { toggleCell, gameLost, markCell } from '../../../redux/actions/mineFieldIndex';

import './Cell.css';
import mine from '../../../assets/mine.png';
import flag from '../../../assets/flag.png';
import { withStyles } from '@material-ui/core';

const StyledTableCell = withStyles(({palette}) => ({
    head: {
        backgroundColor: palette.common.black,
        color: palette.common.white
    }
}))(TableCell);


class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marked: false
        }
        this._content = null;

        this.onRightClickHandler = this.onRightClickHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onRightClickHandler(event) {
        event.preventDefault();
        this.props.markCell(this.props.cell.getCoordX, this.props.cell.getCoordY);
    }

    onClickHandler(event) {
        event.preventDefault();
        if(!this.props.cell.getIsMarked) {
            if(this.props.cell.getIsMine) {
                alert('The game is over!');
                this.props.gameLost();
            } else {
                this.props.toggleCell(this.props.cell.getCoordX, this.props.cell.getCoordY);
            }
        }
    }

    render() {
        let content = !this.props.cell.getIsMarked 
        ? (!this.props.cell.getIsHidden
            ? (!this.props.cell.getIsMine ? this.props.cell.getMinesNearby : <img src={mine} width='10px' height='10px' alt='mine' />)
            : null)
        : <img src={flag} width='10px' height='10px' alt='flag' />;
        return (
            <StyledTableCell
                onClick={this.onClickHandler} 
                onContextMenu={this.onRightClickHandler}
                clas
            >
                {content}
            </StyledTableCell>
            );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCell:(indexX, indexY) => dispatch(toggleCell(indexX, indexY)),
        markCell: (indexX, indexY) => dispatch(markCell(indexX, indexY)),
        gameLost: () => dispatch(gameLost())
    };
}

export default connect(
    null, 
    mapDispatchToProps 
)(Cell);