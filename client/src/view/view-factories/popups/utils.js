import React from 'react';
import ReactDOM from 'react-dom';

import './popups.css';
import {FLOATING_MSG_TYPES} from "../../../constants/popups";

const floatingMsgRoot = document.getElementById('floating-msg-root');

export const showFloatingMsg = (msg, type, duration = 1000) => {
    let floatingMsgElem = document.createElement('div');
    floatingMsgRoot.appendChild(floatingMsgElem);

    let floatingMsgSpecialClass;
    switch (type) {
        case FLOATING_MSG_TYPES.ERROR:
            floatingMsgSpecialClass = 'floating-msg-error';
            break;
        case FLOATING_MSG_TYPES.INFO:
            floatingMsgSpecialClass = 'floating-msg-info';
            break;
        case FLOATING_MSG_TYPES.SUCCESS:
            floatingMsgSpecialClass = 'floating-msg-success';
            break;
        default:
            return;
    }

    ReactDOM.render(
        <div className={`floating-msg ${floatingMsgSpecialClass}`}>
            {msg}
        </div>,
        floatingMsgElem
    )

    setTimeout(()=>{
        floatingMsgRoot.removeChild(floatingMsgElem)
    }, duration * (floatingMsgRoot.childNodes.length + 1))
}