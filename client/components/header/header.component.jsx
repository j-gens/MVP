import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';


const Header = () => (
  <div className="header-bin">
    <div className="header-title">
      <Link to='/'>ICE BUCKET LIST</Link>
    </div>
    <div className="header-options">
      Link
    </div>
  </div>
);


export default Header;
