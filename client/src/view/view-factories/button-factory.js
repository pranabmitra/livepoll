import React from 'react';
import './button-factory.css';

export const LPButton = (props) => {
    var { btnClass, btnIconClass, iconUrl, children, btnTextClass, onClick } = props;

    return (
        <a className={`lp-btn lp-btn-resp ${btnClass || ''}`} onClick={onClick}>
            {
                !!iconUrl && <div className={`lp-btn-img lp-btn-img-resp ${btnIconClass || ''}`} style={{backgroundImage: `url(${iconUrl})`}}></div>
            }
            <div className={`lp-btn-txt lp-btn-txt-resp ${btnTextClass || ''}`}>{children}</div>
        </a>
    )
}