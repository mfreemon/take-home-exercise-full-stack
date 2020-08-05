import React from 'react';
import PropTypes from 'prop-types';
import './formModal.scss';



const FormModal = ({ showModal, closeModal, children }) => {

  return(
    <div className="modal" showModal={showModal} onBlur={closeModal}>
      <div className="modal-main">
        {children}
      </div>
    </div>
  )
}

export default FormModal;
