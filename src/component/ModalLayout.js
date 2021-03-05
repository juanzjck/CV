import React, {Component} from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#modal')

const customStyles = {
    content : {
        width: '100%',
        height:'100%',
        top:0,
        left: 0,
        right: 0,
        bottom: 0
    }
  };
function ModalLayout(props){


        return(
            <Modal
            isOpen={props.isOpen}
            contentLabel="Example Modal"
            style={customStyles}
            >

                {props.children}

          </Modal>
        );
}
 

export default ModalLayout;