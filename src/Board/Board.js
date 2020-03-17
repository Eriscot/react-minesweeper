import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row/Row';
import './Board.css';
import { gameWon } from '../redux/actions/mineFieldIndex';

class Board extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.minesLeft);

        if(this.props.minesLeft === 0) {
            alert('You won!');
            this.props.gameWon();
        }
    }

    render() {
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
        mineField: state.mineField,
        minesLeft: state.minesLeft
    };
}

const mapDispatchToProps = dispatch => {
    return {
        gameWon: () => dispatch(gameWon())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);