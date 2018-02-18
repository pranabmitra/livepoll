import React from 'react';

const inputErrorSpanStyle = {
    color: 'red',
    fontSize: 'small'
}
const EnhancedFormFieldStyle = {
    // border: '1px solid lightgray',
    // borderRadius: '5px',
    // margin: '5px',
    // padding: '5px'
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

export default EnhancedFormField