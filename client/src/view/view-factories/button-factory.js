import React from 'react';
import './button-factory.css';

export const LPButton = (props)=>(
    <button className={`lp-btn lp-btn-resp ${props.btnClass || ''}`}>
        {
            !!props.imageUrl && <div className={`lp-btn-img lp-btn-img-resp`} style={{backgroundImage: `${props.imageURL}`}}></div>
        }
        <span className={`lp-btn-txt lp-btn-txt-resp ${props.btnTextClass || ''}`}>{props.children}</span>
    </button>
)