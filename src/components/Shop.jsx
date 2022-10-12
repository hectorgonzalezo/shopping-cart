import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { capitalize, lowerCase } from 'lodash';
import products from '../assets/products.json';
import ShopItem from './ShopItem';
import Button from './Button';
import '../styles/shopStyle.css';

function Shop({ opaque }) {
  const [items, setItems] = useState([]);
  const [itemTypes, setItemTypes] = useState(['all']);
  const [currentFilter, setCurrentFilter] = useState('All');
  // This state is used by the filter
  const [itemsDisplayed, setItemsDisplayed] = useState([]);

  // Displays only the items depending on the button that called it
  function filterItems(buttonName) {
    if (buttonName !== currentFilter) {
    // When pressing the All button, display all the items
      if (buttonName === 'all') {
        setItemsDisplayed(items);
      } else {
        const type = lowerCase(buttonName);
        setItemsDisplayed(items.filter((item) => item.type === type));
      }
      setCurrentFilter(buttonName);
    }
  }

  useEffect(() => {
    // update items to be displayed by shop from json file only if items is empty
    if (items.length === 0) {
      const productValues = Object.values(products);
      setItems(productValues);
      setItemsDisplayed(productValues);
      // Add to types so that button can be rendered
      const uniqueTypes = productValues.reduce(
        (prev, curr) => prev.add(curr.type),
        new Set(),
      );
      setItemTypes(['all', ...uniqueTypes]);
    }
  }, []);

  return (
    <main id="shop" className={opaque ? 'opaque' : ''}>
      <div id="filters">
        <h1>Filter by type</h1>
        {itemTypes.map((type) => (
          <Button key={type} name={capitalize(type)} onClick={() => filterItems(type)} />
        ))}
      </div>
      <div id="items">
        {itemsDisplayed.map((item) => (
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
