import React from 'react';

import {NAV_BUTTONS_DATA} from "../../../../constants/routing";
import LPLinkButton from "../LPLinkButton";

const NavigationButtons = (props) => {
    const {containerClass, buttonClass, iconClass, titleClass} = props;

    return (
        <div className={containerClass}>
            {
                NAV_BUTTONS_DATA.map((navButtonData)=>{
                    return (
                        <LPLinkButton
                            key={navButtonData.TITLE}
                            href={navButtonData.HREF}
                            btnClass={buttonClass}
                            btnIconClass={iconClass}
                            btnTextClass={titleClass}
                            iconUrl={navButtonData.ICON_URL}>

                            {navButtonData.TITLE}</LPLinkButton>
                    )
                })
            }
        </div>
    )
};

export default NavigationButtons;