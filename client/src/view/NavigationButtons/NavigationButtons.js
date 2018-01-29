import React from 'react';

import {NAV_BUTTONS_DATA} from "../../constants/routing";

const NavigationButtons = (props) => (
    <div className={props.containerClass}>
        {
            NAV_BUTTONS_DATA.map((navButtonData)=>(
                <a className={props.buttonClass} key={navButtonData.HREF} href={navButtonData.HREF}>
                    <i className={props.iconClass} style={{backgroundImage: 'url(images/icons/fake-icon.png)'}}></i>
                    <span className={props.titleClass}>&nbsp;{navButtonData.TITLE}</span>
                </a>
            ))
        }
    </div>
);

export default NavigationButtons;