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
            marked: false,
            content: null
        }

        this.onRightClickHandler = this.onRightClickHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onRightClickHandler(event) {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            marked: !this.state.marked
        });
        console.log(this.state);
        if(this.state.marked) {
            this.setState({
                content: <img src={flag} alt='mark'/>
            });
        } else {
            this.setState({
                content: null
            });
        }
    }

    onClickHandler(event) {
        event.preventDefault();
        if(!this.state.marked) {
            if(this.props.cell.getIsMine) {
                alert('The game is over!');
                this.props.gameLost();
                this.setState(() => {
                    return { 
                        content: this.props.cell.getIsMine ? <img src={mine} width='10px' height='10px' alt='Mine'/> : this.props.cell.getMinesNearby
                    };
                });
            } else {
                this.props.toggleCell(this.props.cell.getCoordX, this.props.cell.getCoordY);
            }
        }
    }

    render() {
        return (
            <td 
                onClick={this.onClickHandler} 
                onContextMenu={this.onRightClickHandler}
            >
                {this.state.content}
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