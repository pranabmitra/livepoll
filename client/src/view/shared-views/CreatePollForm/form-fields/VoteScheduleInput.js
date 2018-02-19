import React from 'react';

import EnhancedFormField from "./EnhancedFormField";

const VoteScheduleInput = props => {
    const {input: {value, onChange}, meta} = props;

    const onChangeStartDate = event => onChange(value.setIn(['voteStartsOn', 'date'], event.target.value));
    const onChangeStartTime = event => onChange(value.setIn(['voteStartsOn', 'time'], event.target.value));
    const onChangeEndDate = event => onChange(value.setIn(['voteEndsOn', 'date'], event.target.value));
    const onChangeEndTime = event => onChange(value.setIn(['voteEndsOn', 'time'], event.target.value));

    return (
        <EnhancedFormField meta={meta} className={props.className}>
            <div className='m-auto'>
                <div className='fl tal marg5x'>
                    <label>Starts on</label><br/>
                    <input className='no-border' type='date' onChange={onChangeStartDate}/><br/>
                    <input className='no-border' type='date' onChange={onChangeEndDate}/><br/>
                </div>
                <div className='fr tal marg5x'>
                    <label>Ends on</label><br/>
                    <input className='no-border' type='time' onChange={onChangeStartTime}/><br/>
                    <input className='no-border' type='time' onChange={onChangeEndTime}/><br/>
                </div>
            </div>
        </EnhancedFormField>
    )
}

export default VoteScheduleInput;