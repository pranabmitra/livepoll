import React from 'react';

import {NAV_BUTTONS_DATA} from "../../constants/routing";
import './factory.css';

export const NavigationButtons = () => (
    <div className='header-nav-pane'>
        {
            NAV_BUTTONS_DATA.map((navButtonData)=>(
                <a className='header-nav-btn header-nav-btn-resp' key={navButtonData.HREF} href={navButtonData.HREF}>
                    {navButtonData.TITLE}
                </a>
            ))
        }
    </div>
);