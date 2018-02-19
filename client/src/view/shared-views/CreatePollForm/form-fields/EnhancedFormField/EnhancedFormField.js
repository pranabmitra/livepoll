import React from 'react';
import './EnhancedFormField.css'

const EnhancedFormField = props => (
    <div className={`fl field-with-mpb field-fullw ${props.className}`}>
        {
            props.title &&
            <h3 className='enhanced-ff-label'>{props.title}</h3>
        }

        {props.children}

        {
            (props.meta.touched || props.meta.dirty) &&
            props.meta.error &&
            <span className='input-error-span'>{props.meta.error}</span>
        }
    </div>
)

export default EnhancedFormField