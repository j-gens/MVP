import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

import './sign-in-sign-up.styles.css';


const SignInSignUp = () => (
  <div className='signin-signup-bin'>
    <div className='signin'>
      <SignIn />
    </div>
    <div className='signup'>
      <SignUp />
    </div>
  </div>
);


export default SignInSignUp;
