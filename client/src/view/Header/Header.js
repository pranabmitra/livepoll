import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Header.css';
import NavigationButtons from '../view-factories/button-factory/NavigationButtons/NavigationButtons';
import HeaderAuthBadge from "./HeaderAuthBadge/HeaderAuthBadge";
import SignoutButton from "../view-factories/button-factory/AuthButtons/SignoutButton";
import {ROUTES} from "../../constants/routing";
import {
    actionToggleDrawer
} from "../../control/state-management/action-creators/view-state/drawer-actions";

const Header = (props) => (
    <div className='header header-resp fl' onClick={props.onClick}>
        <br/>
        <button className='drawer-btn drawer-btn-resp fr' onClick={props.toggleDrawer}>&equiv;</button>
        <Link className='app-title app-title-resp fl' to={ROUTES.HOME}>livepoll</Link>
        {props.isSignedIn && <SignoutButton className='header-signout-btn header-signout-btn-resp fr'/>}
        <HeaderAuthBadge/>
        <NavigationButtons
            containerClass='header-nav-pane header-nav-pane-resp'
            buttonClass='header-nav-btn header-nav-btn-resp'
            iconClass='header-nav-btn-icon header-nav-btn-icon-resp'
            titleClass='header-nav-btn-txt header-nav-btn-txt-resp'
        />
    </div>
)

const mapStateToProps = (state)=>({
    isSignedIn: state.getIn(['authState', 'isSignedIn'])
})

const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: () => dispatch(actionToggleDrawer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);