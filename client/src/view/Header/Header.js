import React from 'react';

import './Header.css'
import {toggleDrawer} from "../Drawer/drawer-utils";
import NavigationButtons from './partials/NavigationButtons';

const Header = () => (
    <div className='header header-resp fl'>
        <br/>
        <button className='drawer-btn drawer-btn-resp fr' onClick={toggleDrawer}>&equiv;</button>
        <a className='app-title app-title-resp fl'>livepoll</a>
        <NavigationButtons/>
    </div>
)

export default Header;