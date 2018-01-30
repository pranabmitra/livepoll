import React from 'react';
import {connect} from 'react-redux';

import {SIGNIN_METHODS} from "../../constants/auth";
import './auth-buttons.css';
import {signIn} from "../../control/auth/auth-functions";

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

    const iconStyle = {
        backgroundImage: 'url(' + icon +')',
    };

    const onClick = () => props.signIn(props.signInMethod);

    return (
        <button className={props.className + ' signin-btn fl'} onClick={onClick}>
            <div className='signin-icon signin-icon-resp' style={iconStyle}></div>
            <div className='signin-btn-text'>{text}</div>
        </button>
    )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    signIn: (signInMethod) => {
        signIn(dispatch, signInMethod);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);