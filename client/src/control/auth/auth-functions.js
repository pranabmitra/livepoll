import {SIGNIN_METHODS} from "../../constants/auth";

export const signIn = () => {

}

export const signOut = () => {

}

export const isSignedIn = () => {
    return false;
}

export const getSignedInDetails = () => {
    return {
        signInMethod: SIGNIN_METHODS.NONE,
        signInData: undefined,
    }
}