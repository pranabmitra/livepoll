import React from 'react'
import {connect} from 'react-redux';

import './DrawerButton.css'
import {actionToggleDrawer} from "../../../control/state-management/action-creators/view-actions/drawer-actions";

const DrawerButton = props => (
    <button className={`drawer-btn drawer-btn-resp fr ${props.isDrawerOpened ? 'drawer-btn-dark': ''}`}
            onClick={props.toggleDrawer}>&equiv;
    </button>
)

const mapStateToProps = (state)=>({
    isDrawerOpened: state.getIn(['viewState', 'drawer', 'isOpened'])
})

const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: () => dispatch(actionToggleDrawer())
})
export default connect(mapStateToProps, mapDispatchToProps)(DrawerButton);