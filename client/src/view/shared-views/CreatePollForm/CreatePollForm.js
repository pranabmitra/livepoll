import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import {fromJS} from 'immutable'

import './CreatePollForm.css';
import {defaultPollSettings} from "../../../control/livepoll/default-poll-settings";
import validateCreatePollForm from "./validation";
import PollTitleInput from "./form-fields/PollTitleInput";
import VoteStartAndEndDate from "./form-fields/VoteStartAndEndDate";


const CreatePollForm = (props) => {
    return (
        <form>
            <Field name='title' component={PollTitleInput}/>
            <Field name='voteSchedule' component={VoteStartAndEndDate}/>
        </form>
    )
}

export default reduxForm({
    form: 'poll-creation-form',
    initialValues: fromJS(defaultPollSettings),
    validate: validateCreatePollForm
})(CreatePollForm)

