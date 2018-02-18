import React from 'react';

import EnhancedFormField from "./EnhancedFormField";

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

export default PollTitleInput