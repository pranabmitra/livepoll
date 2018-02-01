import React from 'react';

import './button-factory.css';
import ImageWithTextLabel from "./ImageWithTextLabel";

const LPButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, onClick} = props;

    return (
        <button className={`lp-btn lp-btn-resp ${btnClass || ''}`} onClick={onClick}>
            <ImageWithTextLabel iconClass={btnIconClass} iconUrl={iconUrl} textClass={btnTextClass}>
                {children}
            </ImageWithTextLabel>
        </button>
    )
}

export default LPButton;