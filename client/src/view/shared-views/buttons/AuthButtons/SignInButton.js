import React from 'react';

import {SIGNIN_METHODS} from "../../../../constants/auth";
import {signIn} from "../../../../control/auth/auth-functions";
import LPButton from "../LPButton";

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
        signIn(props.signInMethod);
    }

    return (
        <LPButton btnClass={props.className}
                  iconUrl={icon}
                  onClick={onClick}>
            {props.showText && text}
        </LPButton>
    )
}

export default SignInButton;