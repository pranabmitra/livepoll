import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import {fromJS} from 'immutable'

import './CreatePollForm.css';
import {defaultPollSettings} from "../../../control/livepoll/default-poll-settings";
import validateCreatePollForm from "./validation";
import PollTitleInput from "./form-fields/PollTitleInput";
import VoteScheduleInput from "./form-fields/VoteScheduleInput";
import PollItemFormatInput from "./form-fields/PollItemFormatInput";
import VoteMethodInput from "./form-fields/VoteMethodInput";


const CreatePollForm = (props) => {
    return (
        <form>
            <Field name='title'
                   className='fl poll-title-input'
                   component={PollTitleInput}/>

            <Field name='voteSchedule'
                   className='fl field-with-mpb'
                   component={VoteScheduleInput}/>

            <Field name='pollItemFormat'
                   className='fl field-with-mpb fill-fullw'
                   component={PollItemFormatInput}/>

            <Field name='howToVote'
                   className='fl field-with-mpb fill-fullw'
                   component={VoteMethodInput}/>
        </form>
    )
}

export default reduxForm({
    form: 'poll-creation-form',
    initialValues: fromJS(defaultPollSettings),
    validate: validateCreatePollForm
})(CreatePollForm)

