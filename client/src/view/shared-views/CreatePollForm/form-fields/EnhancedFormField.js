import React from 'react';

const inputErrorSpanStyle = {
    color: 'red',
    fontSize: 'small'
}
const labelStyle = {
    float: 'left',
    fontWeight: 'bold'
}
const EnhancedFormField = props => (
    <div className={props.className}>
        {props.title && <label style={labelStyle}>{props.title}</label>}
        {props.children}
        {
            (props.meta.touched || props.meta.dirty)
            && props.meta.error
            && <span style={inputErrorSpanStyle}>{props.meta.error}</span>
        }
    </div>
)

export default EnhancedFormField