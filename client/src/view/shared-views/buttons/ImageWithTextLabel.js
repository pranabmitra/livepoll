import React from 'react';

const ImageWithTextLabel = (props) => (
    <div className={`${props.className}`}>
        {
            props.iconUrl && (
                <div className={`fl ${props.iconClass}`} style={{backgroundImage: `url(${props.iconUrl})`}}></div>
            )
        }
        {
            props.iconUrl && props.children && <span className='fl'>&nbsp;</span>
        }
        {
            props.children && <div className={`fr ${props.textClass}`}>{props.children}</div>
        }
    </div>
)

export default ImageWithTextLabel;