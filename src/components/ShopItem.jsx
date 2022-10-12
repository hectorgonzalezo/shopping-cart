import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ShopItem({ quantity, name, img, speed, signal, addToCart}) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  function updateQuantity(e) {
    setProductQuantity(e.target.value);
  }

  return (
    <article className="item">
      <img src={require(`../assets/products/${img}`)} />
      <h1>{name}</h1>
      {speed !== '' ? <h2>{speed}</h2> : null}
      {signal !== '' ? <h2>{signal}</h2> : null}
      {quantity > 0 ? <input type="number" className="quantity" data={name} value={quantity} onChange={addToCart} /> : null}
    </article>
  );
}

ShopItem.defaultProps = {
  img: 'teensylc.jpeg',
  speed: '',
  signal: '',
  quantity: '0',
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