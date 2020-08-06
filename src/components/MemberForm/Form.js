import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form.scss';



const Field = ({ placeholder, label, name, onChange, err }) => (
  <div className="field">
    <label>{label}</label>
    <input name={name} onChange={onChange} placeholder={placeholder} />
    {err ? <span className="errMessage">{err}</span> : null }
  </div>
);

const Form = ({ formFields, handleChange, submitForm, closeModal, err }) => {
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
            err={err[i.info]}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default Form;
