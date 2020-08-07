import React from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Field = ({ placeholder, label, name, onChange, err }) => (
  <div className="field">
    <label>{label}</label>
    <input name={name} onChange={onChange} placeholder={placeholder} />
    {err ? <span className="errMessage">{err}</span> : null }
  </div>
);

const Form = ({ formFields, handleChange, submitForm, closeModal, err, saveErr }) => {
  return (
    <div className="form-container">
      <h1>Complete the Form to Join Us!</h1>
      <h2 className={`saveErr ${saveErr ? 'how' : null}`}>A form for this Person has already been submitted.</h2>
      <form onSubmit={submitForm} >
        <span className="close" onClick={closeModal}>X</span>
        {formFields.map(i =>
          <Field
            key={i.info}
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

Form.propTypes = {
  formFields: PropTypes.array,
  handleChange: PropTypes.func,
  submitForm: PropTypes.func,
  closeModal: PropTypes.func,
  err: PropTypes.object,
  saveErr: PropTypes.bool,
};



export default Form;
