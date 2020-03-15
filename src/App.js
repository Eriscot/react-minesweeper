import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';
import Board from './Board/Board';
import './App.css';
class App extends Component {

  render() {
    return (
      <>
        <SideMenu />
        <Board />
        {/* <main>
          
        </main>
        <aside>
          
        </aside> */}
      </>
    );
  }
}

export default App;
