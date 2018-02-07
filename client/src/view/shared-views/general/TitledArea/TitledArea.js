import React from 'react'

import './TitledArea.css'

const TitledArea = props => (
    <div className={`titled-area titled-area-resp ${props.className}`}>
        <h3 className='titled-area-header titled-area-header-resp'>{props.title}</h3>
        {props.children}
    </div>
)

export default TitledArea