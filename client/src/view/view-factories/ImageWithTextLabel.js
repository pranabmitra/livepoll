import React from 'react';

import './button-factory.css';

const ImageWithTextLabel = (props) => (
    <React.Fragment>
        {
            props.iconUrl && (
                <div className={`lp-btn-img lp-btn-img-resp ${props.iconClass || ''}`}
                     style={{backgroundImage: `url(${props.iconUrl})`}}></div>
            )
        }
        {
            props.iconUrl && <span>&nbsp;&nbsp;</span>
        }
        <div className={`lp-btn-txt lp-btn-txt-resp ${props.textClass || ''}`}>{props.children}</div>
    </React.Fragment>
)

export default ImageWithTextLabel;