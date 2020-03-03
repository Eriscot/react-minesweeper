import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <td>{this.props.value}</td>
        );
    }
}

export default Cell;