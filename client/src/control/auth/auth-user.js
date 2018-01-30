import {SIGNIN_METHODS} from "../../constants/auth";

class User {
    constructor(signInMethod, signInData) {
        this.signInMethod = signInMethod;
        this.signInData = signInData;
    }

    getFullName() {
        switch (this.signInMethod) {
            case SIGNIN_METHODS.GOOGLE:
                return this.signInData.user.displayName;
            default:
                return '';
        }
    }
}

export default User;