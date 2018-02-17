import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {fromJS} from 'immutable'

import './CreatePollForm.css';
import {defaultPollSettings} from "../../../control/livepoll/default-poll-settings";

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
                onChange={onChangeTitle}
                placeholder='Give a nice title'/>
        </EnhancedFormField>
    )
}

const CreatePollForm = (props) => {
    return (
        <form>
            <Field name='title' component={PollTitleInput}/>
        </form>
    )
}

export default reduxForm({
    form: 'poll-creation-form',
    initialValues: fromJS(defaultPollSettings)
})(CreatePollForm)