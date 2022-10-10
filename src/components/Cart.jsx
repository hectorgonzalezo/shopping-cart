import React, { useState, useEffect } from 'react';
import '../styles/cartStyle.css';
import PropTypes from 'prop-types';

function Cart({ visible, hideCartFunc }) {
  return (
    <aside id="cart" className={visible ? 'visible' : ''}>
      <button type="button" onClick={hideCartFunc}>x</button>
      <h1>This is the cart</h1>
    </aside>
  );
}

Cart.propTypes = {
  visible: PropTypes.bool.isRequired,
  hideCartFunc: PropTypes.func.isRequired,
};

export default Cart;
