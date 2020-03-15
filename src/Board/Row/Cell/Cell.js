import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCell, gameLost, mineMarked, mineUnmarked } from '../../../redux/actions/mineFieldIndex';

import './Cell.css';
import mine from '../../../assets/mine.png';
import flag from '../../../assets/flag.png';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marked: false,
            className: 'hidden'
        }

        this.onRightClickHandler = this.onRightClickHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onRightClickHandler(event) {
        event.preventDefault();
        this.setState((state) => {
            return {
                marked: !state.marked
            };
        }, () => {
            if(this.state.marked && this.props.cell.isMine) {
                this.props.mineMarked();
            } else if(!this.state.marked && this.props.cell.isMine) {
                this.props.mineUnmarked();
            }
        });
    }

    onClickHandler(event) {
        event.preventDefault();
        if(!this.state.marked) {
            if(this.props.cell.isMine) {
                alert('The game is over!');
                this.props.gameLost();
            } else {
                this.props.toggleCell(this.props.cell.coordX, this.props.cell.coordY);
            }
        }
    }

    render() {
        console.log(this.state.marked);
        let content = !this.state.marked 
        ? ( !this.props.cell.isHidden
            ? ( this.props.cell.isMine 
                ? ( this.className = 'mine', <img src={mine} width='10px' height='10px' alt='mine' /> )
                : ( this.className = 'shown', this.props.cell.minesNearby)
              ) 
            : ( this.className = 'hidden', null)
            ) : 
            (this.className = 'marked', console.log(this.className), <img src={flag} width='10px' height='10px' alt='flag' />);
        return (
            <td
                onClick={this.onClickHandler} 
                onContextMenu={this.onRightClickHandler}
                className={this.className}
            >
                {content}
            </td>
            );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCell:(indexX, indexY) => dispatch(toggleCell(indexX, indexY)),
        gameLost: () => dispatch(gameLost()),
        mineMarked: () => dispatch(mineMarked()),
        mineUnmarked: () => dispatch(mineUnmarked())
    };
}

export default connect(
    null, 
    mapDispatchToProps 
)(Cell);