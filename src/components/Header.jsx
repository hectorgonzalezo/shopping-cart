import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';
import PropTypes from 'prop-types';
import cart from '../assets/cart.png';
import Button from './Button';

function Header({ showCartFunc, opaque }) {
  return (
    <header className={opaque ? 'opaque' : ''}>
      <h1>This is the header</h1>
      <ul>
        <li>
          <Link to="/"><Button name="Home" /></Link>
        </li>
        <li>
          <Link to="/shop"><Button name="shop" /></Link>
        </li>
        <li>
          <Button img={cart} onClick={showCartFunc} />
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
