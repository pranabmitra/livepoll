import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.modalElem = document.createElement('div');
        this.modalElem.classList.add('modal-vc');

        this.close = this.close.bind(this);
    }

    componentDidMount(){
        modalRoot.appendChild(this.modalElem);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.modalElem);
    }

    render() {
        return ReactDOM.createPortal(
            (
                <div className='modal-hc'>
                    <div className='modal-final-wrap'>
                        <button className='modal-close-btn'>X</button>
                        {this.props.children}
                    </div>
                </div>
            ),
            this.modalElem,
        );
    }
}

export default Modal;