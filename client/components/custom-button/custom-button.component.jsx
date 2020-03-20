import React from 'react';

import './custom-button.styles.css';


const CustomButton = ({ handleSubmit, text }) => (
  <button className='custom-button' onClick={handleSubmit}>
    {text.toUpperCase()}
  </button>
);


export default CustomButton;
