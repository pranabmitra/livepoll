import React from 'react';
import {connect} from 'react-redux';

import './auth-buttons.css';
import {signOut} from "../../control/auth/auth-functions";
import {LPButton} from "../view-factories/button-factory";


const SignoutButton = (props) => (
    props.isSignedIn && <LPButton btnClass={`${props.className} sign-out-btn fr`} onClick={props.onClick}>Sign Out</LPButton>
)

const mapStateToProps = (state)=>({
    isSignedIn: state.getIn(['authState', 'isSignedIn'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => signOut(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignoutButton);