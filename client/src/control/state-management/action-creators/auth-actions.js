export const ACTION_SIGN_IN = 'ACTION_SIGN_IN';

export const actionSignIn = (signInData) => ({
    type: ACTION_SIGN_IN,
    signInData
})

export const ACTION_SIGN_OUT = 'ACTION_SIGN_OUT';

export const actionSignOut = () => ({
    type: ACTION_SIGN_OUT
})