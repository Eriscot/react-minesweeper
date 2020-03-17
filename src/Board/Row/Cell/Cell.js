import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCell, gameIsOver, markedToggle } from '../../../redux/actions/mineFieldIndex';

import './Cell.css';
import mine from '../../../assets/mine.png';
import flag from '../../../assets/flag.png';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'hidden'
        }

        this.onRightClickHandler = this.onRightClickHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onRightClickHandler(event) {
        event.preventDefault();
        this.props.markedToggle(this.props.cell.coordX, this.props.cell.coordY);
    }

    onClickHandler(event) {
        event.preventDefault();
        if(!this.props.cell.isMarked) {
            if(this.props.cell.isMine) {
                alert('The game is over!');
                this.props.gameIsOver();
            } else {
                this.props.toggleCell(this.props.cell.coordX, this.props.cell.coordY);
            }
        }
    }

    render() {
        let content = !this.props.cell.isMarked 
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
        gameIsOver: () => dispatch(gameIsOver()),
        markedToggle: (indexX, indexY) => dispatch(markedToggle(indexX, indexY))
    };
}

export default connect(
    null, 
    mapDispatchToProps 
)(Cell);