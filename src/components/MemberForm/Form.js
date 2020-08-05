import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form.scss';



const Field = ({ placeholder, label, name, onChange }) => (
  <div>
    <label>{label}</label>
    <input name={name} onChange={onChange} placeholder={placeholder} />
  </div>
);

const Form = ({ formFields, handleChange, submitForm }) => {
  return (
    <div className="form-container">
      <form onSubmit={submitForm} >
        <span className="close">X</span>
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
