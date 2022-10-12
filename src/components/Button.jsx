import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';

const StyledButton = styled.button`
  border:  none;
  font-size: 2rem;
  background-color: inherit;
  color: white;

  &:hover{
    color: blue;
    cursor: pointer;
  }
`;

function Button({ img, name, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {img !== '' ? <img src={img} alt="cart" /> : name}
    </StyledButton>
  );
}

Button.defaultProps = {
  name: '',
  img: '',
  onClick: (name) => name,
};

Button.propTypes = {
  name: string,
  img: string,
  onClick: func,
};

export default Button;