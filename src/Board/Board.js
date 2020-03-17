import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row/Row';
import './Board.css';
import { gameIsOver } from '../redux/actions/mineFieldIndex';

class Board extends Component {

    render() {
        if(this.props.minesLeft === 0) {
            alert('You won');
            this.props.gameIsOver();
        }
        let board = [];
        let markup;
        for(let i = 0; i < 10; i++) {
            board.push(<Row key={Math.random() * 1000000000} cellRow={this.props.mineField[i]}/>);
        }
        if(this.props.mineField.length) {
            markup = 
            (<div className="table-wrapper">
                <div>
                    <table>
                        <tbody>
                            {board}
                        </tbody>
                    </table>
                </div>
            </div>);
        } else {
            markup = null;
        }
        return (
            markup
        );
    }
}

const mapStateToProps = state => {
    return {
        mineField: state.mineField
    };
}


export default connect(
    mapStateToProps,
    null
)(Board);