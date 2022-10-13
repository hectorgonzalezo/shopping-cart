import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';
import PropTypes from 'prop-types';
import { ReactComponent as Cart } from '../assets/cart.svg';
import Button from './Button';

function Header({ showCartFunc, opaque, cartItems }) {
  const [numItems, setNumItems] = useState(0);

  // updates number shown besides cart icon
  useEffect(() => {
    const sumNumItems = cartItems.reduce(
      (prev, curr) => Number(curr.quantity) + prev,
      0
    );
    setNumItems(sumNumItems);
  }, [cartItems]);

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
          <p id="cart-number">{numItems}</p>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  showCartFunc: PropTypes.func.isRequired,
  opaque: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Header;
