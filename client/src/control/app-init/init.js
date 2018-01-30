import * as firebase from 'firebase';
import {Map} from 'immutable';

import appInitialState from "../state-management/initial-state";
import * as livepollAuth from "../auth/auth-functions";
import {initAppStateStore} from "../state-management/store";
import {FIREBASE_CONFIG} from '../../constants/firebase';


const initFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG)
    return Promise.resolve(1);
}

const initAppStateManagement = () => {
    var initialState = appInitialState;

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