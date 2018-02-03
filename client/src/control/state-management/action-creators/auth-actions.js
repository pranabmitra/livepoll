export const ACTION_SIGN_IN_SUCCESS = 'ACTION_SIGN_IN_SUCCESS';
export const actionSignInSuccess = (signInData) => ({
    type: ACTION_SIGN_IN_SUCCESS,
    signInData
})

export const ACTION_SIGN_OUT_SUCCESS = 'ACTION_SIGN_OUT_SUCCESS';
export const actionSignOutSuccess = () => ({
    type: ACTION_SIGN_OUT_SUCCESS
})