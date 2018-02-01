import * as firebase from 'firebase';

import {SIGNIN_METHODS} from "../../constants/auth";


export const signIn = (signInMethod) => {
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

    return firebase.auth().signInWithPopup(provider).then(signInData => signInData.user);
}


export const signOut = () => {
    return firebase.auth().signOut();
}
