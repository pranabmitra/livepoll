import React from 'react'
import {fromJS} from 'immutable'

import EnhancedFormField from "./EnhancedFormField";
import {LP_SETTING_VALUES} from "../../../../control/livepoll/default-poll-settings";

const rangeInpStyle = {
    border: 'none',
    textAlign: 'center',
    borderBottom: '1px solid lightgray',
    fontWeight: 'bold'
}

const VoteMethodInput = props => {
    const {input: {value, onChange}, meta} = props;
    const method = value.get('method');

    const onSelectTick = event => {
        onChange(fromJS(LP_SETTING_VALUES.HOW_TO_VOTE.TICK));
    }
    const onSelectNumber = event => {
        onChange(fromJS(LP_SETTING_VALUES.HOW_TO_VOTE.NUMBER));
    }
    const onSetMin = event => {
        onChange(value.set('min', parseInt(event.target.value, 10)))
    }
    const onSetMax = event => {
        onChange(value.set('max', parseInt(event.target.value, 10)))
    }
    return (
        <EnhancedFormField className={props.className} title='How to vote?' meta={meta}>
            <input type='radio'
                   checked={method === LP_SETTING_VALUES.HOW_TO_VOTE.TICK.method}
                   onChange={onSelectTick}/>
            <span>by tick</span>

            <input type='radio'
                   checked={method === LP_SETTING_VALUES.HOW_TO_VOTE.NUMBER.method}
                   onChange={onSelectNumber}/>
            <span>by number</span>

            {
                method === LP_SETTING_VALUES.HOW_TO_VOTE.NUMBER.method && (
                    <div className='marg5x'>
                        from <input style={rangeInpStyle} type='number' min={0} max={100} value={value.get('min')} onChange={onSetMin}/>
                        &nbsp;to&nbsp;
                        <input style={rangeInpStyle} type='number' min={0} max={100} value={value.get('max')} onChange={onSetMax}/>
                    </div>
                )
            }
        </EnhancedFormField>
    )
}

export default VoteMethodInput