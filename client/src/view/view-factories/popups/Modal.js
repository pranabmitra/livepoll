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

        this.close = this.close.bind(this);
    }

    close() {
        ReactDOM.unmountComponentAtNode(this.child1);
        modalRoot.removeChild(this.child1);
    }

    componentDidMount(){
        modalRoot.appendChild(this.child1);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.child1);
    }

    render() {
        return ReactDOM.createPortal(
            (
                <div className='modal-final-wrap'>
                    <button className='modal-close-btn' onClick={this.close}>X</button>
                    {this.props.children}
                </div>
            ),
            this.child2,
        );
    }
}

export default Modal;