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
import {confirmationDialog} from "../popups/confirmation-dialog";
import {signInPopupConfirm} from "../popups/signin-popup-confirm";
import {requestCreateLivepoll} from "../../../control/livepoll/creation/livepoll-creation";


const CreatePollForm = (props) => {
    const { handleSubmit, submitting} = props;

    const submitByConfirmation = values => confirmationDialog('Confirm poll creation')
        .then(() => requestCreateLivepoll(values));

    const submitAfterSigninCheck = () => {
        if (!props.isSignedIn) signInPopupConfirm().then(submitByConfirmation)
        else submitByConfirmation();
    }

    return (
        <form onSubmit={handleSubmit(submitAfterSigninCheck)}>
            <h3>Create your awesome poll</h3>
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

            <button type='submit' disabled={submitting} className='field-with-mpb submit-btn'>
                {submitting ? 'Submitting...' : 'CREATE YOUR POLL'}
            </button>
        </form>
    )
}

const PollCreationReduxForm = reduxForm({
    form: 'poll-creation-form',
    initialValues: fromJS(defaultPollSettings),
    validate: validateCreatePollForm
})(CreatePollForm)

const mapStateToProps = state => ({
    isSignedIn: state.getIn(['authState', 'isSignedIn'])
})

export default connect(mapStateToProps, null)(PollCreationReduxForm)