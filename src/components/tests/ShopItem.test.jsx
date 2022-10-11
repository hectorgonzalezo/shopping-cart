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

  it('Displays speed and signal if provided', () => {
    render(<ShopItem name="Car" speed="300mph" signal="5v" />);

    expect(screen.getByRole('heading', { name: '300mph' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '5v' })).toBeInTheDocument();

    expect(screen.container).toMatchSnapshot();
  });

  it('Doesnt add headdings if speed and signal not provided', () => {
    render(<ShopItem name="Car" />);

    // There should only be one heading
    expect(screen.getAllByRole('heading').length).toBe(1);

    expect(screen.container).toMatchSnapshot();
  });
});
