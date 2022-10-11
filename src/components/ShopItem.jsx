import React from 'react';
import PropTypes from 'prop-types';

function ShopItem({ quantity, name, img, speed, signal }) {
  return (
    <article className="item">
      <img src={require(`../assets/products/${img}`)} />
      <h1>{name}</h1>
      {speed !== '' ? <h2>{speed}</h2> : null}
      {signal !== '' ? <h2>{signal}</h2> : null}
      {quantity > 0 ? <h2 className="quantity">{quantity}</h2> : null}
    </article>
  );
}

ShopItem.defaultProps = {
  img: 'teensylc.jpeg',
  speed: '',
  signal: '',
  quantity: '0',
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  quantity: PropTypes.string,
  speed: PropTypes.string,
  signal: PropTypes.string,
};

export default ShopItem;