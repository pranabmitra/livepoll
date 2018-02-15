import React from 'react';
import ReactDOM from 'react-dom';

import '../../../index.css';

import {FLOATING_MSG_TYPES} from "../../../constants/popups";


const floatingMsgRoot = document.getElementById('floating-msg-root');
const floatingMsgStyle = {
    color: 'white',
    padding: '0.5em',
    marginBottom: '0.5em',
    borderRadius: '5px',
    float: 'left'
}
const floatingMsgErrorStyle = {
    backgroundColor: '#8c1925'
}
const floatingMsgInfoStyle = {
    backgroundColor: '#004878'
}
const floatingMsgSuccessStyle = {
    backgroundColor: '#237a72'
}

const showFloatingMsg = (msg, type, duration = 700) => {
    let floatingMsgElem = document.createElement('div');
    floatingMsgRoot.appendChild(floatingMsgElem);

    let floatingMsgSpecialStyle;
    switch (type) {
        case FLOATING_MSG_TYPES.ERROR:
            floatingMsgSpecialStyle = floatingMsgErrorStyle;
            break;
        case FLOATING_MSG_TYPES.INFO:
            floatingMsgSpecialStyle = floatingMsgInfoStyle;
            break;
        case FLOATING_MSG_TYPES.SUCCESS:
            floatingMsgSpecialStyle = floatingMsgSuccessStyle;
            break;
        default:
            return;
    }

    ReactDOM.render(
        <div style={floatingMsgStyle} className={`slide ${floatingMsgSpecialStyle}`}>
            {msg}
        </div>,
        floatingMsgElem
    )

    setTimeout(()=>floatingMsgElem.firstChild.classList.add('up'), 30);

    setTimeout(()=>{
        ReactDOM.unmountComponentAtNode(floatingMsgElem);
        floatingMsgRoot.removeChild(floatingMsgElem)
    }, duration * (floatingMsgRoot.childNodes.length + 1))
}

export default showFloatingMsg;