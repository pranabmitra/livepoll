import {ACTION_SIGN_IN, ACTION_SIGN_OUT} from "../../action-creators/auth-actions";
import {initialAuthState} from "../../initial-states";

const reduceSignIn = (state, signInData) => {
    return state.setIn(['isSignedIn'], true)
        .setIn(['signInData'], signInData);
}

const reduceSignOut = (state) => {
    return state.setIn(['isSignedIn'], false)
        .setIn(['signInData'], undefined);
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case ACTION_SIGN_IN:
            return reduceSignIn(state, action.signInData);

        case ACTION_SIGN_OUT:
            return reduceSignOut(state);

        default:
            return state;
    }
}

export default authReducer;