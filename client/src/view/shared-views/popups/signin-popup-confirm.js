import React from 'react'

import {MODAL_COMPONENT_TYPES} from "../../../constants/popups";
import {actionOpenModal} from "../../../control/state-management/action-creators/view-actions/modal-actions";
import TitledArea from "../general/TitledArea/TitledArea";
import {signInWithFB, signInWithGoogle} from "../../../control/auth/auth-functions";
import {getAppStateStore} from "../../../control/state-management/store";
import LPButton from "../buttons/LPButton";

export const signInPopupConfirm = () => new Promise((resolve, reject)=>{
    const modalOptions = {
        willMakeResult: true,
        resultFunctions: {
            signInWithGoogle: () => signInWithGoogle().then(resolve).catch(reject),
            signInWithFB: () => signInWithFB().then(resolve).catch(reject)
        }
    }
    getAppStateStore().dispatch(actionOpenModal(
        MODAL_COMPONENT_TYPES.SIGNIN_POPUP_CONFIRM,
        modalOptions,
        {},
        'round-border'))
})

export const SignInPopupConfirm = props => (
    <TitledArea title='Please sign in to continue...'>
        <LPButton iconUrl='/images/icons/google-logo.png' onClick={props.signInWithGoogle}>Google</LPButton>
        <LPButton iconUrl='/images/icons/fb-logo.png' onClick={props.signInWithFB}>Facebook</LPButton>
    </TitledArea>
)