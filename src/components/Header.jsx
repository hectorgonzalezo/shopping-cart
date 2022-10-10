import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';

function Header() {
  return (
    <header>
      <h1>This is the header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>Cart</li>
      </ul>
    </header>
  );
}

export default Header;
