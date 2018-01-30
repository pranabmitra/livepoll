import {Map} from 'immutable';
import {SIGNIN_METHODS} from "../../constants/auth";

let authState = Map({
    isSignedIn: false,

    signInDetails: Map({
        signInMethod: SIGNIN_METHODS.NONE,
        signInData: undefined
    }),
});


let appInitialState = Map({
    authState: authState,
});

export default appInitialState;