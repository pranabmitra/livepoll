import React from 'react';
import {connect} from 'react-redux';

import './HeaderAuthBadge.css';
import SignInPopupButton from "../../AuthButtons/SignInPopupButton";
import User from "../../../control/auth/auth-user";
import {LPButton} from "../../view-factories/button-factory";

const HeaderUserBadge = (props) => (
    <LPButton
        btnClass='header-user-badge'
        btnIconClass='header-user-badge-icon'
        btnTextClass='header-user-badge-txt header-user-badge-txt-resp'
        iconUrl={props.user.getProfileImage()}>
        {props.user.getFullName()}
    </LPButton>
)

const HeaderAuthBadge = (props) => (
    <React.Fragment>
        {
            props.isSignedIn ? <HeaderUserBadge user={props.user}/> : <SignInPopupButton className='fr'/>
        }
    </React.Fragment>
)

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