import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './button-factory.css';
import ImageWithTextLabel from "./ImageWithTextLabel";

const LPLinkButton = (props) => {
    let { btnClass, btnIconClass, iconUrl, children, btnTextClass, currentPath, href } = props;

    return (
        <Link className={`lp-btn lp-btn-resp ${btnClass || ''} ${currentPath === href ? 'active-link-btn' : ''}`}
              to={href}>
            <ImageWithTextLabel iconClass={btnIconClass} iconUrl={iconUrl} textClass={btnTextClass}>
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