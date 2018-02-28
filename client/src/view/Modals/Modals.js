import React from 'react';

import './Modals.css';
import Modal from "./Modal";

const Modals = props => (
    <React.Fragment>
        {
            (props.modals).map((modalData, index) => <Modal key={index} {...modalData}/>)
        }
    </React.Fragment>
)

export default Modals;