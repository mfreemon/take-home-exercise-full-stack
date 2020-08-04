import React from 'react';
import PropTypes from 'prop-types';
import './FormModal.css';



const FormModal = ({ showModal, closeModal, children }) => {

  return(
    <div className="modal" showModal={showModal} onBlur={closeModal}>
      <p className="modal-main">
        {children}
      </p>
    </div>
  )
}

export default FormModal;
