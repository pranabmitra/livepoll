import React from 'react'

import {actionOpenModal} from "../../../control/state-management/action-creators/view-actions/modal-actions";
import LPButton from "../buttons/LPButton";
import {MODAL_COMPONENT_TYPES} from "../../../constants/popups";

export const confirmationDialog = (dispatch, title) => (
    new Promise((resolve, reject)=>{
        const modalOptions = {
            showCloseBtn: false,
            willMakeResult: true,
            resultFunctions: {
                confirm: resolve,
                cancel: reject
            }
        }
        const modalChildProps = {
            title: title
        }
        dispatch(actionOpenModal(MODAL_COMPONENT_TYPES.CONFIRMATION_DIALOG, modalOptions, modalChildProps))
    })
)

export const ConfirmationDialog = props => (
    <div>
        <h4>{props.title}</h4>
        <LPButton onClick={props.confirm}>Yes</LPButton>
        <LPButton onClick={props.cancel}>No</LPButton>
    </div>
)