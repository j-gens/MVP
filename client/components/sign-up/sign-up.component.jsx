import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import './sign-up.styles.css';


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('passwords do not match!');
      return;
    }
    console.log('whelp')
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='signup-bin'>
        <span className='signup-title'>I do not have an account:</span>
        <form>
        <FormInput
            value={displayName}
            handleChange={this.handleChange}
            type='text'
            name='displayName'
            label='Username'
          />
          <FormInput
            value={email}
            handleChange={this.handleChange}
            type='email'
            name='email'
            label='Email'
          />
          <FormInput
            value={password}
            handleChange={this.handleChange}
            type='password'
            name='password'
            label='Password'
          />
          <FormInput
            value={confirmPassword}
            handleChange={this.handleChange}
            type='password'
            name='confirmPassword'
            label='Confirm Password'
          />
          <CustomButton
            text='sign up'
            handleSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}


export default SignUp;
