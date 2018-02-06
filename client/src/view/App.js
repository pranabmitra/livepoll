import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Content from './Content/Content';
import Modals from "./Modals/Modals";
import FloatingButtonList from './FloatingButtonList/FloatingButtonList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Drawer/>
          <Content/>
          <FloatingButtonList/>
          <Modals/>
      </div>
    );
  }
}

export default App;
