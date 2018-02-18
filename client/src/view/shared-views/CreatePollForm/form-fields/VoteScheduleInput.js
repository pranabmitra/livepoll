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
            <table className='m-auto'>
                <tbody>
                <tr>
                    <td className='tal'>Starts on</td>
                    <td className='tal'>Ends on</td>
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

export default VoteScheduleInput;