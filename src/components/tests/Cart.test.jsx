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

  it('Items will have quantity and remove button', () => {
    render(
      <Cart hideCartFunc={() => {}} items={[{name: 'Teensy 2.0', quantity: '1' }]} />
    );

    const itemArticle = screen.getByRole('article');
    const quantityInput = screen.getByRole('spinbutton');
    const removeButton = screen.getByRole('button', { name: 'Remove' });

    expect(itemArticle).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  it('Remove and quantity call their respective callbacks', () => {
    const mockRemove = jest.fn();
    const mockAdd = jest.fn();
    render(
      <Cart
        hideCartFunc={() => {}}
        items={[{ name: 'Teensy 2.0', quantity: '1' }]}
        addToCart={mockAdd}
        removeFromCart={mockRemove}
      />
    );

    const quantityInput = screen.getByRole('spinbutton');
    const removeButton = screen.getByRole('button', { name: 'Remove' });

    userEvent.type(quantityInput, '{backspace}');
    userEvent.click(removeButton);

    expect(mockAdd).toBeCalled();
    expect(mockRemove).toBeCalled();
  });
});
