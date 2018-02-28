import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import './CreatePollRoundButton.css';
import LPButton from "../LPButton";
import {actionOpenModal} from "../../../../control/state-management/action-creators/view-actions/modal-actions";
import {MODAL_COMPONENT_TYPES} from "../../../../constants/popups";

const cpbMapDispatchToProps = dispatch => ({
    openPollCreationForm: () => dispatch(
        actionOpenModal(MODAL_COMPONENT_TYPES.CREATE_POLL_FORM, {
            onEscapeClose: true
        },{}, 'round-border')
    )
})
const CreatePollButtonWithoutRoute = connect(null, cpbMapDispatchToProps)((props)=>(
    <LPButton btnClass='btn-create-poll' btnTextClass='btn-create-poll-text' onClick={props.openPollCreationForm}>+</LPButton>
))

const CreatePollRoundButton = ()=> (
    <Route exact path='/' component={CreatePollButtonWithoutRoute} />
)

export default CreatePollRoundButton

