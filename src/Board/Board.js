import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row/Row';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.mineField);
        let board = [];
        let markup;
        for(let i = 0; i < 10; i++) {
            board.push(<Row key={Math.random() * 1000000000} row={i} cellRow={this.props.mineField.slice(i*10, i * 10 + 10)}/>);
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