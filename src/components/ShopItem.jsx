import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ShopItem({ quantity, name, img, speed, signal, addToCart}) {
  return (
    <article className="item">
      <img src={require(`../assets/products/${img}`)} />
      <h1>{name}</h1>
      {speed !== '' ? <h2>{speed}</h2> : null}
      {signal !== '' ? <h2>{signal}</h2> : null}
      {/* show quantity only for cart item */}
      {quantity !== 'none' ? (
        <input
          type="number"
          className="quantity"
          data={name}
          value={quantity}
          onChange={addToCart}
          min="1"
        />
      ) : null}
    </article>
  );
}

ShopItem.defaultProps = {
  img: 'teensylc.jpeg',
  speed: '',
  signal: '',
  quantity: 'none',
  addToCart: () => {},
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  quantity: PropTypes.string,
  speed: PropTypes.string,
  signal: PropTypes.string,
  addToCart: PropTypes.func,
};

export default ShopItem;