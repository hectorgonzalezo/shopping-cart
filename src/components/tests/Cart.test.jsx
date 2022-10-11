import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from '../Cart';

describe('Cart component', () => {
  it('close button correctly calls function', () => {
    const mockHide = jest.fn();
    render(<Cart hideCartFunc={mockHide} />);

    const closeCartButton = screen.getByRole('button', { name: 'x' });
    userEvent.click(closeCartButton);

    expect(mockHide).toBeCalled();

    userEvent.click(closeCartButton);

    expect(mockHide).toBeCalledTimes(2);
  });
});
