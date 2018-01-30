import * as firebase from 'firebase';
import {initAppStateStore} from "../state-management/store";
import {FIREBASE_CONFIG} from '../../constants/firebase';


const initFirebase = () => {
    firebase.initializeApp(FIREBASE_CONFIG)
    return Promise.resolve(1);
}

const initAppStateManagement = () => {
    // Realtime listener
    // TODO:: need to change state
    // firebase.auth().onAuthStateChanged(firebaseUser => {
    //     if (firebaseUser) {
    //         initialState.set('authState', Map({
    //             isSignedIn: true,
    //             signInDetails: firebaseUser,
    //         }));
    //         console.log(firebaseUser);
    //     } else {
    //         console.log('Not Logged in!');
    //     }
    // });

    initAppStateStore();
    return Promise.resolve(1);
}

const initLivepollWebApp = () => {
    return initFirebase()
        .then(initAppStateManagement);
}

export default initLivepollWebApp;
