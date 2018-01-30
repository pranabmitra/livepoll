import React from 'react';
import {connect} from 'react-redux';

import './DrawerAuthBadge.css';
import SignInButton from "../../AuthButtons/SignInButton";
import {SIGNIN_METHODS} from "../../../constants/auth";
import User from "../../../control/auth/auth-user";

const DrawerAuthBadge = (props) => {
    if (!props.isSignedIn) {
        return (
            <div className='drawer-auth-badge'>
                Sign in with<br/>
                <SignInButton className='drawer-signin-btn' signInMethod={SIGNIN_METHODS.GOOGLE}/>
                <SignInButton className='drawer-signin-btn' signInMethod={SIGNIN_METHODS.FACEBOOK}/>
            </div>
        )
    }

    return (
        <div className='drawer-auth-badge'>
            <div className='drawer-auth-badge-img drawer-auth-badge-img-resp'
                 style={{backgroundImage: `url(${props.user.getProfileImage()})`}}></div>
            <a href='/profile' className='drawer-auth-badge-txt drawer-auth-badge-txt-resp'>{props.user.getFullName()}</a>
        </div>
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

export default connect(mapStateToProps)(DrawerAuthBadge);