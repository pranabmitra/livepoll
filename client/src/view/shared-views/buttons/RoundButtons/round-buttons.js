import React from 'react'
import {connect} from 'react-redux'

import './round-buttons.css';
import LPButton from "../LPButton";
import {actionOpenModal} from "../../../../control/state-management/action-creators/view-state/modal-actions";
import {MODAL_COMPONENT_TYPES} from "../../../../constants/popups";

const cpbMapDispatchToProps = dispatch => ({
    openPollCreationForm: () => dispatch(actionOpenModal({
        type: MODAL_COMPONENT_TYPES.CREATE_POLL_FORM,
        options: {
            closeOnEsc: true
        }
    }))
})
export const CreatePollButton = connect(null, cpbMapDispatchToProps)((props)=>(
    <LPButton btnClass='btn-create-poll' btnTextClass='btn-create-poll-text' onClick={props.openPollCreationForm}>+</LPButton>
))

