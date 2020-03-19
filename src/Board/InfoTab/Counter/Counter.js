import React, { Component } from 'react';
import imgCompute from './imgCompute';

class Counter extends Component {
    render() {
        let number = Math.min(this.props.value, 999);
        let counter = [];
        counter.push(<img src={imgCompute(Math.floor(number / 100) % 10)} alt=''/>);
        counter.push(<img src={imgCompute(Math.floor(number / 10) % 10)} alt=''/>);
        counter.push(<img src={imgCompute(number % 10)} alt=''/>);
        return counter;
    }
}

export default Counter;