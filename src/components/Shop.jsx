import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import products from '../assets/products.json';
import ShopItem from './ShopItem';
import '../styles/shopStyle.css';

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
      <div id="items">
        {items.map((item) => (
          // Wrap the item in a link so that it takes the user to the associated ItemDisplay
          <Link to={item.id} key={uniqid()}>
            <ShopItem
              id={item.id}
              name={item.name}
              img={item.img}
              speed={item.speed}
              signal={item.signal}
            />
          </Link>
        ))}
      </div>
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
