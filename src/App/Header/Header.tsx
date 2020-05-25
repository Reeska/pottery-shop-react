import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import './Header.scss';

function Header () {
  return (
      <header className="header">
        <h1><Link to="/">Pottery Shop</Link></h1>
        <Navbar/>
      </header>
  );
}

export default Header;
