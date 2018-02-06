import React from 'react'

import './TitledArea.css'

const TitledArea = props => (
    <div className={`titled-area ${props.className}`}>
        <h3 className='titled-area-header'>{props.title}</h3>
        <div>
            {props.children}
        </div>
    </div>
)

export default TitledArea