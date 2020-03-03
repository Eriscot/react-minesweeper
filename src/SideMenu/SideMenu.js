import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SideMenu.css';
import { startGame } from '../redux/actions/mineFieldIndex';

class SideMenu extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="menu-wrapper">
                <div>
                    <input type="button" value="Start" onClick={this.props.startGame}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: () => dispatch(startGame())
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(SideMenu);