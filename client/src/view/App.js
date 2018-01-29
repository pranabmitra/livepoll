import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Content from './Content/Content';
import FloatingButtons from './FloatingButtons/FloatingButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Drawer/>
          <Content/>
          <FloatingButtons/>
      </div>
    );
  }
}

export default App;
