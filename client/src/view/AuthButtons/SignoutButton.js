import React from 'react';

import './auth-buttons.css';


const SignoutButton = (props) => (
    <button className={`${props.className} sign-out-btn`}>Sign Out</button>
)

export default SignoutButton;