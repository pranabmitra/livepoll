import * as firebase from 'firebase';

import {SIGNIN_METHODS} from "../../constants/auth";
import {actionSignIn, actionSignOut} from "../state-management/action-creators/auth-actions";


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

    return firebase.auth().signInWithPopup(provider).then((signInData)=>{
        dispatch(actionSignIn(signInData.user));
    });
}


export const signOut = (dispatch) => {
    return firebase.auth().signOut()
        .then(() => dispatch(actionSignOut()));
}
