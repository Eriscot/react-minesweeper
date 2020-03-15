import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Row from './Row/Row';
import './Board.css';

class Board extends Component {

    render() {
        console.log('Board render');
        let board = [];
        let markup;
        for(let i = 0; i < 10; i++) {
            board.push(<Row key={i} indexX={i}/>);
        }
        if(this.props.mineField.length) {
            markup = 
            (<div className="table-wrapper">
                <div>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {board}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
    return Object.assign({}, {
        mineField: state.mineField
    });
}

export default connect(
    mapStateToProps,
    null
)(Board);