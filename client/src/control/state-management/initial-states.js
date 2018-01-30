import { fromJS } from 'immutable';
import {SIGNIN_METHODS} from "../../constants/auth";


let initialAuthState = {
    isSignedIn: false,

    signInDetails: {
        signInMethod: SIGNIN_METHODS.NONE,
        signInData: undefined
    },
};

export const initialViewState = {
    drawer: {
        isOpened: false
    }
};


let initialAppState = fromJS({
    authState: initialAuthState,
    viewState: initialViewState,
});
export default initialAppState;