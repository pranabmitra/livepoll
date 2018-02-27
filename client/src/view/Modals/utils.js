import React from 'react'

import {MODAL_COMPONENT_TYPES} from "../../constants/popups";
import asyncComponent from "../shared-views/AsyncComponent";
import {ConfirmationDialog} from "../shared-views/popups/confirmation-dialog";

const CreatePollForm = asyncComponent(()=>{
    return import('../shared-views/CreatePollForm/CreatePollForm').then(module => module.default)
})

export const getModalComponentByType = (type) => {
    switch (type) {
        case MODAL_COMPONENT_TYPES.CREATE_POLL_FORM:
            return CreatePollForm;

        case MODAL_COMPONENT_TYPES.CONFIRMATION_DIALOG:
            return ConfirmationDialog

        default:
            return (props) => <div>XYZ</div>
    }
}