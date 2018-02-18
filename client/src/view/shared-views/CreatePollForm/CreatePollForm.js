import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import {fromJS} from 'immutable'

import './CreatePollForm.css';
import {defaultPollSettings} from "../../../control/livepoll/default-poll-settings";

const validateVoteSchedule = voteSchedule => {
    if (!voteSchedule) return 'please fill up everything'

    let startDate = voteSchedule.getIn(['voteStartsOn', 'date']),
        startTime = voteSchedule.getIn(['voteStartsOn', 'time']),
        endDate = voteSchedule.getIn(['voteEndsOn', 'date']),
        endTime = voteSchedule.getIn(['voteEndsOn', 'time']);

    if (!startDate || !startTime || !endDate || !endTime) return 'please fill up everything'

    let startDateTime = new Date(startDate + ' ' + startTime),
        endDateTime = new Date(endDate + ' ' + endTime);

    if (endDateTime < startDateTime) return 'time travel is not possible'
    if (endDateTime - startDateTime < 7200000) return 'duration should be at least 2 hours';
}

const validateTitle = title => {
    if (!title) return 'Poll must have a title';
}
const validateCreatePollForm = values => {
    return {
        title: validateTitle(values.get('title')),
        voteSchedule: validateVoteSchedule(values.get('voteSchedule'))
    }
}

const inputErrorSpanStyle = {
    color: 'red',
    fontSize: 'small'
}
const EnhancedFormFieldStyle = {
    border: '1px solid lightgray',
    borderRadius: '5px',
    margin: '5px',
    padding: '5px'
}
const EnhancedFormField = props => (
    <div style={EnhancedFormFieldStyle} className={props.className}>
        {props.title && <label>{props.title}</label>}
        {props.children}
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
    const {input: {value, onChange, onBlur}, meta} = props;
    const onChangeTitle = event => onChange(event.target.value);
    return (
        <EnhancedFormField meta={meta}>
            <textarea
                className='xl-font marg5x'
                style={titleTextAreaStyle}
                value={value}
                onChange={onChangeTitle}
                onBlur={onBlur}
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
        <EnhancedFormField meta={meta} className='fl'>
            <table className='tal'>
                <tbody>
                <tr>
                    <th className='tal'>Starts on</th>
                    <th className='tal'>Ends on</th>
                </tr>
                <tr>
                    <td><input className='no-border' type='date' onChange={onChangeStartDate}/></td>
                    <td><input className='no-border' type='date' onChange={onChangeEndDate}/></td>
                </tr>
                <tr>
                    <td><input className='no-border' type='time' onChange={onChangeStartTime}/></td>
                    <td><input className='no-border' type='time' onChange={onChangeEndTime}/></td>
                </tr>
                </tbody>
            </table>
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
    initialValues: fromJS(defaultPollSettings),
    validate: validateCreatePollForm
})(CreatePollForm)

