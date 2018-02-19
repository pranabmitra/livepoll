import React from 'react'

import {MODAL_COMPONENT_TYPES} from "../../constants/popups";
import asyncComponent from "../shared-views/AsyncComponent";

const CreatePollForm = asyncComponent(()=>{
    return import('../shared-views/CreatePollForm/CreatePollForm')
        .then(module => {
            return module.default
        })
})

export const getModalComponentByType = (type) => {
    switch (type) {
        case MODAL_COMPONENT_TYPES.CREATE_POLL_FORM:
            return CreatePollForm;

        default:
            return (props) => <div>XYZ</div>
    }
}