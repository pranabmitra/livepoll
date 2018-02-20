import React from 'react';

import './Drawer.css';
import SignoutButton from "../shared-views/buttons/AuthButtons/SignoutButton";
import NavigationButtons from "../shared-views/buttons/NavigationButtons/NavigationButtons";
import LPButton from "../shared-views/buttons/LPButton";
import {SIGNIN_METHODS} from "../../constants/auth";
import TitledArea from "../shared-views/general/TitledArea/TitledArea";
import SignInButton from "../shared-views/buttons/AuthButtons/SignInButton";
import ImageWithTextLabel from "../shared-views/general/ImageWithTextLabel";


const Drawer = (props) => {
    var drawerClassName = 'drawer drawer-resp ';

    drawerClassName += props.isOpened ? 'drawer-opened drawer-opened-resp': 'drawer-closed drawer-closed-resp';

    return (
        <div className={drawerClassName}>
            <div className='drawer-content'>
                {
                    !props.isSignedIn && (
                        <TitledArea className='drawer-signin-btn-list' title='Sign in with'>
                            <SignInButton signInMethod={SIGNIN_METHODS.GOOGLE} showText={true}/>
                            <SignInButton signInMethod={SIGNIN_METHODS.FACEBOOK} showText={true}/>
                        </TitledArea>
                    )
                }
                {
                    props.isSignedIn && (
                        <ImageWithTextLabel
                            className='drawer-auth-badge fl'
                            iconClass='drawer-auth-badge-img'
                            textClass='drawer-auth-badge-text'
                            iconUrl={props.signedInUser.getProfileImage()}>
                            {props.signedInUser.getFullName()}
                        </ImageWithTextLabel>
                    )
                }
                <NavigationButtons
                    containerClass='drawer-nav-container'
                    buttonClass='drawer-nav-btn drawer-nav-btn-resp'
                    iconClass='drawer-nav-btn-icon drawer-nav-btn-icon-resp'
                    titleClass='drawer-nav-btn-txt'/>
                <LPButton btnClass='fr'>Options</LPButton>
                { props.isSignedIn && <SignoutButton className='drawer-signout-btn'/> }
            </div>
        </div>
    )
}

export default Drawer;