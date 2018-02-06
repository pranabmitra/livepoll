function User(signInData = {}) {
    this.getFullName = () => signInData.displayName;
    this.getProfileImage = () => signInData.photoURL;
    this.getAuthProviderName = () => signInData.providerData[0].providerId;
}
export default User;
