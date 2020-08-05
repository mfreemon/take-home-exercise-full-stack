import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form.scss';



const Field = ({ placeholder, label, name, onChange }) => (
  <div className="field">
    <label>{label}</label>
    <input name={name} onChange={onChange} placeholder={placeholder} />
  </div>
);

const Form = ({ formFields, handleChange, submitForm, closeModal }) => {
  return (
    <div className="form-container">
      <h1>Complete the Form to Join Us!</h1>
      <form onSubmit={submitForm} >
        <span className="close" onClick={closeModal}>X</span>
        {formFields.map(i =>
          <Field
            name={i.info}
            onChange={handleChange}
            placeholder={i.label}
            label={i.label}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default Form;
