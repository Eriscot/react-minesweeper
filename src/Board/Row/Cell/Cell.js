import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';

import { toggleCell, gameLost } from '../../../redux/actions/mineFieldIndex';

import './Cell.css';
import mine from '../../../assets/mine.png';
import flag from '../../../assets/flag.png';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            marked: false
        }
        this._content = null;

        this.onRightClickHandler = this.onRightClickHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onRightClickHandler(event) {
        event.preventDefault();
        this.setState(state => {
            return {
                marked: !state.marked
            };
        });
    }

    onClickHandler(event) {
        event.preventDefault();
        if(!this.state.marked) {
            if(this.props.cell.isMine) {
                alert('The game is over!');
                this.props.gameLost();
            } else {
                console.log('Cell ' + this.props.cell.id + ' clicked');
                this.props.toggleCell(this.props.cell.coordX, this.props.cell.coordY);
            }
        }
    }

    render() {
        // console.log('Cell ' + this.props.cell.id + ' rendered');
        let content = !this.props.cell.isHidden 
        ? (!this.state.marked 
            ? ( this.props.cell.isMine 
                ? <img src={mine} width='10px' height='10px' alt='mine' /> 
                : this.props.cell.minesNearby
              ) 
            : <img src={flag} width='10px' height='10px' alt='flag' />
          ) : null;
        return (
            <TableCell
                onClick={this.onClickHandler} 
                onContextMenu={this.onRightClickHandler}
            >
                {content}
            </TableCell>
            );
    }
}

const mapStateToProps = (state, ownProps) => {
    const test = Object.assign({}, {
        cell: state.mineField[ownProps.indexX][ownProps.indexY]
    });
    return test;
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCell:(indexX, indexY) => dispatch(toggleCell(indexX, indexY)),
        gameLost: () => dispatch(gameLost())
    };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps 
)(Cell);