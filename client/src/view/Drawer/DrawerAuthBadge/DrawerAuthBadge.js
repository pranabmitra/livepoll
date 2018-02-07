import React from 'react';
import {connect} from 'react-redux';

import './DrawerAuthBadge.css';
import SignInButton from "../../shared-views/buttons/AuthButtons/SignInButton";
import {SIGNIN_METHODS} from "../../../constants/auth";
import User from "../../../control/auth/auth-user";
import TitledArea from "../../shared-views/general/TitledArea/TitledArea";

const DrawerAuthBadge = (props) => {
    if (!props.isSignedIn) {
        return (
            <TitledArea className='drawer-auth-badge' title='Sign in with'>
                <SignInButton signInMethod={SIGNIN_METHODS.GOOGLE} showText={true}/>
                <SignInButton signInMethod={SIGNIN_METHODS.FACEBOOK} showText={true}/>
            </TitledArea>
        )
    }

    return (
        <div className='drawer-auth-badge'>
            <div className='drawer-auth-badge-img drawer-auth-badge-img-resp'
                 style={{backgroundImage: `url(${props.user.getProfileImage()})`}}></div>
            <div className='drawer-auth-badge-txt drawer-auth-badge-txt-resp'>{props.user.getFullName()}</div>
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