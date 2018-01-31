import React from 'react';
import {connect} from 'react-redux';

import {SIGNIN_METHODS} from "../../constants/auth";
import './auth-buttons.css';
import {signIn} from "../../control/auth/auth-functions";
import {LPButton} from "../view-factories/button-factory";

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

    const onClick = () => props.signIn(props.signInMethod);

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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    signIn: (signInMethod) => {
        signIn(dispatch, signInMethod);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);