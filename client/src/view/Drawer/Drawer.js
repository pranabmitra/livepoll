import React from 'react';

import './Drawer.css';
import DrawerAuthBadge from './DrawerAuthBadge/DrawerAuthBadge';

const Drawer = () => (
    <div id='app-drawer' className='drawer drawer-resp'>
        <div className='drawer-content'>
            <DrawerAuthBadge/>
        </div>
    </div>
)

export default Drawer;