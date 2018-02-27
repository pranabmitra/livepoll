import React from 'react';
import {connect} from 'react-redux';
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
import {actionRequestCreateLivepoll} from "../../../control/state-management/action-creators/livepoll-actions";

const CreatePollForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting, submitPollCreationForm} = props;
    return (
        <form onSubmit={handleSubmit(submitPollCreationForm)}>
            <Field name='title'
                   className='poll-title-input btm-border'
                   component={PollTitleInput}/>

            <Field name='voteSchedule'
                   className='tac half-wid-landscape'
                   component={VoteScheduleInput}/>

            <Field name='pollItemFormat'
                   className='fr-landscape half-wid-landscape'
                   component={PollItemFormatInput}/>

            <Field name='howToVote'
                   className='half-wid-landscape'
                   component={VoteMethodInput}/>

            <div className='field-with-mpb field-fullw fl half-wid-landscape fr-landscape'>
                <Field name='multipleVotesAllowed' component='input' type='checkbox'/>
                <span>&nbsp;allow multiple votes</span>
            </div>

            <div className='field-with-mpb field-fullw fl half-wid-landscape'>
                <span>Allow&nbsp;</span>

                <Field name='whoCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHO_CAN_ADD_ITEM.ALL}/>

                <span>&nbsp;<b>everyone</b>&nbsp;&nbsp;or&nbsp;&nbsp;</span>

                <Field name='whoCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHO_CAN_ADD_ITEM.ONLY_CREATOR}/>

                <span>&nbsp;<b>only creator</b> to add items</span>
            </div>

            <div className='field-with-mpb field-fullw fl half-wid-landscape fr-landscape'>
                <span>Items can be added&nbsp;</span>

                <Field name='whenCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHEN_CAN_ADD_ITEM.ANYTIME}/>

                <span><b>always</b> or&nbsp;</span>

                <Field name='whenCanAdd' component='input' type='radio' value={LP_SETTING_VALUES.WHEN_CAN_ADD_ITEM.BEFORE_START}/>

                <span><b>only before start</b></span>
            </div>


            <Field name='howManyCanPeopleAdd' className='half-wid-landscape' component={ItemPerPersonInput}/>

            <button type='submit' disabled={submitting} className='field-with-mpb submit-btn'>CREATE YOUR POLL</button>
        </form>
    )
}

const PollCreationReduxForm = reduxForm({
    form: 'poll-creation-form',
    initialValues: fromJS(defaultPollSettings),
    validate: validateCreatePollForm
})
(CreatePollForm)

const mapDispatchToProps = dispatch => ({
    submitPollCreationForm: values => {
        dispatch(actionRequestCreateLivepoll(values));
    }
})

export default connect(null, mapDispatchToProps)(PollCreationReduxForm)