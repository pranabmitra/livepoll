import {signIn, signOut} from "../../auth/auth-functions";

export const ACTION_SIGN_IN = 'ACTION_SIGN_IN';

export const actionSignIn = (signInMethod) => dispatch => {
    signIn(signInMethod).then(signInData => {
        dispatch(actionSignInSuccess(signInData))
    })
}

export const ACTION_SIGN_IN_SUCCESS = 'ACTION_SIGN_IN_SUCCESS';

export const actionSignInSuccess = (signInData) => ({
    type: ACTION_SIGN_IN_SUCCESS,
    signInData
})

export const ACTION_SIGN_OUT = 'ACTION_SIGN_OUT';

export const actionSignOut = () => dispatch => {
    signOut().then(() => dispatch(actionSignOutSuccess()));
}


export const ACTION_SIGN_OUT_SUCCESS = 'ACTION_SIGN_OUT_SUCCESS';

export const actionSignOutSuccess = () => ({
    type: ACTION_SIGN_OUT_SUCCESS
})