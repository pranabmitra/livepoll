import * as firebase from 'firebase';
import {getAppStateStore, initAppStateStore} from "../state-management/store";
import {FIREBASE_CONFIG} from '../../constants/firebase';
import {actionSignInSuccess, actionSignOutSuccess} from "../state-management/action-creators/auth-actions";
import {actionCloseDrawer} from "../state-management/action-creators/view-state/drawer-actions";
import {FLOATING_MSG_TYPES} from "../../constants/popups";
import {showFloatingMsg} from "../../view/shared-views/popups/utils";


const initAppStateManagement = () => {
    initAppStateStore();
    return Promise.resolve(1);
}

const initFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
    const dispatch = getAppStateStore().dispatch;

    return new Promise(resolve => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                dispatch(actionSignInSuccess(firebaseUser));
                showFloatingMsg('Signed in as ' + firebaseUser.displayName, FLOATING_MSG_TYPES.SUCCESS, 1000)
            } else {
                dispatch(actionSignOutSuccess());
            }
            dispatch(actionCloseDrawer());
            resolve();
        });
    });
}

const initLivepollWebApp = () => {
    return initAppStateManagement().then(initFirebase);
}

export default initLivepollWebApp;
