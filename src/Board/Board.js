import React, { Component } from 'react';
import MineField from './MineField/MineField';
import InfoTab from './InfoTab/InfoTab';
import './Board.css';
import ConnectedMineField from './MineField/ConnectedMineField';

class Board extends Component {

    render() {
        // if(this.props.minesLeft === 0) {
        //     alert('You won');
        //     this.props.gameIsOver();
        // }
        // let board = [];
        // let markup;
        // for(let i = 0; i < 10; i++) {
        //     board.push(<Row key={Math.random() * 1000000000} cellRow={this.props.mineField[i]}/>);
        // }
        // if(this.props.mineField.length) {
        //     markup = 
        //     (<div className="table-wrapper">
        //         <div>
        //             <table>
        //                 <tbody>
        //                     {board}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>);
        // } else {
        //     markup = null;
        // }
        // return (
        //     markup
        // );
        return (
            <div id='Board'>
                <InfoTab />
                <ConnectedMineField />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         mineField: state.mineField
//     };
// }


// export default connect(
//     mapStateToProps,
//     null
// )(Board);

export default Board;