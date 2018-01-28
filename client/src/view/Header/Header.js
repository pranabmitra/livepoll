import React from 'react';

import './Header.css'
import {toggleDrawer} from "../Drawer/drawer-utils";

const Header = () => (
    <div className='header header-resp fl'>
        <button className='drawer-btn drawer-btn-resp fr' onClick={toggleDrawer}>V</button>
        <a className='app-title app-title-resp fl'>livepoll</a>
    </div>
)

export default Header;