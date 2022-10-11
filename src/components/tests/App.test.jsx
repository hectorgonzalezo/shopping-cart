import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.container).toMatchSnapshot();
  });

  it('renders home when pressing on header link', () => {
    render(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const shopLink = screen.getByRole('link', { name: 'Shop' });
    // press link
    userEvent.click(shopLink);
    userEvent.click(homeLink);

    expect(screen.getByRole('main').id).toBe('home');
  });

  it('renders shop when pressing on header link', () => {
    render(<App />);

    const shopLink = screen.getByRole('link', { name: 'Shop' });
    // press link
    userEvent.click(shopLink);

    expect(screen.getByRole('main').id).toBe('shop');
  });

  it('shows and hides cart when pressing on buttons', () => {
    render(<App />);
    const cartButton = screen.getByRole('button', { name: 'Cart' });
    const cart = screen.getByRole('complementary');
    const closeCartButton = screen.getByRole('button', { name: 'x' });
    const header = screen.getByRole('banner');

    // Cart should start invisible
    expect(cart).not.toHaveClass('visible');

    // press link
    userEvent.click(cartButton);
    // Become visible after pressing button
    expect(cart).toBeVisible();
    expect(cart).toHaveClass('visible');
    // Header and rest should become opaque
    expect(header).toHaveClass('opaque');

    // After clicking close button, make it invisible
    userEvent.click(closeCartButton);
    expect(cart).not.toHaveClass('visible');
  });

  // it('Cart can be updated by displayItems', () => {
  //   render(<App />);
  //   // go to shop
  //   const shopLink = screen.getByText('Shop');
  //   userEvent.click(shopLink);

  //   // go to display
  //   const itemLink = screen.getAllByRole('article');
  //   userEvent.click(itemLink[0]);

  //   //

  //   screen.debug();
  // });
});
