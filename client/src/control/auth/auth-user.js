import {SIGNIN_METHODS} from "../../constants/auth";

class User {
    constructor(signInData) {
        this.signInData = signInData;
    }

    getFullName() {
        switch (this.signInMethod) {
            case SIGNIN_METHODS.GOOGLE:
                return this.signInData.displayName;
            default:
                return '';
        }
    }

    getProfileImage() {
        switch (this.signInMethod) {
            case SIGNIN_METHODS.GOOGLE:
                return this.signInData.photoURL;
            default:
                return '';
        }
    }
}

export default User;
