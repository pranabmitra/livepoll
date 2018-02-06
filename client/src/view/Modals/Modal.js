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

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.onEscapeClose = this.onEscapeClose.bind(this);
    }

    onEscapeClose(event) {
        if (event.keyCode == 27) {
            event.preventDefault();
            this.props.close();
        }
    }

    setOnEscapeListener() {
        document.body.addEventListener('keydown', this.onEscapeClose);
    }

    removeOnEscapeListener() {
        document.body.removeEventListener('keydown', this.onEscapeClose);
    }

    componentDidMount() {
        if (this.props.options.closeOnEscape) this.setOnEscapeListener();
    }

    componentWillUnmount() {
        if (this.props.options.closeOnEscape) this.removeOnEscapeListener();
    }

    render() {
        const {type, childProps, options} = this.props;
        const ModalChild = getModalComponentByType(type);

        return (
            <div className='modal-vc'>
                <div className='modal-hc'>
                    <div className='modal-final-wrap'>
                        { options.showCloseBtn && <button className='modal-close-btn' onClick={this.props.close}>X</button> }
                        <ModalChild {...childProps}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    close: ()=>dispatch(actionCloseLastModal())
})
export default connect(null, mapDispatchToProps)(Modal);