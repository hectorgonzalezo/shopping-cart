import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import products from '../assets/products.json';
import ShopItem from './ShopItem';

function Shop({ opaque }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // update items to be displayed by shop from json file only if items is empty
    if (items.length === 0) {
      setItems(Object.values(products));
    }
  }, []);

  return (
    <main id="shop" className={opaque ? 'opaque' : ''}>
      <h1>this is the shop</h1>
      {items.map((item) => <ShopItem key={uniqid()} name={item.name} img={item.img} />)}
    </main>
  );
}

Shop.defaultProps = {
  opaque: false,
};

Shop.propTypes = {
  opaque: PropTypes.bool,
};

export default Shop;
