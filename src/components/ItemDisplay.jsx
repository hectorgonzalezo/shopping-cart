import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ItemDisplay({ opaque }) {
  const { id } = useParams();
  return (
    <div className={`item-display ${opaque ? 'opaque' : ''}`}>
      <h1>Im an item {id}</h1>
    </div>
  );
}

ItemDisplay.defaultProps = {
  opaque: false,
};

ItemDisplay.propTypes = {
  opaque: PropTypes.bool,
};

export default ItemDisplay;