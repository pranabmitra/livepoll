import React from 'react';
import {connect} from 'react-redux';

import './HeaderAuthBadge.css';
import SignInPopupButton from "../../AuthButtons/SignInPopupButton";
import User from "../../../control/auth/auth-user";
import {isSignedIn} from "../../../control/auth/auth-functions";

const HeaderAuthBadge = (props) => (
    <React.Fragment>
        {
            props.isSignedIn ? <div>{props.user.getFullName()}</div> : <SignInPopupButton className='fr'/>
        }
    </React.Fragment>
)

const mapStateToProps = (state) => {
    var isSignedIn = state.getIn(['authState', 'isSignedIn']),
        signInMethod,
        signInData,
        user;
    if (isSignedIn) {
        signInMethod = state.getIn(['authState', 'signInDetails', 'signInMethod']);
        signInData = state.getIn(['authState', 'signInDetails', 'signInData']);
        user = new User(signInMethod, signInData);
    }
    return {
        isSignedIn,
        user
    }
};

export default connect(mapStateToProps)(HeaderAuthBadge);