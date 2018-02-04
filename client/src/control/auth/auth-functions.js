import * as firebase from 'firebase';

import {SIGNIN_METHODS} from "../../constants/auth";
import {isMobileDevice} from "../utils";


export const signIn = (signInMethod) => {
    var provider,
        signInFunction;

    switch (signInMethod) {
        case SIGNIN_METHODS.GOOGLE:
            provider = new firebase.auth.GoogleAuthProvider();
            break;

        case SIGNIN_METHODS.FACEBOOK:
            return;

        default:
            return;
    }

    signInFunction = isMobileDevice() ? 'signInWithRedirect' : 'signInWithPopup';
    return firebase.auth()[signInFunction](provider).then(signInData => signInData.user);
}


export const signOut = () => {
    return firebase.auth().signOut();
}
