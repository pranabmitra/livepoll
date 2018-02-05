import React from 'react';
import {connect} from 'react-redux';

import './Drawer.css';
import DrawerAuthBadge from './DrawerAuthBadge/DrawerAuthBadge';
import SignoutButton from "../shared-views/buttons/AuthButtons/SignoutButton";
import NavigationButtons from "../shared-views/buttons/NavigationButtons/NavigationButtons";
import LPButton from "../shared-views/buttons/LPButton";

const Drawer = (props) => {
    var drawerClassName = 'drawer drawer-resp ';

    drawerClassName += props.isOpened ? 'drawer-opened drawer-opened-resp': 'drawer-closed drawer-closed-resp';

    return (
        <div className={drawerClassName}>
            <div className='drawer-content'>
                <DrawerAuthBadge/>
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

const mapStateToProps = state => {
    return {
        isOpened: state.getIn(['viewState', 'drawer', 'isOpened']),
        isSignedIn: state.getIn(['authState', 'isSignedIn'])
    }
}
export default connect(mapStateToProps, null)(Drawer);