import * as firebase from 'firebase';
import {getAppStateStore, initAppStateStore} from "../state-management/store";
import {FIREBASE_CONFIG} from '../../constants/firebase';
import {actionSignInSuccess, actionSignOutSuccess} from "../state-management/action-creators/auth-actions";
import {actionCloseDrawer} from "../state-management/action-creators/view-state/drawer-actions";


const initAppStateManagement = () => {
    initAppStateStore();
    return Promise.resolve(1);
}

const initFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
    const dispatch = getAppStateStore().dispatch;

    return new Promise(resolve => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) dispatch(actionSignInSuccess(firebaseUser));
            else dispatch(actionSignOutSuccess());
            dispatch(actionCloseDrawer());
            resolve();
        });
    });
}

const initLivepollWebApp = () => {
    return initAppStateManagement().then(initFirebase);
}

export default initLivepollWebApp;
