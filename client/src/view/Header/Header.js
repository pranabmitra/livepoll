import React from 'react';
import {connect} from 'react-redux';

import './Header.css';
import {toggleDrawer} from "../Drawer/drawer-utils";
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import HeaderAuthBadge from "./HeaderAuthBadge/HeaderAuthBadge";
import SignoutButton from "../AuthButtons/SignoutButton";

const Header = (props) => (
    <div className='header header-resp fl'>
        <br/>
        <button className='drawer-btn drawer-btn-resp fr' onClick={props.toggleDrawer}>&equiv;</button>
        <a className='app-title app-title-resp fl' href='/'>livepoll</a>
        <SignoutButton className='header-signout-btn header-signout-btn-resp fr'/>
        <HeaderAuthBadge/>
        <NavigationButtons
            containerClass='header-nav-pane header-nav-pane-resp'
            buttonClass='header-nav-btn header-nav-btn-resp'
            iconClass='header-nav-btn-icon header-nav-btn-icon-resp'
            titleClass='header-nav-btn-txt header-nav-btn-txt-resp'
        />
    </div>
)

const mapStateToProps = undefined;
const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: toggleDrawer.bind(this, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);