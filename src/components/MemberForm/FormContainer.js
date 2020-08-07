import React, { Component } from 'react';
import Form from './Form';

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
  
    this.setState({ [e.target.name] : value });
    if(value.length < 3){
      this.setState({
        errMessage: {
          ...this.state.errMessage,
          [e.target.name] : 'must be atleast 3 character long'
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
      if(data[i].length < 3){
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
      return this.props.saveForm(member)
    } else {
      alert('You have errors on your form: Either the entries are not filled or you have not met the entry requirements.');
    }
  }

  render(){
    const { errMessage } = this.state;

    return (
      <Form
        {...this.props}
        err={errMessage}
        submitForm={this.submitForm}
        handleChange={this.formChange}
      />
    )
  }
}

export default FormContainer
