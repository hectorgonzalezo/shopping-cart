import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';
import PropTypes from 'prop-types';
import { ReactComponent as Cart } from '../assets/cart.svg';
import Button from './Button';

function Header({ showCartFunc, opaque }) {
  return (
    <header className={opaque ? 'opaque' : ''}>
      <h1>Teensy Products</h1>
      <ul>
        <li>
          <Link to="/">
            <Button name="Home" />
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <Button name="Shop" />
          </Link>
        </li>
        <li>
          <Button name="" img={<Cart />} onClick={showCartFunc} />
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
