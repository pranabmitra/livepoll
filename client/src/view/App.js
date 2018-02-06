import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Content from './Content/Content';
import FloatingButtons from './shared-views/buttons/FloatingButtons/FloatingButtons';
import Modals from "./Modals/Modals";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Drawer/>
          <Content/>
          <FloatingButtons/>
          <Modals/>
      </div>
    );
  }
}

export default App;
