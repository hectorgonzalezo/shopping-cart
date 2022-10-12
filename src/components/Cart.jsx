import React from 'react';
import '../styles/cartStyle.css';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import products from '../assets/products.json';
import Button from './Button';

function Cart({ items, visible, hideCartFunc, addToCart }) {
  const productObjects = Object.values(products);
  return (
    <aside id="cart" className={visible ? 'visible' : ''}>
      <Button name="x" onClick={hideCartFunc} />
      {items.map((item) => {
        const imgUrl = productObjects.find(
          (product) => product.name === item.name
        ).img;
        return (
          <div key={item.name}>
            <ShopItem
              addToCart={addToCart}
              quantity={item.quantity}
              name={item.name}
              img={imgUrl}
            />
          </div>
        );
      })}
      <Button name="Buy" />
    </aside>
  );
}

Cart.defaultProps = {
  items: [],
  visible: false,
  addToCart: () => {},
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  visible: PropTypes.bool,
  hideCartFunc: PropTypes.func.isRequired,
  addToCart: PropTypes.func,
};

export default Cart;
