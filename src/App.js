import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';
import Board from './Board/Board';
import { connect } from 'react-redux';
import './App.css';
import { Cell } from './Models/Cell';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mineField: []
    }
    this.generageMineField = this.generageMineField.bind(this);
  }

  generageMineField() {
    for(let i = 0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
        this.setState({
          mineField: this.state.mineField.concat(new Cell())
        })
      }
    }
  }

  render() {
    return (
      <>
        <main>
          <Board mineField={this.state.mineField}/>
        </main>
        <aside>
          <SideMenu />
        </aside>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    mineField: state.mineField
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
