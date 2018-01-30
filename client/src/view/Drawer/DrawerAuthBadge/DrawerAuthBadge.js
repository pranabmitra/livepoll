import React from 'react';

import './DrawerAuthBadge.css';
import SignInPopupButton from "../../AuthButtons/SignInPopupButton";
import SignInButton from "../../AuthButtons/SignInButton";
import {SIGNIN_METHODS} from "../../../constants/auth";

const DrawerAuthBadge = (props) => {
    if (!props.isSignedIn) {
        return (
            <div>
                Sign in with<br/><br/>
                <SignInButton signInMethod={SIGNIN_METHODS.GOOGLE}/>
                <SignInButton signInMethod={SIGNIN_METHODS.FACEBOOK}/>
            </div>
        )
    }

    return (
        <div className='drawer-auth-badge'>
            <div className='drawer-auth-badge-img drawer-auth-badge-img-resp'></div>
            <a href='/profile' className='drawer-auth-badge-txt drawer-auth-badge-txt-resp'>Snoopy</a>
        </div>
    )
}

export default DrawerAuthBadge;