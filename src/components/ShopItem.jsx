import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ShopItem({
  quantity,
  name,
  img,
  speed,
  signal,
  addToCart,
  removeFromCart,
}) {
  return (
    <article className="item">
      <img src={require(`../assets/products/${img}`)} />
      <h1>{name}</h1>
      {speed !== '' ? <h2>{speed}</h2> : null}
      {signal !== '' ? <h2>{signal}</h2> : null}
      {/* show quantity only for cart item */}
      {quantity !== 'none' ? (
        <div>
          <input
            type="number"
            className="quantity"
            data={name}
            value={quantity}
            onChange={addToCart}
            min="1"
          />
          <Button name="Remove" onClick={removeFromCart} data={name} small />
        </div>
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
  removeFromCart: () => {},
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  quantity: PropTypes.string,
  speed: PropTypes.string,
  signal: PropTypes.string,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default ShopItem;