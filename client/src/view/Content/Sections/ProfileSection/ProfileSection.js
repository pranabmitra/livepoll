import React from 'react'
import {connect} from 'react-redux'

import './ProfileSection.css'
import ProfileAuthBadge from "./ProfileAuthBadge/ProfileAuthBadge";
import User from "../../../../control/auth/auth-user";
import LoginRequestMsg from '../../../shared-views/LoginRequestMsg/LoginRequestMsg'

const ProfileSection = props => {
    return props.isSignedIn ? (
        <div>
            <ProfileAuthBadge user={props.loggedInUser}/>
        </div>
    ): (
        <LoginRequestMsg/>
    )
}

const mapStateToProps = state => ({
    isSignedIn: state.getIn(['authState', 'isSignedIn']),
    loggedInUser: new User(state.getIn(['authState', 'signInData']))
})
export default connect(mapStateToProps, null)(ProfileSection);