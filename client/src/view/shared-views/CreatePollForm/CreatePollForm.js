import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {fromJS} from 'immutable'

import './CreatePollForm.css';
import {defaultPollSettings} from "../../../control/livepoll/default-poll-settings";

const CreatePollForm = (props) => {
    return (
        <form onSubmit={()=>{}}>
        </form>
    )
}

export default reduxForm({
    form: 'poll-creation-form',
    initialValues: fromJS(defaultPollSettings)
})(CreatePollForm)