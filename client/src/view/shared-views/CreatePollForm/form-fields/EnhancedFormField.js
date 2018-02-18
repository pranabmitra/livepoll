import React from 'react';

const inputErrorSpanStyle = {
    color: 'red',
    fontSize: 'small'
}
const labelStyle = {
    fontWeight: 'bold',
    padding: '5px',
    margin: '0'
}
const EnhancedFormField = props => (
    <div className={props.className}>
        {props.title && <h3 style={labelStyle}>{props.title}</h3>}

        {props.children}
        {
            (props.meta.touched || props.meta.dirty)
            && props.meta.error
            && <span style={inputErrorSpanStyle}>{props.meta.error}</span>
        }
    </div>
)

export default EnhancedFormField