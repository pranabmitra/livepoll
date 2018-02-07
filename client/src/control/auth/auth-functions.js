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
            provider = new firebase.auth.FacebookAuthProvider();
            // TODO:: need to create FB app and set appSecret in firebase
            // showFloatingMsg('Feature coming soon!', FLOATING_MSG_TYPES.INFO)
            break;

        default:
            break;
    }

    // let signInFunction = isMobileDevice() ? 'signInWithRedirect' : 'signInWithPopup';

    try {
        return firebase.auth().signInWithPopup(provider)
            .then(function onSuccess(result) {
                // const token = result.credential.accessToken;
                // const user = result.user;

                showFloatingMsg('Signed in successful!', FLOATING_MSG_TYPES.SUCCESS, 1000)
            })
            .catch(function onError(error) {
                var errorCode = error.code,
                    errorMessage = error.message,
                    credential = error.credential;

                return showFloatingMsg(errorCode + ': Sign in failed for ' + credential + ' - ' + errorMessage, FLOATING_MSG_TYPES.ERROR);
            });
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
