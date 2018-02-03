import React from 'react';

import './auth-buttons.css'
import LPButton from "../LPButton";

const SignInPopupButton = (props) => (
    <LPButton btnClass={props.className + ' signin-pp-btn signin-pp-btn-resp'}>
        Sign In
    </LPButton>
);

export default SignInPopupButton;