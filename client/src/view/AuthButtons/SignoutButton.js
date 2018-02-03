import React from 'react';

import './auth-buttons.css';
import LPButton from "../view-factories/LPButton";
import {signOut} from "../../control/auth/auth-functions";


const SignoutButton = (props) => (
    <LPButton btnClass={`${props.className} sign-out-btn fr`} onClick={signOut}>Sign Out</LPButton>
)

export default SignoutButton;