import React from 'react';
import {connect} from 'react-redux'

import './Modal.css';
import {actionCloseLastModal} from "../../control/state-management/action-creators/view-actions/modal-actions";
import {getModalComponentByType} from "./utils";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.onEscapeClose = this.onEscapeClose.bind(this);

        this.resultFunctions = {};

        let options = this.props.options;
        if (options.willMakeResult) {
            for (let functionName in options.resultFunctions) {
                if (options.resultFunctions.hasOwnProperty(functionName)) {
                    this.resultFunctions[functionName] = ()=>{
                        options.resultFunctions[functionName]();
                        this.props.close();
                    }
                }
            }
        }
    }

    onEscapeClose(event) {
        if (event.keyCode === 27) {
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
        if (this.props.options.onEscapeClose) this.setOnEscapeListener();
    }

    componentWillUnmount() {
        if (this.props.options.onEscapeClose) this.removeOnEscapeListener();
    }

    render() {
        const {type, childProps, options} = this.props;
        const ModalChild = getModalComponentByType(type);

        return (
            <div className={`modal-wrap ${this.props.className}`}>
                { options.showCloseBtn && <button className='modal-close-btn' onClick={this.props.close}>X</button> }
                <ModalChild {...childProps} {...this.resultFunctions}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    close: ()=>dispatch(actionCloseLastModal())
})
export default connect(null, mapDispatchToProps)(Modal);