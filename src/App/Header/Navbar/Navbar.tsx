import React from "react";
import './Navbar.scss';
import Search from "./Search/Search";
import CartButton from "./CartButton/CartButton";

function Navbar () {
  return (
      <nav className="navbar">
        <div className="navbar-container">
          <Search/> <CartButton/>
        </div>
      </nav>
  )
}

export default Navbar;
