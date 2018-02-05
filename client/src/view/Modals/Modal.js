import React from 'react';

import './Modal.css';

const getModalComponentByType = (type) => {
    switch (type) {
        default:
            return (props) => <div>XYZ</div>
    }
}

const Modal = props => {
    const {type, childProps, options} = props;
    const ModalChild = getModalComponentByType(type);
    return (
        <div className='modal-vc'>
            <div className='modal-hc'>
                <div className='modal-final-wrap'>
                    { options.showClose && <button className='modal-close-btn'>X</button> }
                    <ModalChild {...childProps}/>
                </div>
            </div>
        </div>
    )
}

export default Modal;