import React from 'react';
import {connect} from 'react-redux';

import './auth-buttons.css';
import {signOut} from "../../control/auth/auth-functions";


const SignoutButton = (props) => (
    props.isSignedIn && <button className={`${props.className} sign-out-btn`} onClick={props.onClick}>Sign Out</button>
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