import React from 'react';
import PropTypes from 'prop-types';

function ShopItem({ name, img }) {
  return (
    <div className="item">
      <img src={require(`../assets/products/${img}`)} />
      <h1>{name}</h1>
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