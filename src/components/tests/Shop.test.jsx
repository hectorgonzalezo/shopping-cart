import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Shop from '../Shop';

describe('Header component', () => {
  it('Renders correctly', () => {
    render(<Shop />);

    expect(screen.getByRole('main')).toHaveAttribute('id', 'shop');
    expect(screen.container).toMatchSnapshot();
  });
});
