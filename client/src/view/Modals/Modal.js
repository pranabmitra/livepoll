import React from 'react';
import {connect} from 'react-redux'

import './Modal.css';
import {actionCloseLastModal} from "../../control/state-management/action-creators/view-state/modal-actions";

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
                    { options.showCloseBtn && <button className='modal-close-btn' onClick={props.close}>X</button> }
                    <ModalChild {...childProps}/>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    close: ()=>dispatch(actionCloseLastModal())
})
export default connect(null, mapDispatchToProps)(Modal);