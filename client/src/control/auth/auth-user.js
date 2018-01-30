function User(signInData) {
    this.getFullName = ()=>signInData.displayName;
    this.getProfileImage = ()=>signInData.photoURL;
}
export default User;
