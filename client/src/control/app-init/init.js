import * as firebase from 'firebase';
import {getAppStateStore, initAppStateStore} from "../state-management/store";
import {FIREBASE_CONFIG} from '../../constants/firebase';
import {actionSignInSuccess} from "../state-management/action-creators/auth-actions";


const initAppStateManagement = () => {
    initAppStateStore();
    return Promise.resolve(1);
}

const initFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
    const dispatch = getAppStateStore().dispatch;

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            dispatch(actionSignInSuccess(firebaseUser));
        }
    });
    return Promise.resolve(1);
}

const initLivepollWebApp = () => {
    return initAppStateManagement().then(initFirebase);
}

export default initLivepollWebApp;
