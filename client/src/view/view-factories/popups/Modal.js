import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.child1 = document.createElement('div');
        this.child1.classList.add('modal-vc');

        this.child2 = document.createElement('div');
        this.child2.classList.add('modal-hc');

        this.child1.appendChild(this.child2);

        if (this.props.className) this.child2.classList.add(this.props.className);
    }

    componentDidMount(){
        modalRoot.appendChild(this.child1);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.child1);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.child2,
        );
    }
}

export default Modal;