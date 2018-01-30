export const ACTION_SIGN_IN = 'ACTION_SIGN_IN';

export const actionSignIn = (signInMethod, signInData) => ({
    type: ACTION_SIGN_IN,
    signInMethod,
    signInData
})