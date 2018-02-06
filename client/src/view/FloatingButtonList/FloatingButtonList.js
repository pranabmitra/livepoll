import React from 'react';

import {CreatePollButton} from '../shared-views/buttons/RoundButtons/round-buttons'
import './FloatingButtonList.css'

const FloatingButtonList = () => (
    <div className='flt-btns-panel flt-btns-panel-resp'>
        <CreatePollButton/>
    </div>
)

export default FloatingButtonList;