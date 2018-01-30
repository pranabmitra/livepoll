import React from 'react';
import {connect} from 'react-redux';

import './Drawer.css';
import DrawerAuthBadge from './DrawerAuthBadge/DrawerAuthBadge';

const Drawer = (props) => {
    var drawerClassName = 'drawer drawer-resp ';

    drawerClassName += props.isOpened ? 'drawer-opened drawer-opened-resp': 'drawer-closed drawer-closed-resp';

    return (
        <div className={drawerClassName}>
            <div className='drawer-content'>
                <DrawerAuthBadge/>
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