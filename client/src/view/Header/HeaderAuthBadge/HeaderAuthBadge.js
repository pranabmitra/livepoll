import React from 'react';
import {connect} from 'react-redux';

import './HeaderAuthBadge.css';
import User from "../../../control/auth/auth-user";
import {ROUTES} from "../../../constants/routing";
import LPLinkButton from "../../shared-views/buttons/LPLinkButton";
import LPButton from "../../shared-views/buttons/LPButton";
import {signIn} from "../../../control/auth/auth-functions";
import {SIGNIN_METHODS} from "../../../constants/auth";

const HeaderUserBadge = (props) => (
    <LPLinkButton
        btnClass='header-user-badge'
        btnIconClass='header-user-badge-icon'
        btnTextClass='header-user-badge-txt header-user-badge-txt-resp'
        href={ROUTES.PROFILE}
        iconUrl={props.user.getProfileImage()}>
        {props.user.getFullName()}
    </LPLinkButton>
)

const HeaderAuthBadge = (props) => {
    const authBadge = <HeaderUserBadge user={props.user}/>;
    const signInArea = (
        <div className='fr'>
            <LPButton iconUrl='/images/icons/google-logo.png' onClick={()=>signIn(SIGNIN_METHODS.GOOGLE)}/>
            &nbsp;
            <LPButton iconUrl='/images/icons/fb-logo.png' onClick={()=>signIn(SIGNIN_METHODS.FACEBOOK)}/>
        </div>
    )
    return (
        <React.Fragment>
            {
                props.isSignedIn ? authBadge : signInArea
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    var isSignedIn = state.getIn(['authState', 'isSignedIn']),
        signInData,
        user;

    if (isSignedIn) {
        signInData = state.getIn(['authState', 'signInData']);
        user = new User(signInData);
    }

    return {
        isSignedIn,
        user
    }
};

export default connect(mapStateToProps)(HeaderAuthBadge);