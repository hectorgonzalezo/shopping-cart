import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';
import PropTypes from 'prop-types';

function Header({ showCartFunc, opaque }) {
  return (
    <header className={opaque ? 'opaque' : ''}>
      <h1>This is the header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <button type="button" onClick={showCartFunc}>Cart</button>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  showCartFunc: PropTypes.func.isRequired,
  opaque: PropTypes.bool.isRequired,
};

export default Header;
