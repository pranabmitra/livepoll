import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.modalChildDomNode = document.createElement('div');
        this.modalChildDomNode.classList.add('modal');
    }

    componentDidMount(){
        modalRoot.appendChild(this.modalChildDomNode);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.modalChildDomNode);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.modalChildDomNode,
        );
    }
}

export default Modal;