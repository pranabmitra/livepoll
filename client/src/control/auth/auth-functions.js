import * as firebase from 'firebase';

import {SIGNIN_METHODS} from "../../constants/auth";


export const signIn = (signInMethod) => {
    let provider;

    switch (signInMethod) {
        case SIGNIN_METHODS.GOOGLE:
            provider = new firebase.auth.GoogleAuthProvider();
            break;

        case SIGNIN_METHODS.FACEBOOK:
            provider = new firebase.auth.FacebookAuthProvider();
            break;

        default:
            break;
    }

    try {
        return firebase.auth().signInWithPopup(provider);
    } catch (error) {
        return Promise.reject(404);
    }
}

export const signOut = () => {
    try {
        return firebase.auth().signOut();
    } catch (error) {
        return Promise.reject(404);
    }
}

export const signInWithGoogle = () => signIn(SIGNIN_METHODS.GOOGLE)

export const signInWithFB = () => signIn(SIGNIN_METHODS.FACEBOOK)