import React from 'react';
import styled from 'styled-components';
import { string, func, element, bool } from 'prop-types';

const StyledButton = styled.button`
  border:  none;
  font-size: ${(props) => props.small ? "1.5rem" : "2rem"};
  background-color: inherit;
  color: ${(props) => props.small ? "var(--fawn)" : "White"};
  text-shadow:  1px 1px 2px black;

  svg{
    fill: white;
    filter: drop-shadow(1px 1px 2px black);
  }

  svg:hover{
    fill: var(--pale-spring-bud);
    filter: drop-shadow(1.5px 1.5px 3px black);
  }

  &:hover{
    color: var(--pale-spring-bud);
    cursor: pointer;
    text-shadow: 1.5px 1.5px 3px black;
  }
  &:active{
    position: relative;
    top: 1px;
    left: 1px;
  }
`;

function Button({ img, name, onClick, data, small }) {
  return (
    <StyledButton onClick={onClick} data={data} small={small}>
      {name}
      {img}
    </StyledButton>
  );
}

Button.defaultProps = {
  name: '',
  img: <> </>,
  onClick: (name) => name,
  data: '',
  small: false,
};

Button.propTypes = {
  name: string,
  img: element,
  onClick: func,
  data: string,
  small: bool,
};

export default Button;