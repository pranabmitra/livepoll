import React from 'react';

import EnhancedFormField from "./EnhancedFormField/EnhancedFormField";

const titleTextAreaStyle = {
    borderBottom: '1px solid lightgray',
    width: 'calc(100% - 10px)',
    resize: 'none'
}
const PollTitleInput = props => {
    const {input: {value, onChange, onBlur}, meta} = props;
    const onChangeTitle = event => onChange(event.target.value);
    return (
        <EnhancedFormField meta={meta} className={props.className}>
            <textarea
                className='xl-font no-border'
                style={titleTextAreaStyle}
                value={value}
                onChange={onChangeTitle}
                onBlur={onBlur}
                placeholder='Give a nice title'/>
        </EnhancedFormField>
    )
}

export default PollTitleInput