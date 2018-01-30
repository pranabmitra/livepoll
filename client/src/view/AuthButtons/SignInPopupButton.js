import React from 'react';

import './auth-buttons.css'

const SignInPopupButton = (props) => (
    <button className= {props.className + ' signin-pp-btn signin-pp-btn-resp'}>Sign In</button>
);

export default SignInPopupButton;