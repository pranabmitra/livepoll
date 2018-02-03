import React from 'react';

import {SIGNIN_METHODS} from "../../../../constants/auth";
import './auth-buttons.css';
import {signIn} from "../../../../control/auth/auth-functions";
import LPButton from "../LPButton";
import {showFloatingMsg} from "../../popups/utils";
import {FLOATING_MSG_TYPES} from "../../../../constants/popups";

const SignInButton = (props) => {
    let icon,
        text;

    switch (props.signInMethod) {
        case SIGNIN_METHODS.GOOGLE:
            icon = '/images/icons/google-logo.png';
            text = 'Google';
            break;

        case SIGNIN_METHODS.FACEBOOK:
            icon = '/images/icons/fb-logo.png';
            text = 'Facebook';
            break;

        default:
            return;
    }

    const onClick = () => {
        signIn(props.signInMethod)
            .then(() => showFloatingMsg('Sign in successful!', FLOATING_MSG_TYPES.SUCCESS))
            .catch(() => showFloatingMsg('Signed in unsuccessful!', FLOATING_MSG_TYPES.ERROR));
    }

    return (
        <LPButton
            btnClass={props.className + ' signin-btn fl'}
            btnTextClass='signin-btn-text'
            btnIconClass='signin-icon'
            iconUrl={icon}
            onClick={onClick}>
            {text}
        </LPButton>
    )
}

export default SignInButton;