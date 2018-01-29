import React from 'react';

import './NavigationButtons.css';
import {NAV_BUTTONS_DATA} from "../../../constants/routing";

const NavigationButtons = () => (
    <div className='header-nav-pane header-nav-pane-resp'>
        {
            NAV_BUTTONS_DATA.map((navButtonData)=>(
                <a className='header-nav-btn header-nav-btn-resp' key={navButtonData.HREF} href={navButtonData.HREF}>
                    <i className='header-nav-btn-icon header-nav-btn-icon-resp' style={{backgroundImage: 'url(images/icons/fake-icon.png)'}}></i>
                    <span className='header-nav-btn-txt header-nav-btn-txt-resp'>&nbsp;{navButtonData.TITLE}</span>
                </a>
            ))
        }
    </div>
);

export default NavigationButtons;