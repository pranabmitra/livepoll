import React from 'react';
import './FloatingButtons.css';

const FloatingCreatePollButton = () => (
    <button className='flt-btn-create-poll'>+</button>
)


const FloatingButtons = () => (
    <div className='flt-btns-panel flt-btns-panel-resp'>
        <FloatingCreatePollButton/>
    </div>
)

export default FloatingButtons;