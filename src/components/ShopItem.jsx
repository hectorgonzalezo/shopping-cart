import React from 'react';
import PropTypes from 'prop-types';

function ShopItem({ name, img, speed, signal }) {
  return (
    <article className="item">
      <img src={require(`../assets/products/${img}`)} />
      <h1>{name}</h1>
      {speed !== '' ? <h2>{speed}</h2> : null}
      {signal !== '' ? <h2>{signal}</h2> : null}
    </article>
  );
}

ShopItem.defaultProps = {
  img: 'teensylc.jpeg',
  speed: '',
  signal: '',
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  speed: PropTypes.string,
  signal: PropTypes.string,
};

export default ShopItem;