import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCell, gameLost } from '../../../redux/actions/mineFieldIndex';

import './Cell.css';
import mine from '../../../assets/mine.png';
import flag from '../../../assets/flag.png';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marked: false
        }
        this.className = 'hidden';

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
                this.props.toggleCell(this.props.cell.coordX, this.props.cell.coordY);
            }
        }
    }

    render() {
        let content = !this.props.cell.isHidden 
        ? (!this.state.marked 
            ? ( this.props.cell.isMine 
                ? <img src={mine} width='10px' height='10px' alt='mine' /> 
                : ( this.className = 'shown', this.props.cell.minesNearby)
              ) 
            : <img src={flag} width='10px' height='10px' alt='flag' />
          ) : null;
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
        gameLost: () => dispatch(gameLost())
    };
}

export default connect(
    null, 
    mapDispatchToProps 
)(Cell);