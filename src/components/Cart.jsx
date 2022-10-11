import React, { useState, useEffect } from 'react';
import '../styles/cartStyle.css';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import products from '../assets/products.json';

function Cart({ items, visible, hideCartFunc }) {
  const productObjects = Object.values(products);
  return (
    <aside id="cart" className={visible ? 'visible' : ''}>
      <button type="button" onClick={hideCartFunc}>x</button>
      {items.map((item) => {
        const imgUrl = productObjects.find((product) => product.name === item.name).img;
        return (
        <div key={item.name}>
          <ShopItem quantity={item.quantity} name={item.name} img={imgUrl} />
        </div>
        )
      })}
      <button>Buy</button>
    </aside>
  );
}

Cart.defaultProps = {
  items: [],
  visible: false,
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  visible: PropTypes.bool,
  hideCartFunc: PropTypes.func.isRequired,
};

export default Cart;
