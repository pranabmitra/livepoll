import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Drawer from './Drawer/Drawer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Drawer/>
      </div>
    );
  }
}

export default App;
