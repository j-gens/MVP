import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import './sign-in.styles.css';


class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('click');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='signin-bin'>
        <span className='signin-title'>I already have an account:</span>
        <form>
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
          <CustomButton
            handleSubmit={this.handleSubmit}
            text='sign in'
          />
        </form>
      </div>
    );
  }
}


export default SignIn;
