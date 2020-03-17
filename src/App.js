import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';
import Board from './Board/Board';
import './App.css';
import { connect } from 'react-redux';
import { gameIsOver } from './redux/actions/mineFieldIndex';
class App extends Component {

  render() {
    if(this.props.minesLeft === 0) {
      alert('You won!');
      this.props.gameIsOver();
    }
    return (
      <>
        <SideMenu />
        <Board />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    minesLeft: state.minesLeft
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gameIsOver: () => dispatch(gameIsOver())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);