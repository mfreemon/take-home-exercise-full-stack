import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from './Form';
import formFields from './formFields';

class FormContainer extends Component {
  constructor(){
    super();

    this.state = {
    }
  }

  formChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value })
  }

  submitForm = (e) => {
    e.preventDefault()
    let data = this.state;

    axios.post('/form', data)
    .then((response) => console.log(response));
  }

  render(){
    return (
      <Form
        submitForm={this.submitForm}
        formFields={formFields}
        handleChange={this.formChange}
      />
    )
  }
}

export default FormContainer
