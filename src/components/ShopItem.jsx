import React from 'react';
import PropTypes from 'prop-types';

function ShopItem({ name, img }) {
  return (
    <div className="item">
      <h1>{name}</h1>
      <img src={require(`../assets/products/${img}`)} />
    </div>
  );
}

ShopItem.defaultProps = {
  img: 'teensylc.jpeg',
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default ShopItem;