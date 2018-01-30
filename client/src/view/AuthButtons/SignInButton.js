import React from 'react';
import {SIGNIN_METHODS} from "../../constants/auth";

import './auth-buttons.css';

const SignInButton = (props) => {
    let icon,
        text,
        buttonSpecialClass;

    switch (props.signInMethod) {
        case SIGNIN_METHODS.GOOGLE:
            icon = '/images/icons/google-logo.png';
            text = 'Google';
            buttonSpecialClass = 'signin-btn-google';
            break;

        case SIGNIN_METHODS.FACEBOOK:
            icon = '/images/icons/fb-logo.png';
            text = 'Facebook';
            buttonSpecialClass = 'signin-btn-fb';
            break;
    }

    const iconStyle = {
        backgroundImage: 'url(' + icon +')',
    };

    return (
        <button className={props.className + ' signin-btn fl ' + buttonSpecialClass}>
            <div className='signin-icon signin-icon-resp' style={iconStyle}></div>
            <div className='signin-btn-text'>{text}</div>
        </button>
    )
}

export default SignInButton;