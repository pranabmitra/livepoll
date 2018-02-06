import React from 'react';

import './buttons.css';

const ImageWithTextLabel = (props) => (
    <React.Fragment>
        {
            props.iconUrl && (
                <div className={`lp-btn-img lp-btn-img-resp ${props.iconClass || ''}`}
                     style={{backgroundImage: `url(${props.iconUrl})`}}></div>
            )
        }
        {
            props.iconUrl && props.children && <span className='fl'>&nbsp;</span>
        }
        {props.children && <div className={`lp-btn-txt lp-btn-txt-resp ${props.textClass || ''}`}>{props.children}</div>}
    </React.Fragment>
)

export default ImageWithTextLabel;