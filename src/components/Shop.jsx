import React from 'react';
import PropTypes from 'prop-types';

function Shop({ opaque }) {
  return (
    <main id="shop" className={opaque ? 'opaque' : ''}>
      <h1>this is the shop</h1>
    </main>
  );
}

Shop.propTypes = {
  opaque: PropTypes.bool.isRequired,
};

export default Shop;
