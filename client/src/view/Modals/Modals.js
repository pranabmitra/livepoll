import React from 'react';

import './Modals.css';
import Modal from "./Modal";

const Modals = props => (
    <div className='modal-root'>
        {
            (props.modals).map((modalData, index) => <Modal key={index} {...modalData}/>)
        }
    </div>
)

export default Modals;