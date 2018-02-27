import React from 'react';

import './Header.css';

import NavigationButtons from '../shared-views/buttons/NavigationButtons/NavigationButtons';
import SignoutButton from "../shared-views/buttons/AuthButtons/SignoutButton";
import AppTitle from './AppTitle/AppTitle';
import DrawerButton from './DrawerButton/DrawerButton'
import SmolUserBadge from './SmolUserBadge/SmolUserBadge'
import {SIGNIN_METHODS} from "../../constants/auth";
import SignInButton from "../shared-views/buttons/AuthButtons/SignInButton";
import showFloatingMsg from "../shared-views/popups/floating-msg";
import {FLOATING_MSG_TYPES} from "../../constants/popups";


const Header = (props) => (
    <div className='header header-resp fl' onClick={props.onClick}>
        <br/>
        <DrawerButton className='header-place-drawer-btn'/>
        <AppTitle className='header-place-app-title'/>

        {
            props.isSignedIn &&
            <SignoutButton className='header-place-signout-btn header-place-signout-btn-resp'/>
        }

        {
            props.isSignedIn &&
                <SmolUserBadge user={props.signedInUser}/>
        }
        {
            !props.isSignedIn &&
                <React.Fragment>
                    <SignInButton className='fr' signInMethod={SIGNIN_METHODS.FACEBOOK} showText={false}/>
                    <span className='fr'>&nbsp;</span>
                    <SignInButton className='fr' signInMethod={SIGNIN_METHODS.GOOGLE} showText={false}/>
                </React.Fragment>
        }

        <button onClick={()=>showFloatingMsg('test', FLOATING_MSG_TYPES.INFO)}>test</button>

        <NavigationButtons
            containerClass='header-nav-pane header-nav-pane-resp'
            buttonClass='header-nav-btn header-nav-btn-resp'
            iconClass='header-nav-btn-icon header-nav-btn-icon-resp'
            titleClass='header-nav-btn-txt header-nav-btn-txt-resp'
        />
    </div>
)

export default Header;