import React from 'react'
import EnhancedFormField from "./EnhancedFormField";

const PollItemFormatInput = props => {
    return (
        <EnhancedFormField className={props.className} title='Poll item structure' meta={props.meta}>
            <div style={{height: '100px'}}>

            </div>
        </EnhancedFormField>
    )
}

export default PollItemFormatInput