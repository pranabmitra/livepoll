import React from 'react';

import {NAV_BUTTONS_DATA} from "../../constants/routing";
import {LPButton} from "../view-factories/button-factory";

const NavigationButtons = (props) => {
    const {containerClass, buttonClass, iconClass, titleClass} = props;

    return (
        <div className={containerClass}>
            {
                NAV_BUTTONS_DATA.map((navButtonData)=>(
                    <LPButton
                        key={navButtonData.HREF}
                        href={navButtonData.HREF}
                        btnClass={buttonClass}
                        btnIconClass={iconClass}
                        btnTextClass={titleClass}
                        iconUrl={navButtonData.ICON_URL}>

                        {navButtonData.TITLE}</LPButton>
                ))
            }
        </div>
    )
};

export default NavigationButtons;