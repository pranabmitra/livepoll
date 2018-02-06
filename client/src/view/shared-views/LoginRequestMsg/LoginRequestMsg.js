import React from 'react'
import TitledArea from "../general/TitledArea/TitledArea";
import {SIGNIN_METHODS} from "../../../constants/auth";
import {signIn} from "../../../control/auth/auth-functions";
import LPButton from "../buttons/LPButton";

const LoginRequestMsg = () => (
    <TitledArea title='Please sign in to continue'>
        <LPButton btnTextClass='fl' btnIconClass='fl' iconUrl='/images/icons/google-logo.png' onClick={()=>signIn(SIGNIN_METHODS.GOOGLE)}>Google</LPButton>
        &nbsp;
        <LPButton btnTextClass='fl' btnIconClass='fl' iconUrl='/images/icons/fb-logo.png' onClick={()=>signIn(SIGNIN_METHODS.FACEBOOK)}>Facebook</LPButton>
    </TitledArea>
)

export default LoginRequestMsg