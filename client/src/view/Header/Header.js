import React from 'react';

import './Header.css';

import NavigationButtons from '../shared-views/buttons/NavigationButtons/NavigationButtons';
import SignoutButton from "../shared-views/buttons/AuthButtons/SignoutButton";
import AppTitle from './AppTitle/AppTitle';
import DrawerButton from './DrawerButton/DrawerButton'
import SmolUserBadge from './SmolUserBadge/SmolUserBadge'
import {signInWithFB, signInWithGoogle} from "../../control/auth/auth-functions";
import LPButton from "../shared-views/buttons/LPButton";


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
                    <LPButton btnClass='fr'
                              iconUrl='/images/icons/google-logo.png'
                              onClick={signInWithGoogle}/>

                    <span className='fr'>&nbsp;</span>

                    <LPButton btnClass='fr'
                              iconUrl='/images/icons/fb-logo.png'
                              onClick={signInWithFB}/>
                </React.Fragment>
        }

        <NavigationButtons
            containerClass='header-nav-pane header-nav-pane-resp'
            buttonClass='header-nav-btn header-nav-btn-resp'
            iconClass='header-nav-btn-icon header-nav-btn-icon-resp'
            titleClass='header-nav-btn-txt header-nav-btn-txt-resp'
        />
    </div>
)

export default Header;