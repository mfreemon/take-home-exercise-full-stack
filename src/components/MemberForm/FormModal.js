import React from 'react';
import './formModal.scss';



const FormModal = ({ children }) => {

  return(
    <div className="modal">
      <div className="modal-main">
        {children}
      </div>
    </div>
  )
}

export default FormModal;
