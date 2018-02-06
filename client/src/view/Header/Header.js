import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Header.css';
import NavigationButtons from '../shared-views/buttons/NavigationButtons/NavigationButtons';
import HeaderAuthBadge from "./HeaderAuthBadge/HeaderAuthBadge";
import SignoutButton from "../shared-views/buttons/AuthButtons/SignoutButton";
import {ROUTES} from "../../constants/routing";
import {
    actionToggleDrawer
} from "../../control/state-management/action-creators/view-state/drawer-actions";

const Header = (props) => (
    <div className='header header-resp fl' onClick={props.onClick}>
        <br/>

        <button className={`drawer-btn drawer-btn-resp fr ${props.isDrawerOpened ? 'drawer-btn-dark': ''}`}
                onClick={props.toggleDrawer}>&equiv;
        </button>

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
    isSignedIn: state.getIn(['authState', 'isSignedIn']),
    isDrawerOpened: state.getIn(['viewState', 'drawer', 'isOpened'])
})

const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: () => dispatch(actionToggleDrawer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);