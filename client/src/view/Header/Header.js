import React from 'react';

import './Header.css';
import {toggleDrawer} from "../Drawer/drawer-utils";
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import HeaderAuthBadge from "./HeaderAuthBadge/HeaderAuthBadge";

const Header = () => (
    <div className='header header-resp fl'>
        <br/>
        <button className='drawer-btn drawer-btn-resp fr' onClick={toggleDrawer}>&equiv;</button>
        <a className='app-title app-title-resp fl' href='/'>livepoll</a>
        <HeaderAuthBadge/>
        <NavigationButtons
            containerClass='header-nav-pane header-nav-pane-resp'
            buttonClass='header-nav-btn header-nav-btn-resp'
            iconClass='header-nav-btn-icon header-nav-btn-icon-resp'
            titleClass='header-nav-btn-txt header-nav-btn-txt-resp'
        />
    </div>
)

export default Header;