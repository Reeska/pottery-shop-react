import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import { UiHeader } from '@pottery-ui/react'

function Header () {
  return (
    <UiHeader>
      <h1><Link to="/">Pottery Shop</Link></h1>
      <Navbar/>
    </UiHeader>
  );
}

export default Header;
