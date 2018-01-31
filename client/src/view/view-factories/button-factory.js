import React from 'react';
import {Link} from 'react-router-dom';

import './button-factory.css';

export const TextWithImage = (props) => (
    <React.Fragment>
        <div className={`lp-btn-img lp-btn-img-resp ${props.iconClass || ''}`} style={{backgroundImage: `url(${props.iconUrl})`}}></div>
        <span>&nbsp;&nbsp;</span>
        <div className={`lp-btn-txt lp-btn-txt-resp ${props.textClass || ''}`}>{props.children}</div>
    </React.Fragment>
)

export const LPButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, onClick, href } = props;

    const content = iconUrl ? (
        <TextWithImage iconClass={btnIconClass} iconUrl={iconUrl} textClass={btnTextClass}>
            {children}
        </TextWithImage>
    ) : (
        <div className={`lp-btn-txt lp-btn-txt-resp ${props.textClass || ''}`}>{props.children}</div>
    )

    return href ? (
        <Link className={`lp-btn lp-btn-resp ${btnClass || ''}`} to={href}>
            {content}
        </Link>
    ) : (
        <button className={`lp-btn lp-btn-resp ${btnClass || ''}`} onClick={onClick}>
            {content}
        </button>
    )
}