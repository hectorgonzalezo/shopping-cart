import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ShopItem from '../ShopItem';

describe('Shop items', () => {
  it('Renders correctly', () => {
    render(<ShopItem name="Car" />);

    expect(screen.getByRole('heading')).toHaveTextContent('Car');
    expect(screen.getByRole('img').getAttribute('src')).toBe('teensylc.jpeg');

    expect(screen.container).toMatchSnapshot();
  });
});
