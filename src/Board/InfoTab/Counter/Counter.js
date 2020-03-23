import React, { Component } from 'react';
import imgCompute from './imgCompute';

class Counter extends Component {
    render() {
        let number = Math.min(this.props.value, 999);
        let counter = [];
        let check = number >= 0 ? true : false;
        counter.push(<img src={imgCompute(check ? Math.floor(number / 100) % 10 : -1)} alt=''/>);
        counter.push(<img src={imgCompute(Math.floor(Math.abs(number) / 10) % 10)} alt=''/>);
        counter.push(<img src={imgCompute(Math.abs(number) % 10)} alt=''/>);
        return counter;
    }
}

export default Counter;