import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'

import './CreatePollForm.css';
import {defaultPollSettings} from "../../../control/livepoll/default-poll-settings";


const validateTitle = title => {
    if (!title) return 'Poll must have a title';
}
const validateCreatePollForm = values => ({
    title: validateTitle(values.title)
})

const inputErrorSpanStyle = {
    color: 'red',
    fontSize: 'small'
}
const EnhancedFormFieldStyle = {
    border: '1px solid lightgray',
    borderRadius: '5px'
}
const EnhancedFormField = props => (
    <div style={EnhancedFormFieldStyle}>
        {props.title && <label>{props.title}</label>}
        <div>
            {props.children}
        </div>
        {
            (props.meta.touched || props.meta.dirty)
            && props.meta.error
            && <span style={inputErrorSpanStyle}>{props.meta.error}</span>
        }
    </div>
)

const titleTextAreaStyle = {
    border: 'none',
    width: 'calc(100% - 10px)',
    resize: 'none'
}
const PollTitleInput = props => {
    const {input: {value, onChange}, meta} = props;
    const onChangeTitle = event => onChange(event.target.value);
    return (
        <EnhancedFormField meta={meta}>
            <textarea
                className='xl-font marg5x'
                style={titleTextAreaStyle}
                value={value}
                onChange={onChangeTitle}
                placeholder='Give a nice title'/>
        </EnhancedFormField>
    )
}

const VoteStartAndEndDate = props => {
    const {input: {value, onChange}, meta} = props;

    const onChangeStartDate = event => onChange(value.setIn(['voteStartsOn', 'date'], event.target.value));
    const onChangeStartTime = event => onChange(value.setIn(['voteStartsOn', 'time'], event.target.value));
    const onChangeEndDate = event => onChange(value.setIn(['voteEndsOn', 'date'], event.target.value));
    const onChangeEndTime = event => onChange(value.setIn(['voteEndsOn', 'time'], event.target.value));

    return (
        <EnhancedFormField meta={meta}>
            <div style={{ borderRight: '1px solid lightgray' }}>
                <input name='date' type='date' onChange={onChangeStartDate}/>
                <input name='time' type='time' onChange={onChangeStartTime}/>
            </div>
            <div>
                <input name='date' type='date' onChange={onChangeEndDate}/>
                <input name='time' type='time' onChange={onChangeEndTime}/>
            </div>
        </EnhancedFormField>
    )
}

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
    initialValues: defaultPollSettings,
    validate: validateCreatePollForm
})(CreatePollForm)

