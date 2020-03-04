import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';
import Board from './Board/Board';
import './App.css';
class App extends Component {

  render() {
    return (
      <>
        <main>
          <Board />
        </main>
        <aside>
          <SideMenu />
        </aside>
      </>
    );
  }
}

export default App;
