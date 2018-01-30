import * as firebase from 'firebase';
import {Map} from 'immutable';

import initialAppState from "../state-management/initial-states";
import * as livepollAuth from "../auth/auth-functions";
import {initAppStateStore} from "../state-management/store";
import {FIREBASE_CONFIG} from '../../constants/firebase';


const initFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG)
    return Promise.resolve(1);
}

const initAppStateManagement = () => {
    var initialState = initialAppState;

    // Realtime listener
    // TODO:: need to change state
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            initialState.set('authState', Map({
                isSignedIn: true,
                signInDetails: firebaseUser,
            }));
            console.log(firebaseUser);
        } else {
            console.log('Not Logged in!');
        }
    });

    initAppStateStore(initialState);
    return Promise.resolve(1);
}

const initLivepollWebApp = () => {
    return initFirebase()
        .then(initAppStateManagement);
}

export default initLivepollWebApp;
