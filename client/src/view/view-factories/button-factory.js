import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './button-factory.css';

export const TextWithImage = (props) => (
    <React.Fragment>
        {
            props.iconUrl && (
                <div className={`lp-btn-img lp-btn-img-resp ${props.iconClass || ''}`}
                     style={{backgroundImage: `url(${props.iconUrl})`}}></div>
            )
        }
        {
            props.iconUrl && <span>&nbsp;&nbsp;</span>
        }
        <div className={`lp-btn-txt lp-btn-txt-resp ${props.textClass || ''}`}>{props.children}</div>
    </React.Fragment>
)

export const LPButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, onClick} = props;

    return (
        <button className={`lp-btn lp-btn-resp ${btnClass || ''}`} onClick={onClick}>
            <TextWithImage iconClass={btnIconClass} iconUrl={iconUrl} textClass={btnTextClass}>
                {children}
            </TextWithImage>
        </button>
    )
}


const LPLinkButtonMapStateToProps = state => ({
    currentPath: state.get('routeState').location.pathname
})
export const LPLinkButton = connect(LPLinkButtonMapStateToProps)((props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, currentPath, href } = props;

    return (
        <Link className={`lp-btn lp-btn-resp ${btnClass || ''} ${currentPath === href ? 'active-link-btn' : ''}`}
              to={href}>
            <TextWithImage iconClass={btnIconClass} iconUrl={iconUrl} textClass={btnTextClass}>
                {children}
            </TextWithImage>
        </Link>
    );
});