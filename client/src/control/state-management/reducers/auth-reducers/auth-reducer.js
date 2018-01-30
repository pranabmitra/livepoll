import {ACTION_SIGN_IN} from "../../action-creators/auth-actions";

const reduceSignIn = (state, signInMethod, signInData) => {
    return state.setIn(['isSignedIn'], true)
        .setIn(['signInDetails', 'signInMethod'], signInMethod)
        .setIn(['signInDetails', 'signInData'], signInData);
}

const authReducer = (state, action) => {
    switch (action.type) {
        case ACTION_SIGN_IN:
            return reduceSignIn(state, action.signInMethod, action.signInData);

        default:
            return state;
    }
}

export default authReducer;