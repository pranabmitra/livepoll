import React from 'react';

import './auth-buttons.css'
import LPButton from "../LPButton";
import {showFloatingMsg} from "../../popups/utils";

const SignInPopupButton = (props) => (
    <LPButton btnClass={props.className + ' signin-pp-btn signin-pp-btn-resp'}
              onClick={_=>showFloatingMsg('XXXXXXXXX XXXXXXXXX XXXXXXXXX XXXXXXXXX XXXXXXXXX', 's')}>
        Sign In
    </LPButton>
);

export default SignInPopupButton;