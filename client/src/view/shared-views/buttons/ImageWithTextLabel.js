import React from 'react';

import './buttons.css';

const ImageWithTextLabel = (props) => (
    <div className={`${props.className}`}>
        {
            props.iconUrl && (
                <div className={`${props.iconClass}`}
                     style={{backgroundImage: `url(${props.iconUrl})`}}></div>
            )
        }
        {
            props.iconUrl && props.children && <span className='fl'>&nbsp;</span>
        }
        {props.children && <div className={`${props.textClass}`}>{props.children}</div>}
    </div>
)

export default ImageWithTextLabel;