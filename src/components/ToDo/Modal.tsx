import React from 'react';
import './Modal.css'

interface ModalInterface {
  children?: any,
  close: Function,
  show: boolean
}

const Modal = (props: ModalInterface) => {
  return (
    <div className="modal-wrapper"
         style={{
           transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
           opacity: props.show ? 1 : 0,
         }}>
      <div className="modal-header">
        <h3>Modal Header</h3>
        <span className="close-modal-btn" onClick={() => props.close()}>×</span>
      </div>
      <div className="modal-body">
          {props.children}
      </div>
      <div className="modal-footer">
        <button className="btn-cancel" onClick={() => props.close()}>CLOSE</button>
      </div>
    </div>
  );
};

export default Modal;
