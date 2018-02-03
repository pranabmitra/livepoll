import React from 'react';

import './auth-buttons.css';
import {signOut} from "../../../../control/auth/auth-functions";
import LPButton from "../LPButton";


const SignoutButton = (props) => (
    <LPButton btnClass={`${props.className} sign-out-btn fr`} onClick={signOut}>Sign Out</LPButton>
)

export default SignoutButton;