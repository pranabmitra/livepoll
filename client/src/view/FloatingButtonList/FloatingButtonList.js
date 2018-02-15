import React from 'react';

import CreatePollRoundButton from '../shared-views/buttons/RoundButtons/CreatePollRoundButton'
import './FloatingButtonList.css'

const FloatingButtonList = () => (
    <div className='flt-btns-panel flt-btns-panel-resp'>
        <CreatePollRoundButton/>
    </div>
)

export default FloatingButtonList;