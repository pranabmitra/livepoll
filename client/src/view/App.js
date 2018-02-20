import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';

import Header from './Header/Header';
import Content from './Content/Content';
import FloatingButtonList from './FloatingButtonList/FloatingButtonList';
import User from "../control/auth/auth-user";
import asyncComponent from "./shared-views/AsyncComponent";

const Drawer = asyncComponent(()=>{
    return import('./Drawer/Drawer').then(module => module.default)
})

const Modals = asyncComponent(()=>{
    return import('./Modals/Modals').then(module => module.default)
})

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header isSignedIn={this.props.isSignedIn} signedInUser={this.props.signedInUser}/>
          {
              this.props.isDrawerOpened &&
              <Drawer isOpened={this.props.isDrawerOpened}
                      isSignedIn={this.props.isSignedIn}
                      signedInUser={this.props.signedInUser}/>
          }

          <Content/>

          <FloatingButtonList/>

          {
              this.props.modalsOpened.size > 0 && <Modals modals={this.props.modalsOpened}/>
          }

      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isDrawerOpened: state.getIn(['viewState', 'drawer', 'isOpened']),
        isSignedIn: state.getIn(['authState', 'isSignedIn']),
        signedInUser: new User(state.getIn(['authState', 'signInData'])),
        modalsOpened: state.getIn(['viewState', 'modalsOpened'])
    }
}
export default connect(mapStateToProps, null)(App);
