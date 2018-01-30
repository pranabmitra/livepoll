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

    if (livepollAuth.isSignedIn()) {
        initialState.set('authState', Map({
            isSignedIn: true,
            signInDetails: Map(livepollAuth.getSignedInDetails()),
        }));
    }

    initAppStateStore(initialState);
    return Promise.resolve(1);
}

const initLivepollWebApp = () => {
    return initFirebase()
        .then(initAppStateManagement);
}

export default initLivepollWebApp;