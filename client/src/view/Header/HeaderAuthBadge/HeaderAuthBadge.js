import React from 'react';
import {connect} from 'react-redux';

import './HeaderAuthBadge.css';
import SignInPopupButton from "../../AuthButtons/SignInPopupButton";
import User from "../../../control/auth/auth-user";


const HeaderAuthBadge = (props) => (
    <React.Fragment>
        {
            props.isSignedIn ? <span className='fr'>{props.user.getFullName()}</span> : <SignInPopupButton className='fr'/>
        }
    </React.Fragment>
)

const mapStateToProps = (state) => {
    var isSignedIn = state.getIn(['authState', 'isSignedIn']),
        signInData,
        user;

    if (isSignedIn) {
        signInData = state.getIn(['authState', 'signInData']);
        user = new User(signInData);
    }

    return {
        isSignedIn,
        user
    }
};

export default connect(mapStateToProps)(HeaderAuthBadge);