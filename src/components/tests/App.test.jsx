import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Header component', () => {
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
});
