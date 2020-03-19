import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { toggleCell, gameIsOver, markedToggle } from '../../../redux/actions/mineFieldIndex';

import './Cell.css';
import imgCompute from './imgCompute';


class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false
        }

        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
        // this.onRightClickHandler = this.onRightClickHandler.bind(this);
        // this.onClickHandler = this.onClickHandler.bind(this);
    }

    // onRightClickHandler(event) {
    //     event.preventDefault();
    //     this.props.markedToggle(this.props.cell.coordX, this.props.cell.coordY);
    // }

    // onClickHandler(event) {
    //     if(!this.props.cell.isMarked) {
    //         if(this.props.cell.isMine) {
    //             alert('The game is over!');
    //             this.props.gameIsOver();
    //         } else {
    //             this.props.toggleCell(this.props.cell.coordX, this.props.cell.coordY);
    //         }
    //     }
    // }

    handleOnMouseDown(event) {
        event.preventDefault();
        this.setState({
            condition: true
        });
    }

    handleOnMouseUp(event) {
        console.log(this.props.cell.minesNearby);
        this.setState({
            condition: this.props.cell.minesNearby
        })
    }

    handleOnMouseLeave(event) {
        if(event.buttons === 1) {
            this.setState({
                condition: false
            });
        }
    }

    handleOnMouseOver(event) {
        event.preventDefault();
        if(event.buttons === 1) {
            this.handleOnMouseDown(event);
        }
    }

    render() {
        // let content = !this.props.cell.isMarked 
        // ? ( !this.props.cell.isHidden
        //     ? ( this.props.cell.isMine 
        //         ? ( this.className = 'mine', <img src={mine} width='10px' height='10px' alt='mine' /> )
        //         : ( this.className = 'shown', this.props.cell.minesNearby)
        //       ) 
        //     : ( this.className = 'hidden', null)
        //     ) : 
        //     (this.className = 'marked', console.log(this.className), <img src={flag} width='10px' height='10px' alt='flag' />);
        // return (
        //     <td
        //         onClick={this.onClickHandler} 
        //         onContextMenu={this.onRightClickHandler}
        //         className={this.className}
        //     >
        //         {content}
        //     </td>
        //     );
        return (
            <img 
                src={imgCompute(this.state.condition)} 
                alt=''
                onMouseLeave={this.handleOnMouseLeave}
                onMouseOver={this.handleOnMouseOver}
                onMouseDown={this.handleOnMouseDown}
                onMouseUp={this.handleOnMouseUp}
            />
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         toggleCell:(indexX, indexY) => dispatch(toggleCell(indexX, indexY)),
//         gameIsOver: () => dispatch(gameIsOver()),
//         markedToggle: (indexX, indexY) => dispatch(markedToggle(indexX, indexY))
//     };
// }

// export default connect(
//     null, 
//     mapDispatchToProps 
// )(Cell);

export default Cell;