import React from 'react';
import PropTypes from 'prop-types';
import './FormModal.css';



const Form = ({ placeholder }) => {
  return (
    <div className="container">
      <input placeholder={placeholder}/>
    </div>
  )
}


export default Form;
