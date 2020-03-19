import React, { Component } from 'react';
import './MineField.css';
import Cell from './Cell/Cell';

class MineField extends Component {


    render() {
        console.log(this.props.mineField);
        const mineField = this.props.mineField.map((element, index) => {
            if(index % 10 === 0) {
                return (
                    <>
                        <div className='break' />
                        <Cell key={element.id} cell={element}/>
                    </>
                );
            }
            return <Cell key={element.id} cell={element}/>
        });
        return (
            <div id='MineField'>
                {mineField}
            </div>
        );
    }
}

export default MineField;