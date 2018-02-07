import React from 'react';
import {connect} from 'react-redux';

import './Header.css';

import NavigationButtons from '../shared-views/buttons/NavigationButtons/NavigationButtons';
// import HeaderAuthBadge from "./HeaderAuthBadge/HeaderAuthBadge";
import SignoutButton from "../shared-views/buttons/AuthButtons/SignoutButton";
import AppTitle from './AppTitle/AppTitle';
import DrawerButton from './DrawerButton/DrawerButton'
import SmolUserBadge from './SmolUserBadge/SmolUserBadge'
import User from "../../control/auth/auth-user";


const Header = (props) => (
    <div className='header header-resp fl' onClick={props.onClick}>
        <br/>
        <DrawerButton className='header-place-drawer-btn'/>
        <AppTitle className='header-place-app-title'/>

        {
            props.isSignedIn &&
            <SignoutButton className='header-place-signout-btn header-place-signout-btn-resp'/>
        }

        {/*<HeaderAuthBadge/>*/}
        {
            props.isSignedIn &&
                <SmolUserBadge user={props.signedInUser}/>
        }

        <NavigationButtons
            containerClass='header-nav-pane header-nav-pane-resp'
            buttonClass='header-nav-btn header-nav-btn-resp'
            iconClass='header-nav-btn-icon header-nav-btn-icon-resp'
            titleClass='header-nav-btn-txt header-nav-btn-txt-resp'
        />
    </div>
)

const mapStateToProps = (state)=>({
    isSignedIn: state.getIn(['authState', 'isSignedIn']),
    signedInUser: new User(state.getIn(['authState', 'signInData'])),
})

export default connect(mapStateToProps, null)(Header);
