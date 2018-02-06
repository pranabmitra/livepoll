import React from 'react';

import './auth-buttons.css';
import {signOut} from "../../../../control/auth/auth-functions";
import LPButton from "../LPButton";
import {showFloatingMsg} from "../../popups/utils";
import {FLOATING_MSG_TYPES} from "../../../../constants/popups";

const onClick = () => {
    signOut()
        .then(()=>showFloatingMsg('You have been signed out!', FLOATING_MSG_TYPES.INFO))
        .catch(()=>showFloatingMsg('Signed out unsuccessful!', FLOATING_MSG_TYPES.ERROR))
}

const SignoutButton = (props) => (
    <LPButton btnClass={`${props.className} sign-out-btn fr`} onClick={onClick}>Sign Out</LPButton>
)

export default SignoutButton;