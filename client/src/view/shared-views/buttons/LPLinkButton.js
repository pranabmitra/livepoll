import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './buttons.css';
import ImageWithTextLabel from "./ImageWithTextLabel";

const isActiveRoute = (currentPath, targetPath) => {
    if (targetPath === '/') {
        return targetPath === currentPath;
    } else {
        return currentPath.indexOf(targetPath) !== -1;
    }
}

const LPLinkButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, currentPath, href } = props;

    return (
        <Link className={`lp-btn lp-btn-resp ${btnClass || ''} ${isActiveRoute(currentPath, href) ? 'active-link-btn' : ''}`}
              to={href}>
            <ImageWithTextLabel
                iconClass={`lp-btn-img lp-btn-img-resp ${btnIconClass}`}
                iconUrl={iconUrl}
                textClass={`lp-btn-txt lp-btn-txt-resp ${btnTextClass}`}>
                {children}
            </ImageWithTextLabel>
        </Link>
    );
};

// TODO: this shit is buggy
const mapStateToProps = state => ({
    currentPath: state.get('routeState').location.pathname
})

export default connect(mapStateToProps)(LPLinkButton);