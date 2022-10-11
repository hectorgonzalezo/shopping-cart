import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import products from '../assets/products.json';

function ItemDisplay({ opaque }) {
  const { id } = useParams();
  // get product corresponding to id from json file
  const selectedProduct = Object.values(products).filter((product) => product.id === id);
  // get relevant values
  const { img, name, speed, signal, description } = selectedProduct[0];
  // Split description into paragraphs
  const descriptionParagraphs = description.split('\n');
  return (
    <article className={`item-display ${opaque ? 'opaque' : ''}`}>
      <img src={require(`../assets/products/${img}`)} />
      <h1>{name}</h1>
      {speed !== undefined ? <h2>{speed}</h2> : null}
      {signal !== undefined ? <h2>{signal}</h2> : null}
      {descriptionParagraphs.map((paragraph) => (
        <p key={uniqid()} className="paragraph">{paragraph}</p>
      ))}
    </article>
  );
}

ItemDisplay.defaultProps = {
  opaque: false,
};

ItemDisplay.propTypes = {
  opaque: PropTypes.bool,
};

export default ItemDisplay;