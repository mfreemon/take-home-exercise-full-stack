import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from './Form';
import formFields from './formFields';

class FormContainer extends Component {
  constructor(){
    super();

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      story: "",
      favoriteColor: "",
      photoUrl: "",
      errMessage: {
        firstName: "",
        lastName: "",
        title: "",
        story: "",
        favoriteColor: "",
        photoUrl: "",
      }
    }
  }

  formChange = (e) => {

    let value = e.target.value
    let name = e.target.name;

    this.setState({ [e.target.name] : value });
    if(value.length < 4){
      this.setState({
        errMessage: {
          ...this.state.errMessage,
          [e.target.name] : 'must be 4 chars long'
        }
      });
    } else {
      this.setState({
        errMessage: {
          ...this.state.errMessage,
          [e.target.name] : ''
        }
      });
    }
  }

  validateForm = (data) => {
    let invalid = 0;
    for(let i in data){
      if(data[i].length < 4){
        invalid++
      }
    }
    return invalid;
  }

  submitForm = (e) => {
    e.preventDefault()
    let member = this.state;
    let valid = this.validateForm(member)

    if(valid <= 0){
      return axios.post('/form', member)
      .then((response) => console.log(response));
    } else {
      alert('false man')
    }
  }

  render(){
    const { errMessage } = this.state;

    return (
      <Form
        {...this.props}
        err={errMessage}
        submitForm={this.submitForm}
        formFields={formFields}
        handleChange={this.formChange}
      />
    )
  }
}

export default FormContainer
