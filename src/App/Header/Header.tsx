import React from 'react';

import Navbar from './Navbar/Navbar';
import './Header.scss';

function Header () {
  return (
      <header className="header">
        <h1>Pottery Shop</h1>
        <Navbar/>
      </header>
  );
}

export default Header;
