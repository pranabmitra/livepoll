import React from 'react';

import {NAV_BUTTONS_DATA} from "../../constants/routing";
import LPLinkButton from "../view-factories/button-factory/LPLinkButton";
import LPButton from "../view-factories/button-factory/LPButton";

const NavigationButtons = (props) => {
    const {containerClass, buttonClass, iconClass, titleClass} = props;

    return (
        <div className={containerClass}>
            {
                NAV_BUTTONS_DATA.map((navButtonData)=>{
                    const ButtonComponent = navButtonData.HREF ? LPLinkButton : LPButton;
                    return (
                        <ButtonComponent
                            key={navButtonData.TITLE}
                            href={navButtonData.HREF}
                            btnClass={buttonClass}
                            btnIconClass={iconClass}
                            btnTextClass={titleClass}
                            iconUrl={navButtonData.ICON_URL}>

                            {navButtonData.TITLE}</ButtonComponent>
                    )
                })
            }
        </div>
    )
};

export default NavigationButtons;