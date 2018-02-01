import React from 'react';
import {connect} from 'react-redux';

import {SIGNIN_METHODS} from "../../constants/auth";
import './auth-buttons.css';
import {actionSignIn} from "../../control/state-management/action-creators/auth-actions";
import LPButton from "../view-factories/LPButton";

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
        dispatch(actionSignIn(signInMethod));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);