import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import {fromJS} from 'immutable'

import './CreatePollForm.css';
import {defaultPollSettings, LP_SETTING_VALUES} from "../../../control/livepoll/default-poll-settings";
import validateCreatePollForm from "./validation";
import PollTitleInput from "./form-fields/PollTitleInput";
import VoteScheduleInput from "./form-fields/VoteScheduleInput";
import PollItemFormatInput from "./form-fields/PollItemFormatInput/PollItemFormatInput";
import VoteMethodInput from "./form-fields/VoteMethodInput";
import ItemPerPersonInput from "./form-fields/ItemsPerPersonInput";


const CreatePollForm = (props) => {
    return (
        <form>
            <Field name='title'
                   className='fl poll-title-input'
                   component={PollTitleInput}/>

            <Field name='voteSchedule'
                   className='fl field-with-mpb field-fullw tac'
                   component={VoteScheduleInput}/>

            <Field name='pollItemFormat'
                   className='fl field-with-mpb field-fullw'
                   component={PollItemFormatInput}/>

            <Field name='howToVote'
                   className='fl field-with-mpb field-fullw'
                   component={VoteMethodInput}/>

            <div className='field-with-mpb field-fullw fl'>
                <Field name='multipleVotesAllowed' component='input' type='checkbox'/>
                <span>&nbsp;allow multiple votes</span>
            </div>

            <div className='field-with-mpb field-fullw fl'>
                <span>Allow&nbsp;</span>

                <Field name='whoCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHO_CAN_ADD_ITEM.ALL}/>

                <span>&nbsp;<b>everyone</b>&nbsp;&nbsp;or&nbsp;&nbsp;</span>

                <Field name='whoCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHO_CAN_ADD_ITEM.ONLY_CREATOR}/>

                <span>&nbsp;<b>only creator</b> to add items</span>
            </div>

            <div className='field-with-mpb field-fullw fl'>
                <span>Items can be added&nbsp;</span>

                <Field name='whenCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHEN_CAN_ADD_ITEM.ANYTIME}/>

                <span><b>always</b> or&nbsp;</span>

                <Field name='whenCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHEN_CAN_ADD_ITEM.BEFORE_START}/>

                <span><b>only before start</b></span>
            </div>


            <Field className='field-with-mpb field-fullw fl' name='howManyCanPeopleAdd' component={ItemPerPersonInput}/>

            <button type='submit' className='field-with-mpb submit-btn'>CREATE YOUR POLL</button>
        </form>
    )
}

export default reduxForm({
    form: 'poll-creation-form',
    initialValues: fromJS(defaultPollSettings),
    validate: validateCreatePollForm
})(CreatePollForm)

