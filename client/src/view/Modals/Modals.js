import React from 'react';
import {connect} from 'react-redux';

import './Modals.css';
import Modal from "./Modal";

const Modals = props => {
    return props.modals.size > 0 && (
        <div className='modal-root'>
            {
                (props.modals).map((modalData, index) => <Modal key={index} {...modalData}/>)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    modals: state.getIn(['viewState', 'modalsOpened']) || []
});
export default connect(mapStateToProps, null)(Modals);