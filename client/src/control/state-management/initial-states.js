import {fromJS} from 'immutable';

export const initialAuthState = fromJS({
    isSignedIn: false,
    signInData: undefined,
});

export const initialViewState = fromJS({
    drawer: {
        isOpened: false
    }
});
