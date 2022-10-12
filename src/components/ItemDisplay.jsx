import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import products from '../assets/products.json';

function ItemDisplay({ items, opaque, addToCart }) {
  const { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);

  // get product corresponding to id from json file
  const selectedProduct = Object.values(products).filter((product) => product.id === id);
  // get relevant values
  const { img, name, speed, signal, description } = selectedProduct[0];
  // Split description into paragraphs
  const descriptionParagraphs = description.split('\n');

  // check it the item is already in cart
  function isItemInCart() {
    return items.some((item) => item.name === name);
  }

  useEffect(() => {
    if (isItemInCart()) {
      const quantity = items.filter((item) => item.name === name);
      setProductQuantity(quantity[0].quantity);
    }
  }, [items]);

  // Updates productQuantity
  function updateQuantity(e) {
    setProductQuantity(e.target.value);
  }

  return (
    <main className={`display ${opaque ? 'opaque' : ''}`}>
      <article className="item-display">
        <img src={require(`../assets/products/${img}`)} alt="product" />
        <h1>{name}</h1>
        {speed !== undefined ? <h2>{speed}</h2> : null}
        {signal !== undefined ? <h2>{signal}</h2> : null}
        {descriptionParagraphs.map((paragraph) => (
          <p key={uniqid()} className="paragraph">
            {paragraph}
          </p>
        ))}
        <form action="" className="add-form">
          <input
            type="number"
            value={productQuantity}
            onChange={updateQuantity}
            min="1"
          />
          <button type="submit" data={name} onClick={addToCart}>
            Add to cart
          </button>
        </form>
      </article>
    </main>
  );
}

ItemDisplay.defaultProps = {
  opaque: false,
  items: [],
  addToCart: () => {},
};

ItemDisplay.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  opaque: PropTypes.bool,
  addToCart: PropTypes.func,
};

export default ItemDisplay;