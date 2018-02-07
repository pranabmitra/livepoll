import React from 'react';

import './buttons.css';
import ImageWithTextLabel from "../general/ImageWithTextLabel";

const LPButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, onClick} = props;

    return (
        <button className={`lp-btn lp-btn-resp ${btnClass || ''}`} onClick={onClick}>
            <ImageWithTextLabel
                iconClass={`lp-btn-img lp-btn-img-resp ${btnIconClass}`}
                iconUrl={iconUrl}
                textClass={`lp-btn-txt lp-btn-txt-resp ${btnTextClass}`}>
                {children}
            </ImageWithTextLabel>
        </button>
    )
}

export default LPButton;