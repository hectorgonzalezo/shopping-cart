import React from 'react';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';

function FilterButton({ type, onClick }) {
  return (
    <button type="button" onClick={() => onClick(type)}>{capitalize(type)}</button>
  );
}

FilterButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterButton;