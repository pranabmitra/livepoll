import React from 'react'

import CreatePollForm from "../shared-views/CreatePollForm/CreatePollForm";
import {MODAL_COMPONENT_TYPES} from "../../constants/popups";

export const getModalComponentByType = (type) => {
    switch (type) {
        case MODAL_COMPONENT_TYPES.CREATE_POLL_FORM:
            return CreatePollForm;

        default:
            return (props) => <div>XYZ</div>
    }
}