import React from 'react';
import './button-factory.css';

export const LPButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, onClick, href } = props;

    return (
        <a className={`lp-btn lp-btn-resp ${btnClass || ''}`} onClick={onClick} href={href}>
            {
                !!iconUrl && (
                    <div className={`lp-btn-img lp-btn-img-resp ${btnIconClass || ''}`}
                         style={{backgroundImage: `url(${iconUrl})`}}></div>
                )
            }
            {
                !!iconUrl && <span>&nbsp;&nbsp;</span>
            }
            <div className={`lp-btn-txt lp-btn-txt-resp ${btnTextClass || ''}`}>{children}</div>
        </a>
    )
}