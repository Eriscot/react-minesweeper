import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row/Row';
import './Board.css';

class Board extends Component {

    render() {
        if(this.props.minesLeft === 0) {
            alert('You won!');
        }
        let board = [];
        let markup;
        for(let i = 0; i < 10; i++) {
            board.push(<Row key={i} cellRow={this.props.mineField[i]}/>);
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

export default connect(
    mapStateToProps,
    null
)(Board);