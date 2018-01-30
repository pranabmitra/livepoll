import React from 'react';
import {connect} from 'react-redux';

import './Drawer.css';
import DrawerAuthBadge from './DrawerAuthBadge/DrawerAuthBadge';
import SignoutButton from "../AuthButtons/SignoutButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

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
                    titleClass=''/>
                <SignoutButton className='drawer-signout-btn'/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isOpened: state.getIn(['viewState', 'drawer', 'isOpened'])
    }
}
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);