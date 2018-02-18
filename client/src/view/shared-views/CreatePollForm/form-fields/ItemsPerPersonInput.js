import React from 'react';
import EnhancedFormField from "./EnhancedFormField";

const ItemPerPersonInput = props => {
    const {input: {value, onChange}, meta} = props;

    const onChangeAmount = event => {
        onChange(parseInt(event.target.value, 10))
    }

    return (
        <EnhancedFormField className={props.className} meta={meta}>
            <span>A person can only add &nbsp;</span>
            <input className='boldf btm-border' type='number' min={1} max={10} value={value} onChange={onChangeAmount}/>
            <span>&nbsp;item/s</span>
            <br/>
        </EnhancedFormField>
    )
}

export default ItemPerPersonInput