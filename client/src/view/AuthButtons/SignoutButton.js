import React from 'react';
import {connect} from 'react-redux';

import './auth-buttons.css';
import {LPButton} from "../view-factories/button-factory";
import {actionSignOut} from "../../control/state-management/action-creators/auth-actions";


const SignoutButton = (props) => (
    props.isSignedIn && <LPButton btnClass={`${props.className} sign-out-btn fr`} onClick={props.signOut}>Sign Out</LPButton>
)

const mapStateToProps = (state)=>({
    isSignedIn: state.getIn(['authState', 'isSignedIn'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(actionSignOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignoutButton);