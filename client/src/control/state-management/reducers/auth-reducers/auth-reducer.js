import {ACTION_SIGN_IN} from "../../action-creators/auth-actions";

const reduceSignIn = (state, signInData) => {
    return state.setIn(['isSignedIn'], true)
        .setIn(['signInData'], signInData);
}

const authReducer = (state, action) => {
    switch (action.type) {
        case ACTION_SIGN_IN:
            return reduceSignIn(state, action.signInData);

        default:
            return state;
    }
}

export default authReducer;