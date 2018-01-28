import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Drawer/>
          <Content/>
      </div>
    );
  }
}

export default App;
