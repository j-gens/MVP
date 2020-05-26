import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';


const Header = () => (
  <div className='header-bin'>
    <div className='header-spacing'>
      <div className='header-title'>
        <Link to='/'>Athletour</Link>
      </div>
      <div className='header-options'>
        <Link to='/arenas'>CURRENT ARENAS</Link>
        <Link to='/list'>MY LIST</Link>
        <Link to='/login'>SIGN UP</Link>
      </div>
    </div>
  </div>
);


export default Header;
