import * as firebase from 'firebase';

import {SIGNIN_METHODS} from "../../constants/auth";
import {FLOATING_MSG_TYPES} from "../../constants/popups";
import {showFloatingMsg} from "../../view/shared-views/popups/utils";


export const signIn = (signInMethod) => {
    let provider;

    switch (signInMethod) {
        case SIGNIN_METHODS.GOOGLE:
            provider = new firebase.auth.GoogleAuthProvider();
            break;

        case SIGNIN_METHODS.FACEBOOK:
            return;

        default:
            return;
    }

    // let signInFunction = isMobileDevice() ? 'signInWithRedirect' : 'signInWithPopup';

    try {
        return firebase.auth().signInWithPopup(provider)
            .then(()=>showFloatingMsg('Signed in successful!', FLOATING_MSG_TYPES.SUCCESS, 1000));
    } catch (error) {
        return showFloatingMsg('Sign in failed!', FLOATING_MSG_TYPES.ERROR);
    }
}


export const signOut = () => {
    try {
        return firebase.auth().signOut();
    } catch (error) {
        return Promise.reject(404);
    }
}
