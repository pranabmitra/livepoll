import * as firebase from 'firebase';
import {getAppStateStore, initAppStateStore} from "../state-management/store";
import {FIREBASE_CONFIG} from '../../constants/firebase';
import {actionSignInSuccess} from "../state-management/action-creators/auth-actions";


const initFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG)
    return Promise.resolve(1);
}

const initAppStateManagement = () => {
    initAppStateStore();
    return Promise.resolve(1);
}

function initAuthChangeListener() {
    const dispatch = getAppStateStore().dispatch;
    return new Promise(resolve => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                dispatch(actionSignInSuccess(firebaseUser));
            }
            resolve(1);
        });
        if(firebase.auth().currentUser) {
            dispatch(actionSignInSuccess(firebase.auth().currentUser));
            resolve(1);
        }
    });
}

const initLivepollWebApp = () => {
    return initFirebase()
        .then(initAppStateManagement)
        .then(initAuthChangeListener);
}

export default initLivepollWebApp;
