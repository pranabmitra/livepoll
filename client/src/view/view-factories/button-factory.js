import React from 'react';
import {Link} from 'react-router-dom';

import './button-factory.css';

export const LPButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, onClick, href } = props;

    const icon = !!iconUrl && (
        <div className={`lp-btn-img lp-btn-img-resp ${btnIconClass || ''}`} style={{backgroundImage: `url(${iconUrl})`}}></div>
    );

    const gap = !!iconUrl && <span>&nbsp;&nbsp;</span>;

    const title = <div className={`lp-btn-txt lp-btn-txt-resp ${btnTextClass || ''}`}>{children}</div>;

    return href ? (
        <Link className={`lp-btn lp-btn-resp ${btnClass || ''}`} to={href}>
            { icon }
            { gap }
            { title }
        </Link>
    ) : (
        <button className={`lp-btn lp-btn-resp ${btnClass || ''}`} onClick={onClick}>
            { icon }
            { gap }
            { title }
        </button>
    )
}