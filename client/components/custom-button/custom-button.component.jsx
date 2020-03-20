import React from 'react';

import './custom-button.styles.css';


const CustomButton = ({ text }) => (
  <button>
    {text.toUpperCase()}
  </button>
);


export default CustomButton;
