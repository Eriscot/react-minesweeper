import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { toggleCell, gameIsOver, markedToggle } from '../../../redux/actions/mineFieldIndex';

import imgCompute from './imgCompute';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false
        }

        // this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        // this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        // this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        // this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
        this.handleOnContextMenu = this.handleOnContextMenu.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this)
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

    // handleOnMouseDown(event) {
    //     event.preventDefault();
    //     this.setState({
    //         condition: true
    //     });
    // }

    handleOnClick(event) {
        event.preventDefault();
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

    // handleOnMouseUp(event) {
    //     if(this.props.cell.isMine) {
    //         alert('You lost');
    //         this.props.gameIsOver();
    //         this.setState({
    //             condition: 9
    //         });
    //     } else {
    //         this.setState({
    //             condition: this.props.cell.minesNearby
    //         });
    //     }
    // }

    // handleOnMouseLeave(event) {
    //     if(event.buttons === 1) {
    //         this.setState({
    //             condition: false
    //         });
    //     }
    // }

    // handleOnMouseOver(event) {
    //     event.preventDefault();
    //     if(event.buttons === 1) {
    //         this.handleOnMouseDown(event);
    //     }
    // }

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
            // onMouseLeave={this.handleOnMouseLeave}
            // onMouseOver={this.handleOnMouseOver}
            // onMouseDown={this.handleOnMouseDown}
            // onMouseUp={this.handleOnMouseUp} 
            onContextMenu={this.handleOnContextMenu}
            onClick={this.handleOnClick}
            />
    }

    render() {
        let content;
        if(this.props.cell.isMarked) {
            content = this.imgPicker('marked');
        } else if(this.props.cell.isHidden) {
            content = this.imgPicker(false);
        } else {
            content = this.imgPicker(this.props.cell.minesNearby);
            if(this.props.cell.isMine) {
                content = this.imgPicker(9)
            }
        }
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
        //     );'

        return (
            // <img 
            //     src={imgCompute(this.state.condition)} 
            //     alt=''
            //     onMouseLeave={this.handleOnMouseLeave}
            //     onMouseOver={this.handleOnMouseOver}
            //     onMouseDown={this.handleOnMouseDown}
            //     onMouseUp={this.handleOnMouseUp}
            // />
            content
            // 'Test'
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