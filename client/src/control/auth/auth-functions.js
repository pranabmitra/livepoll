import * as firebase from 'firebase';

import {SIGNIN_METHODS} from "../../constants/auth";
import {actionSignIn} from "../state-management/action-creators/auth-actions";


export const signIn = (dispatch, signInMethod) => {
    var provider;

    switch (signInMethod) {
        case SIGNIN_METHODS.GOOGLE:
            provider = new firebase.auth.GoogleAuthProvider();
            break;

        case SIGNIN_METHODS.FACEBOOK:
            return;

        default:
            return;
    }

    const onSignInSuccess = (signInData)=>{
        dispatch(actionSignIn(signInData.user));
    }

    try {
        return firebase.auth().signInWithPopup(provider).then(onSignInSuccess);
    } catch (err) {
        window.alert('Signin failed');
    }
}

export const signOut = () => {

}

export const isSignedIn = () => {
    return false;
}

export const getSignedInDetails = () => {
    return {
        signInMethod: SIGNIN_METHODS.NONE,
        signInData: undefined,
    }
}
