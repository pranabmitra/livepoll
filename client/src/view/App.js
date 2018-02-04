import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Drawer from './Drawer/Drawer';
import Content from './Content/Content';
import FloatingButtons from './FloatingButtons/FloatingButtons';
import Modal from "./view-factories/popups/Modal";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Drawer/>
          <Content/>
          <FloatingButtons/>
          <Modal>
              <div> Modal Test </div>
          </Modal>
      </div>
    );
  }
}

export default App;
