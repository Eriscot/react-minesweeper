import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row/Row';
import './Board.css';

class Board extends Component {

    render() {
        let board = [];
        let markup;
        for(let i = 0; i < 10; i++) {
            board.push(<Row key={Math.random() * 100000} cellRow={this.props.mineField[i]}/>);
        }
        if(this.props.mineField.length) {
            markup = 
            (<div className="table-wrapper">
                <div>
                    <table border="1">
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
      mineField: [...state.mineField]
    }
}

export default connect(
    mapStateToProps,
    null
)(Board);